/**
 * Hillfort — homepage calendar section.
 *
 * Unlike term-calendar.html, the homepage has no static calendar
 * content to fall back to — so this section starts hidden
 * (`#homeCalendarSection { display:none }`) and is only revealed once
 * Directus actually has published `calendar_events`. If Directus is
 * unreachable or empty, the section simply stays hidden — no broken
 * or empty-looking calendar ever shows on the homepage.
 */
(function () {
  document.addEventListener('DOMContentLoaded', async function () {
    if (typeof directusList !== 'function') return;

    var events = [];
    try {
      var items = await directusList('calendar_events', {
        filter: { status: { _eq: 'published' } }, sort: ['event_date'], limit: 100,
      });
      events = (items || []).map(function (ev) {
        return { date: ev.event_date, title: ev.title, desc: ev.description || '' };
      });
    } catch (e) {
      console.error('Directus calendar_events fetch failed, homepage calendar stays hidden', e);
      return;
    }

    if (!events.length) return; // nothing published yet — leave the section hidden

    document.getElementById('homeCalendarSection').style.display = '';

    if (typeof window.initMiniCalendarWidget === 'function') {
      window.initMiniCalendarWidget({
        gridId: 'homeMiniCalGrid', monthLabelId: 'homeMiniCalMonthLabel',
        prevId: 'homeMiniCalPrev', nextId: 'homeMiniCalNext', detailId: 'homeMiniCalDetail',
        events: events,
      });
    }

    // Current-term status card — optional, only shown if term_dates is set up too.
    try {
      var terms = await directusList('term_dates', {
        filter: { status: { _eq: 'published' } }, sort: ['sort'], limit: 20,
      });
      var today = new Date(new Date().toDateString());
      var current = (terms || []).find(function (t) {
        if (!t.opens_date || !t.closes_date) return false;
        var opens = new Date(t.opens_date + 'T00:00:00'), closes = new Date(t.closes_date + 'T00:00:00');
        return today >= opens && today <= closes;
      });
      if (current) {
        var closes = new Date(current.closes_date + 'T00:00:00');
        var opens  = new Date(current.opens_date + 'T00:00:00');
        var daysLeft = Math.max(0, Math.round((closes - today) / 86400000));
        document.getElementById('homeTermStatusName').textContent = current.term_name;
        document.getElementById('homeTermStatusDays').textContent = daysLeft;
        document.getElementById('homeTermStatusCard').style.display = '';

        // Hero slider "This Week at Hillfort" slide — was a static
        // "Week 6 of 12" placeholder; compute it for real once we
        // know the current term's dates.
        var weekDetailEl = document.querySelector('[data-week-detail]');
        if (weekDetailEl) {
          var weekNum   = Math.max(1, Math.ceil(((today - opens) / 86400000 + 1) / 7));
          var totalWeeks = Math.max(weekNum, Math.ceil(((closes - opens) / 86400000 + 1) / 7));
          weekDetailEl.textContent = 'Week ' + weekNum + ' of ' + totalWeeks;
        }
      }
    } catch (e) {
      console.error('Directus term_dates fetch failed, skipping homepage term status card', e);
    }
  });
})();
