/**
 * Hillfort — page-block renderer for the Directus `pages` collection.
 *
 * A `pages` row has a `blocks` JSON array. Each block is
 * `{ type: '...', ...content }`. This file turns that array into the
 * same HTML/CSS structure the static pages already use, so migrated
 * pages keep their current look.
 *
 * Usage (see our-story.html for the full worked example):
 *
 *   <div id="pageContent"><!-- existing static sections as fallback --></div>
 *   <script>
 *     mountPageFromDirectus('#pageContent', 'our-story');
 *   </script>
 *
 * If Directus has no `pages` row for that slug yet (or is
 * unreachable), whatever static HTML is already inside the container
 * is left untouched — nothing breaks before you've authored the page
 * in Directus Studio.
 *
 * Supported block types — add more by adding a case to renderBlock():
 *   intro_stats   — two-column intro with a stat row + image (our-story hero)
 *   timeline      — year-by-year milestones list
 *   value_cards   — icon grid (values, features, benefits, etc)
 *   rich_text     — a simple heading + freeform HTML section
 *   image_gallery — a simple responsive image grid
 *   youtube_embed — a single embedded video/audio (see youtube-embed.js)
 *   cta           — the closing call-to-action band
 */
(function () {
  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function sectionHeader(label, title) {
    if (!label && !title) return '';
    return '<div class="section-header text-center">'
      + (label ? '<span class="section-label">' + esc(label) + '</span>' : '')
      + (title ? '<h2 class="section-title">' + esc(title) + '</h2>' : '')
      + '</div>';
  }

  var RENDERERS = {
    intro_stats: function (b) {
      var paras = (b.paragraphs || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
      var stats = (b.stats || []).map(function (s) {
        return '<div class="stat-box"><h3>' + esc(s.value) + '</h3><p>' + esc(s.label) + '</p></div>';
      }).join('');
      var imgUrl = b.image && window.directusFileUrl ? window.directusFileUrl(b.image, { width: 900 }) : (b.image || '');
      var badge = b.image_badge_text
        ? '<div class="image-overlay-badge">' + (b.image_badge_icon ? '<i class="fas ' + esc(b.image_badge_icon) + '"></i>' : '') + '<span>' + esc(b.image_badge_text) + '</span></div>'
        : '';
      return '<section class="content-section"><div class="container"><div class="two-column-layout">'
        + '<div class="column-text">'
        + (b.label ? '<span class="section-label">' + esc(b.label) + '</span>' : '')
        + (b.title ? '<h2 class="section-title">' + esc(b.title) + '</h2>' : '')
        + paras
        + (stats ? '<div class="stats-row">' + stats + '</div>' : '')
        + '</div>'
        + (imgUrl ? '<div class="column-image"><img src="' + imgUrl + '" alt="' + esc(b.title || '') + '" style="border-radius:16px;width:100%">' + badge + '</div>' : '')
        + '</div></div></section>';
    },

    timeline: function (b) {
      var items = (b.items || []).map(function (i) {
        return '<div class="timeline-item"><div class="timeline-year">' + esc(i.year) + '</div>'
          + '<div class="timeline-content"><h3>' + esc(i.title) + '</h3><p>' + esc(i.body) + '</p></div></div>';
      }).join('');
      return '<section class="content-section' + (b.shaded ? ' bg-light' : '') + '"><div class="container">'
        + sectionHeader(b.label, b.title)
        + '<div class="timeline">' + items + '</div>'
        + '</div></section>';
    },

    value_cards: function (b) {
      var cards = (b.items || []).map(function (i) {
        return '<div class="value-card"><div class="value-icon"><i class="fas ' + esc(i.icon || 'fa-star') + '"></i></div>'
          + '<h3>' + esc(i.title) + '</h3><p>' + esc(i.body) + '</p></div>';
      }).join('');
      return '<section class="content-section' + (b.shaded ? ' bg-light' : '') + '"><div class="container">'
        + sectionHeader(b.label, b.title)
        + '<div class="values-grid">' + cards + '</div>'
        + '</div></section>';
    },

    rich_text: function (b) {
      return '<section class="content-section' + (b.shaded ? ' bg-light' : '') + '"><div class="container">'
        + sectionHeader(b.label, b.title)
        + '<div class="rich-text-body">' + (b.html || '') + '</div>'
        + '</div></section>';
    },

    image_gallery: function (b) {
      var imgs = (b.images || []).map(function (img) {
        var url = img.id && window.directusFileUrl ? window.directusFileUrl(img.id, { width: 600 }) : (img.url || '');
        return '<div class="gallery-item"><img src="' + url + '" alt="' + esc(img.caption || '') + '" loading="lazy">'
          + (img.caption ? '<div class="gallery-overlay"><span>' + esc(img.caption) + '</span></div>' : '') + '</div>';
      }).join('');
      return '<section class="content-section' + (b.shaded ? ' bg-light' : '') + '"><div class="container">'
        + sectionHeader(b.label, b.title)
        + '<div class="photo-gallery-grid">' + imgs + '</div>'
        + '</div></section>';
    },

    youtube_embed: function (b) {
      if (!window.renderYouTubeEmbed) return '';
      var embed = window.renderYouTubeEmbed(b.video_url, { title: b.title, caption: b.caption, audioOnly: !!b.audio_only });
      return '<section class="content-section' + (b.shaded ? ' bg-light' : '') + '"><div class="container" style="max-width:800px">'
        + sectionHeader(b.label, b.title)
        + embed
        + '</div></section>';
    },

    cta: function (b) {
      var buttons = (b.buttons || []).map(function (btn) {
        var cls = btn.style === 'outline' ? 'btn btn-outline-white btn-lg' : 'btn btn-white btn-lg';
        return '<a href="' + esc(btn.href || '#') + '" class="' + cls + '">' + esc(btn.text) + '</a>';
      }).join('');
      return '<section class="cta-section"><div class="container"><div class="cta-content">'
        + '<div class="cta-text"><h2>' + esc(b.title) + '</h2>' + (b.body ? '<p>' + esc(b.body) + '</p>' : '') + '</div>'
        + (buttons ? '<div class="cta-buttons">' + buttons + '</div>' : '')
        + '</div></div></section>';
    },
  };

  function renderBlock(block) {
    var fn = RENDERERS[block.type];
    if (!fn) { console.warn('Unknown page block type: ' + block.type); return ''; }
    try { return fn(block); } catch (e) { console.error('Error rendering block ' + block.type, e); return ''; }
  }

  window.renderPageBlocks = function (blocks) {
    return (blocks || []).map(renderBlock).join('');
  };

  /**
   * Fetches the `pages` row for `slug` and, if found, replaces the
   * contents of `containerSelector` with its rendered blocks. Leaves
   * the container's existing (static) content untouched if Directus
   * has nothing for that slug yet, or is unreachable.
   */
  window.mountPageFromDirectus = async function (containerSelector, slug) {
    var container = document.querySelector(containerSelector);
    if (!container || typeof directusList !== 'function') return;

    var pages;
    try {
      pages = await directusList('pages', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        limit: 1,
      });
    } catch (e) {
      console.error('Directus pages fetch failed for slug "' + slug + '", keeping static content', e);
      return;
    }

    var page = pages && pages[0];
    if (!page || !page.blocks || !page.blocks.length) return; // keep static content

    container.innerHTML = window.renderPageBlocks(page.blocks);
  };
})();
