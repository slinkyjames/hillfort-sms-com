/**
 * Hillfort — /api/admin
 * Consolidated admin endpoint (login, logout, session, users).
 *
 * Merged from admin-login.js / admin-logout.js / admin-session.js /
 * admin-users.js to stay under Vercel Hobby's 12-Serverless-Function
 * limit. vercel.json rewrites the original URLs here, so no frontend
 * code needed to change:
 *   /api/admin-login   → /api/admin?action=login
 *   /api/admin-logout  → /api/admin?action=logout
 *   /api/admin-session → /api/admin?action=session
 *   /api/admin-users   → /api/admin?action=users   (body.action still
 *                          selects list_users/approve/reject/etc as before)
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  setCorsHeaders, ok, err,
  checkRateLimit, verifyRecaptcha,
  supabase, isValidEmail, getIP, clean, sendMail, emailWrap,
} from '../lib/supabase.js';

function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function getAdmin(req) {
  const header = req.headers['authorization'] || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : (req.body?.jwt_token || '');
  if (!token) return null;
  try { return jwt.verify(token, process.env.ADMIN_JWT_SECRET); }
  catch { return null; }
}

// ── login ──────────────────────────────────────────────────────────────────
async function handleLogin(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed', 405);

  const body     = req.body || {};
  const email    = (body.email    || '').trim().toLowerCase();
  const password = (body.password || '');
  const rcToken  = body.token || '';

  if (!isValidEmail(email) || !password) return err(res, 'Email and password are required.');
  if (!email.endsWith('@hillfortintlschool.ng')) {
    return err(res, 'Access denied. Use your school email address.');
  }

  const ip = getIP(req);
  const allowed = await checkRateLimit(`admin_login:${ip}`, 5, 900);
  if (!allowed) {
    await delay(400);
    return err(res, 'Too many login attempts. Please wait before trying again.', 429);
  }

  const captchaOk = await verifyRecaptcha(rcToken);
  if (!captchaOk) return err(res, 'Security check failed. Please try again.');

  const { data: users, error: dbErr } = await supabase
    .from('admin_users')
    .select('id, name, email, password_hash, role, verified, approved')
    .eq('email', email)
    .limit(1);

  if (dbErr || !users?.length) { await delay(400); return err(res, 'Invalid email or password.'); }

  const user = users[0];
  if (!user.verified) return err(res, 'Please verify your email first.');
  if (!user.approved) return err(res, 'Your account is pending approval from a super admin.');

  const passwordOk = await bcrypt.compare(password, user.password_hash || '');
  if (!passwordOk) { await delay(400); return err(res, 'Invalid email or password.'); }

  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    console.error('[admin login] ADMIN_JWT_SECRET not set');
    return err(res, 'Server configuration error. Contact the administrator.', 500);
  }

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role || 'admin' },
    secret,
    { expiresIn: '8h' }
  );

  await supabase.from('admin_users').update({ last_login: new Date().toISOString() }).eq('id', user.id);
  return ok(res, { token, name: user.name, email: user.email });
}

// ── logout ─────────────────────────────────────────────────────────────────
async function handleLogout(req, res) {
  // Stateless JWT logout — instructs the client to clear the token.
  return ok(res);
}

// ── session ────────────────────────────────────────────────────────────────
async function handleSession(req, res) {
  const authHeader = req.headers['authorization'] || '';
  const bodyToken  = req.body?.token || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : bodyToken;

  if (!token) return res.status(401).json({ ok: false, reason: 'no_session' });

  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    console.error('[admin session] ADMIN_JWT_SECRET not set');
    return res.status(500).json({ ok: false, reason: 'config_error' });
  }

  try {
    const payload = jwt.verify(token, secret);
    return ok(res, { name: payload.name, email: payload.email, role: payload.role || 'admin' });
  } catch (e) {
    const reason = e.name === 'TokenExpiredError' ? 'expired' : 'invalid';
    return res.status(401).json({ ok: false, reason });
  }
}

// ── users (JWT-protected sub-actions, unchanged from admin-users.js) ───────
async function handleUsers(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const admin = getAdmin(req);
  if (!admin) return err(res, 'Unauthorised.', 401);

  const body   = req.body || {};
  const action = body.action;

  if (action === 'list_users') {
    const filter = body.filter || 'all';
    let q = supabase.from('portal_users')
      .select('id,fname,lname,email,phone,child_name,role,provider,verified,approved,approved_at,created_at,last_login')
      .order('created_at', { ascending: false });

    if (filter === 'pending')  q = q.is('approved', null).eq('verified', true);
    if (filter === 'approved') q = q.eq('approved', true);
    if (filter === 'rejected') q = q.eq('approved', false);
    if (filter === 'parent')   q = q.eq('role', 'parent');
    if (filter === 'guest')    q = q.eq('role', 'guest');
    if (filter === 'unverified') q = q.eq('verified', false);

    const { data, error } = await q;
    if (error) return err(res, error.message, 500);
    return ok(res, { users: data || [] });
  }

  if (action === 'approve') {
    const id = Number(body.id);
    if (!id) return err(res, 'User ID required.');

    const { data: user } = await supabase
      .from('portal_users').select('fname,email').eq('id', id).single();

    await supabase.from('portal_users').update({
      approved: true,
      approved_at: new Date().toISOString(),
      approved_by: admin.id,
    }).eq('id', id);

    if (user?.email) {
      const bodyHtml = `
        <p style="color:#1a1a2e;margin:0 0 12px">Hi <strong>${user.fname || 'there'}</strong>,</p>
        <p style="color:#5a6070;font-size:.9rem;line-height:1.7;margin:0 0 20px">
          Your Hillfort Parent Portal account has been <strong style="color:#16a34a">approved</strong>.
          You can now sign in and access portal resources.
        </p>
        <a href="${process.env.SITE_URL}/pages/parent-portal.html"
           style="display:inline-block;background:#800000;color:#fff;padding:12px 28px;
                  border-radius:10px;text-decoration:none;font-weight:700">
          Sign In to Your Portal →
        </a>`;
      await sendMail({
        to: user.email, toName: user.fname,
        subject: '✅ Portal Access Approved — Hillfort International School',
        html: emailWrap('Account Approved', bodyHtml),
      }).catch(e => console.error('[approve] mail:', e.message));
    }

    await supabase.from('audit_log').insert({ event: 'user_approved', actor: admin.email, target: user?.email });
    return ok(res, { msg: 'User approved and notified.' });
  }

  if (action === 'reject') {
    const id     = Number(body.id);
    const reason = clean(body.reason || '', 500);
    if (!id) return err(res, 'User ID required.');

    const { data: user } = await supabase
      .from('portal_users').select('fname,email').eq('id', id).single();

    await supabase.from('portal_users').update({
      approved: false,
      approved_at: new Date().toISOString(),
      reject_reason: reason,
    }).eq('id', id);

    await supabase.from('audit_log').insert({ event: 'user_rejected', actor: admin.email, target: user?.email });
    return ok(res, { msg: 'User rejected.' });
  }

  if (action === 'delete_user') {
    const id = Number(body.id);
    if (!id) return err(res, 'User ID required.');
    await supabase.from('portal_users').delete().eq('id', id);
    return ok(res, { msg: 'User deleted.' });
  }

  if (action === 'list_subscribers') {
    const page    = Math.max(0, Number(body.page || 0));
    const perPage = Math.min(100, Number(body.per_page || 50));
    const filter  = body.filter || 'subscribed';

    let q = supabase.from('newsletter_subscribers')
      .select('id,email,name,subscriber_type,subscribed,subscribed_at,unsubscribed_at')
      .order('subscribed_at', { ascending: false })
      .range(page * perPage, (page + 1) * perPage - 1);

    if (filter === 'subscribed')   q = q.eq('subscribed', true);
    if (filter === 'unsubscribed') q = q.eq('subscribed', false);

    const { data, error } = await q;
    if (error) return err(res, error.message, 500);

    const { count } = await supabase.from('newsletter_subscribers')
      .select('id', { count: 'exact', head: true })
      .eq('subscribed', filter !== 'unsubscribed');

    return ok(res, { subscribers: data || [], total: count || 0 });
  }

  if (action === 'send_newsletter') {
    const subject     = clean(body.subject || '', 200);
    const htmlContent = body.html || '';
    const previewText = clean(body.preview_text || '', 200);

    if (!subject || !htmlContent) return err(res, 'Subject and content are required.');

    const { data: subscribers } = await supabase
      .from('newsletter_subscribers')
      .select('email,name,token')
      .eq('subscribed', true);

    if (!subscribers?.length) return err(res, 'No active subscribers found.');

    const siteUrl = process.env.SITE_URL || 'https://hillfortintlschool.ng';
    let sent = 0, failed = 0;
    const batch = subscribers.slice(0, 100); // Vercel 30s limit

    for (const sub of batch) {
      const unsubUrl = `${siteUrl}/api/newsletter?token=${sub.token}`;
      const finalHtml = emailWrap(subject, `
        ${previewText ? `<p style="color:#94a3b8;font-size:.8rem;margin:0 0 16px">${previewText}</p>` : ''}
        ${htmlContent}
        <hr style="border:none;border-top:1px solid #e8e0d5;margin:32px 0 16px">
        <p style="color:#94a3b8;font-size:.75rem">
          You're receiving this because you subscribed to the Hillfort International School newsletter.<br>
          <a href="${unsubUrl}" style="color:#800000">Unsubscribe</a>
        </p>`);

      try {
        await sendMail({ to: sub.email, toName: sub.name, subject, html: finalHtml });
        sent++;
      } catch { failed++; }
    }

    await supabase.from('audit_log').insert({
      event: 'newsletter_sent',
      actor: admin.email,
      detail: `Subject: ${subject} | Sent: ${sent} | Failed: ${failed}`,
    });

    return ok(res, {
      msg: `Newsletter sent to ${sent} subscriber${sent !== 1 ? 's' : ''}.${failed ? ` (${failed} failed)` : ''}`,
      sent, failed,
      total: subscribers.length,
      remaining: subscribers.length - batch.length,
    });
  }

  return err(res, 'Unknown action.');
}

// ── content (site_settings, term_dates, calendar_events, gallery,
//    downloads, staff, pages) — JWT-protected CRUD + file upload ──────────
const CONTENT_TABLES = {
  site_settings:       { order: null },
  term_dates:          { order: ['sort', { ascending: true }] },
  calendar_events:     { order: ['event_date', { ascending: true }] },
  gallery_categories:  { order: ['name', { ascending: true }] },
  media_gallery_items: { order: ['sort', { ascending: true }] },
  download_categories: { order: ['name', { ascending: true }] },
  downloads:           { order: ['sort', { ascending: true }] },
  staff_members:       { order: ['sort', { ascending: true }] },
  pages:               { order: ['slug', { ascending: true }] },
};
const UPLOAD_BUCKET = 'site-uploads';
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // stay under Vercel's ~4.5MB request cap

async function handleContent(req, res) {
  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const admin = getAdmin(req);
  if (!admin) return err(res, 'Unauthorised.', 401);

  const body = req.body || {};
  const sub  = body.action;

  if (sub === 'upload') return handleUpload(body, res);

  const type = body.type;
  if (!type || !CONTENT_TABLES[type]) return err(res, 'Unknown content type.');
  const cfg = CONTENT_TABLES[type];

  if (sub === 'list') {
    let q = supabase.from(type).select('*');
    if (cfg.order) q = q.order(cfg.order[0], cfg.order[1]);
    const { data, error } = await q;
    if (error) return err(res, error.message, 500);
    return ok(res, { items: data || [] });
  }

  if (sub === 'save') {
    const { id, type: _t, action: _a, ...fields } = body;

    if (type === 'site_settings') {
      const { data, error } = await supabase.from('site_settings').update(fields).eq('id', 1).select().single();
      if (error) return err(res, error.message, 500);
      return ok(res, { item: data });
    }

    if (id) {
      const { data, error } = await supabase.from(type).update(fields).eq('id', id).select().single();
      if (error) return err(res, error.message, 500);
      return ok(res, { item: data });
    }

    const { data, error } = await supabase.from(type).insert(fields).select().single();
    if (error) return err(res, error.message, 500);

    await supabase.from('audit_log').insert({ event: `content_${type}_created`, actor: admin.email, target: String(data.id) });
    return ok(res, { item: data });
  }

  if (sub === 'delete') {
    if (type === 'site_settings') return err(res, 'The site settings row cannot be deleted.');
    if (!body.id) return err(res, 'ID required.');

    const { error } = await supabase.from(type).delete().eq('id', body.id);
    if (error) return err(res, error.message, 500);

    await supabase.from('audit_log').insert({ event: `content_${type}_deleted`, actor: admin.email, target: String(body.id) });
    return ok(res);
  }

  return err(res, 'Unknown content action.');
}

async function handleUpload(body, res) {
  const { filename, contentType, dataBase64 } = body;
  if (!filename || !dataBase64) return err(res, 'File data required.');

  let buffer;
  try { buffer = Buffer.from(dataBase64, 'base64'); }
  catch { return err(res, 'Invalid file data.'); }

  if (buffer.length > MAX_UPLOAD_BYTES) {
    return err(res, `File too large — please keep uploads under ${Math.floor(MAX_UPLOAD_BYTES / (1024 * 1024))}MB.`);
  }

  const ext = (filename.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '');
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext || 'bin'}`;

  const { error: upErr } = await supabase.storage
    .from(UPLOAD_BUCKET)
    .upload(safeName, buffer, { contentType: contentType || 'application/octet-stream', upsert: false });
  if (upErr) return err(res, upErr.message, 500);

  const { data: pub } = supabase.storage.from(UPLOAD_BUCKET).getPublicUrl(safeName);
  return ok(res, { url: pub.publicUrl, filename: safeName });
}

// ── router ───────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();

  const action = req.query.action;
  if (action === 'login')   return handleLogin(req, res);
  if (action === 'logout')  return handleLogout(req, res);
  if (action === 'session') return handleSession(req, res);
  if (action === 'users')   return handleUsers(req, res);
  if (action === 'content') return handleContent(req, res);

  return err(res, 'Unknown admin action.', 400);
}

export const config = { api: { bodyParser: { sizeLimit: '5mb' } } };
