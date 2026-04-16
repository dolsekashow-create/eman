/* ===== EMAN WARSAW — SCRIPT.JS ===== */
document.addEventListener('DOMContentLoaded', () => {

  /* === Preloader === */
  const pre = document.getElementById('preloader');
  window.addEventListener('load', () => setTimeout(() => pre.classList.add('hidden'), 600));
  setTimeout(() => pre.classList.add('hidden'), 3000);

  /* === Navbar scroll === */
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

  /* === Hamburger === */
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  ham.addEventListener('click', () => { ham.classList.toggle('active'); links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { ham.classList.remove('active'); links.classList.remove('open'); }));

  /* === Hero video rotation === */
  const vids = document.querySelectorAll('.hero-videos video');
  const dots = document.querySelectorAll('.hero-dots span');
  let cur = 0, timer;
  function showVid(i) {
    vids.forEach((v, idx) => {
      v.classList.remove('active');
      if (idx === i) { v.currentTime = 0; v.play().catch(() => {}); v.classList.add('active'); }
      else v.pause();
    });
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    cur = i;
  }
  function autoPlay() { clearInterval(timer); timer = setInterval(() => showVid((cur + 1) % vids.length), 7000); }
  if (vids.length) { showVid(0); autoPlay(); }
  dots.forEach(d => d.addEventListener('click', () => { showVid(+d.dataset.i); autoPlay(); }));

  /* === FAB === */
  const fabBtn = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');
  fabBtn.addEventListener('click', () => { fabBtn.classList.toggle('active'); fabMenu.classList.toggle('open'); });
  document.addEventListener('click', e => { if (!e.target.closest('.fab-wrap')) { fabBtn.classList.remove('active'); fabMenu.classList.remove('open'); } });

  /* === Language System (PL / AR / DE / EN) === */
  const langDropdown = document.getElementById('langDropdown');
  const langBtnLabel = document.getElementById('langBtnLabel');
  const langButtons = document.querySelectorAll('.lang-menu button');
  let currentLang = 'pl';

  // Toggle dropdown
  langDropdown.addEventListener('click', e => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => langDropdown.classList.remove('open'));

  const langNames = { pl: 'Polski', ar: 'العربية', de: 'Deutsch', en: 'English' };
  const rtlLangs = ['ar'];

  langButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const lang = btn.dataset.lang;
      if (lang === currentLang) { langDropdown.classList.remove('open'); return; }

      currentLang = lang;
      const isRtl = rtlLangs.includes(lang);

      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      document.body.classList.toggle('rtl', isRtl);

      langBtnLabel.textContent = langNames[lang];
      langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

      // Swap all text
      document.querySelectorAll('[data-pl]').forEach(el => {
        const text = el.dataset[lang];
        if (!text) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = text;
        else el.innerHTML = text;
      });

      langDropdown.classList.remove('open');
    });
  });

  /* === Scroll reveal === */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* === Active nav link === */
  const secs = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const y = scrollY + 120;
    secs.forEach(s => {
      const l = document.querySelector(`.nav-links a[href="#${s.id}"]`);
      if (l) l.classList.toggle('active', y >= s.offsetTop && y < s.offsetTop + s.offsetHeight);
    });
  });

  /* === Smooth scroll === */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
