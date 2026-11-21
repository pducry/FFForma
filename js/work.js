// ─── Mobile thumb strips: generated from the full carousel, nothing left out ───
document.querySelectorAll('.work-item').forEach(item => {
  const name = item.textContent.trim();
  const strip = document.createElement('div');
  strip.className = 'work-thumbs';
  (item.dataset.images || '').split(',').filter(Boolean).forEach(src => {
    const img = document.createElement('img');
    img.src = src.replace('img/', 'img/t-');
    img.alt = name;
    img.loading = 'lazy';
    strip.appendChild(img);
  });
  if (item.dataset.video) {
    const v = document.createElement('video');
    v.className = 'thumb-video';
    v.dataset.src = item.dataset.video;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = 'none';
    strip.appendChild(v);
  }
  if (strip.children.length) item.after(strip);
});

// ─── Lightbox: tap a thumb, see it full — neighbours peek at the edges ───
const lightbox = document.getElementById('lightbox');
const lbTrack = document.getElementById('lbTrack');
const lbCount = document.getElementById('lbCount');
let lbTotal = 0;

function lbUpdateCount() {
  const slides = lbTrack.children;
  if (!slides.length) return;
  const step = slides[0].offsetWidth + 12;
  const idx = Math.max(0, Math.min(lbTotal - 1, Math.round(lbTrack.scrollLeft / step)));
  lbCount.textContent = (idx + 1) + ' / ' + lbTotal;
}

function lbOpen(images, index) {
  lbTrack.innerHTML = '';
  images.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'lb-slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    slide.appendChild(img);
    lbTrack.appendChild(slide);
  });
  lbTotal = images.length;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const slide = lbTrack.children[index];
  lbTrack.scrollLeft = slide.offsetLeft - (lbTrack.clientWidth - slide.offsetWidth) / 2;
  lbUpdateCount();
}

function lbClose() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  lbTrack.innerHTML = '';
}

lbTrack.addEventListener('scroll', lbUpdateCount, { passive: true });
document.getElementById('lbClose').addEventListener('click', lbClose);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('is-open')) lbClose();
});

document.addEventListener('click', (e) => {
  const thumb = e.target.closest('.work-thumbs img');
  if (!thumb) return;
  const strip = thumb.parentElement;
  const item = strip.previousElementSibling;
  const images = (item.dataset.images || '').split(',').filter(Boolean);
  if (!images.length) return;
  const index = [...strip.querySelectorAll('img')].indexOf(thumb);
  lbOpen(images, Math.max(0, index));
});

// ─── Thumb videos: stream only while visible ───
document.querySelectorAll('.thumb-video').forEach(v => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (!v.src) v.src = v.dataset.src;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.3 });
  io.observe(v);
});

// ─── Work hover preview (image carousel or video) ───
const preview = document.getElementById('workPreview');
const previewImg = preview.querySelector('img');
const previewVid = preview.querySelector('video');
const canHover = window.matchMedia('(hover: hover)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let cycleTimer = null;

if (canHover) {
  document.querySelectorAll('.work-item').forEach(item => {
    const images = (item.dataset.images || '').split(',').filter(Boolean);
    const video = item.dataset.video;
    let index = 0;

    item.addEventListener('mouseenter', () => {
      if (video) {
        previewImg.style.display = 'none';
        previewVid.style.display = 'block';
        if (previewVid.getAttribute('src') !== video) previewVid.src = video;
        if (!reducedMotion) previewVid.play().catch(() => {});
        preview.classList.add('is-visible');
        return;
      }
      if (!images.length) return;
      previewVid.pause();
      previewVid.style.display = 'none';
      previewImg.style.display = 'block';
      index = 0;
      previewImg.src = images[0];
      preview.classList.add('is-visible');
      if (!reducedMotion && images.length > 1) {
        cycleTimer = setInterval(() => {
          index = (index + 1) % images.length;
          previewImg.src = images[index];
        }, 300);
      }
    });

    item.addEventListener('mousemove', (e) => {
      // Flip to the left of the cursor near the right edge
      const flip = e.clientX + preview.offsetWidth + 40 > window.innerWidth;
      preview.style.left = e.clientX + 'px';
      preview.style.top = e.clientY + 'px';
      preview.style.transform = flip
        ? 'translate(calc(-100% - 20px), -50%)'
        : 'translate(20px, -50%)';
    });

    item.addEventListener('mouseleave', () => {
      preview.classList.remove('is-visible');
      previewVid.pause();
      clearInterval(cycleTimer);
    });
  });
}
