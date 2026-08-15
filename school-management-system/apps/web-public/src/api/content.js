/**
 * Hillfort — /api/content
 * Public, read-only content endpoint. Replaces Directus's public
 * REST API for every collection Directus used to serve:
 *   site_settings, term_dates, calendar_events, gallery_categories,
 *   media_gallery_items, download_categories, downloads,
 *   staff_members, pages, posts (news/events only, published only)
 *
 * GET /api/content?type=<name>[&slug=...]
 *
 * No auth — only ever returns status='published' rows (except
 * site_settings, which has no status column). Field names are
 * shaped to match what the frontend already expects from the
 * Directus days (see public/assets/js/directus-client.js), so pages
 * built during the Directus rollout keep working unchanged.
 */

import { setCorsHeaders, ok, err, supabase } from '../lib/supabase.js';

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return err(res, 'Method not allowed.', 405);

  const type = req.query.type;
  if (!type) return err(res, 'Missing ?type=');

  try {
    switch (type) {
      case 'site_settings': {
        const { data, error } = await supabase.from('site_settings').select('*').eq('id', 1).single();
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'term_dates': {
        const { data, error } = await supabase
          .from('term_dates').select('*')
          .eq('status', 'published').order('sort', { ascending: true });
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'calendar_events': {
        const { data, error } = await supabase
          .from('calendar_events').select('*')
          .eq('status', 'published').order('event_date', { ascending: true });
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'gallery_categories': {
        const { data, error } = await supabase.from('gallery_categories').select('*').order('name');
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'media_gallery_items': {
        const { data, error } = await supabase
          .from('media_gallery_items')
          .select('*, category:gallery_categories(name,slug)')
          .eq('status', 'published').order('sort', { ascending: true });
        if (error) return err(res, error.message, 500);
        // `image` (not `image_url`) — matches what media-gallery.html already reads.
        const shaped = (data || []).map(row => ({ ...row, image: row.image_url || null }));
        return ok(res, { data: shaped });
      }

      case 'download_categories': {
        const { data, error } = await supabase.from('download_categories').select('*').order('name');
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'downloads': {
        const { data, error } = await supabase
          .from('downloads')
          .select('*, category:download_categories(name)')
          .eq('status', 'published').order('sort', { ascending: true });
        if (error) return err(res, error.message, 500);
        // `file` shaped like a Directus file relation ({id, filename_download})
        // — matches what downloads.html already reads.
        const shaped = (data || []).map(row => ({
          ...row,
          file: row.file_url ? { id: row.file_url, filename_download: row.file_name || '' } : null,
        }));
        return ok(res, { data: shaped });
      }

      case 'staff_members': {
        const { data, error } = await supabase
          .from('staff_members').select('*')
          .eq('status', 'published').order('sort', { ascending: true });
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'pages': {
        let q = supabase.from('pages').select('*').eq('status', 'published');
        if (req.query.slug) q = q.eq('slug', req.query.slug);
        const { data, error } = await q;
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      case 'posts': {
        const { data, error } = await supabase
          .from('posts').select('*')
          .eq('status', 'published')
          .in('type', ['news', 'event'])
          .order('publish_date', { ascending: false })
          .limit(50);
        if (error) return err(res, error.message, 500);
        return ok(res, { data });
      }

      default:
        return err(res, `Unknown content type "${type}".`, 400);
    }
  } catch (e) {
    console.error('[content]', e);
    return err(res, 'Server error.', 500);
  }
}
