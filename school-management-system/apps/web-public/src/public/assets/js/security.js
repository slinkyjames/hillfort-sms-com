// ============================================================
// HILLFORT INTERNATIONAL SCHOOL — Security Layer
// security.js  v1.0
// Protections:
//  • Disable right-click context menu
//  • Block Print Screen / Ctrl+P / Ctrl+S / Ctrl+U / F12
//  • Disable text selection on protected content
//  • DevTools size-change detection
//  • Overlay during print attempts
//  • Watermark injection on protected pages
// ============================================================

(function HillfortSecurity() {
    'use strict';

    // ── CONFIG ──────────────────────────────────────────────
    const SITE_NAME   = 'Hillfort International School';
    const TOAST_DELAY = 3500; // ms before toast auto-hides
    // Pages that get FULL protection (no copy, watermark)
    // auth-guard.js adds .hs-protected to <body> once DOM is ready.
    // We defer this check so the class is reliably present.
    function isProtected() {
        return document.body ? document.body.classList.contains('hs-protected') : false;
    }

    // ── TOAST HELPER ────────────────────────────────────────
    let toastEl = null;
    function showSecurityToast(msg) {
        if (!toastEl) {
            toastEl = document.createElement('div');
            toastEl.id = 'hs-sec-toast';
            toastEl.style.cssText = [
                'position:fixed', 'bottom:28px', 'left:50%',
                'transform:translateX(-50%) translateY(80px)',
                'background:rgba(20,20,20,0.95)', 'color:#fff',
                'padding:11px 22px', 'border-radius:10px',
                'font-family:Poppins,sans-serif', 'font-size:0.84rem',
                'font-weight:600', 'z-index:2147483647',
                'display:flex', 'align-items:center', 'gap:10px',
                'box-shadow:0 8px 32px rgba(0,0,0,0.4)',
                'transition:transform 0.3s ease, opacity 0.3s ease',
                'opacity:0', 'pointer-events:none', 'white-space:nowrap',
                'border-left:4px solid #d4a017'
            ].join(';');
            document.body.appendChild(toastEl);
        }
        toastEl.innerHTML = '<i style="color:#d4a017;font-size:1rem" class="fas fa-shield-alt"></i> ' + msg;
        toastEl.style.transform = 'translateX(-50%) translateY(0)';
        toastEl.style.opacity   = '1';
        clearTimeout(toastEl._timer);
        toastEl._timer = setTimeout(function () {
            toastEl.style.transform = 'translateX(-50%) translateY(80px)';
            toastEl.style.opacity   = '0';
        }, TOAST_DELAY);
    }

    // ── RIGHT-CLICK BLOCK ────────────────────────────────────
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showSecurityToast('Right-click is disabled on this site.');
        return false;
    });

    // ── KEYBOARD SHORTCUTS BLOCK ─────────────────────────────
    var BLOCKED_KEYS = {
        F12: true,
        F5:  false, // allow refresh
    };

    document.addEventListener('keydown', function (e) {
        var k  = e.key;
        var kc = e.keyCode || e.which;
        var ctrl  = e.ctrlKey || e.metaKey;
        var shift = e.shiftKey;

        // F12 — DevTools
        if (k === 'F12' || kc === 123) {
            e.preventDefault(); e.stopPropagation();
            showSecurityToast('Developer tools are restricted.');
            return false;
        }

        // PrintScreen (Windows: keyCode 44)
        if (k === 'PrintScreen' || kc === 44) {
            // Can't truly block OS-level, but we blank the page briefly
            // and copy empty clipboard
            e.preventDefault();
            _flashBlock();
            try { navigator.clipboard.writeText('').catch(function(){}); } catch(err){}
            showSecurityToast('Screenshots are not permitted on this page.');
            return false;
        }

        // Ctrl+P — Print
        if (ctrl && (k === 'p' || k === 'P' || kc === 80)) {
            e.preventDefault();
            showSecurityToast('Printing is disabled on this site.');
            return false;
        }

        // Ctrl+S — Save page
        if (ctrl && (k === 's' || k === 'S' || kc === 83)) {
            e.preventDefault();
            showSecurityToast('Saving pages is disabled.');
            return false;
        }

        // Ctrl+U — View source
        if (ctrl && (k === 'u' || k === 'U' || kc === 85)) {
            e.preventDefault();
            showSecurityToast('View source is disabled.');
            return false;
        }

        // Ctrl+Shift+I or Ctrl+Shift+J — DevTools
        if (ctrl && shift && (k === 'I' || k === 'i' || k === 'J' || k === 'j' || kc === 73 || kc === 74)) {
            e.preventDefault();
            showSecurityToast('Developer tools are restricted.');
            return false;
        }

        // Ctrl+Shift+C — Inspect element
        if (ctrl && shift && (k === 'C' || k === 'c' || kc === 67)) {
            e.preventDefault();
            showSecurityToast('Inspect element is restricted.');
            return false;
        }

        // Ctrl+A — Select all (on protected pages only)
        if (isProtected() && ctrl && (k === 'a' || k === 'A' || kc === 65)) {
            e.preventDefault();
            showSecurityToast('Text selection is restricted on this page.');
            return false;
        }

        // Ctrl+C — Copy (on protected pages only)
        if (isProtected() && ctrl && (k === 'c' || k === 'C' || kc === 67)) {
            var sel = window.getSelection ? window.getSelection().toString() : '';
            if (sel && sel.length > 0) {
                e.preventDefault();
                showSecurityToast('Copying content is restricted on this page.');
                return false;
            }
        }
    });

    // ── PRINT BLANK OVERLAY ──────────────────────────────────
    // CSS @media print — inject only if popup-security.js hasn't already done it
    if (!document.getElementById('hs-print-block')) {
        var printStyle = document.createElement('style');
        printStyle.id  = 'hs-print-block';
        printStyle.textContent = [
            '@media print {',
            '  body * { visibility: hidden !important; }',
            '  body::after {',
            '    content: "Printing is not permitted. © ' + SITE_NAME + '";',
            '    visibility: visible !important;',
            '    position: fixed; inset: 0;',
            '    display: flex; align-items: center; justify-content: center;',
            '    font-size: 1.5rem; font-family: serif;',
            '    color: #800000; font-weight: bold;',
            '  }',
            '}'
        ].join('\n');
        document.head.appendChild(printStyle);
    }

    window.addEventListener('beforeprint', function () {
        showSecurityToast('Printing is not permitted on this site.');
    });

    // ── PRINT SCREEN FLASH BLOCK ─────────────────────────────
    function _flashBlock() {
        var overlay = document.createElement('div');
        overlay.style.cssText = [
            'position:fixed', 'inset:0',
            'background:#ffffff', 'z-index:2147483646',
            'display:flex', 'align-items:center', 'justify-content:center',
            'flex-direction:column', 'gap:12px'
        ].join(';');
        overlay.innerHTML = '<div style="font-size:3rem">🔒</div>' +
            '<div style="font-family:serif;font-size:1.1rem;color:#800000;font-weight:700">' +
            'Screenshots are not permitted — ' + SITE_NAME + '</div>';
        document.body.appendChild(overlay);
        setTimeout(function () {
            document.body.removeChild(overlay);
        }, 700);
    }

    // ── DEVTOOLS SIZE-CHANGE DETECTION ───────────────────────
    // When DevTools opens, the inner window shrinks.
    var _devThreshold = 160;
    var _devWarned    = false;
    function _checkDevTools() {
        var widthDiff  = window.outerWidth  - window.innerWidth;
        var heightDiff = window.outerHeight - window.innerHeight;
        if ((widthDiff > _devThreshold || heightDiff > _devThreshold) && !_devWarned) {
            _devWarned = true;
            showSecurityToast('Developer tools detected. This activity is logged.');
        } else if (widthDiff <= _devThreshold && heightDiff <= _devThreshold) {
            _devWarned = false;
        }
    }
    setInterval(_checkDevTools, 1500);

    // ── DRAG PROTECTION ─────────────────────────────────────
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // ── PROTECTED PAGE EXTRAS ────────────────────────────────
    // Run after DOM ready so auth-guard.js has had time to add .hs-protected
    function applyProtectedExtras() {
        if (!isProtected()) return;

        // Disable text selection
        document.body.classList.add('hs-no-select');

        if (!document.getElementById('hs-no-select-style')) {
            var noSelectStyle = document.createElement('style');
            noSelectStyle.id = 'hs-no-select-style';
            noSelectStyle.textContent = [
                '.hs-no-select, .hs-no-select * {',
                '  -webkit-user-select: none !important;',
                '  -moz-user-select: none !important;',
                '  -ms-user-select: none !important;',
                '  user-select: none !important;',
                '}'
            ].join('\n');
            document.head.appendChild(noSelectStyle);
        }

        // Watermark overlay (inject only once)
        if (!document.getElementById('hs-watermark')) {
            var watermark = document.createElement('div');
            watermark.id  = 'hs-watermark';
            watermark.style.cssText = [
                'position:fixed', 'inset:0',
                'pointer-events:none',
                'z-index:99998',
                'overflow:hidden'
            ].join(';');

            var wmText = SITE_NAME + ' • Confidential • ';
            var wmHtml = '';
            for (var i = 0; i < 12; i++) {
                wmHtml += '<div style="' + [
                    'position:absolute',
                    'white-space:nowrap',
                    'font-family:serif',
                    'font-size:1rem',
                    'font-weight:700',
                    'color:rgba(128,0,0,0.055)',
                    'transform:rotate(-30deg)',
                    'transform-origin:center',
                    'top:' + (i * 12) + '%',
                    'left:-10%',
                    'width:120%',
                    'letter-spacing:4px'
                ].join(';') + '">' + wmText.repeat(6) + '</div>';
            }
            watermark.innerHTML = wmHtml;
            document.body.appendChild(watermark);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyProtectedExtras);
    } else {
        applyProtectedExtras();
    }

    // ── CONSOLE WARNING ──────────────────────────────────────
    var _warn = [
        '%c⚠ STOP! %c',
        'color:#d4a017;font-size:2rem;font-weight:900',
        'color:#333;font-size:0.9rem;font-weight:normal'
    ];
    try {
        console.log.apply(console, [
            _warn[0] + 'This browser console is for authorized developers only.\n' +
            'Attempting to misuse this site is a violation of our Terms of Service.\n' +
            '© ' + new Date().getFullYear() + ' ' + SITE_NAME,
            _warn[1], _warn[2]
        ]);
    } catch(e) {}

})();
