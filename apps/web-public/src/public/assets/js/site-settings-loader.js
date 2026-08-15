/**
 * Hillfort — site-wide settings loader.
 *
 * Fetches the `site_settings` singleton from Directus once per page
 * load and updates the phone/email/social links and footer
 * description that are currently duplicated across every HTML file.
 * No markup changes needed on any page — it matches the existing,
 * already-consistent selectors (a[href^="tel:"], a[href*="facebook.com"],
 * .footer-description, etc).
 *
 * Include this AFTER directus-client.js:
 *   <script src="../assets/js/directus-client.js"></script>
 *   <script src="../assets/js/site-settings-loader.js"></script>
 *
 * If Directus is unreachable or a field is empty, the existing
 * hardcoded HTML value is left as-is — this only overwrites what it
 * successfully fetches.
 */
(function () {
  function setLinkText(anchor, text) {
    var node = null;
    for (var i = anchor.childNodes.length - 1; i >= 0; i--) {
      if (anchor.childNodes[i].nodeType === 3) { node = anchor.childNodes[i]; break; }
    }
    if (node) node.textContent = ' ' + text;
    else anchor.appendChild(document.createTextNode(' ' + text));
  }

  function applyPhone(s) {
    if (!s.phone_href) return;
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.setAttribute('href', 'tel:' + s.phone_href);
      if (s.phone_display) setLinkText(a, s.phone_display);
    });
  }

  function applyEmail(s) {
    if (!s.email) return;
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
      a.setAttribute('href', 'mailto:' + s.email);
      setLinkText(a, s.email);
    });
  }

  function applySocial(s) {
    if (s.facebook_url) {
      document.querySelectorAll('a[href*="facebook.com"]').forEach(function (a) { a.setAttribute('href', s.facebook_url); });
    }
    if (s.instagram_url) {
      document.querySelectorAll('a[href*="instagram.com"]').forEach(function (a) { a.setAttribute('href', s.instagram_url); });
    }
    if (s.whatsapp_url) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) { a.setAttribute('href', s.whatsapp_url); });
    }
  }

  function applyFooterDescription(s) {
    if (!s.footer_description) return;
    document.querySelectorAll('.footer-description').forEach(function (p) { p.textContent = s.footer_description; });
  }

  document.addEventListener('DOMContentLoaded', async function () {
    if (typeof directusSingleton !== 'function') return; // directus-client.js not loaded
    try {
      var settings = await directusSingleton('site_settings');
      if (!settings) return;
      applyPhone(settings);
      applyEmail(settings);
      applySocial(settings);
      applyFooterDescription(settings);
    } catch (e) {
      console.error('site_settings load failed, keeping existing hardcoded values', e);
    }
  });
})();
