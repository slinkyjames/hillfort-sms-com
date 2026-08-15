/**
 * Hillfort — /api/parent
 * Consolidated parent-portal endpoint (login, register, session).
 *
 * Merged from parent-login.js / parent-register.js / parent-session.js
 * to stay under Vercel Hobby's 12-Serverless-Function limit.
 * vercel.json rewrites the original URLs here, so no frontend code
 * needed to change:
 *   /api/parent-login    → /api/parent?action=login
 *   /api/parent-register → /api/parent?action=register
 *   /api/parent-session  → /api/parent?action=session
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomInt } from 'crypto';
import {
  setCorsHeaders, ok, err,
  checkRateLimit, sendMail, emailWrap,
  supabase, isValidEmail, getIP, clean,
} from '../lib/supabase.js';

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── login ──────────────────────────────────────────────────────────────────
async function handleLogin(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const b = req.body || {};
  const email    = (b.email || '').trim().toLowerCase();
  const password = b.password || '';

  if (!isValidEmail(email) || !password) return err(res, 'Please enter your email and password.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`parent_login:${ip}`, 10, 900);
  if (!allowed) return err(res, 'Too many login attempts. Please wait before trying again.', 429);

  const { data: user, error: dbErr } = await supabase
    .from('portal_users').select('*').eq('email', email).single();

  if (dbErr || !user) { await delay(350); return err(res, 'Incorrect email or password.'); }

  if (user.provider === 'google' && !user.password_hash) {
    return err(res, 'This account uses Google Sign-In. Please use the "Continue with Google" button.');
  }

  const passOk = await bcrypt.compare(password, user.password_hash || '');
  if (!passOk) { await delay(350); return err(res, 'Incorrect email or password.'); }

  if (!user.verified) {
    return ok(res, { status: 'unverified', msg: 'Please verify your email first.', email });
  }
  if (user.approved === false) {
    return err(res, 'Your account access has been declined. Please contact the school for assistance.');
  }
  if (user.approved === null) {
    return ok(res, { status: 'pending', msg: 'Your account is awaiting admin approval.' });
  }

  const secret = process.env.PARENT_JWT_SECRET || process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    console.error('[parent login] No JWT secret configured');
    return err(res, 'Server configuration error.', 500);
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, fname: user.fname, lname: user.lname, role: user.role },
    secret,
    { expiresIn: '7d' }
  );

  await supabase.from('portal_users').update({ last_login: new Date().toISOString() }).eq('id', user.id);

  return ok(res, {
    status: 'approved',
    token,
    user: {
      id: user.id, fname: user.fname, lname: user.lname, email: user.email,
      phone: user.phone, role: user.role, child_name: user.child_name,
      created_at: user.created_at,
    },
  });
}

// ── register ───────────────────────────────────────────────────────────────
async function handleRegister(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const b = req.body || {};
  const fname    = clean(b.fname, 100);
  const lname    = clean(b.lname, 100);
  const email    = (b.email || '').trim().toLowerCase();
  const phone    = clean(b.phone, 30);
  const password = b.password || '';
  const role     = ['parent', 'guest'].includes(b.role) ? b.role : 'parent';

  const childName = clean(b.child_name || '', 150);
  const childDob   = clean(b.child_dob   || '', 20);
  const childGrade = clean(b.child_grade || '', 80);
  const entryDate  = clean(b.intended_entry_date || '', 60);

  if (!fname || !lname)     return err(res, 'Please enter your full name.');
  if (!isValidEmail(email)) return err(res, 'Please enter a valid email address.');
  if (password.length < 8)  return err(res, 'Password must be at least 8 characters.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`register:${ip}`, 5, 900);
  if (!allowed) return err(res, 'Too many registration attempts. Please wait before trying again.', 429);

  const { data: existing } = await supabase
    .from('portal_users').select('id').eq('email', email).single();
  if (existing) return err(res, 'An account with this email already exists. Please sign in instead.');

  const passwordHash = await bcrypt.hash(password, 12);

  const childInfo = childName
    ? JSON.stringify({ name: childName, dob: childDob, grade: childGrade, intended_entry_date: entryDate })
    : null;

  const { data: inserted, error: dbErr } = await supabase
    .from('portal_users')
    .insert({
      fname, lname, email, phone,
      child_name:    childInfo,
      role,
      password_hash: passwordHash,
      provider:      'email',
      verified:      false,
      approved:      null,
      ip_address:    ip,
    })
    .select('id')
    .single();

  if (dbErr) {
    console.error('[parent register] DB error:', dbErr.message);
    return err(res, 'Could not create your account. Please try again.', 500);
  }

  const code = String(randomInt(0, 1000000)).padStart(6, '0');
  const codeHash = await bcrypt.hash(code, 10);
  await supabase.from('otp_tokens').insert({
    email, code_hash: codeHash, purpose: 'verify_email',
    attempts: 0, expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    ip_address: ip,
  });

  const bodyHtml = `
    <p style="color:#1a1a2e;font-size:.95rem;margin:0 0 12px">Hi <strong>${fname}</strong>,</p>
    <p style="color:#5a6070;font-size:.9rem;line-height:1.7;margin:0 0 20px">
      Welcome to the Hillfort Parent Portal! Use this 6-digit code to verify your email address:
    </p>
    <div style="background:#f8f0e8;border:2.5px solid #d4a017;border-radius:14px;
                padding:28px;text-align:center;margin:0 0 22px">
      <div style="font-size:2.8rem;font-weight:900;letter-spacing:14px;color:#800000;
                  font-family:'Courier New',Courier,monospace;margin:0 0 10px">${code}</div>
      <p style="color:#5a6070;font-size:.82rem;margin:0">Valid for <strong>10 minutes</strong></p>
    </div>`;

  try {
    await sendMail({
      to: email, toName: fname,
      subject: 'Verify your email — Hillfort Parent Portal',
      html: emailWrap('Email Verification Code', bodyHtml),
    });
  } catch (e) {
    console.error('[parent register] mail error:', e.message);
  }

  await supabase.from('audit_log').insert({ event: 'parent_register', actor: email, target: String(inserted.id) });

  return ok(res, { msg: 'Account created! Please check your email for the verification code.' });
}

// ── session ────────────────────────────────────────────────────────────────
async function handleSession(req, res) {
  const header = req.headers['authorization'] || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : (req.body?.token || '');
  if (!token) return res.status(401).json({ ok: false, reason: 'no_session' });

  const secret = process.env.PARENT_JWT_SECRET || process.env.ADMIN_JWT_SECRET;
  let payload;
  try {
    payload = jwt.verify(token, secret);
  } catch (e) {
    const reason = e.name === 'TokenExpiredError' ? 'expired' : 'invalid';
    return res.status(401).json({ ok: false, reason });
  }

  const { data: user, error } = await supabase
    .from('portal_users')
    .select('id,fname,lname,email,phone,role,child_name,verified,approved,created_at,last_login')
    .eq('id', payload.id)
    .single();

  if (error || !user) return res.status(401).json({ ok: false, reason: 'not_found' });
  if (user.approved !== true) return res.status(401).json({ ok: false, reason: 'not_approved' });

  return ok(res, { user });
}

// ── router ───────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();

  const action = req.query.action;
  if (action === 'login')    return handleLogin(req, res);
  if (action === 'register') return handleRegister(req, res);
  if (action === 'session')  return handleSession(req, res);

  return err(res, 'Unknown parent action.', 400);
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
