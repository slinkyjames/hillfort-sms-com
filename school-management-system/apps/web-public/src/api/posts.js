/**
 * Hillfort — /api/posts
 * Full CRUD for posts (news, events, popups, gallery).
 * JWT-protected — admin only.
 *
 * GET    /api/posts?type=&status=&limit=&offset=   → list
 * POST   /api/posts  { action:'create', ...fields } → create
 * POST   /api/posts  { action:'update', id, ...fields } → update
 * POST   /api/posts  { action:'delete', id }        → delete
 * POST   /api/posts  { action:'stats' }             → dashboard stats
 */

import jwt from 'jsonwebtoken';
import { setCorsHeaders, ok, err, supabase, clean } from '../lib/supabase.js';

// ── Auth guard ───────────────────────────────────────────────────────────────
function getAdmin(req) {
  const header = req.headers['authorization'] || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : (req.body?.jwt_token || '');
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.ADMIN_JWT_SECRET);
  } catch { return null; }
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();

  const admin = getAdmin(req);
  if (!admin) return err(res, 'Unauthorised.', 401);

  // ── GET: list posts ────────────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { type, status, limit = 50, offset = 0, search } = req.query;

    let q = supabase.from('posts').select('*').order('created_at', { ascending: false });
    if (type)   q = q.eq('type', type);
    if (status) q = q.eq('status', status);
    if (search) q = q.ilike('title', `%${search}%`);
    q = q.range(Number(offset), Number(offset) + Number(limit) - 1);

    const { data, error, count } = await q;
    if (error) return err(res, error.message, 500);
    return ok(res, { posts: data, total: count });
  }

  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const body   = req.body || {};
  const action = body.action;

  // ── STATS ──────────────────────────────────────────────────────────────────
  if (action === 'stats') {
    const [news, events, popups, galleries, pendingUsers, subscribers] = await Promise.all([
      supabase.from('posts').select('id', { count:'exact', head:true }).eq('type','news').eq('status','published'),
      supabase.from('posts').select('id', { count:'exact', head:true }).eq('type','event'),
      supabase.from('posts').select('id', { count:'exact', head:true }).eq('type','popup').eq('status','active'),
      supabase.from('posts').select('id', { count:'exact', head:true }).eq('type','gallery').eq('status','published'),
      supabase.from('portal_users').select('id', { count:'exact', head:true }).is('approved', null),
      supabase.from('newsletter_subscribers').select('id', { count:'exact', head:true }).eq('subscribed', true),
    ]);
    return ok(res, {
      news:         news.count || 0,
      events:       events.count || 0,
      popups:       popups.count || 0,
      galleries:    galleries.count || 0,
      pendingUsers: pendingUsers.count || 0,
      subscribers:  subscribers.count || 0,
    });
  }

  // ── CREATE ─────────────────────────────────────────────────────────────────
  if (action === 'create') {
    const { error } = await supabase.from('posts').insert(buildPostRow(body, admin.name));
    if (error) return err(res, error.message, 500);
    return ok(res, { msg: 'Post created.' });
  }

  // ── UPDATE ─────────────────────────────────────────────────────────────────
  if (action === 'update') {
    const id = Number(body.id);
    if (!id) return err(res, 'Post ID required.');
    const { error } = await supabase.from('posts').update({
      ...buildPostRow(body, admin.name),
      updated_at: new Date().toISOString(),
    }).eq('id', id);
    if (error) return err(res, error.message, 500);
    return ok(res, { msg: 'Post updated.' });
  }

  // ── DELETE ─────────────────────────────────────────────────────────────────
  if (action === 'delete') {
    const id = Number(body.id);
    if (!id) return err(res, 'Post ID required.');
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) return err(res, error.message, 500);
    return ok(res, { msg: 'Post deleted.' });
  }

  // ── TOGGLE STATUS ──────────────────────────────────────────────────────────
  if (action === 'toggle_status') {
    const id     = Number(body.id);
    const status = body.status;
    if (!id || !status) return err(res, 'ID and status required.');
    const { error } = await supabase.from('posts').update({
      status,
      updated_at:   new Date().toISOString(),
      published_at: status === 'published' ? new Date().toISOString() : undefined,
    }).eq('id', id);
    if (error) return err(res, error.message, 500);
    return ok(res, { msg: `Post ${status}.` });
  }

  return err(res, 'Unknown action.');
}

function slugify(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 200)
    + '-' + Date.now();
}

function buildPostRow(body, authorName) {
  const type   = clean(body.type   || 'news', 20);
  const status = clean(body.status || 'draft', 20);
  return {
    type,
    title:        clean(body.title   || '', 300),
    slug:         body.slug ? clean(body.slug, 320) : slugify(body.title || ''),
    category:     clean(body.category || body.cat || '', 80),
    summary:      clean(body.summary  || '', 500),
    content:      body.content   || '',          // HTML — sanitised client-side
    author:       clean(body.author || authorName || 'Admin', 100),
    status,
    featured_img: clean(body.featured_img || '', 500),
    show_homepage: !!body.show_homepage,
    show_hero:    !!body.show_hero,
    tags:         clean(body.tags || '', 500),
    publish_date: body.publish_date || new Date().toISOString().split('T')[0],
    event_date:   body.event_date   || null,
    event_time:   body.event_time   || null,
    event_venue:  clean(body.event_venue || '', 300),
    event_end_date: body.event_end_date || null,
    popup_btn_text: clean(body.popup_btn_text || 'Learn More', 100),
    popup_btn_link: clean(body.popup_btn_link || '', 500),
    popup_expires:  body.popup_expires || null,
    published_at: status === 'published' || status === 'active'
      ? new Date().toISOString() : null,
  };
}

export const config = { api: { bodyParser: { sizeLimit: '2mb' } } };
