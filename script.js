/**
 * LUMINA Photography Portfolio — script.js
 * Premium interactive portfolio with all advanced features
 */

'use strict';

/* ═══════════════════════════════════════════════════════════
   PHOTO DATA
   ═══════════════════════════════════════════════════════════ */
const PHOTOS = [
  { id:1, src:'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', title:'Eternal Vows', cat:'wedding', tags:['wedding','love','italy'], exif:{camera:'Sony A7IV',lens:'85mm f/1.4',iso:'400',shutter:'1/500s'} },
  { id:2, src:'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=600&q=80', title:'Golden Savanna', cat:'wildlife', tags:['wildlife','africa','sunset'], exif:{camera:'Canon R5',lens:'500mm f/5.6',iso:'800',shutter:'1/2000s'} },
  { id:3, src:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80', title:'Patagonia Blues', cat:'travel', tags:['travel','landscape','patagonia'], exif:{camera:'Fuji GFX 100',lens:'23mm f/4',iso:'200',shutter:'1/250s'} },
  { id:4, src:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', title:'Studio Portrait', cat:'portrait', tags:['portrait','studio','golden'], exif:{camera:'Sony A7IV',lens:'50mm f/1.2',iso:'100',shutter:'1/200s'} },
  { id:5, src:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', title:'Alpine Silence', cat:'travel', tags:['travel','mountains','alps'], exif:{camera:'Nikon Z9',lens:'14-24mm f/2.8',iso:'100',shutter:'1/60s'} },
  { id:6, src:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', title:'Misty Valley', cat:'travel', tags:['travel','mist','valley'], exif:{camera:'Fuji GFX 100',lens:'32-64mm f/4',iso:'400',shutter:'1/125s'} },
  { id:7, src:'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=600&q=80', title:'Desert Dawn', cat:'travel', tags:['travel','desert','sunrise'], exif:{camera:'Sony A7RV',lens:'16-35mm f/2.8',iso:'200',shutter:'1/500s'} },
  { id:8, src:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80', title:'Arctic Fox', cat:'wildlife', tags:['wildlife','arctic','fox'], exif:{camera:'Canon R3',lens:'400mm f/2.8',iso:'3200',shutter:'1/1600s'} },
  { id:9, src:'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=600&q=80', title:'Steel & Glass', cat:'architecture', tags:['architecture','city','modern'], exif:{camera:'Leica M11',lens:'21mm f/3.4',iso:'200',shutter:'1/250s'} },
  { id:10,src:'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&q=80', title:'Morning Haze', cat:'travel', tags:['travel','morning','haze'], exif:{camera:'Fuji GFX 100',lens:'110mm f/2',iso:'100',shutter:'1/320s'} },
  { id:11,src:'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80', title:'The Craft', cat:'portrait', tags:['portrait','bts','photography'], exif:{camera:'Sony A7IV',lens:'35mm f/1.4',iso:'800',shutter:'1/400s'} },
  { id:12,src:'https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=600&q=80', title:'Filmmaker Eye', cat:'portrait', tags:['portrait','creative','eye'], exif:{camera:'Canon R5',lens:'85mm f/1.2',iso:'400',shutter:'1/320s'} },
  { id:13,src:'https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?w=600&q=80', title:'Beach Light', cat:'travel', tags:['travel','beach','ocean'], exif:{camera:'Nikon Z9',lens:'70-200mm f/2.8',iso:'200',shutter:'1/1000s'} },
  { id:14,src:'https://images.unsplash.com/photo-1488116908985-24034dd48a4a?w=600&q=80', title:'Monsoon', cat:'travel', tags:['travel','rain','monsoon'], exif:{camera:'Sony A7RV',lens:'28mm f/2',iso:'1600',shutter:'1/30s'} },
  { id:15,src:'https://images.unsplash.com/photo-1501286353178-1ec871814838?w=600&q=80', title:'Primate Study', cat:'wildlife', tags:['wildlife','primate','jungle'], exif:{camera:'Canon R3',lens:'200-400mm f/4',iso:'1600',shutter:'1/500s'} },
  { id:16,src:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', title:'Manhattan Grid', cat:'architecture', tags:['architecture','city','nyc'], exif:{camera:'Leica M11',lens:'28mm f/2.8',iso:'100',shutter:'1/500s'} },
  { id:17,src:'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80', title:'Bride in Light', cat:'wedding', tags:['wedding','bride','natural light'], exif:{camera:'Sony A7IV',lens:'85mm f/1.4',iso:'200',shutter:'1/640s'} },
  { id:18,src:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80', title:'Dusk Portrait', cat:'portrait', tags:['portrait','dusk','outdoor'], exif:{camera:'Fuji GFX 100',lens:'80mm f/1.7',iso:'400',shutter:'1/400s'} },
  { id:19,src:'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&q=80', title:'Marble Cathedral', cat:'architecture', tags:['architecture','church','marble'], exif:{camera:'Canon R5',lens:'16-35mm f/2.8',iso:'800',shutter:'1/60s'} },
  { id:20,src:'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80', title:'First Dance', cat:'wedding', tags:['wedding','dance','love'], exif:{camera:'Sony A7IV',lens:'35mm f/1.4',iso:'1600',shutter:'1/200s'} },
  { id:21,src:'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=600&q=80', title:'Arctic Light', cat:'travel', tags:['travel','arctic','northernlights'], exif:{camera:'Sony A7S III',lens:'14mm f/1.8',iso:'6400',shutter:'15s'} },
  { id:22,src:'https://images.unsplash.com/photo-1555169062-013468b47731?w=600&q=80', title:'Stag at Dawn', cat:'wildlife', tags:['wildlife','deer','scotland'], exif:{camera:'Canon R3',lens:'500mm f/5.6',iso:'1600',shutter:'1/800s'} },
  { id:23,src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title:'Minimal Space', cat:'architecture', tags:['architecture','minimal','interior'], exif:{camera:'Leica M11',lens:'35mm f/2',iso:'200',shutter:'1/125s'} },
  { id:24,src:'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&q=80', title:'Ocean Wedding', cat:'wedding', tags:['wedding','ocean','sunset'], exif:{camera:'Nikon Z9',lens:'85mm f/1.4',iso:'200',shutter:'1/500s'} },
];

const PAGE_SIZE = 12;
let visibleCount = PAGE_SIZE;
let activeFilter = 'all';
let searchQuery = '';
let currentLbIndex = 0;
let favorites = JSON.parse(localStorage.getItem('lumina_favs') || '[]');

/* ═══════════════════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loaderFill');
  const count = document.getElementById('loaderCount');
  let progress = 0;
  const tick = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) { progress = 100; clearInterval(tick); }
    fill.style.width = progress + '%';
    count.textContent = Math.floor(progress) + '%';
    if (progress === 100) setTimeout(() => loader.classList.add('hide'), 300);
  }, 80);
}

/* ═══════════════════════════════════════════════════════════
   CURSOR
   ═══════════════════════════════════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursorTrail');
  if (!cursor || window.matchMedia('(max-width:768px)').matches) return;
  let mx = 0, my = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  (function animTrail() {
    tx += (mx - tx) * 0.12;
    ty += (my - ty) * 0.12;
    trail.style.left = tx + 'px';
    trail.style.top = ty + 'px';
    requestAnimationFrame(animTrail);
  })();
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navProgress = document.getElementById('navProgress');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    navProgress.style.width = (y / maxScroll * 100) + '%';
    navbar.classList.toggle('scrolled', y > 50);
    navbar.classList.toggle('hidden', y > lastY + 10 && y > 200);
    if (y < lastY) navbar.classList.remove('hidden');
    lastY = y;
    updateActiveNav();
    document.getElementById('backTop').classList.toggle('visible', y > 500);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function updateActiveNav() {
  const sections = ['home','featured','gallery','about','services','blog','contact'];
  let current = 'home';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (window.scrollY >= el.offsetTop - 160) current = id;
  }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
}

/* ═══════════════════════════════════════════════════════════
   THEME
   ═══════════════════════════════════════════════════════════ */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('lumina_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('lumina_theme', next);
  });
}

/* ═══════════════════════════════════════════════════════════
   HERO SLIDESHOW
   ═══════════════════════════════════════════════════════════ */
function initHero() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');
  const numEl = document.getElementById('heroSlideNum');
  let current = 0;
  let timer;

  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    numEl.textContent = String(current + 1).padStart(2, '0');
  }
  function next() { goTo(current + 1); }

  timer = setInterval(next, 5000);
  dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); goTo(+d.dataset.slide); timer = setInterval(next, 5000); }));

  // Parallax on scroll
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.getElementById('heroBg').style.transform = `translateY(${y * 0.35}px)`;
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   GALLERY + MASONRY
   ═══════════════════════════════════════════════════════════ */
