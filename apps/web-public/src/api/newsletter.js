/**
 * Hillfort — /api/newsletter
 * Handles all newsletter form submissions site-wide.
 *
 * POST actions:
 *   subscribe   — email, name?, subscriber_type?
 *   unsubscribe — token (GET param) OR email (POST)
 *
 * Returns: { ok: boolean, msg: string }
 */

import crypto from 'crypto';
import {
  setCorsHeaders, ok, err,
  checkRateLimit, sendMail, emailWrap,
  supabase, isValidEmail, getIP, clean,
} from '../lib/supabase.js';

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();

  // ── Token-based unsubscribe via GET link (from email) ────────────────
  if (req.method === 'GET') {
    const token = req.query?.token || '';
    if (!token) return err(res, 'Missing token.', 400);
    return handleUnsubscribeToken(res, token, true);
  }

  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const body   = req.body || {};
  const action = (body.action || 'subscribe').trim();

  if (action === 'subscribe')   return handleSubscribe(req, res, body);
  if (action === 'unsubscribe') return handleUnsubscribe(req, res, body);

  return err(res, 'Unknown action.');
}

// ── SUBSCRIBE ────────────────────────────────────────────────────────────────
async function handleSubscribe(req, res, body) {
  const email  = (body.email || '').trim().toLowerCase();
  const name   = clean(body.name || body.first_name || '', 150);
  const type   = clean(body.subscriber_type || 'Subscriber', 60);

  if (!isValidEmail(email)) return err(res, 'Please enter a valid email address.');

  const ip = getIP(req);
  const allowed = await checkRateLimit(`newsletter:${ip}`, 8, 900);
  if (!allowed) return err(res, 'Too many requests. Please wait a moment.', 429);

  // Check existing
  const { data: existing } = await supabase
    .from('newsletter_subscribers')
    .select('id, subscribed, token')
    .eq('email', email)
    .single();

  if (existing?.subscribed) {
    return ok(res, { msg: "You're already subscribed! We'll keep you updated." });
  }

  const token = crypto.randomBytes(32).toString('hex');

  if (existing) {
    // Re-subscribe
    await supabase
      .from('newsletter_subscribers')
      .update({ subscribed: true, token, subscribed_at: new Date().toISOString(), unsubscribed_at: null })
      .eq('id', existing.id);
  } else {
    const { error: dbErr } = await supabase.from('newsletter_subscribers').insert({
      email, token,
      subscribed:    true,
      subscribed_at: new Date().toISOString(),
      ip_address:    ip,
    });
    if (dbErr) {
      console.error('[newsletter] DB error:', dbErr.message);
      return err(res, 'Could not subscribe. Please try again.', 500);
    }
  }

  // Confirmation email
  const unsubUrl  = `${process.env.SITE_URL || 'https://hillfortintlschool.ng'}/api/newsletter?token=${token}`;
  const firstName = name ? name.split(' ')[0] : 'there';

  const bodyHtml = `
    <p style="color:#1a1a2e;font-size:.95rem;margin:0 0 12px">Hi <strong>${firstName}</strong>,</p>
    <p style="color:#5a6070;font-size:.9rem;line-height:1.7;margin:0 0 20px">
      You're now subscribed to the <strong>Hillfort International School</strong> newsletter!
      You'll receive the latest news, upcoming events, and important school updates straight to your inbox.
    </p>
    <div style="background:#f8f4ef;border-left:4px solid #800000;border-radius:0 10px 10px 0;padding:14px 18px;margin:0 0 20px">
      <p style="margin:0;font-size:.85rem;color:#5a6070">
        <strong>Subscription type:</strong> ${type}
      </p>
    </div>
    <p style="color:#94a3b8;font-size:.78rem;margin:0">
      Changed your mind? <a href="${unsubUrl}" style="color:#800000">Unsubscribe here</a>.
    </p>`;

  try {
    await sendMail({
      to:      email,
      toName:  name || email,
      subject: 'Welcome to the Hillfort Newsletter!',
      html:    emailWrap('Newsletter Subscription Confirmed', bodyHtml),
    });
  } catch (e) {
    console.error('[newsletter] Confirm mail error:', e.message);
    // Subscription saved — don't fail on email error
  }

  return ok(res, { msg: 'Subscribed! 🎉 Check your inbox for a confirmation email.' });
}

// ── UNSUBSCRIBE via POST body ─────────────────────────────────────────────────
async function handleUnsubscribe(req, res, body) {
  const token = (body.token || '').trim();
  const email = (body.email || '').trim().toLowerCase();

  if (token) return handleUnsubscribeToken(res, token, false);

  if (!isValidEmail(email)) return err(res, 'Please provide a valid email address.');

  const { data } = await supabase
    .from('newsletter_subscribers')
    .select('id, subscribed')
    .eq('email', email)
    .single();

  if (!data || !data.subscribed) {
    return err(res, 'This email is not currently subscribed.');
  }

  await supabase
    .from('newsletter_subscribers')
    .update({ subscribed: false, unsubscribed_at: new Date().toISOString() })
    .eq('id', data.id);

  return ok(res, { msg: 'Unsubscribed successfully.' });
}

// ── UNSUBSCRIBE via token (email link click) ──────────────────────────────────
async function handleUnsubscribeToken(res, token, redirect) {
  const { data } = await supabase
    .from('newsletter_subscribers')
    .select('id, subscribed')
    .eq('token', token)
    .single();

  const siteUrl = process.env.SITE_URL || 'https://hillfortintlschool.ng';

  if (!data) {
    if (redirect) return res.redirect(302, `${siteUrl}?unsub=notfound`);
    return err(res, 'Invalid or expired unsubscribe link.');
  }

  await supabase
    .from('newsletter_subscribers')
    .update({ subscribed: false, unsubscribed_at: new Date().toISOString() })
    .eq('id', data.id);

  if (redirect) return res.redirect(302, `${siteUrl}?unsub=success`);
  return ok(res, { msg: 'Unsubscribed successfully.' });
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
