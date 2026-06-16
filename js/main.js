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