function getFilteredPhotos() {
  return PHOTOS.filter(p => {
    const catOk = activeFilter === 'all' || p.cat === activeFilter;
    const searchOk = !searchQuery || p.tags.some(t => t.includes(searchQuery)) || p.title.toLowerCase().includes(searchQuery) || p.cat.includes(searchQuery);
    return catOk && searchOk;
  });
}

function renderGallery() {
  const grid = document.getElementById('masonryGrid');
  const countEl = document.getElementById('galleryCount');
  const loadMore = document.getElementById('loadMoreBtn');
  const filtered = getFilteredPhotos();
  const toShow = filtered.slice(0, visibleCount);

  grid.innerHTML = '';
  toShow.forEach((photo, i) => {
    const isFav = favorites.includes(photo.id);
    const item = document.createElement('div');
    item.className = 'masonry-item';
    item.style.animationDelay = (i * 0.04) + 's';
    item.dataset.id = photo.id;
    item.dataset.cat = photo.cat;
    item.innerHTML = `
      <img data-src="${photo.src}" alt="${photo.title}" class="lazy" loading="lazy" />
      <div class="masonry-overlay">
        <span class="masonry-cat">${photo.cat}</span>
        <span class="masonry-title">${photo.title}</span>
      </div>
      <button class="masonry-fav${isFav?' liked':''}" data-id="${photo.id}" aria-label="Favorite">${isFav?'♥':'♡'}</button>
    `;
    item.addEventListener('click', e => {
      if (e.target.classList.contains('masonry-fav')) return;
      openLightbox(photo.id);
    });
    item.querySelector('.masonry-fav').addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(photo.id);
      renderGallery();
    });
    grid.appendChild(item);
  });

  observeLazyImages();
  countEl.textContent = `Showing ${toShow.length} of ${filtered.length} photos`;
  loadMore.style.display = toShow.length < filtered.length ? '' : 'none';
}

