// ─── ASCII easter egg: the word emerges from dither waves ───
(function () {
  const egg = document.getElementById('asciiEgg');
  const canvas = document.getElementById('asciiCanvas');
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const CELL_W = 11, CELL_H = 15;
  const CHARS = ' ··::;=+*#%@';

  // Dither waves: fbm noise quantized to a few shades of gray through a
  // Bayer matrix — glyphs stand in for pixels.
  const LEVELS = 5;
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

  let shades = [], shadesTheme = '';
  function grayRamp() {
    const th = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    if (th !== shadesTheme) {
      shadesTheme = th;
      const bg = th === 'light' ? [242, 240, 236] : [11, 10, 9];
      const fg = th === 'light' ? [29, 28, 26] : [232, 230, 226];
      shades = [];
      for (let l = 0; l < LEVELS; l++) {
        const t = l / (LEVELS - 1);
        shades.push('rgb(' + Math.round(bg[0] + (fg[0] - bg[0]) * t) + ',' +
          Math.round(bg[1] + (fg[1] - bg[1]) * t) + ',' +
          Math.round(bg[2] + (fg[2] - bg[2]) * t) + ')');
      }
    }
    return shades;
  }

  function nhash(x, y) {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  function vnoise(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = nhash(xi, yi), b = nhash(xi + 1, yi);
    const c = nhash(xi, yi + 1), d = nhash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (d - c) * u * v;
  }
  function fbm(x, y) {
    let v = 0, a = 0.5;
    for (let o = 0; o < 3; o++) { v += a * vnoise(x, y); x *= 2; y *= 2; a *= 0.5; }
    return v;
  }

  let cols = 0, rows = 0, mask = [], heat = [];
  const cursor = { x: -9999, y: -9999 };
  const pulses = [];
  let lastPointer = 0;

  function build() {
    const w = egg.clientWidth, h = egg.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = '700 13px "Geist Mono", monospace';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    cols = Math.ceil(w / CELL_W);
    rows = Math.ceil(h / CELL_H);

    // Word mask: draw FFForma offscreen and sample it into the grid
    const off = document.createElement('canvas');
    off.width = cols;
    off.height = rows;
    const octx = off.getContext('2d');
    octx.fillStyle = '#fff';
    let size = rows * 0.62;
    octx.font = '700 ' + size + 'px "Geist Mono", monospace';
    while (octx.measureText('FFForma').width > cols * 0.84 && size > 4) {
      size -= 1;
      octx.font = '700 ' + size + 'px "Geist Mono", monospace';
    }
    octx.textAlign = 'center';
    octx.textBaseline = 'middle';
    octx.fillText('FFForma', cols / 2, rows / 2 + rows * 0.03);
    const px = octx.getImageData(0, 0, cols, rows).data;

    mask = new Float32Array(cols * rows);
    heat = new Float32Array(cols * rows);
    for (let i = 0; i < cols * rows; i++) {
      mask[i] = px[i * 4 + 3] / 255;
    }
  }

  function draw(t) {
    const w = egg.clientWidth, h = egg.clientHeight;
    ctx.clearRect(0, 0, w, h);
    const time = t * 0.001;

    // A quiet beam sweeps the field when the pointer has been away a while
    const idle = t - lastPointer > 3500;
    const beamX = ((time * 60) % (w + 600)) - 300;

    const rect = canvas.getBoundingClientRect();
    const cx = cursor.x - rect.left;
    const cy = cursor.y - rect.top;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const x = c * CELL_W + CELL_W / 2;
        const y = r * CELL_H + CELL_H / 2;

        // Cursor lens feeds the heat map; heat decays slowly
        const dx = x - cx, dy = y - cy;
        const d2 = dx * dx + dy * dy;
        let add = Math.exp(-d2 / 14000);
        if (idle) {
          const bd = Math.abs(x - beamX);
          add = Math.max(add, Math.exp(-(bd * bd) / 26000) * 0.55);
        }
        for (let p = 0; p < pulses.length; p++) {
          const pu = pulses[p];
          const pr = (time - pu.t0) * 320;
          const pd = Math.abs(Math.hypot(x - pu.x, y - pu.y) - pr);
          add = Math.max(add, Math.exp(-(pd * pd) / 3200) * Math.max(0, 1 - (time - pu.t0) / 1.6));
        }
        heat[i] = Math.max(heat[i] * 0.94, Math.min(1, add));

        // Flowing wave field, dimmed inside the letters so the word reads
        const wave = fbm(x / h * 2.3 + time * 0.12, y / h * 2.3 - time * 0.05);
        const crest = Math.min(1, Math.max(0, (wave - 0.3) * 2.2));
        const ambient = crest * 0.4 * (1 - mask[i] * 0.6);
        const ghost = mask[i] * (0.52 + crest * 0.1);
        const reveal = heat[i] * (0.2 + mask[i] * 0.8);
        const I = Math.min(1, ambient + ghost + reveal);

        // Ordered dithering: quantize through the Bayer threshold
        const qf = I * (LEVELS - 1);
        let level = Math.floor(qf);
        if (qf - level > BAYER[(r & 3) * 4 + (c & 3)] / 16) level++;
        if (level === 0) continue;
        const ci = Math.round(level / (LEVELS - 1) * (CHARS.length - 1));
        ctx.fillStyle = grayRamp()[level];
        ctx.fillText(CHARS[ci], x, y);
      }
    }

    for (let p = pulses.length - 1; p >= 0; p--) {
      if (time - pulses[p].t0 > 1.8) pulses.splice(p, 1);
    }
  }

  function staticDraw() {
    // Reduced motion: the word, plainly, no shimmer
    const w = egg.clientWidth, h = egg.clientHeight;
    ctx.clearRect(0, 0, w, h);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const qf = mask[i] * 0.85 * (LEVELS - 1);
        let level = Math.floor(qf);
        if (qf - level > BAYER[(r & 3) * 4 + (c & 3)] / 16) level++;
        if (level === 0) continue;
        const ci = Math.round(level / (LEVELS - 1) * (CHARS.length - 1));
        ctx.fillStyle = grayRamp()[level];
        ctx.fillText(CHARS[ci], c * CELL_W + CELL_W / 2, r * CELL_H + CELL_H / 2);
      }
    }
  }

  let running = false, rafId = null;

  function loop(t) {
    draw(t);
    if (running) rafId = requestAnimationFrame(loop);
  }

  // Animate only while on screen
  const io = new IntersectionObserver((entries) => {
    const visible = entries[0].isIntersecting;
    if (reducedMotion) { if (visible) staticDraw(); return; }
    if (visible && !running) { running = true; rafId = requestAnimationFrame(loop); }
    if (!visible && running) { running = false; cancelAnimationFrame(rafId); }
  });

  egg.addEventListener('pointermove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    lastPointer = performance.now();
  });

  egg.addEventListener('pointerleave', () => {
    cursor.x = -9999;
    cursor.y = -9999;
  });

  egg.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    pulses.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t0: performance.now() * 0.001 });
    lastPointer = performance.now();
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { build(); if (reducedMotion) staticDraw(); }, 150);
  });

  // Wait for Geist Mono so the mask is drawn with the real letterforms
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => {
    build();
    if (reducedMotion) staticDraw();
    io.observe(egg);
  });
})();
