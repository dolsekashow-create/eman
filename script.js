/* ===== EMAN WARSAW — SCRIPT.JS ===== */
document.addEventListener('DOMContentLoaded', () => {

  /* Preloader */
  const pre = document.getElementById('preloader');
  window.addEventListener('load', () => setTimeout(() => pre.classList.add('hidden'), 600));
  setTimeout(() => pre.classList.add('hidden'), 3000);

  /* Navbar scroll */
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

  /* Hamburger */
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  ham.addEventListener('click', () => { ham.classList.toggle('active'); links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { ham.classList.remove('active'); links.classList.remove('open'); }));

  /* Hero video rotation */
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

  /* FAB */
  const fabBtn = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');
  fabBtn.addEventListener('click', () => { fabBtn.classList.toggle('active'); fabMenu.classList.toggle('open'); });
  document.addEventListener('click', e => { if (!e.target.closest('.fab-wrap')) { fabBtn.classList.remove('active'); fabMenu.classList.remove('open'); } });

  /* Language toggle (PL / AR) */
  const langBtn = document.getElementById('langToggle');
  let isAr = false;
  langBtn.addEventListener('click', () => {
    isAr = !isAr;
    document.documentElement.lang = isAr ? 'ar' : 'pl';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isAr);
    langBtn.textContent = isAr ? 'Polski' : 'العربية';
    document.querySelectorAll('[data-pl][data-ar]').forEach(el => {
      const t = isAr ? el.dataset.ar : el.dataset.pl;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t;
      else el.innerHTML = t;
    });
  });

  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Active nav */
  const secs = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const y = scrollY + 120;
    secs.forEach(s => {
      const l = document.querySelector(`.nav-links a[href="#${s.id}"]`);
      if (l) l.classList.toggle('active', y >= s.offsetTop && y < s.offsetTop + s.offsetHeight);
    });
  });

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