function initGallery() {
  renderGallery();

  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderGallery();
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      visibleCount = PAGE_SIZE;
      renderGallery();
    });
  });

  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    visibleCount = PAGE_SIZE;
    renderGallery();
  });
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    renderGallery();
    searchInput.focus();
  });
}

/* ═══════════════════════════════════════════════════════════
   LAZY LOADING
   ═══════════════════════════════════════════════════════════ */
function observeLazyImages() {
  const imgs = document.querySelectorAll('img.lazy:not(.observed)');
  if (!('IntersectionObserver' in window)) {
    imgs.forEach(img => { img.src = img.dataset.src; img.classList.add('loaded'); });
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const img = en.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => { img.classList.add('observed'); obs.observe(img); });
}

/* ═══════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════ */
function openLightbox(photoId) {
  const idx = PHOTOS.findIndex(p => p.id === photoId);
  if (idx === -1) return;
  currentLbIndex = idx;
  showLbPhoto(idx);
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showLbPhoto(idx) {
  const photo = PHOTOS[idx];
  const img = document.getElementById('lbImg');
  const title = document.getElementById('lbTitle');
  const exifEl = document.getElementById('lbExif');
  const favBtn = document.getElementById('lbFav');
  const dlBtn = document.getElementById('lbDownload');

  img.style.opacity = '0';
  img.src = photo.src.replace('w=600', 'w=1200');
  img.alt = photo.title;
  img.onload = () => { img.style.opacity = '1'; img.style.transition = 'opacity 0.3s'; };

  title.textContent = photo.title;
  const isFav = favorites.includes(photo.id);
  favBtn.textContent = isFav ? '♥' : '♡';
  favBtn.classList.toggle('liked', isFav);
  favBtn.dataset.id = photo.id;
  dlBtn.href = photo.src.replace('w=600', 'w=1920');

  exifEl.innerHTML = Object.entries(photo.exif).map(([k,v]) =>
    `<span class="lb-exif-item"><span class="lb-exif-label">${k}</span>${v}</span>`
  ).join('');
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbBackdrop').addEventListener('click', closeLightbox);

  document.getElementById('lbPrev').addEventListener('click', () => {
    currentLbIndex = (currentLbIndex - 1 + PHOTOS.length) % PHOTOS.length;
    showLbPhoto(currentLbIndex);
  });
  document.getElementById('lbNext').addEventListener('click', () => {
    currentLbIndex = (currentLbIndex + 1) % PHOTOS.length;
    showLbPhoto(currentLbIndex);
  });

  document.getElementById('lbFav').addEventListener('click', () => {
    const id = PHOTOS[currentLbIndex].id;
    toggleFav(id);
    const isFav = favorites.includes(id);
    document.getElementById('lbFav').textContent = isFav ? '♥' : '♡';
    document.getElementById('lbFav').classList.toggle('liked', isFav);
    renderGallery();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { currentLbIndex = (currentLbIndex - 1 + PHOTOS.length) % PHOTOS.length; showLbPhoto(currentLbIndex); }
    if (e.key === 'ArrowRight') { currentLbIndex = (currentLbIndex + 1) % PHOTOS.length; showLbPhoto(currentLbIndex); }
  });

  // Touch swipe
  let tsX = 0;
  lb.addEventListener('touchstart', e => { tsX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tsX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) { currentLbIndex = (currentLbIndex + 1) % PHOTOS.length; }
      else { currentLbIndex = (currentLbIndex - 1 + PHOTOS.length) % PHOTOS.length; }
      showLbPhoto(currentLbIndex);
    }
  }, { passive: true });
}

