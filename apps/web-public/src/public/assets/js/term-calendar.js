/**
 * Hillfort — Term Calendar page.
 *
 * Two layers:
 *  1. Optionally replaces the term cards (#termCardsGrid) and key
 *     events list (#keyEventsList) with data from Directus
 *     (`term_dates` / `calendar_events`). If Directus has nothing
 *     published yet, or is unreachable, the static markup already in
 *     the page is left exactly as-is.
 *  2. Reads whatever ends up in the DOM (static or Directus-sourced —
 *     it doesn't care which) via the data-date/data-opens/data-closes
 *     attributes, and builds the sidebar: a real month-grid mini
 *     calendar with event highlights, the "Current Term" countdown
 *     card, and the "Upcoming" list. This means the sidebar always
 *     works, even before Directus is set up.
 */
(function () {
  var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var MONTHS_LONG  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pad2(n) { return String(n).padStart(2, '0'); }
  function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
  function formatLong(d) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()] + ', ' + ordinal(d.getDate()) + ' ' + MONTHS_LONG[d.getMonth()] + ' ' + d.getFullYear();
  }

  // ── Optional Directus-sourced term cards / events list ─────────────────
  async function loadFromDirectus() {
    if (typeof directusList !== 'function') return;

    try {
      var terms = await directusList('term_dates', {
        filter: { status: { _eq: 'published' } }, sort: ['sort'], limit: 20,
      });
      if (terms && terms.length) {
        var grid = document.getElementById('termCardsGrid');
        grid.innerHTML = terms.map(function (t) {
          var opens  = t.opens_date  ? new Date(t.opens_date + 'T00:00:00')  : null;
          var closes = t.closes_date ? new Date(t.closes_date + 'T00:00:00') : null;
          var rows = [];
          if (opens)  rows.push(row('Term Opens', formatLong(opens)));
          if (t.midterm_start && t.midterm_end) {
            rows.push(row(t.midterm_label || 'Mid-Term Break', dateRange(t.midterm_start, t.midterm_end)));
          }
          if (closes) rows.push(row('Term Closes', formatLong(closes)));
          if (t.break_start && t.break_end) {
            rows.push(row(t.break_label || 'Break', dateRange(t.break_start, t.break_end)));
          }
          return '<div class="calendar-term" data-opens="' + esc(t.opens_date || '') + '" data-closes="' + esc(t.closes_date || '') + '">'
            + '<h3><i class="fas ' + esc(t.icon || 'fa-calendar') + '"></i> ' + esc(t.term_name) + '</h3>'
            + '<div class="term-dates">' + rows.join('') + '</div></div>';
        }).join('');
      }
    } catch (e) {
      console.error('Directus term_dates fetch failed, keeping static term cards', e);
    }

    try {
      var events = await directusList('calendar_events', {
        filter: { status: { _eq: 'published' } }, sort: ['event_date'], limit: 100,
      });
      if (events && events.length) {
        var list = document.getElementById('keyEventsList');
        list.innerHTML = events.map(function (ev) {
          var d = new Date(ev.event_date + 'T00:00:00');
          var badgeClass = ev.badge_style === 'info' ? 'info' : 'upcoming';
          return '<div class="event-item" data-date="' + esc(ev.event_date) + '">'
            + '<div class="event-date"><span class="event-day">' + pad2(d.getDate()) + '</span><span class="event-month">' + MONTHS_SHORT[d.getMonth()] + '</span></div>'
            + '<div class="event-details"><h4>' + esc(ev.title) + '</h4>' + (ev.description ? '<p>' + esc(ev.description) + '</p>' : '') + '</div>'
            + (ev.badge_label ? '<span class="event-badge ' + badgeClass + '">' + esc(ev.badge_label) + '</span>' : '')
            + '</div>';
        }).join('');
      }
    } catch (e) {
      console.error('Directus calendar_events fetch failed, keeping static events list', e);
    }
  }

  function row(label, value) {
    return '<div class="term-date-item"><span class="date-label">' + esc(label) + '</span><span class="date-value">' + esc(value) + '</span></div>';
  }
  function dateRange(startISO, endISO) {
    var a = new Date(startISO + 'T00:00:00'), b = new Date(endISO + 'T00:00:00');
    var sameMonth = a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    return sameMonth
      ? ordinal(a.getDate()) + ' \u2013 ' + ordinal(b.getDate()) + ' ' + MONTHS_LONG[b.getMonth()] + ' ' + b.getFullYear()
      : ordinal(a.getDate()) + ' ' + MONTHS_LONG[a.getMonth()] + ' \u2013 ' + ordinal(b.getDate()) + ' ' + MONTHS_LONG[b.getMonth()] + ' ' + b.getFullYear();
  }

  // ── Read whatever's in the DOM (static or Directus-rendered) ───────────
  function collectEvents() {
    return Array.prototype.map.call(document.querySelectorAll('#keyEventsList .event-item[data-date]'), function (el) {
      return {
        date: el.getAttribute('data-date'),
        title: el.querySelector('h4') ? el.querySelector('h4').textContent : '',
        desc: el.querySelector('.event-details p') ? el.querySelector('.event-details p').textContent : '',
      };
    }).filter(function (e) { return e.date; });
  }
  function collectTerms() {
    return Array.prototype.map.call(document.querySelectorAll('#termCardsGrid .calendar-term[data-opens]'), function (el) {
      return {
        name: el.querySelector('h3') ? el.querySelector('h3').textContent.trim() : '',
        opens: el.getAttribute('data-opens'),
        closes: el.getAttribute('data-closes'),
      };
    }).filter(function (t) { return t.opens && t.closes; });
  }

  // ── Mini calendar widget (shared component — see mini-calendar-widget.js) ─
  function initMiniCalendar(events) {
    if (typeof window.initMiniCalendarWidget !== 'function') return;
    window.initMiniCalendarWidget({
      gridId: 'miniCalGrid', monthLabelId: 'miniCalMonthLabel',
      prevId: 'miniCalPrev', nextId: 'miniCalNext', detailId: 'miniCalDetail',
      events: events,
    });
  }

  // ── Current term status card ────────────────────────────────────────────
  function initTermStatus(terms) {
    var card = document.getElementById('termStatusCard');
    if (!card || !terms.length) return;

    var today = new Date(new Date().toDateString());
    var current = terms.find(function (t) {
      var opens = new Date(t.opens + 'T00:00:00'), closes = new Date(t.closes + 'T00:00:00');
      return today >= opens && today <= closes;
    });
    if (!current) return; // between terms — leave the card hidden, nothing misleading to show

    var closes = new Date(current.closes + 'T00:00:00');
    var daysLeft = Math.max(0, Math.round((closes - today) / 86400000));

    document.getElementById('termStatusName').textContent = current.name;
    document.getElementById('termStatusDays').textContent = daysLeft;
    card.style.display = '';
  }

  // ── Sidebar upcoming list ───────────────────────────────────────────────
  function initUpcomingList(events) {
    var list = document.getElementById('sidebarUpcomingList');
    if (!list) return;

    var today = new Date(new Date().toDateString());
    var upcoming = events
      .map(function (e) { return { e: e, d: new Date(e.date + 'T00:00:00') }; })
      .filter(function (x) { return x.d >= today; })
      .sort(function (a, b) { return a.d - b.d; })
      .slice(0, 4);

    if (!upcoming.length) {
      list.innerHTML = '<p class="mini-cal-empty">No upcoming dates on the calendar right now.</p>';
      return;
    }

    list.innerHTML = upcoming.map(function (x) {
      return '<div class="sidebar-upcoming-item">'
        + '<div class="sidebar-upcoming-date"><span class="day">' + pad2(x.d.getDate()) + '</span><span class="mon">' + MONTHS_SHORT[x.d.getMonth()] + '</span></div>'
        + '<div><h5>' + esc(x.e.title) + '</h5>' + (x.e.desc ? '<p>' + esc(x.e.desc) + '</p>' : '') + '</div>'
        + '</div>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', async function () {
    await loadFromDirectus();

    var events = collectEvents();
    var terms  = collectTerms();

    initMiniCalendar(events);
    initTermStatus(terms);
    initUpcomingList(events);
  });
})();
