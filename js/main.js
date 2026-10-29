/* ============================================================
   Ashden Manor — main.js
   Nav, reveal-on-scroll, form validation, image fallback.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky nav shadow ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  function closeMenu() {
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    links.classList.remove('is-open');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      links.classList.toggle('is-open', !isOpen);
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target)) closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Image fallback ---------- */
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = 'true';
      const wrap = document.createElement('div');
      wrap.className = 'img-fallback';
      wrap.setAttribute('role', 'img');
      wrap.setAttribute('aria-label', img.alt || 'Image placeholder');
      wrap.textContent = 'Official Ashden Manor photograph — replace this image before launch.';
      img.replaceWith(wrap);
    });
  });

  /* ---------- Enquiry form validation ---------- */
  const form = document.getElementById('enquiryForm');
  const success = document.getElementById('formSuccess');

  if (form && success) {
    function setError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const error = document.getElementById(fieldId + '-error');
      if (!field || !error) return;
      const wrapper = field.closest('.field');
      if (!wrapper) return;
      if (message) {
        wrapper.classList.add('has-error');
        field.setAttribute('aria-invalid', 'true');
        error.textContent = message;
      } else {
        wrapper.classList.remove('has-error');
        field.removeAttribute('aria-invalid');
        error.textContent = '';
      }
    }

    function validateEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('fullName');
      const email = document.getElementById('email');

      if (!name.value.trim()) {
        setError('fullName', 'Please enter your full name.');
        valid = false;
      } else {
        setError('fullName', '');
      }

      if (!email.value.trim()) {
        setError('email', 'Please enter your email address.');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        setError('email', 'Please enter a valid email address.');
        valid = false;
      } else {
        setError('email', '');
      }

      if (!valid) {
        const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
        if (firstError) firstError.focus();
        success.classList.remove('is-visible');
        return;
      }

      /* Demo success — no data is sent or stored */
      success.classList.add('is-visible');
      form.reset();
      document.querySelectorAll('.field.has-error').forEach(function (f) {
        f.classList.remove('has-error');
      });
      document.querySelectorAll('.error-msg').forEach(function (el) { el.textContent = ''; });
      document.querySelectorAll('[aria-invalid]').forEach(function (el) {
        el.removeAttribute('aria-invalid');
      });
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    /* Clear errors on input/change */
    ['fullName', 'email', 'date', 'guests', 'message'].forEach(function (id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', function () { setError(id, ''); });
      el.addEventListener('change', function () { setError(id, ''); });
    });
  }
})();