function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx === -1) favorites.push(id);
  else favorites.splice(idx, 1);
  localStorage.setItem('lumina_favs', JSON.stringify(favorites));
}

/* ═══════════════════════════════════════════════════════════
   BEFORE / AFTER SLIDER
   ═══════════════════════════════════════════════════════════ */
function initBeforeAfter() {
  const slider = document.getElementById('baSlider');
  const handle = document.getElementById('baHandle');
  const after = slider.querySelector('.ba-after');
  if (!slider) return;

  let dragging = false;

  function setPos(x) {
    const rect = slider.getBoundingClientRect();
    let pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    handle.style.left = (pct * 100) + '%';
    after.style.clipPath = `inset(0 ${(1 - pct) * 100}% 0 0)`;
  }

  handle.addEventListener('mousedown', () => { dragging = true; });
  window.addEventListener('mouseup', () => { dragging = false; });
  window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  slider.addEventListener('click', e => setPos(e.clientX));

  slider.addEventListener('touchstart', () => { dragging = true; }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
  window.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });

  // Init to 50%
  setPos(slider.getBoundingClientRect().left + slider.offsetWidth * 0.5);
}

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const delay = en.target.dataset.delay || 0;
        setTimeout(() => en.target.classList.add('visible'), +delay);
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════════════ */
function initCounters() {
  const nums = document.querySelectorAll('.stat-num');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const el = en.target;
        const target = +el.dataset.count;
        let cur = 0;
        const inc = target / 60;
        const timer = setInterval(() => {
          cur = Math.min(cur + inc, target);
          el.textContent = Math.floor(cur);
          if (cur >= target) clearInterval(timer);
        }, 24);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(n => obs.observe(n));
}

/* ═══════════════════════════════════════════════════════════
   TILT EFFECT
   ═══════════════════════════════════════════════════════════ */
