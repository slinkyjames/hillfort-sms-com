/**
 * Hillfort — /api/otp
 * Consolidated email-verification endpoint (send, verify).
 *
 * Merged from send-otp.js / verify-otp.js to stay under Vercel
 * Hobby's 12-Serverless-Function limit. vercel.json rewrites the
 * original URLs here, so no frontend code needed to change:
 *   /api/send-otp   → /api/otp?action=send
 *   /api/verify-otp → /api/otp?action=verify
 */

import bcrypt from 'bcryptjs';
import { randomInt } from 'crypto';
import {
  setCorsHeaders, ok, err,
  checkRateLimit, sendMail, emailWrap,
  supabase, isValidEmail, getIP, clean,
} from '../lib/supabase.js';

// ── send ───────────────────────────────────────────────────────────────────
async function handleSend(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed', 405);

  const email = (req.body?.email || '').trim().toLowerCase();
  if (!isValidEmail(email)) return err(res, 'A valid email address is required.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`otp:${email}`, 5, 900);
  if (!allowed) return err(res, 'Too many code requests. Please wait before trying again.', 429);

  const code = String(randomInt(0, 1000000)).padStart(6, '0');
  const hash = await bcrypt.hash(code, 10);
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

  await supabase
    .from('otp_tokens')
    .update({ used: true })
    .eq('email', email)
    .eq('purpose', 'verify_email')
    .eq('used', false);

  const { error: dbErr } = await supabase.from('otp_tokens').insert({
    email, code_hash: hash, purpose: 'verify_email',
    attempts: 0, expires_at: expiresAt, ip_address: ip,
  });
  if (dbErr) {
    console.error('[otp send] DB error:', dbErr.message);
    return err(res, 'Could not create verification code. Please try again.', 500);
  }

  const bodyHtml = `
    <p style="color:#1a1a2e;font-size:.95rem;margin:0 0 12px">
      Use this 6-digit code to verify your email address. It expires in <strong>10 minutes</strong>.
    </p>
    <div style="background:#f8f0e8;border:2.5px solid #d4a017;border-radius:14px;
                padding:28px;text-align:center;margin:0 0 22px">
      <div style="font-size:2.8rem;font-weight:900;letter-spacing:14px;color:#800000;
                  font-family:'Courier New',Courier,monospace;margin:0 0 10px">${code}</div>
      <p style="color:#5a6070;font-size:.82rem;margin:0">Valid for <strong>10 minutes</strong> &bull; Never share this code</p>
    </div>
    <p style="color:#94a3b8;font-size:.8rem;line-height:1.6">
      If you did not request this, you can safely ignore this email.
    </p>`;

  try {
    await sendMail({
      to: email,
      subject: 'Verify your email — Hillfort Parent Portal',
      html: emailWrap('Email Verification Code', bodyHtml),
    });
  } catch (e) {
    console.error('[otp send] Mail error:', e.message);
    return err(res, 'Verification email could not be sent. Please try again.', 500);
  }

  return ok(res);
}

// ── verify ─────────────────────────────────────────────────────────────────
async function handleVerify(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed', 405);

  const submitted = String(req.body?.otp || '').replace(/\D/g, '');
  const email     = (req.body?.email || '').trim().toLowerCase();

  if (submitted.length !== 6) return err(res, 'Please enter a valid 6-digit code.');
  if (!isValidEmail(email))   return err(res, 'Email address required.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`otp_verify:${email}`, 10, 900);
  if (!allowed) return err(res, 'Too many attempts. Please request a new code.', 429);

  const { data: tokens, error: dbErr } = await supabase
    .from('otp_tokens')
    .select('*')
    .eq('email', email)
    .eq('purpose', 'verify_email')
    .eq('used', false)
    .gt('expires_at', new Date().toISOString())
    .order('created_at', { ascending: false })
    .limit(1);

  if (dbErr || !tokens?.length) {
    return err(res, 'No active verification code found. Please request a new one.');
  }

  const token = tokens[0];

  if (token.attempts >= 5) {
    await supabase.from('otp_tokens').update({ used: true }).eq('id', token.id);
    return err(res, 'Too many failed attempts. Please request a new code.', 429);
  }

  await supabase.from('otp_tokens').update({ attempts: token.attempts + 1 }).eq('id', token.id);

  const match = await bcrypt.compare(submitted, token.code_hash);
  if (!match) {
    const remaining = 4 - token.attempts;
    return err(res, `Invalid code. ${remaining > 0 ? remaining + ' attempt(s) remaining.' : 'Please request a new code.'}`);
  }

  await supabase.from('otp_tokens').update({ used: true }).eq('id', token.id);

  const { data: user } = await supabase
    .from('portal_users')
    .select('id, fname, lname, approved, verified')
    .eq('email', email)
    .single();

  if (user && !user.verified) {
    await supabase.from('portal_users').update({ verified: true }).eq('id', user.id);

    try {
      const adminBody = `
        <p style="color:#1a1a2e;font-size:.9rem;margin:0 0 16px">
          A new parent/guest has verified their email and is awaiting approval.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:.88rem">
          <tr><td style="padding:6px 0;font-weight:700;width:100px">Name</td><td>${user.fname} ${user.lname}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 0;font-weight:700">Email</td><td>${email}</td></tr>
        </table>
        <p style="margin:20px 0 0;font-size:.85rem">
          <a href="${process.env.SITE_URL}/pages/post-admin.html" style="color:#800000">Review in Post Admin →</a>
        </p>`;
      await sendMail({
        to: process.env.MAIL_CONTACT || 'info@hillfortintlschool.ng',
        subject: `👤 New Portal User Awaiting Approval — ${user.fname} ${user.lname}`,
        html: emailWrap('New Portal User', adminBody),
      });
    } catch (e) { console.error('[otp verify] admin notify error:', e.message); }
  }

  return ok(res, {
    email,
    approved: user ? user.approved : null,
  });
}

// ── router ───────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();

  const action = req.query.action;
  if (action === 'send')   return handleSend(req, res);
  if (action === 'verify') return handleVerify(req, res);

  return err(res, 'Unknown OTP action.', 400);
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
