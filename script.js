/* =========================================
   SITE 2 — FORÊT — script.js
   ========================================= */

// ── Page Loader ───────────────────────────
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 600);
  }
  // Trigger hero animations after load
  document.querySelectorAll('.hero .fade-up, .hero .fade-right').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 130);
  });
});

// ── Navbar scroll ─────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Burger menu ───────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll reveal ─────────────────────────
const reveals = document.querySelectorAll('.fade-up:not(.hero .fade-up), .fade-right:not(.hero .fade-right)');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger siblings within the same parent
      const siblings = [...entry.target.closest('.container, .contact-inner, .cards-list, .values-row, .hero-cta, section')
        .querySelectorAll('.fade-up, .fade-right')].filter(el => !el.classList.contains('visible'));
      const pos = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.max(pos, 0) * 0.08}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── Offer cards hover effect ───────────────
document.querySelectorAll('.offer-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.cursor = 'pointer';
  });
});

// ── Contact form ──────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-green');
    const original = btn.textContent;
    btn.textContent = '✓ Message envoyé !';
    btn.style.background = '#4a6b50';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ── Smooth value counters ─────────────────
// (Optional: animate number if there were counters)
