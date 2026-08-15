/**
 * Hillfort — shared mini calendar widget.
 *
 * Renders a month-grid calendar into the given element IDs, with
 * event-day highlighting and click-to-expand details. Used on both
 * term-calendar.html (sidebar) and index.html (homepage section).
 *
 * window.initMiniCalendarWidget({
 *   gridId, monthLabelId, prevId, nextId, detailId,   // element IDs
 *   events: [{ date: 'YYYY-MM-DD', title, desc }],
 * })
 */
(function () {
  var MONTHS_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pad2(n) { return String(n).padStart(2, '0'); }
  function toISO(d) { return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }

  window.initMiniCalendarWidget = function (opts) {
    var grid   = document.getElementById(opts.gridId);
    var label  = document.getElementById(opts.monthLabelId);
    var detail = opts.detailId ? document.getElementById(opts.detailId) : null;
    var prevBtn = document.getElementById(opts.prevId);
    var nextBtn = document.getElementById(opts.nextId);
    var events = opts.events || [];
    if (!grid || !label) return;

    var eventsByDate = {};
    events.forEach(function (e) { (eventsByDate[e.date] = eventsByDate[e.date] || []).push(e); });

    var today = new Date();
    var upcoming = events.map(function (e) { return new Date(e.date + 'T00:00:00'); })
      .filter(function (d) { return d >= new Date(today.getFullYear(), today.getMonth(), today.getDate()); })
      .sort(function (a, b) { return a - b; });
    var cursor = upcoming.length ? new Date(upcoming[0].getFullYear(), upcoming[0].getMonth(), 1) : new Date(today.getFullYear(), today.getMonth(), 1);
    var selectedDate = null;

    function render() {
      label.textContent = MONTHS_LONG[cursor.getMonth()] + ' ' + cursor.getFullYear();
      var firstDay = new Date(cursor.getFullYear(), cursor.getMonth(), 1).getDay();
      var daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
      var todayISO = toISO(today);

      var cells = '';
      for (var i = 0; i < firstDay; i++) cells += '<div class="mini-cal-day is-blank"></div>';
      for (var d = 1; d <= daysInMonth; d++) {
        var iso = cursor.getFullYear() + '-' + pad2(cursor.getMonth() + 1) + '-' + pad2(d);
        var hasEvent = !!eventsByDate[iso];
        var classes = ['mini-cal-day'];
        if (hasEvent) classes.push('has-event');
        if (iso === todayISO) classes.push('is-today');
        if (iso === selectedDate) classes.push('is-selected');
        cells += '<div class="' + classes.join(' ') + '" data-iso="' + iso + '" title="' + (hasEvent ? esc(eventsByDate[iso][0].title) : '') + '">' + d + '</div>';
      }
      grid.innerHTML = cells;

      grid.querySelectorAll('.mini-cal-day.has-event').forEach(function (cell) {
        cell.addEventListener('click', function () {
          selectedDate = cell.getAttribute('data-iso') === selectedDate ? null : cell.getAttribute('data-iso');
          render();
          renderDetail();
        });
      });
    }

    function renderDetail() {
      if (!detail) return;
      if (!selectedDate || !eventsByDate[selectedDate]) {
        detail.className = 'mini-cal-detail';
        detail.innerHTML = '';
        return;
      }
      detail.className = 'mini-cal-detail is-open';
      detail.innerHTML = eventsByDate[selectedDate].map(function (e) {
        return '<h4>' + esc(e.title) + '</h4>' + (e.desc ? '<p>' + esc(e.desc) + '</p>' : '');
      }).join('<hr style="border:none;border-top:1px solid var(--border-color);margin:10px 0">');
    }

    if (prevBtn) prevBtn.addEventListener('click', function () {
      cursor = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1);
      render();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
      render();
    });

    render();
    renderDetail();
  };
})();
