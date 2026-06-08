/* ============================================================
   FLOWERS LAW FIRM — site interactions
   Mobile nav · FAQ accordion · scroll reveal · consultation form
   Vanilla JS, no dependencies. Loaded with `defer`.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- mobile nav ---------- */
  function initMenu() {
    var btn = document.querySelector('.menu-btn');
    var nav = document.querySelector('.mobile-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if (!q || !a) return;
      q.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        // close siblings for a clean single-open accordion
        var group = item.parentElement;
        group.querySelectorAll('.faq-item.open').forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            var oa = other.querySelector('.faq-a');
            if (oa) oa.style.maxHeight = null;
            var oq = other.querySelector('.faq-q');
            if (oq) oq.setAttribute('aria-expanded', 'false');
          }
        });
        if (isOpen) {
          item.classList.remove('open');
          a.style.maxHeight = null;
          q.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          a.style.maxHeight = a.scrollHeight + 'px';
          q.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- consultation form ---------- */
  function initForm() {
    var form = document.getElementById('consult-form');
    if (!form) return;
    var success = document.getElementById('form-success');

    function setError(field, on) {
      var wrap = field.closest('.field');
      if (wrap) wrap.classList.toggle('invalid', !!on);
    }

    function validateField(field) {
      var val = (field.value || '').trim();
      var ok = true;
      if (field.hasAttribute('required') && !val) ok = false;
      if (ok && field.type === 'email' && val) {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      }
      if (ok && field.type === 'tel' && val) {
        var digits = val.replace(/\D/g, '');
        ok = digits.length >= 10;
      }
      setError(field, !ok);
      return ok;
    }

    var fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(function (f) {
      f.addEventListener('blur', function () { validateField(f); });
      f.addEventListener('input', function () {
        var wrap = f.closest('.field');
        if (wrap && wrap.classList.contains('invalid')) validateField(f);
      });
    });

    var submitBtn = form.querySelector('[type="submit"]');

    function showSuccess() {
      var name = (form.querySelector('[name="name"]') || {}).value || '';
      var first = name.trim().split(/\s+/)[0] || 'there';
      if (success) {
        var nameOut = document.getElementById('success-name');
        if (nameOut) nameOut.textContent = first;
        form.style.display = 'none';
        success.classList.add('show');
        window.va?.('event', { name: 'consultation_request' });
        var top = success.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    }

    function showFormError() {
      var existing = form.querySelector('.form-send-err');
      if (existing) return;
      var msg = document.createElement('p');
      msg.className = 'form-send-err';
      msg.textContent = 'Something went wrong sending your message. Please call (919) 438-3357 or email vetclaims@flowerslawfirm.info directly.';
      form.querySelector('.form-foot').appendChild(msg);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var allOk = true;
      var firstBad = null;
      fields.forEach(function (f) {
        var ok = validateField(f);
        if (!ok && !firstBad) firstBad = f;
        if (!ok) allOk = false;
      });
      if (!allOk) {
        if (firstBad) firstBad.focus();
        return;
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      // If EmailJS SDK didn't load, fall through to error message
      if (typeof emailjs === 'undefined') {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Request My Free Consultation'; }
        showFormError();
        return;
      }

      /* CONFIGURE: replace with your EmailJS Service ID and Template ID */
      emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', form)
        .then(function () {
          showSuccess();
        }, function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Request My Free Consultation'; }
          showFormError();
        });
    });
  }

  /* ---------- phone input light formatting ---------- */
  function initPhoneFmt() {
    var phone = document.querySelector('input[type="tel"]');
    if (!phone) return;
    phone.addEventListener('input', function () {
      var d = phone.value.replace(/\D/g, '').slice(0, 10);
      var out = d;
      if (d.length > 6) out = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
      else if (d.length > 3) out = '(' + d.slice(0, 3) + ') ' + d.slice(3);
      else if (d.length > 0) out = '(' + d;
      phone.value = out;
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    initMenu();
    initFaq();
    initReveal();
    initForm();
    initPhoneFmt();
  });
})();
