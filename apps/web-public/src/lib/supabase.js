/**
 * Hillfort — Supabase client + shared API helpers
 * lib/supabase.js
 *
 * Uses the Supabase service-role key (server-side only).
 * Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 */

import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// ── Supabase ────────────────────────────────────────────────
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ── CORS / security headers ─────────────────────────────────
export function setCorsHeaders(res) {
  const origin = process.env.SITE_URL || 'https://hillfortintlschool.ng';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
}

export function ok(res, extra = {}) {
  return res.status(200).json({ ok: true, ...extra });
}

export function err(res, msg, status = 400) {
  return res.status(status).json({ ok: false, msg });
}

// ── Rate limiting (via Supabase rate_limits table) ──────────
/**
 * @param {string} key  e.g. "contact:1.2.3.4"
 * @param {number} max  max hits per window
 * @param {number} windowSeconds  default 900 (15 min)
 */
export async function checkRateLimit(key, max = 10, windowSeconds = 900) {
  const since = new Date(Date.now() - windowSeconds * 1000).toISOString();

  const { count } = await supabase
    .from('rate_limits')
    .select('id', { count: 'exact', head: true })
    .eq('rl_key', key)
    .gte('hit_at', since);

  if (count >= max) return false;

  await supabase.from('rate_limits').insert({ rl_key: key, hit_at: new Date().toISOString() });
  return true;
}

// ── reCAPTCHA v3 ────────────────────────────────────────────
export async function verifyRecaptcha(token) {
  if (!process.env.RECAPTCHA_SECRET_KEY) return true; // skip in dev
  if (!token) return false;

  const params = new URLSearchParams({
    secret:   process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  });

  const r = await fetch(
    'https://www.google.com/recaptcha/api/siteverify?' + params,
    { method: 'GET' }
  ).then(r => r.json()).catch(() => null);

  if (!r || !r.success) return false;
  const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');
  return (r.score ?? 1) >= minScore;
}

// ── Nodemailer transporter ───────────────────────────────────
function makeTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });
}

/**
 * Send an email.
 * @param {{to:string, toName?:string, replyTo?:string, subject:string, html:string, text?:string}} opts
 */
export async function sendMail({ to, toName, replyTo, subject, html, text }) {
  const transporter = makeTransporter();
  await transporter.sendMail({
    from:    `"${process.env.MAIL_FROM_NAME || 'Hillfort International School'}" <${process.env.MAIL_FROM}>`,
    to:      toName ? `"${toName}" <${to}>` : to,
    replyTo: replyTo,
    subject,
    html,
    text:    text || html.replace(/<[^>]+>/g, ' '),
  });
}

// ── Branded email wrapper ────────────────────────────────────
export function emailWrap(subject, bodyHtml) {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#f5f0ea;font-family:Poppins,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0ea;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;width:100%;background:#fff;border-radius:18px;
                    overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10)">
        <tr>
          <td style="background:linear-gradient(135deg,#800000,#5c0000);padding:28px 36px;text-align:center">
            <div style="font-family:Georgia,serif;font-size:1.4rem;font-weight:700;color:#d4a017;letter-spacing:1px">HILLFORT</div>
            <div style="color:rgba(255,255,255,0.75);font-size:0.72rem;letter-spacing:3px;margin-top:2px;text-transform:uppercase">International School</div>
          </td>
        </tr>
        <tr><td style="padding:36px 40px">${bodyHtml}</td></tr>
        <tr>
          <td style="background:#f8f4ef;padding:20px 40px;text-align:center;border-top:1px solid #e8e0d5">
            <p style="color:#94a3b8;font-size:0.75rem;margin:0">
              &copy; ${year} Hillfort International School &bull; Galadimawa, Abuja, Nigeria<br>
              <a href="mailto:info@hillfortintlschool.ng" style="color:#800000;text-decoration:none">info@hillfortintlschool.ng</a>
              &bull;
              <a href="https://hillfortintlschool.ng" style="color:#800000;text-decoration:none">hillfortintlschool.ng</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Input helpers ────────────────────────────────────────────
export function clean(val, maxLen = 500) {
  if (!val) return '';
  return String(val).trim().replace(/<[^>]*>/g, '').slice(0, maxLen);
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

export function getIP(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}
