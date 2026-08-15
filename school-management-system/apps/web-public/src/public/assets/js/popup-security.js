/* ============================================================
   HILLFORT INTERNATIONAL SCHOOL
   popup-security.js  v5
   1. Current Event Pop-up
   2. Right-click / Copy / Save-As Protection
   3. Print Screen block + @media print override
   4. F12 / DevTools detection
   5. Screenshot flash-blank
   ============================================================ */

(function () {
    'use strict';

    /* ----------------------------------------------------------
       1. CURRENT EVENT POPUP
       ---------------------------------------------------------- */
    const CURRENT_EVENT = {
        badge:         'Current Event',
        title:         'Annual Sports Day 2026',
        subtitle:      'Cheer on your house — a day of athletic excellence!',
        date:          'Saturday, 15 March 2026',
        time:          '8:00 AM – 3:00 PM',
        venue:         'Hillfort Sports Field, Galadimawa',
        description:   'Join us for our biggest sporting event of the year! Students from all year groups compete in track & field, team sports and fun relays representing their school houses. Parents and family members are warmly invited to come and support. Refreshments will be on sale throughout the day.',
        image:         'assets/images/sports-day.jpg',
        link:          'news-events.html',
        linkText:      'View All Events',
        disabled:      false,
        suppressHours: 24,
    };

    const POPUP_KEY = 'hillfort_popup_suppressed';

    function isSuppressed() {
        try {
            const d = JSON.parse(localStorage.getItem(POPUP_KEY) || 'null');
            return d && Date.now() < d.until;
        } catch(e) { return false; }
    }

    function suppressPopup(hours) {
        try { localStorage.setItem(POPUP_KEY, JSON.stringify({ until: Date.now() + hours * 3600000 })); }
        catch(e) {}
    }

    function buildPopup() {
        const ev = CURRENT_EVENT;
        const overlay = document.createElement('div');
        overlay.className = 'event-popup-overlay';
        overlay.id = 'eventPopupOverlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', ev.title);
        overlay.innerHTML = `
            <div class="event-popup" id="eventPopup">
                <div class="event-popup-banner">
                    <img src="${ev.image}" alt="${ev.title}" onerror="this.style.display='none'">
                    <div class="event-popup-banner-overlay">
                        <span class="event-popup-badge"><i class="fas fa-star"></i> &nbsp;${ev.badge}</span>
                        <h2>${ev.title}</h2>
                        <p>${ev.subtitle}</p>
                    </div>
                    <button class="event-popup-close-btn" id="popupCloseTop" aria-label="Close popup">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="event-popup-body">
                    <div class="event-popup-meta">
                        <div class="event-popup-meta-item"><i class="fas fa-calendar-alt"></i><span>${ev.date}</span></div>
                        <div class="event-popup-meta-item"><i class="fas fa-clock"></i><span>${ev.time}</span></div>
                        <div class="event-popup-meta-item"><i class="fas fa-map-marker-alt"></i><span>${ev.venue}</span></div>
                    </div>
                    <p>${ev.description}</p>
                    <div class="event-popup-actions">
                        <a href="${ev.link}" class="btn btn-primary btn-lg">
                            <i class="fas fa-calendar-check"></i> ${ev.linkText}
                        </a>
                        <button id="popupCloseDismiss" class="btn btn-outline btn-lg"
                            style="cursor:pointer;border:2px solid var(--primary-color);border-radius:10px;
                                   color:var(--primary-color);padding:14px 24px;font-weight:600;font-size:1rem;
                                   background:transparent;">
                            Close
                        </button>
                    </div>
                </div>
                <div class="event-popup-footer">
                    <label>
                        <input type="checkbox" id="popupDontShow">
                        Don't show again today
                    </label>
                    <span><i class="fas fa-school"></i> Hillfort International School</span>
                </div>
            </div>`;
        return overlay;
    }

    function closePopup() {
        const overlay = document.getElementById('eventPopupOverlay');
        if (!overlay) return;
        const cb = document.getElementById('popupDontShow');
        if (cb && cb.checked) suppressPopup(CURRENT_EVENT.suppressHours);
        overlay.style.animation = 'fadeInOverlay 0.3s ease reverse forwards';
        setTimeout(() => overlay.remove(), 300);
    }

    function initPopup() {
        if (CURRENT_EVENT.disabled || isSuppressed()) return;
        setTimeout(function () {
            const overlay = buildPopup();
            document.body.appendChild(overlay);
            document.getElementById('popupCloseTop').addEventListener('click', closePopup);
            document.getElementById('popupCloseDismiss').addEventListener('click', closePopup);
            overlay.addEventListener('click', function(e) { if (e.target === overlay) closePopup(); });
            document.addEventListener('keydown', function handler(e) {
                if (e.key === 'Escape') { closePopup(); document.removeEventListener('keydown', handler); }
            });
        }, 1800);
    }


    /* ----------------------------------------------------------
       2. SECURITY TOAST
       ---------------------------------------------------------- */
    let _toastTimer = null;

    function showSecurityToast(message) {
        let toast = document.getElementById('securityToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'security-toast';
            toast.id = 'securityToast';
            toast.innerHTML = `<i class="fas fa-shield-alt"></i> <span id="securityToastMsg"></span>`;
            document.body.appendChild(toast);
        }
        document.getElementById('securityToastMsg').textContent = message;
        clearTimeout(_toastTimer);
        toast.classList.remove('show');
        void toast.offsetWidth; // force reflow
        toast.classList.add('show');
        _toastTimer = setTimeout(function() { toast.classList.remove('show'); }, 3000);
    }


    /* ----------------------------------------------------------
       3. PRINT BLOCK  — CSS @media print overrides
       ---------------------------------------------------------- */
    function injectPrintBlock() {
        const style = document.createElement('style');
        style.id = 'hs-print-block';
        style.textContent = `
@media print {
    body > *:not(#hs-print-msg) { display: none !important; visibility: hidden !important; }
    #hs-print-msg {
        display: flex !important; visibility: visible !important;
        position: fixed; inset: 0;
        align-items: center; justify-content: center; flex-direction: column;
        font-family: Georgia, serif; color: #800000; background: #fff;
        gap: 12px;
    }
    #hs-print-msg h1 { font-size: 2rem; }
    #hs-print-msg p  { font-size: 1rem; color: #555; }
}`;
        document.head.appendChild(style);

        /* hidden print-blocked message shown only in print mode */
        const msg = document.createElement('div');
        msg.id = 'hs-print-msg';
        msg.style.display = 'none'; // hidden normally
        msg.innerHTML = `
            <h1>🔒 Printing Not Permitted</h1>
            <p>Printing is disabled on the Hillfort International School website.</p>
            <p style="font-size:0.85rem;color:#999">© ${new Date().getFullYear()} Hillfort International School. All rights reserved.</p>`;
        document.body.appendChild(msg);
    }

    /* beforeprint event (Chrome/Firefox/Safari) */
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault && e.preventDefault();
        showSecurityToast('Printing is not permitted on this website.');
    });


    /* ----------------------------------------------------------
       4. PRINT SCREEN — flash blank overlay
       ---------------------------------------------------------- */
    function flashBlank() {
        const div = document.createElement('div');
        div.style.cssText = [
            'position:fixed','inset:0','background:#ffffff',
            'z-index:2147483646','display:flex',
            'align-items:center','justify-content:center',
            'flex-direction:column','gap:10px',
            'font-family:serif'
        ].join(';');
        div.innerHTML = `
            <div style="font-size:3.5rem">🔒</div>
            <div style="font-size:1.1rem;color:#800000;font-weight:700">
                Screenshots are not permitted — Hillfort International School
            </div>`;
        document.body.appendChild(div);
        /* Clear clipboard so pasted screenshot is blank */
        try { navigator.clipboard.writeText('').catch(()=>{}); } catch(err) {}
        setTimeout(function() { div.remove(); }, 650);
    }


    /* ----------------------------------------------------------
       5. FULL SECURITY INIT
       ---------------------------------------------------------- */
    function initSecurity() {
        document.body.classList.add('secured');

        /* — Right-click — */
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showSecurityToast('Right-click is disabled on this website.');
        });

        /* — Keyboard shortcuts — */
        document.addEventListener('keydown', function(e) {
            const key   = (e.key || '').toLowerCase();
            const ctrl  = e.ctrlKey || e.metaKey;
            const shift = e.shiftKey;

            /* PrintScreen (keyCode 44) */
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                e.preventDefault();
                flashBlank();
                showSecurityToast('Screenshots are not permitted on this website.');
                return false;
            }

            /* F12 */
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
                showSecurityToast('Developer tools are restricted.');
                return false;
            }

            /* Ctrl/Cmd combos */
            if (ctrl) {
                /* Ctrl+P — Print */
                if (key === 'p') {
                    e.preventDefault();
                    showSecurityToast('Printing is not permitted on this website.');
                    return false;
                }
                /* Ctrl+S — Save */
                if (key === 's') {
                    e.preventDefault();
                    showSecurityToast('Saving pages is not permitted.');
                    return false;
                }
                /* Ctrl+U — View source */
                if (key === 'u') {
                    e.preventDefault();
                    showSecurityToast('Viewing page source is not permitted.');
                    return false;
                }
                /* Ctrl+C — Copy */
                if (key === 'c') {
                    e.preventDefault();
                    showSecurityToast('Copying content is not permitted.');
                    return false;
                }
                /* Ctrl+X — Cut */
                if (key === 'x') {
                    e.preventDefault();
                    showSecurityToast('Cutting content is not permitted.');
                    return false;
                }
                /* Ctrl+A — Select All */
                if (key === 'a') {
                    e.preventDefault();
                    showSecurityToast('Selecting all content is not permitted.');
                    return false;
                }
                /* Ctrl+Shift+I / J / C / K — DevTools */
                if (shift && ['i','j','c','k'].includes(key)) {
                    e.preventDefault();
                    showSecurityToast('Developer tools are restricted.');
                    return false;
                }
            }
        });

        /* — Drag images — */
        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
                e.preventDefault();
                showSecurityToast('Dragging content is not permitted.');
            }
        });

        /* — Text selection (mouse) — */
        document.addEventListener('selectstart', function(e) {
            /* Allow selection inside form inputs / textareas */
            const tag = (e.target.tagName || '').toUpperCase();
            if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;
            e.preventDefault();
        });

        /* — DevTools size-change detection — */
        (function devToolsDetect() {
            const threshold = 160;
            let warned = false;
            setInterval(function() {
                const wDiff = window.outerWidth  - window.innerWidth;
                const hDiff = window.outerHeight - window.innerHeight;
                if ((wDiff > threshold || hDiff > threshold) && !warned) {
                    warned = true;
                    showSecurityToast('Developer tools detected — activity is monitored.');
                } else if (wDiff <= threshold && hDiff <= threshold) {
                    warned = false;
                }
            }, 1500);
        })();

        /* — Console warning — */
        try {
            console.log(
                '%c⚠ STOP!\n%cThis console is for authorised developers only.\nMisuse of this site violates our Terms of Service.\n© ' + new Date().getFullYear() + ' Hillfort International School.',
                'color:#d4a017;font-size:1.6rem;font-weight:900',
                'color:#333;font-size:0.9rem'
            );
        } catch(err) {}
    }


    /* ----------------------------------------------------------
       6. INIT ON DOM READY
       ---------------------------------------------------------- */
    function onReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    onReady(function() {
        injectPrintBlock();
        initSecurity();
        initPopup();
    });

})();
