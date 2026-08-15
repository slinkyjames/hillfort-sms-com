/* ============================================================
   HILLFORT INTERNATIONAL SCHOOL — Auth Guard
   auth-guard.js  v2.1

   ⚠  IMPORTANT — SECURITY NOTICE:
   This guard is a CLIENT-SIDE UX layer only.
   localStorage can be manipulated by anyone in the browser.
   DO NOT rely solely on this script to protect sensitive data.

   For truly protected content (grades, financial records, etc.):
   → Serve that content from PHP pages that verify a real
     server-side session ($_SESSION) before rendering.
   → Use this script only as a redirect helper / UI convenience.

   Include in <head> of every PROTECTED page.
   Checks for valid parent/user session in localStorage.
   If no valid session → shows login wall → redirects.

   Usage:
     <script src="assets/js/auth-guard.js"></script>
   Also add class to <body>:
     <body class="hs-protected">
   so watermark + no-select are applied by security.js.
   ============================================================ */

(function HillfortAuthGuard() {
    'use strict';

    var SESSION_KEY  = 'hillfort_parent_session';
    var PORTAL_PAGE  = 'parent-portal.html';
    var SESSION_TTL  = 8 * 60 * 60 * 1000; // 8 hours

    /* ── SESSION ──────────────────────────────────────────── */
    function getSession() {
        try {
            var s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
            if (!s || !s.expiresAt || Date.now() > s.expiresAt) {
                localStorage.removeItem(SESSION_KEY);
                return null;
            }
            return s;
        } catch(e) { return null; }
    }

    /* ── REDIRECT ─────────────────────────────────────────── */
    function redirectToPortal() {
        try {
            localStorage.setItem(
                'hillfort_auth_redirect',
                window.location.pathname + window.location.search
            );
        } catch(e) {}
        window.location.replace(PORTAL_PAGE);
    }

    /* ── LOGIN WALL ───────────────────────────────────────── */
    function buildLoginWall() {
        var wall = document.createElement('div');
        wall.id = 'hs-login-wall';
        wall.style.cssText = [
            'position:fixed','inset:0',
            'background:#fdf6ef',
            'z-index:2147483645',
            'display:flex',
            'align-items:center',
            'justify-content:center',
            'font-family:Poppins,Nunito,sans-serif'
        ].join(';');

        wall.innerHTML = [
            '<div style="text-align:center;max-width:400px;padding:32px 24px">',
              '<div style="width:80px;height:80px;background:#800000;border-radius:50%;',
                'display:flex;align-items:center;justify-content:center;',
                'margin:0 auto 20px;box-shadow:0 8px 24px rgba(128,0,0,0.3)">',
                '<i class="fas fa-lock" style="color:#d4a017;font-size:2rem"></i>',
              '</div>',
              '<h2 style="font-family:Cinzel,serif;color:#800000;font-size:1.5rem;margin-bottom:10px">',
                'Login Required',
              '</h2>',
              '<p style="color:#5a6070;font-size:0.9rem;line-height:1.7;margin-bottom:24px">',
                'This page is for registered parents and approved users only.<br>',
                'Please sign in to continue.',
              '</p>',
              '<a href="' + PORTAL_PAGE + '" ',
                'style="display:inline-flex;align-items:center;gap:8px;',
                'background:#800000;color:#fff;padding:13px 32px;',
                'border-radius:10px;font-weight:700;font-size:0.92rem;',
                'text-decoration:none;box-shadow:0 4px 16px rgba(128,0,0,0.35);',
                'font-family:Poppins,sans-serif">',
                '<i class="fas fa-sign-in-alt"></i> Sign In to Parent Portal',
              '</a>',
              '<br><br>',
              '<a href="index.html" ',
                'style="font-size:0.8rem;color:#5a6070;text-decoration:none">',
                '← Back to main website',
              '</a>',
            '</div>'
        ].join('');

        return wall;
    }

    /* ── LOGGED-IN USER BANNER ────────────────────────────── */
    function injectUserBanner(session) {
        function doInject() {
            var roleIcons = { parent:'👨‍👩‍👧', guest:'👤', staff:'🏫', admin:'🛡' };
            var roleIcon  = roleIcons[session.role] || '👤';
            var roleLabel = session.role
                ? (session.role.charAt(0).toUpperCase() + session.role.slice(1))
                : 'User';

            var banner = document.createElement('div');
            banner.id  = 'hs-user-banner';
            banner.style.cssText = [
                'position:fixed','top:0','left:0','right:0',
                'background:linear-gradient(90deg,#800000,#580000)',
                'color:#fff','padding:6px 20px',
                'display:flex','align-items:center','justify-content:space-between',
                'z-index:999990',
                'font-family:Poppins,sans-serif',
                'font-size:0.78rem','font-weight:600',
                'box-shadow:0 2px 12px rgba(0,0,0,0.3)'
            ].join(';');

            banner.innerHTML = [
                '<span style="display:flex;align-items:center;gap:10px">',
                  '<i class="fas fa-shield-alt" style="color:#d4a017"></i>',
                  '<strong>Hillfort Portal</strong>',
                  '<span style="opacity:0.5">|</span>',
                  '<span>' + roleIcon + ' ' + roleLabel + '</span>',
                  '<span style="opacity:0.5">|</span>',
                  '<span style="font-weight:400;opacity:0.9">' + escHtml(session.name || session.email) + '</span>',
                '</span>',
                '<span style="display:flex;align-items:center;gap:14px">',
                  '<a href="parent-portal.html" style="color:#d4a017;text-decoration:none;font-size:0.74rem">',
                    '<i class="fas fa-home"></i> My Portal',
                  '</a>',
                  '<button onclick="HillfortGuard.logout()" ',
                    'style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);',
                    'color:#fff;padding:3px 12px;border-radius:6px;cursor:pointer;',
                    'font-size:0.72rem;font-weight:700;font-family:Poppins,sans-serif">',
                    'Sign Out',
                  '</button>',
                '</span>'
            ].join('');

            document.body.insertBefore(banner, document.body.firstChild);
            document.body.style.paddingTop = '36px';
        }

        if (document.body) {
            doInject();
        } else {
            document.addEventListener('DOMContentLoaded', doInject);
        }
    }

    function escHtml(str) {
        return String(str)
            .replace(/&/g,'&amp;').replace(/</g,'&lt;')
            .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    /* ── GLOBAL API ───────────────────────────────────────── */
    window.HillfortGuard = {
        logout: function() {
            localStorage.removeItem(SESSION_KEY);
            window.location.href = PORTAL_PAGE;
        },
        getSession: getSession
    };

    /* ── MAIN ─────────────────────────────────────────────── */
    var session = getSession();

    if (!session) {
        /* Block page immediately — hide body until DOM ready */
        var style = document.createElement('style');
        style.textContent = 'body { visibility: hidden !important; }';
        document.head.appendChild(style);

        document.addEventListener('DOMContentLoaded', function() {
            /* Remove the visibility block */
            style.remove();

            /* Hide all existing body children */
            Array.from(document.body.children).forEach(function(el) {
                if (el.id !== 'hs-login-wall') el.style.display = 'none';
            });

            /* Show login wall */
            document.body.appendChild(buildLoginWall());

            /* Redirect after short delay */
            setTimeout(redirectToPortal, 2500);
        });

    } else {
        /* Logged in — mark body and inject banner */
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('hs-protected');
        });
        injectUserBanner(session);
    }

})();
