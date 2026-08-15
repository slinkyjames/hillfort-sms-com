/**
 * Hillfort — content client (vanilla JS, no build step required).
 *
 * Historically this called an external Directus instance's public
 * REST API. Directus has been retired — everything now lives in our
 * own Supabase database, served by /api/content (public reads) and
 * managed by staff via secure-admin-2026 → Content Admin
 * (/api/admin?action=content, JWT-protected).
 *
 * The function names and signatures below (directusList,
 * directusSingleton, directusItem, directusFileUrl) are kept
 * IDENTICAL on purpose — every page built during the Directus
 * rollout (term-calendar.js, home-calendar.js, page-blocks-renderer.js,
 * site-settings-loader.js, media-gallery.html, downloads.html,
 * news-events.html) calls these exact functions and needs zero
 * changes now that they're backed by our own API instead.
 */
(function () {
  async function contentRequest(type, extraParams) {
    var url = '/api/content?type=' + encodeURIComponent(type);
    if (extraParams) {
      for (var key in extraParams) {
        if (extraParams[key] !== undefined && extraParams[key] !== null) {
          url += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(extraParams[key]);
        }
      }
    }
    var res = await fetch(url);
    if (!res.ok) throw new Error('Content request failed: ' + res.status + ' ' + url);
    var json = await res.json();
    return json.data;
  }

  // Directus-style query objects are still passed in by existing
  // callers (e.g. { filter: { slug: { _eq: 'our-story' } } }) — the
  // only piece any caller actually relies on is a slug filter on
  // `pages`, so that's the one thing we translate. Everything else
  // (status/type filters, sort, limit) is already applied server-side
  // by /api/content for each collection.
  function extractSlugFilter(query) {
    var slug = query && query.filter && query.filter.slug && query.filter.slug._eq;
    return slug ? { slug: slug } : null;
  }

  /**
   * List items from a collection, e.g.
   * directusList('calendar_events', { filter: { status: { _eq: 'published' } } })
   * Always returns an array.
   */
  window.directusList = function (collection, query) {
    var extra = extractSlugFilter(query);
    return contentRequest(collection, extra).then(function (data) { return data || []; });
  };

  /** Fetch a singleton collection (site_settings). Returns a plain object. */
  window.directusSingleton = function (collection) {
    return contentRequest(collection);
  };

  /** Fetch one item — not used anywhere currently, kept for completeness. */
  window.directusItem = function (collection, id) {
    return contentRequest(collection).then(function (list) {
      return (list || []).find(function (item) { return String(item.id) === String(id); }) || null;
    });
  };

  /**
   * Resolve a file reference to a public URL. Under Directus this
   * built a URL from a file UUID; our own content already stores the
   * full public Supabase Storage URL directly, so this just returns
   * it unchanged (transform params like width/height are ignored —
   * no image-resizing service sits in front of Storage).
   */
  window.directusFileUrl = function (fileIdOrUrl) {
    return fileIdOrUrl || '';
  };
})();
