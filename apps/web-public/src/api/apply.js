/**
 * Hillfort — /api/apply
 * Handles apply.html admission form submission.
 *
 * POST fields:
 *   child_name, child_dob, grade, entry_date,
 *   prev_school, parent_name, relationship, phone, email, address,
 *   referral, message, g-recaptcha-response
 *
 * Returns: { ok: boolean, msg: string, ref?: string }
 */

import jwt from 'jsonwebtoken';
import {
  setCorsHeaders, ok, err,
  checkRateLimit, verifyRecaptcha, sendMail, emailWrap,
  supabase, clean, isValidEmail, getIP,
} from '../lib/supabase.js';

function getParentId(req) {
  const header = req.headers['authorization'] || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return null;
  try {
    const payload = jwt.verify(token, process.env.PARENT_JWT_SECRET || process.env.ADMIN_JWT_SECRET);
    return payload.id || null;
  } catch { return null; }
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return err(res, 'Method not allowed', 405);

  const b = req.body || {};

  const childName    = clean(b.child_name || `${b.child_first || ''} ${b.child_last || ''}`.trim(), 200);
  const childDob     = clean(b.child_dob,    20);
  const grade        = clean(b.grade,        60);
  const entryDate    = clean(b.entry_date,   60);
  const prevSchool   = clean(b.prev_school,  200);
  const parentName   = clean(b.parent_name,  150);
  const relationship = clean(b.relationship, 50);
  const phone        = clean(b.phone,        30);
  const email        = (b.email || '').trim().toLowerCase();
  const address      = clean(b.address,      500);
  const referral     = clean(b.referral,     100);
  const message      = clean(b.message,      2000);
  const rcToken      = b['g-recaptcha-response'] || '';

  if (!childName)     return err(res, "Please enter the child's full name.");
  if (!grade)         return err(res, 'Please select a year group.');
  if (!parentName)    return err(res, "Please enter the parent/guardian's name.");
  if (!phone)         return err(res, 'Please enter a phone number.');
  if (!isValidEmail(email)) return err(res, 'Please enter a valid email address.');
  if (!address)       return err(res, 'Please enter your home address.');

  const captchaOk = await verifyRecaptcha(rcToken);
  if (!captchaOk) return err(res, 'Security check failed. Please try again.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`apply:${ip}`, 5, 900);
  if (!allowed) return err(res, 'Too many submissions. Please wait before trying again.', 429);

  // Generate reference number
  const { count } = await supabase
    .from('admission_applications')
    .select('id', { count: 'exact', head: true });
  const refNum = String((count || 0) + 1).padStart(5, '0');
  const reference = `HIS-${new Date().getFullYear()}-${refNum}`;

  // Save to Supabase
  const linkedUserId = getParentId(req);
  const { error: dbErr } = await supabase.from('admission_applications').insert({
    reference,
    user_id:       linkedUserId,
    parent_name:   parentName,
    email,
    phone,
    child_name:    childName,
    child_dob:     childDob,
    grade,
    message: [
      entryDate    ? `Entry date: ${entryDate}` : '',
      prevSchool   ? `Previous school: ${prevSchool}` : '',
      
      relationship ? `Relationship: ${relationship}` : '',
      address      ? `Address: ${address}` : '',
      referral     ? `Heard from: ${referral}` : '',
      message      ? `Notes: ${message}` : '',
    ].filter(Boolean).join('\n'),
    ip_address: ip,
  });
  if (dbErr) console.error('[apply] DB error:', dbErr.message);

  if (linkedUserId) {
    await supabase.from('portal_activity_log').insert({
      user_id: linkedUserId, event: 'application_submitted',
      detail: `Reference: ${reference} — ${childName}`,
      ip_address: ip,
    }).catch(() => {});
  }

  // Email to admissions
  const adminHtml = `
    <h2 style="color:#800000;margin:0 0 16px">New Admission Application</h2>
    <div style="background:#f8f4ef;border:2px solid #d4a017;border-radius:10px;padding:14px 18px;margin-bottom:20px">
      <p style="margin:0;font-size:.85rem;color:#5a6070">Reference: <strong style="color:#800000;font-family:monospace;font-size:1rem">${reference}</strong></p>
    </div>
    <h4 style="color:#800000;margin:0 0 8px">Child</h4>
    <table style="width:100%;border-collapse:collapse;font-size:.88rem;margin-bottom:16px">
      <tr><td style="padding:5px 0;font-weight:700;width:140px">Name</td><td>${childName}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:5px 0;font-weight:700">DOB</td><td>${childDob}</td></tr>
      
      <tr style="background:#f9f9f9"><td style="padding:5px 0;font-weight:700">Year Group</td><td>${grade}</td></tr>
      <tr><td style="padding:5px 0;font-weight:700">Entry Date</td><td>${entryDate}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:5px 0;font-weight:700">Prev School</td><td>${prevSchool || '—'}</td></tr>
    </table>
    <h4 style="color:#800000;margin:0 0 8px">Parent / Guardian</h4>
    <table style="width:100%;border-collapse:collapse;font-size:.88rem">
      <tr><td style="padding:5px 0;font-weight:700;width:140px">Name</td><td>${parentName} (${relationship})</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:5px 0;font-weight:700">Phone</td><td>${phone}</td></tr>
      <tr><td style="padding:5px 0;font-weight:700">Email</td><td><a href="mailto:${email}" style="color:#800000">${email}</a></td></tr>
      <tr style="background:#f9f9f9"><td style="padding:5px 0;font-weight:700">Address</td><td>${address}</td></tr>
      <tr><td style="padding:5px 0;font-weight:700">Heard from</td><td>${referral || '—'}</td></tr>
      ${message ? `<tr style="background:#f9f9f9"><td style="padding:5px 0;font-weight:700;vertical-align:top">Notes</td><td style="white-space:pre-wrap">${message}</td></tr>` : ''}
    </table>`;

  // Confirmation to parent
  const confirmHtml = `
    <p style="color:#1a1a2e;font-size:.95rem;margin:0 0 12px">Dear <strong>${parentName}</strong>,</p>
    <p style="color:#5a6070;font-size:.9rem;line-height:1.7;margin:0 0 20px">
      Thank you for applying to Hillfort International School for <strong>${childName}</strong>.
      We have received your application and will be in touch within <strong>2 working days</strong>.
    </p>
    <div style="background:#f8f4ef;border:2px solid #d4a017;border-radius:12px;padding:20px 24px;margin:0 0 22px;text-align:center">
      <p style="margin:0 0 4px;font-size:.75rem;color:#94a3b8">APPLICATION REFERENCE</p>
      <p style="margin:0;font-size:1.5rem;font-weight:900;color:#800000;font-family:monospace;letter-spacing:3px">${reference}</p>
      <p style="margin:6px 0 0;font-size:.75rem;color:#94a3b8">Quote this in all correspondence</p>
    </div>
    <p style="color:#5a6070;font-size:.87rem">
      Questions? Call <a href="tel:+2349130267145" style="color:#800000">+234 (913) 026-7145</a>
      or email <a href="mailto:admissions@hillfortintlschool.ng" style="color:#800000">admissions@hillfortintlschool.ng</a>.
    </p>`;

  try {
    await Promise.all([
      sendMail({
        to:      process.env.MAIL_ADMISSIONS || 'admissions@hillfortintlschool.ng',
        toName:  'Admissions Team',
        replyTo: email,
        subject: `New Admission Application [${reference}] — ${childName}`,
        html:    emailWrap('New Admission Application', adminHtml),
      }),
      sendMail({
        to:      email,
        toName:  parentName,
        subject: `Application Received [${reference}] — Hillfort International School`,
        html:    emailWrap('Application Received', confirmHtml),
      }),
    ]);
  } catch (e) {
    console.error('[apply] Mail error:', e.message);
    // Still return success if DB saved — email is secondary
    if (!dbErr) return ok(res, { msg: 'Application submitted! (Email notification pending)', ref: reference });
    return err(res, 'Could not process your application. Please try again.', 500);
  }

  return ok(res, { ref: reference });
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
