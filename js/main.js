// ── Promo / announcement bar (site-wide, dismissible) ─────
// DISABLED 2026-07-13: the ASI2026 "20% off at checkout" offer advertised a
// checkout that doesn't exist yet, so the bar is turned off to keep the site
// honest. Re-enable by uncommenting the block below once checkout is live
// (and refresh the code / "through July 29" text). Set STORAGE to a new value
// to re-show the bar to people who dismissed the old one.
/*
(function () {
  const STORAGE = 'qs_promo_asi2026_dismissed';
  try { if (localStorage.getItem(STORAGE) === '1') return; } catch (e) {}
  const bar = document.createElement('div');
  bar.className = 'promo-bar';
  bar.innerHTML =
    '⚡ <strong>Launch offer</strong> — save 20% on the Farm Grant Toolkit &amp; Course through July 29. ' +
    'Use code <code>ASI2026</code> at checkout. ' +
    '<a href="/index.html#products">Shop now →</a>' +
    '<button class="promo-close" aria-label="Dismiss offer">&times;</button>';
  document.body.insertBefore(bar, document.body.firstChild);
  bar.querySelector('.promo-close').addEventListener('click', () => {
    bar.remove();
    try { localStorage.setItem(STORAGE, '1'); } catch (e) {}
  });
})();
*/

// ── Mobile nav toggle ─────────────────────────────────────
const toggle   = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Scroll-triggered fade-up ──────────────────────────────
const io = new IntersectionObserver(
  entries => entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('in');
      io.unobserve(el.target);      // fire once
    }
  }),
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// ── Hamburger → X animation ───────────────────────────────
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
  });
}

// ── Animated accent squares by the service-card icon ──────
// Injected here (not in markup) so every card stays clean and DRY.
// A 2×2 cluster sits in the top-right; on hover it scatters & brightens.
document.querySelectorAll('.service-card').forEach(card => {
  const layer = document.createElement('div');
  layer.className = 'svc-squares';
  for (let i = 0; i < 4; i++) {
    layer.appendChild(document.createElement('span'));
  }
  card.appendChild(layer);
});
