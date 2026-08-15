/**
 * Hillfort — /api/contact
 * Handles contact.html form submission.
 *
 * POST fields: first_name, last_name, email, phone, subject, message,
 *              g-recaptcha-response
 *
 * Returns: { ok: boolean, msg: string }
 */

import {
  setCorsHeaders, ok, err,
  checkRateLimit, verifyRecaptcha, sendMail, emailWrap,
  supabase, clean, isValidEmail, getIP,
} from '../lib/supabase.js';

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return err(res, 'Method not allowed', 405);

  const body = req.body || {};

  const name    = clean(body.name || `${body.first_name || ''} ${body.last_name || ''}`.trim(), 200);
  const email   = (body.email || '').trim().toLowerCase();
  const phone   = clean(body.phone,   30);
  const subject = clean(body.subject, 150) || 'Website Enquiry';
  const message = clean(body.message, 2000);
  const rcToken = body['g-recaptcha-response'] || '';

  if (!name)                         return err(res, 'Please enter your full name.');
  if (!isValidEmail(email))          return err(res, 'Please enter a valid email address.');
  if (!message || message.length < 5) return err(res, 'Please enter your message.');

  // reCAPTCHA
  const captchaOk = await verifyRecaptcha(rcToken);
  if (!captchaOk) return err(res, 'Security check failed. Please try again.');

  // Rate limit: 6 per IP per 15 min
  const ip = getIP(req);
  const allowed = await checkRateLimit(`contact:${ip}`, 6, 900);
  if (!allowed) return err(res, 'Too many requests. Please wait before trying again.', 429);

  // Save to Supabase
  const { error: dbErr } = await supabase.from('contact_submissions').insert({
    name, email, phone, subject, message, ip_address: ip,
  });
  if (dbErr) {
    console.error('[contact] DB error:', dbErr.message);
    // Non-fatal — still try to send email
  }

  // Email to admin
  const adminHtml = `
    <h2 style="color:#800000;margin:0 0 16px">New Website Enquiry</h2>
    <table style="width:100%;border-collapse:collapse;font-size:.9rem">
      <tr><td style="padding:6px 0;font-weight:700;width:120px;color:#800000">Name</td><td>${name}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:6px 0;font-weight:700;color:#800000">Email</td>
        <td><a href="mailto:${email}" style="color:#800000">${email}</a></td></tr>
      <tr><td style="padding:6px 0;font-weight:700;color:#800000">Phone</td><td>${phone || '—'}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:6px 0;font-weight:700;color:#800000">Subject</td><td>${subject}</td></tr>
      <tr><td style="padding:6px 0;font-weight:700;color:#800000;vertical-align:top">Message</td>
        <td style="white-space:pre-wrap">${message}</td></tr>
    </table>`;

  try {
    await sendMail({
      to:      process.env.MAIL_CONTACT || 'info@hillfortintlschool.ng',
      toName:  'Hillfort Enquiries',
      replyTo: email,
      subject: `Website Enquiry: ${subject} — ${name}`,
      html:    emailWrap(`Website Enquiry: ${subject}`, adminHtml),
    });
  } catch (e) {
    console.error('[contact] Mail error:', e.message);
    return err(res, 'Could not send your message right now. Please email us directly at info@hillfortintlschool.ng', 500);
  }

  return ok(res);
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
