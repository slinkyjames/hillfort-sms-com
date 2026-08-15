// ========================================
// HILLFORT INTERNATIONAL SCHOOL
// Main JavaScript - v4 (Mobile Nav Final Fix)
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // MOBILE NAVIGATION — Clean v4
    // The overlay top is set to start BELOW the header
    // so it never covers the hamburger button.
    // The toggle gets z-index via CSS isolation on the header.
    // ========================================

    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.querySelector('.nav-menu');
    const header    = document.querySelector('.main-header');

    // Remove any leftover floatToggle from previous builds
    const oldFloat = document.getElementById('floatNavToggle');
    if (oldFloat) oldFloat.remove();

    // Make sure toggle visibility is restored if it was hidden
    if (navToggle) navToggle.style.visibility = '';

    // Set --header-bottom CSS var so overlay starts below header
    function setHeaderHeight() {
        if (header) {
            const h = header.offsetHeight;
            document.documentElement.style.setProperty('--header-bottom', h + 'px');
        }
    }
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight, { passive: true });

    let navOpen = false;

    // Create overlay
    let navOverlay = document.getElementById('navOverlay');
    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.id = 'navOverlay';
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }

    function openNav() {
        if (!navToggle || !navMenu) return;
        navOpen = true;
        setHeaderHeight();
        navMenu.classList.add('active');
        navToggle.classList.add('active');
        navOverlay.classList.add('active');
        document.body.classList.add('nav-is-open');
    }

    function closeNav() {
        if (!navToggle || !navMenu) return;
        navOpen = false;
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('nav-is-open');
        document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
    }

    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navOpen ? closeNav() : openNav();
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeNav);
    }

    // Mobile dropdowns: tap to expand/collapse
    document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                e.stopPropagation();
                const menu = this.nextElementSibling;
                const isOpen = menu && menu.classList.contains('open');
                document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
                if (!isOpen && menu) menu.classList.add('open');
            }
        });
    });

    // Close nav when a real page link is tapped
    document.querySelectorAll('.dropdown-menu a, .nav-item:not(.dropdown) > .nav-link, .cta-nav .btn').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) closeNav();
        });
    });

    // ========================================
    // HERO SLIDER
    // ========================================
    const slides = document.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        else if (index < 0) index = slides.length - 1;
        currentSlide = index;

        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide])   dots[currentSlide].classList.add('active');
    }

    function startSlideShow() { slideInterval = setInterval(() => showSlide(currentSlide + 1), 5500); }
    function stopSlideShow()  { clearInterval(slideInterval); }

    if (nextBtn) nextBtn.addEventListener('click', () => { stopSlideShow(); showSlide(currentSlide + 1); startSlideShow(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { stopSlideShow(); showSlide(currentSlide - 1); startSlideShow(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { stopSlideShow(); showSlide(i); startSlideShow(); }));

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopSlideShow);
        sliderContainer.addEventListener('mouseleave', startSlideShow);
    }
    // Init
    if (slides.length > 0) {
        showSlide(0);
        startSlideShow();
    }

    // ========================================
    // NEWS CAROUSEL
    // ========================================
    const newsCarousel = document.querySelector('.news-carousel-track');
    let carouselPos = 0;
    let newsAutoScroll;

    if (newsCarousel) {
        function autoScrollNews() {
            const thumb = newsCarousel.querySelector('.news-thumbnail');
            if (!thumb) return;
            const scrollAmt = thumb.offsetWidth + 12;
            const maxScroll = newsCarousel.scrollWidth - newsCarousel.parentElement.offsetWidth;
            if (carouselPos >= maxScroll) {
                carouselPos = 0;
                newsCarousel.style.transition = 'none';
                newsCarousel.style.transform = 'translateX(0)';
                setTimeout(() => { newsCarousel.style.transition = 'transform 0.5s ease'; }, 50);
            } else {
                carouselPos += scrollAmt;
                newsCarousel.style.transform = `translateX(-${carouselPos}px)`;
            }
        }

        newsAutoScroll = setInterval(autoScrollNews, 3200);
        const wrapper = newsCarousel.parentElement;
        wrapper.addEventListener('mouseenter', () => clearInterval(newsAutoScroll));
        wrapper.addEventListener('mouseleave', () => { newsAutoScroll = setInterval(autoScrollNews, 3200); });

        let touchStartX = 0;
        wrapper.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        wrapper.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                const thumb = newsCarousel.querySelector('.news-thumbnail');
                const amt = thumb ? thumb.offsetWidth + 12 : 212;
                const max = newsCarousel.scrollWidth - wrapper.offsetWidth;
                carouselPos = diff > 0 ? Math.min(carouselPos + amt, max) : Math.max(carouselPos - amt, 0);
                newsCarousel.style.transform = `translateX(-${carouselPos}px)`;
            }
        }, { passive: true });
    }

    // ========================================
    // AUTO-UPDATE: Dates, School Week, Term, Years
    // ========================================
    (function autoUpdateDates() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // 1-12

        // ── Academic year e.g. "2025/2026" ──
        // Nigerian school year starts in September
        const acadStart = month >= 9 ? year : year - 1;
        const acadYear = `${acadStart}/${acadStart + 1}`;
        document.querySelectorAll('[data-acadyear]').forEach(el => { el.textContent = acadYear; });

        // ── Admission year (next academic year) ──
        const admYear = `${acadStart + 1}/${acadStart + 2}`;
        document.querySelectorAll('[data-admyear]').forEach(el => { el.textContent = admYear; });

        // ── Summer lesson year (current year) ──
        document.querySelectorAll('[data-summeryear]').forEach(el => { el.textContent = year; });

        // ── Current term calculation ──
        // Term 1: Sep-Dec, Term 2: Jan-Mar, Term 3: Apr-Jul, Holiday: Aug
        let termName = '', termNum = 0;
        if (month >= 9 && month <= 12) { termName = 'First Term'; termNum = 1; }
        else if (month >= 1 && month <= 3) { termName = 'Second Term'; termNum = 2; }
        else if (month >= 4 && month <= 7) { termName = 'Third Term'; termNum = 3; }
        else { termName = 'Holiday Period'; termNum = 0; }
        document.querySelectorAll('[data-termname]').forEach(el => { el.textContent = termName; });
        document.querySelectorAll('[data-termnum]').forEach(el => { el.textContent = termNum > 0 ? `Term ${termNum}` : 'Holiday'; });

        // ── School week calculation ──
        // Term 1 starts ~Sept 8, Term 2 ~Jan 12, Term 3 ~Apr 21
        const termStarts = {
            1: new Date(month >= 9 ? year : year - 1, 8, 8),   // Sep 8
            2: new Date(month >= 9 ? year + 1 : year, 0, 12),   // Jan 12
            3: new Date(month >= 9 ? year + 1 : year, 3, 21),   // Apr 21
        };
        let weekNum = 0;
        if (termNum > 0) {
            const start = termStarts[termNum];
            const msPerWeek = 7 * 24 * 60 * 60 * 1000;
            weekNum = Math.max(1, Math.min(12, Math.ceil((now - start) / msPerWeek) + 1));
        }
        document.querySelectorAll('[data-schoolweek]').forEach(el => {
            el.textContent = termNum > 0 ? `Week ${weekNum}` : 'Holiday';
        });

        // ── Slide 4: week title auto-update ──
        const weekTitle = document.querySelector('.slide-week-title');
        if (weekTitle && termNum > 0) {
            weekTitle.textContent = `Week ${weekNum} — ${termName}`;
        }
        const weekDetail = document.querySelector('[data-week-detail]');
        if (weekDetail && termNum > 0) {
            weekDetail.textContent = `Week ${weekNum} of 12`;
        }

        // ── Slide 3: admission year auto-update ──
        document.querySelectorAll('[data-slide-admyear]').forEach(el => { el.textContent = admYear; });

        // ── Footer copyright year ──
        document.querySelectorAll('.footer-year').forEach(el => { el.textContent = year; });
        // Auto-update plain © year text
        document.querySelectorAll('.footer-copyright').forEach(el => {
            el.innerHTML = el.innerHTML.replace(/\d{4}(?=\s+Hillfort)/, year);
        });
    })();

    // ========================================
    // YOUTUBE LIVE STREAM CHECK
    // Reads from the Directus `site_settings` singleton
    // (youtube_live_video_id / youtube_live_expiry) instead of
    // localStorage, so a live stream set by staff shows up for every
    // visitor — not just the browser it was set in.
    // ========================================
    (async function initYouTubeLive() {
        const embedEl   = document.getElementById('ytLiveEmbed');
        const statusBar = document.getElementById('liveStatusBar');
        const viewersEl = document.getElementById('liveViewers');
        if (!embedEl) return;

        let storedId = null, storedExpiry = null;
        try {
            if (typeof directusSingleton === 'function') {
                const settings = await directusSingleton('site_settings');
                storedId     = settings?.youtube_live_video_id || null;
                storedExpiry = settings?.youtube_live_expiry || null;
            }
        } catch (e) {
            console.error('YouTube live settings fetch failed', e);
        }

        const isLive = storedId && storedExpiry && new Date(storedExpiry) > new Date();

        if (isLive) {
            embedEl.innerHTML = window.renderYouTubeEmbed
                ? window.renderYouTubeEmbed(storedId, { title: 'Hillfort Live Stream', bare: true })
                : `<iframe
                    src="https://www.youtube.com/embed/${storedId}?autoplay=0&rel=0&modestbranding=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen title="Hillfort Live Stream">
                </iframe>`;
            if (statusBar) statusBar.innerHTML = `<span class="live-indicator"><span class="live-dot-sm"></span> Live stream is active — join now!</span>`;
            if (viewersEl) viewersEl.textContent = '🔴 Streaming Live';
        } else {
            if (statusBar) statusBar.innerHTML = `<span class="live-indicator" style="opacity:0.7"><i class="fas fa-moon" style="margin-right:5px"></i> No live stream at the moment — subscribe to be notified</span>`;
        }
    })();

    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            scrollToTopBtn.classList.toggle('visible', window.pageYOffset > 350);
        }, { passive: true });
        scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ========================================
    // HEADER SCROLL SHADOW
    // ========================================
    if (header) {
        window.addEventListener('scroll', () => {
            header.style.boxShadow = window.pageYOffset > 80
                ? '0 4px 25px rgba(0,0,0,0.3)'
                : '';
        }, { passive: true });
    }

    // ========================================
    // NEWSLETTER FORMS
    // ========================================
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ── Shared newsletter submit function ──────────────────────────────────
    function submitNewsletter(email, name, subscriberType, btn, origHtml, input, isCompact) {
        var fd = new FormData();
        fd.append('action', 'subscribe');
        fd.append('email',  email);
        if (name)           fd.append('name',            name);
        if (subscriberType) fd.append('subscriber_type', subscriberType);

        fetch('/api/newsletter', { method: 'POST', body: fd })
            .then(function(r) { return r.json(); })
            .then(function(d) {
                if (d.ok || d.msg) {
                    if (isCompact) {
                        btn.innerHTML = '<i class="fas fa-check"></i>';
                        btn.style.background = '#27ae60';
                        if (input) input.value = '';
                        setTimeout(function() { btn.innerHTML = origHtml; btn.style.background = ''; btn.disabled = false; }, 3500);
                    } else {
                        btn.innerHTML = '<i class="fas fa-check"></i> ' + (d.msg || 'Subscribed!');
                        btn.style.background = '#27ae60'; btn.disabled = true;
                        if (input) input.value = '';
                        setTimeout(function() { btn.innerHTML = origHtml; btn.style.background = ''; btn.disabled = false; }, 4500);
                    }
                } else {
                    btn.innerHTML = origHtml; btn.disabled = false;
                    if (input) { input.style.borderColor = '#e74c3c'; input.focus(); setTimeout(function(){ input.style.borderColor=''; }, 2500); }
                    alert(d.msg || 'Could not subscribe. Please try again.');
                }
            })
            .catch(function() {
                btn.innerHTML = origHtml; btn.disabled = false;
                if (input) { input.style.borderColor = '#e74c3c'; input.focus(); }
            });
    }

    // ── Homepage / dedicated newsletter page form (#newsletterForm) ─────────
    var mainNewsletter = document.getElementById('newsletterForm');
    if (mainNewsletter) {
        mainNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            var input  = this.querySelector('input[type="email"]');
            var nameEl = this.querySelector('input[type="text"], input[name="first_name"], input[name="name"]');
            var typeEl = this.querySelector('select');
            var btn    = this.querySelector('button[type="submit"]');
            var email  = input ? input.value.trim() : '';

            if (!validateEmail(email)) {
                if (input) { input.style.borderColor = '#e74c3c'; input.focus(); setTimeout(function(){ input.style.borderColor=''; }, 2500); }
                return;
            }
            var origHtml = btn ? btn.innerHTML : '';
            if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing…'; btn.disabled = true; }
            submitNewsletter(email, nameEl ? nameEl.value.trim() : '', typeEl ? typeEl.value : '', btn, origHtml, input, false);
        });
    }

    // ── newsletter.html dedicated form (class="contact-form", no id) ────────
    var nlPageForm = document.querySelector('.contact-form-card form.contact-form');
    if (nlPageForm && !document.getElementById('newsletterForm')) {
        nlPageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var emailEl = this.querySelector('input[type="email"]');
            var nameEl  = this.querySelector('input[type="text"]');
            var typeEl  = this.querySelector('select');
            var btn     = this.querySelector('button[type="submit"]');
            var email   = emailEl ? emailEl.value.trim() : '';

            if (!validateEmail(email)) {
                if (emailEl) { emailEl.style.borderColor = '#e74c3c'; emailEl.focus(); setTimeout(function(){ emailEl.style.borderColor=''; }, 2500); }
                return;
            }
            var origHtml = btn ? btn.innerHTML : '';
            if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing…'; btn.disabled = true; }
            submitNewsletter(email, nameEl ? nameEl.value.trim() : '', typeEl ? typeEl.value : '', btn, origHtml, emailEl, false);
        });
    }

    // ── Footer compact newsletter form (all 33 pages) ───────────────────────
    document.querySelectorAll('.footer-newsletter-form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = this.querySelector('input[type="email"], input[type="text"]');
            var btn   = this.querySelector('button');
            var email = input ? input.value.trim() : '';

            if (!validateEmail(email)) {
                if (input) { input.style.borderColor = '#e74c3c'; input.focus(); setTimeout(function(){ input.style.borderColor=''; }, 2000); }
                return;
            }
            var origHtml = btn ? btn.innerHTML : '';
            if (btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; btn.disabled = true; }
            submitNewsletter(email, '', '', btn, origHtml, input, true);
        });
    });

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const hh = header ? header.offsetHeight : 0;
                    window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - hh - 20, behavior: 'smooth' });
                }
            }
        });
    });

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    const animEls = document.querySelectorAll('.feature-card, .program-card, .update-card, .testimonial-card, .step-card, .value-card, .team-card, .facility-card');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
        animEls.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(25px)';
            el.style.transition = `opacity 0.55s ease ${(i % 4) * 0.1}s, transform 0.55s ease ${(i % 4) * 0.1}s`;
            obs.observe(el);
        });
    }

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    function animateCounter(el, target, duration = 2000) {
        const suffix = el.textContent.includes('+') ? '+' : '';
        let current = 0;
        const inc = target / (duration / 16);
        const timer = setInterval(() => {
            current += inc;
            if (current >= target) { el.textContent = target + suffix; clearInterval(timer); }
            else el.textContent = Math.floor(current) + suffix;
        }, 16);
    }

    if ('IntersectionObserver' in window) {
        const statObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const num = parseInt(entry.target.textContent.replace(/\D/g, ''));
                    if (!isNaN(num)) { entry.target.classList.add('counted'); animateCounter(entry.target, num); }
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.stat-item h3, .stat-box h3').forEach(el => statObs.observe(el));
    }

    // ========================================
    // GALLERY FILTER
    // ========================================
    const galleryBtns  = document.querySelectorAll('.gallery-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryBtns.length) {
        galleryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                galleryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                galleryItems.forEach(item => {
                    item.style.display = (filter === 'all' || item.dataset.cat === filter) ? 'block' : 'none';
                });
            });
        });
    }

    // ========================================
    // ACCORDION
    // ========================================
    document.querySelectorAll('.accordion-header').forEach(hdr => {
        const body = hdr.nextElementSibling;
        if (body) body.style.display = 'none';
        hdr.addEventListener('click', function() {
            const isOpen = body.style.display === 'block';
            document.querySelectorAll('.accordion-header').forEach(h => {
                if (h.nextElementSibling) h.nextElementSibling.style.display = 'none';
            });
            body.style.display = isOpen ? 'none' : 'block';
        });
    });

    // ========================================
    // FORM VALIDATION
    // ========================================
    document.querySelectorAll('form:not(#newsletterForm):not(.footer-newsletter-form):not(#contactForm):not(#admissionForm):not(#tourForm):not(#applyForm)').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            this.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                    field.style.boxShadow = '0 0 0 3px rgba(231,76,60,0.15)';
                } else {
                    field.style.borderColor = '';
                    field.style.boxShadow = '';
                }
            });
            if (!isValid) return;
            const btn = this.querySelector('button[type=submit]');
            if (btn) {
                const orig = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Submitted! We\'ll be in touch.';
                btn.style.background = '#27ae60'; btn.disabled = true;
                setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; this.reset(); }, 4500);
            }
        });
    });

    // ========================================
    // KEYBOARD ACCESSIBILITY
    // ========================================
    document.querySelectorAll('.dropdown').forEach(dd => {
        const link = dd.querySelector('.nav-link');
        if (link) {
            link.addEventListener('keydown', function(e) {
                if ((e.key === 'Enter' || e.key === ' ') && window.innerWidth > 1024) {
                    e.preventDefault();
                    const menu = dd.querySelector('.dropdown-menu');
                    const visible = getComputedStyle(menu).visibility === 'visible';
                    menu.style.visibility = visible ? 'hidden' : 'visible';
                    menu.style.opacity = visible ? '0' : '1';
                }
            });
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && window.innerWidth > 1024) {
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.style.visibility = '';
                m.style.opacity = '';
            });
        }
    });

    // ========================================
    // LAZY LOADING
    // ========================================
    if ('IntersectionObserver' in window) {
        const imgObs = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    obs.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });
        document.querySelectorAll('img[data-src]').forEach(img => imgObs.observe(img));
    }

    console.log('%cHillfort International School', 'color: #800000; font-size: 18px; font-weight: bold;');
    console.log('%c...empowering minds, shaping futures.', 'color: #d4a017; font-size: 12px;');
});

// ========================================
// VIDEO MODAL
// ========================================
function playVideo(videoUrl) {
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px';
    modal.innerHTML = `
        <div style="position:relative;width:100%;max-width:800px;aspect-ratio:16/9;">
            <button onclick="this.closest('[style]').remove()" style="position:absolute;top:-40px;right:0;background:none;border:none;color:white;font-size:1.5rem;cursor:pointer;padding:8px">
                <i class="fas fa-times"></i> Close
            </button>
            <iframe src="${videoUrl}" style="width:100%;height:100%;border:none;border-radius:12px" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}
