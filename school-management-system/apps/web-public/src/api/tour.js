/**
 * Hillfort — /api/tour
 * Handles school-tour.html form submission.
 *
 * POST fields:
 *   first_name, last_name, phone, email, year_group,
 *   pref_date, pref_time, message, g-recaptcha-response
 *
 * Returns: { ok: boolean, msg: string, ref?: string }
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

  const b = req.body || {};

  const name      = clean(b.name || `${b.first_name || ''} ${b.last_name || ''}`.trim(), 200);
  const phone     = clean(b.phone,      30);
  const email     = (b.email || '').trim().toLowerCase();
  const yearGroup = clean(b.year_group, 60);
  const prefDate  = clean(b.pref_date,  20);
  const prefTime  = clean(b.pref_time,  30);
  const message   = clean(b.message,    1000);
  const rcToken   = b['g-recaptcha-response'] || '';

  if (!name)                      return err(res, 'Please enter your full name.');
  if (!phone)                     return err(res, 'Please enter your phone number.');
  if (!isValidEmail(email))       return err(res, 'Please enter a valid email address.');
  if (!yearGroup)                 return err(res, "Please select your child's year group.");
  if (!prefDate)                  return err(res, 'Please select a preferred date.');
  if (!prefTime)                  return err(res, 'Please select a preferred time.');

  // Validate date
  const dateObj = new Date(prefDate);
  if (isNaN(dateObj.getTime()))   return err(res, 'Invalid date format.');
  if (dateObj.getDay() === 0)     return err(res, 'Tours are not available on Sundays. Please choose another day.');
  if (dateObj < new Date(new Date().toDateString()))
                                  return err(res, 'Please select a future date for your tour.');

  const captchaOk = await verifyRecaptcha(rcToken);
  if (!captchaOk) return err(res, 'Security check failed. Please try again.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`tour:${ip}`, 5, 900);
  if (!allowed) return err(res, 'Too many requests. Please wait before trying again.', 429);

  // Save to Supabase
  const { error: dbErr } = await supabase.from('tour_bookings').insert({
    name, email, phone,
    year_group: yearGroup,
    pref_date:  prefDate,
    pref_time:  prefTime,
    message,
    ip_address: ip,
  });
  if (dbErr) console.error('[tour] DB error:', dbErr.message);

  const displayDate = dateObj.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  // Email to admissions
  const adminHtml = `
    <h2 style="color:#800000;margin:0 0 16px">New School Tour Booking</h2>
    <table style="width:100%;border-collapse:collapse;font-size:.9rem">
      <tr><td style="padding:6px 0;font-weight:700;width:130px;color:#800000">Name</td><td>${name}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:6px 0;font-weight:700;color:#800000">Phone</td><td>${phone}</td></tr>
      <tr><td style="padding:6px 0;font-weight:700;color:#800000">Email</td>
        <td><a href="mailto:${email}" style="color:#800000">${email}</a></td></tr>
      <tr style="background:#f9f9f9"><td style="padding:6px 0;font-weight:700;color:#800000">Year Group</td><td>${yearGroup}</td></tr>
      <tr><td style="padding:6px 0;font-weight:700;color:#800000">Date</td><td><strong>${displayDate}</strong></td></tr>
      <tr style="background:#f9f9f9"><td style="padding:6px 0;font-weight:700;color:#800000">Time</td><td>${prefTime}</td></tr>
      ${message ? `<tr><td style="padding:6px 0;font-weight:700;color:#800000;vertical-align:top">Notes</td><td>${message}</td></tr>` : ''}
    </table>`;

  // Confirmation to visitor
  const confirmHtml = `
    <p style="color:#1a1a2e;font-size:.95rem;margin:0 0 12px">Dear <strong>${name.split(' ')[0]}</strong>,</p>
    <p style="color:#5a6070;font-size:.9rem;line-height:1.7;margin:0 0 20px">
      Your school tour request has been received! Our admissions team will confirm your booking shortly.
    </p>
    <div style="background:#f8f4ef;border:2px solid #d4a017;border-radius:12px;padding:20px 24px;margin:0 0 22px">
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <div><p style="margin:0 0 3px;font-size:.75rem;color:#94a3b8">DATE</p>
          <p style="margin:0;font-weight:700;color:#1a1a2e">${displayDate}</p></div>
        <div><p style="margin:0 0 3px;font-size:.75rem;color:#94a3b8">TIME</p>
          <p style="margin:0;font-weight:700;color:#1a1a2e">${prefTime}</p></div>
      </div>
    </div>
    <p style="color:#5a6070;font-size:.87rem;margin:0 0 12px">
      <strong>Location:</strong> C225 Maccido Royal Estate, Galadimawa, FCT – Abuja, Nigeria.
    </p>
    <p style="color:#5a6070;font-size:.87rem;margin:0">
      Need to reschedule? Call <a href="tel:+2349130267145" style="color:#800000">+234 (913) 026-7145</a>
      or email <a href="mailto:admissions@hillfortintlschool.ng" style="color:#800000">admissions@hillfortintlschool.ng</a>.
    </p>`;

  try {
    await Promise.all([
      sendMail({
        to:      process.env.MAIL_ADMISSIONS || 'admissions@hillfortintlschool.ng',
        toName:  'Admissions Team',
        replyTo: email,
        subject: `School Tour Request — ${displayDate} at ${prefTime} — ${name}`,
        html:    emailWrap('New School Tour Booking', adminHtml),
      }),
      sendMail({
        to:      email,
        toName:  name,
        subject: 'Tour Booking Received — Hillfort International School',
        html:    emailWrap('Tour Booking Received', confirmHtml),
      }),
    ]);
  } catch (e) {
    console.error('[tour] Mail error:', e.message);
    if (!dbErr) return ok(res, { msg: 'Tour request submitted! (Email notification may be delayed)' });
    return err(res, 'Could not process your request. Please call us directly on +234 (913) 026-7145.', 500);
  }

  return ok(res);
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