function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = -(e.clientY - cy) / (rect.height / 2) * 6;
      const ry = (e.clientX - cx) / (rect.width / 2) * 6;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════════ */
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  function validateField(id, errId, check, msg) {
    const el = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el || !err) return true;
    const valid = check(el.value.trim());
    el.classList.toggle('error', !valid);
    err.textContent = valid ? '' : msg;
    return valid;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const v1 = validateField('firstName', 'firstNameError', v => v.length >= 2, 'Please enter your first name.');
    const v2 = validateField('lastName', 'lastNameError', v => v.length >= 2, 'Please enter your last name.');
    const v3 = validateField('emailInput', 'emailError', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email address.');
    const v4 = validateField('message', 'messageError', v => v.length >= 10, 'Please tell me a bit more (at least 10 characters).');
    if (!v1 || !v2 || !v3 || !v4) return;

    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoader = btn.querySelector('.btn-loader');
    btn.disabled = true;
    btnText.textContent = 'Sending…';
    btnLoader.classList.remove('hidden');

    setTimeout(() => {
      btn.disabled = false;
      btnText.textContent = 'Send Message';
      btnLoader.classList.add('hidden');
      document.getElementById('formSuccess').classList.remove('hidden');
      form.reset();
      setTimeout(() => document.getElementById('formSuccess').classList.add('hidden'), 5000);
    }, 2000);
  });
}

/* ═══════════════════════════════════════════════════════════
   UPLOAD
   ═══════════════════════════════════════════════════════════ */
function initUpload() {
  const area = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('uploadPreview');
  const browseBtn = document.getElementById('browseBtn');
  if (!area || !fileInput) return;

  browseBtn.addEventListener('click', () => fileInput.click());

  ['dragover', 'dragenter'].forEach(evt => area.addEventListener(evt, e => { e.preventDefault(); area.classList.add('drag-over'); }));
  ['dragleave', 'dragend', 'drop'].forEach(evt => area.addEventListener(evt, e => { e.preventDefault(); area.classList.remove('drag-over'); }));

  area.addEventListener('drop', e => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', () => handleFiles(fileInput.files));

  function handleFiles(files) {
    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = ev => addThumb(ev.target.result, file.name);
      reader.readAsDataURL(file);
    });
  }

  function addThumb(src, name) {
    const wrap = document.createElement('div');
    wrap.className = 'preview-thumb';
    wrap.innerHTML = `<img src="${src}" alt="${name}" /><button class="preview-remove">✕</button>`;
    wrap.querySelector('.preview-remove').addEventListener('click', () => wrap.remove());
    preview.appendChild(wrap);
  }
}

/* ═══════════════════════════════════════════════════════════
   BACK TO TOP
   ═══════════════════════════════════════════════════════════ */
function initBackTop() {
  document.getElementById('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ═══════════════════════════════════════════════════════════
   KEYBOARD GALLERY NAVIGATION (Arrow keys outside lightbox)
   ═══════════════════════════════════════════════════════════ */
function initKeyboardNav() {
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb.classList.contains('open')) return;
    const items = [...document.querySelectorAll('.masonry-item')];
    if (!items.length) return;
    const focused = document.querySelector('.masonry-item:focus');
    if (e.key === 'ArrowRight' && focused) {
      const next = items[items.indexOf(focused) + 1];
      if (next) { next.focus(); next.querySelector('img').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    }
    if (e.key === 'ArrowLeft' && focused) {
      const prev = items[items.indexOf(focused) - 1];
      if (prev) { prev.focus(); }
    }
    if (e.key === 'Enter' && focused) openLightbox(+focused.dataset.id);
  });
}

/* ═══════════════════════════════════════════════════════════
   CINEMATIC SLIDESHOW MODE
   ═══════════════════════════════════════════════════════════ */
let cinematicInterval = null;
function initCinematicMode() {
  // Double-tap hero to enter cinematic mode
  let lastTap = 0;
  document.querySelector('.hero')?.addEventListener('dblclick', () => {
    if (cinematicInterval) {
      clearInterval(cinematicInterval);
      cinematicInterval = null;
      return;
    }
    let i = 0;
    cinematicInterval = setInterval(() => {
      openLightbox(PHOTOS[i % PHOTOS.length].id);
      i++;
    }, 3500);
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initTheme();
  initNavbar();
  initHero();
  initGallery();
  initLightbox();
  initBeforeAfter();
  initScrollReveal();
  initCounters();
  initTilt();
  initContact();
  initUpload();
  initBackTop();
  initKeyboardNav();
  initCinematicMode();
  observeLazyImages();
});
