/**
 * Hillfort — /api/dashboard
 * Parent/guest dashboard data: profile, activity log, applications.
 * JWT-protected (parent token).
 *
 * POST { action: 'overview' }                       → profile + stats + recent activity
 * POST { action: 'log_activity', event, detail? }    → record an activity event
 * POST { action: 'update_profile', fname?, lname?, phone? } → update profile
 * POST { action: 'list_activity', limit?, offset? }  → full activity log
 * POST { action: 'list_applications' }               → applications linked to this user's email
 */

import jwt from 'jsonwebtoken';
import { setCorsHeaders, ok, err, supabase, clean, getIP } from '../lib/supabase.js';

function getParent(req) {
  const header = req.headers['authorization'] || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : (req.body?.token || '');
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.PARENT_JWT_SECRET || process.env.ADMIN_JWT_SECRET);
  } catch { return null; }
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return err(res, 'Method not allowed.', 405);

  const parent = getParent(req);
  if (!parent) return err(res, 'Unauthorised.', 401);

  const body   = req.body || {};
  const action = body.action;
  const userId = parent.id;

  // ── OVERVIEW ───────────────────────────────────────────────────────────────
  if (action === 'overview') {
    const { data: user } = await supabase
      .from('portal_users')
      .select('id,fname,lname,email,phone,role,child_name,provider,verified,approved,created_at,last_login')
      .eq('id', userId)
      .single();

    if (!user) return err(res, 'Account not found.', 404);

    const [{ count: activityCount }, { data: recentActivity }, { count: appCount }] = await Promise.all([
      supabase.from('portal_activity_log').select('id', { count: 'exact', head: true }).eq('user_id', userId),
      supabase.from('portal_activity_log').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(8),
      supabase.from('admission_applications').select('id', { count: 'exact', head: true }).eq('email', user.email),
    ]);

    let childInfo = null;
    if (user.child_name) {
      try { childInfo = JSON.parse(user.child_name); } catch { childInfo = { name: user.child_name }; }
    }

    // Log this view
    await supabase.from('portal_activity_log').insert({
      user_id: userId, event: 'dashboard_view', ip_address: getIP(req),
    });

    return ok(res, {
      user, childInfo,
      stats: { activityCount: activityCount || 0, applicationCount: appCount || 0 },
      recentActivity: recentActivity || [],
    });
  }

  // ── LOG ACTIVITY ───────────────────────────────────────────────────────────
  if (action === 'log_activity') {
    const event  = clean(body.event  || 'page_view', 60);
    const detail = clean(body.detail || '', 300);
    await supabase.from('portal_activity_log').insert({
      user_id: userId, event, detail, ip_address: getIP(req),
    });
    return ok(res);
  }

  // ── UPDATE PROFILE ─────────────────────────────────────────────────────────
  if (action === 'update_profile') {
    const updates = {};
    if (body.fname) updates.fname = clean(body.fname, 100);
    if (body.lname) updates.lname = clean(body.lname, 100);
    if (body.phone) updates.phone = clean(body.phone, 30);

    if (body.child_name !== undefined) {
      const childInfo = {
        name:  clean(body.child_name  || '', 150),
        dob:   clean(body.child_dob   || '', 20),
        grade: clean(body.child_grade || '', 80),
        intended_entry_date: clean(body.intended_entry_date || '', 60),
      };
      updates.child_name = childInfo.name ? JSON.stringify(childInfo) : null;
    }

    if (!Object.keys(updates).length) return err(res, 'No changes provided.');

    const { error } = await supabase.from('portal_users').update(updates).eq('id', userId);
    if (error) return err(res, error.message, 500);

    await supabase.from('portal_activity_log').insert({
      user_id: userId, event: 'profile_update', detail: Object.keys(updates).join(', '), ip_address: getIP(req),
    });

    return ok(res, { msg: 'Profile updated successfully.' });
  }

  // ── LIST ACTIVITY (full log) ─────────────────────────────────────────────────
  if (action === 'list_activity') {
    const limit  = Math.min(200, Number(body.limit  || 50));
    const offset = Number(body.offset || 0);

    const { data, error, count } = await supabase
      .from('portal_activity_log')
      .select('*', { count: 'exact' })
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) return err(res, error.message, 500);
    return ok(res, { activity: data || [], total: count || 0 });
  }

  // ── LIST APPLICATIONS (admission applications linked to this email) ─────────
  if (action === 'list_applications') {
    const { data: user } = await supabase.from('portal_users').select('email').eq('id', userId).single();
    if (!user) return err(res, 'Account not found.', 404);

    const { data, error } = await supabase
      .from('admission_applications')
      .select('*')
      .eq('email', user.email)
      .order('created_at', { ascending: false });

    if (error) return err(res, error.message, 500);
    return ok(res, { applications: data || [] });
  }

  return err(res, 'Unknown action.');
}

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
