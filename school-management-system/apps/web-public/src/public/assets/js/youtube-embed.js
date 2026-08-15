/**
 * Hillfort — YouTube embed helper.
 *
 * Works for both video and audio-focused YouTube content (YouTube
 * has no separate "audio embed" format — audio-only content, e.g. a
 * school anthem or a radio jingle uploaded as a static-image video,
 * uses the same iframe, optionally in the compact `audioOnly` layout
 * below which shrinks the player to a slim audio-bar height).
 *
 * Accepts a bare video ID OR any common YouTube URL format
 * (watch?v=, youtu.be/, /embed/, /shorts/).
 */
(function () {
  window.extractYouTubeId = function (input) {
    if (!input) return null;
    input = String(input).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input; // already a bare ID

    var patterns = [
      /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
      /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    ];
    for (var i = 0; i < patterns.length; i++) {
      var m = input.match(patterns[i]);
      if (m) return m[1];
    }
    return null;
  };

  /**
   * renderYouTubeEmbed(videoIdOrUrl, opts) → HTML string for an
   * embed container. Drop the result into any element's innerHTML.
   *
   * opts:
   *   title      accessible title for the iframe (default: "YouTube video")
   *   audioOnly  true → compact, short-height player for audio-led content
   *   autoplay   true → autoplay (muted, per browser autoplay rules)
   *   caption    optional caption shown under the player
   *   bare       true → just the <iframe>, no wrapper div (use inside an
   *              element that already provides its own aspect-ratio box,
   *              e.g. the existing .youtube-live-embed container)
   */
  window.renderYouTubeEmbed = function (videoIdOrUrl, opts) {
    opts = opts || {};
    var id = window.extractYouTubeId(videoIdOrUrl);
    if (!id) return '';

    var params = ['rel=0', 'modestbranding=1'];
    if (opts.autoplay) params.push('autoplay=1', 'mute=1');

    var iframe = '<iframe src="https://www.youtube.com/embed/' + id + '?' + params.join('&') + '"'
      + ' title="' + (opts.title ? String(opts.title).replace(/"/g, '&quot;') : 'YouTube video') + '"'
      + ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"'
      + ' allowfullscreen loading="lazy"></iframe>';

    if (opts.bare) return iframe;

    var heightClass = opts.audioOnly ? 'yt-embed-audio' : 'yt-embed-video';
    var caption = opts.caption ? '<p class="yt-embed-caption">' + String(opts.caption).replace(/</g, '&lt;') + '</p>' : '';
    return '<div class="yt-embed ' + heightClass + '">' + iframe + '</div>' + caption;
  };
})();
