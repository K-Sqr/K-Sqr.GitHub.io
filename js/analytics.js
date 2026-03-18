/*
 * Portfolio Analytics — custom GA4 event tracking
 *
 * Tracks: resume downloads, outbound clicks (GitHub/LinkedIn),
 * project link clicks (live site/demo/repo), and meme video plays.
 *
 * Uses data-* attributes on HTML elements so tracking logic stays
 * decoupled from markup.
 *
 * SETUP: Replace GA_MEASUREMENT_ID in each HTML <head> with your
 * real GA4 Measurement ID (e.g. G-XXXXXXXXXX).
 */

(function () {
  function track(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (!el) return;

    var action = el.getAttribute('data-track');
    var label  = el.getAttribute('data-label') || '';
    var section = el.getAttribute('data-section') || '';

    switch (action) {

      case 'resume_download':
        track('resume_download', {
          method: label,
          link_url: el.href
        });
        break;

      case 'outbound_click':
        track('outbound_click', {
          destination: label,
          section: section,
          link_url: el.href
        });
        break;

      case 'project_click':
        track('project_click', {
          project: el.getAttribute('data-project') || '',
          click_type: label,
          link_url: el.href
        });
        break;

      case 'meme_play':
        track('meme_play', { meme_id: label });
        break;

      case 'email_click':
        track('email_click', { section: section });
        break;

      default:
        track(action, { label: label, section: section });
    }
  });

  // Detect YouTube iframe play via postMessage API
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://www.youtube.com') return;
    try {
      var data = JSON.parse(e.data);
      if (data.event === 'onStateChange' && data.info === 1) {
        track('meme_play', { meme_id: 'favorite_video', trigger: 'iframe_play' });
      }
    } catch (_) {}
  });
})();
