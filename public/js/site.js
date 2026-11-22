const I18N = {
  en: {
    'nav.index': 'Index',
    'nav.research': 'Research',
    'nav.information': 'Information',
    'footer.copy': '© 2026 Forma',
    'footer.inquire': 'Inquire',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'hero.line': 'Form Follows Function.',
    'note.images': 'Images on file',
    'note.video': 'Video on file',
    'note.objects': 'No images on file',
    'objects.h': 'Objects',
    'objects.p': 'No product images are in the repo.',
    'research.h': 'Research',
    'research.lead': 'Six experiments already on the site, dated the day they were added.',
    'exp.all': 'All',
    'exp.001': 'A radial share dial with spring physics, sector highlights and rotary drag.',
    'exp.002': 'Words light up as you read. The edge is the cursor.',
    'exp.003': 'A liquid glass lens over old landscapes, with every parameter on a slider.',
    'exp.004': 'An AI thinking orb, fully parametric, with CSS and React output.',
    'exp.005': 'Avatars with a magnetic field: spring physics, parallax depth, and a polarity switch.',
    'exp.006': 'An infinite gallery that bends with your scroll velocity.',
    'tag.interaction': 'interaction',
    'tag.type': 'type',
    'tag.scroll': 'scroll',
    'tag.material': 'material',
    'tag.motion': 'motion',
    'tag.gallery': 'gallery',
    'info.h': 'Information',
    'info.engineered': 'Design, Engineered.',
    'info.line': 'Form Follows Function.',
    'legal.h': 'Legal',
    'legal.p': 'Legal text is not in the repo.',
    'contact.h': 'Contact',
    'contact.p': 'Book a call. No email address is published here.',
    'contact.book': 'Book a call',
    'inq.h': 'Inquire',
    'inq.step1': 'Pick services',
    'inq.step2': 'Details',
    'inq.step3': 'Budget / timeline',
    'inq.step4': 'Message',
    'inq.cd': 'Creative Direction',
    'inq.brand': 'Brand',
    'inq.product': 'Product',
    'inq.website': 'Website',
    'inq.others': 'Others',
    'inq.name': 'Name',
    'inq.email': 'Email',
    'inq.budget': 'Budget',
    'inq.timeline': 'Timeline',
    'inq.message': 'Message',
    'inq.next': 'Next →',
    'inq.back': 'Back',
    'inq.send': 'Send →',
    'inq.unconfigured': 'This form is not connected yet.',
    'inq.error': 'Something went wrong. Try again, or book a call.',
    'inq.sent': 'Sent.'
  },
  pt: {
    'nav.index': 'Índice',
    'nav.research': 'Pesquisa',
    'nav.information': 'Informação',
    'footer.copy': '© 2026 Forma',
    'footer.inquire': 'Consulta',
    'footer.legal': 'Legal',
    'footer.contact': 'Contato',
    'hero.line': 'Form Follows Function.',
    'note.images': 'Imagens no arquivo',
    'note.video': 'Vídeo no arquivo',
    'note.objects': 'Nenhuma imagem no arquivo',
    'objects.h': 'Objetos',
    'objects.p': 'Não há fotos de produto no repositório.',
    'research.h': 'Pesquisa',
    'research.lead': 'Seis experimentos que já estavam no site, datados do dia em que entraram.',
    'exp.all': 'Tudo',
    'exp.001': 'Um dial radial de partilha, com física de mola, setores e arrasto.',
    'exp.002': 'As palavras acendem enquanto você lê. A borda é o cursor.',
    'exp.003': 'Uma lente de vidro líquido sobre paisagens antigas, com cada parâmetro num slider.',
    'exp.004': 'Um orbe de pensamento de AI, paramétrico, com saída em CSS e React.',
    'exp.005': 'Avatares com campo magnético: física de mola, profundidade e um interruptor de polaridade.',
    'exp.006': 'Uma galeria infinita que entorta com a velocidade do scroll.',
    'tag.interaction': 'interação',
    'tag.type': 'tipo',
    'tag.scroll': 'scroll',
    'tag.material': 'material',
    'tag.motion': 'movimento',
    'tag.gallery': 'galeria',
    'info.h': 'Informação',
    'info.engineered': 'Design, Engineered.',
    'info.line': 'Form Follows Function.',
    'legal.h': 'Legal',
    'legal.p': 'Não há texto legal no repositório.',
    'contact.h': 'Contato',
    'contact.p': 'Agende uma call. Nenhum email é publicado aqui.',
    'contact.book': 'Agendar uma call',
    'inq.h': 'Consulta',
    'inq.step1': 'Escolha serviços',
    'inq.step2': 'Detalhes',
    'inq.step3': 'Orçamento / prazo',
    'inq.step4': 'Mensagem',
    'inq.cd': 'Direção criativa',
    'inq.brand': 'Marca',
    'inq.product': 'Produto',
    'inq.website': 'Website',
    'inq.others': 'Outros',
    'inq.name': 'Nome',
    'inq.email': 'Email',
    'inq.budget': 'Orçamento',
    'inq.timeline': 'Prazo',
    'inq.message': 'Mensagem',
    'inq.next': 'Próximo →',
    'inq.back': 'Voltar',
    'inq.send': 'Enviar →',
    'inq.unconfigured': 'Este formulário ainda não está ligado.',
    'inq.error': 'Algo deu errado. Tente de novo, ou agende uma call.',
    'inq.sent': 'Enviado.'
  }
};

const store = {
  get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
};

function langFromQuery() {
  try {
    const q = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    if (q === 'pt' || q === 'pt-br') return 'pt';
    if (q === 'en') return 'en';
  } catch (_) {}
  return null;
}

let currentLang = langFromQuery()
  || store.get('ffforma-lang')
  || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en');

function t(key) {
  const dict = I18N[currentLang] || I18N.en;
  return dict[key] !== undefined ? dict[key] : (I18N.en[key] || '');
}

function applyLang(lang) {
  currentLang = lang === 'pt' ? 'pt' : 'en';
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const text = t(el.dataset.i18n);
    if (text) el.textContent = text;
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  store.set('ffforma-lang', currentLang);
  renderNow();
  renderInquireChrome();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    } catch (_) {}
    applyLang(lang);
  });
});

document.documentElement.classList.add('js');

function pad(n) { return String(n).padStart(2, '0'); }
function tick() {
  const d = new Date();
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? '+' : '-';
  const abs = Math.abs(off);
  const text = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} UTC${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
  document.querySelectorAll('[data-clock]').forEach((el) => { el.textContent = text; });
}
tick();
setInterval(tick, 1000);

let currentCase = null;
function renderNow() {
  const label = document.getElementById('nowLabel');
  if (!label || !currentCase) return;
  const note = t(currentCase.dataset.noteKey || '') || currentCase.dataset.note || '';
  label.textContent = `${currentCase.dataset.index} ${currentCase.dataset.name} / ${note} · ${currentCase.dataset.year}`;
}

const cases = [...document.querySelectorAll('.case')];
function trackCase() {
  if (!cases.length) return;
  const line = window.innerHeight * 0.42;
  let best = null;
  for (const section of cases) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= line && rect.bottom >= line) best = section;
  }
  currentCase = best || cases[0];
  renderNow();
}
if (cases.length) {
  trackCase();
  window.addEventListener('scroll', trackCase, { passive: true });
}

const modules = document.querySelectorAll('.module');
if (modules.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  modules.forEach((el) => io.observe(el));
} else {
  modules.forEach((el) => el.classList.add('is-in'));
}

const tagbar = document.getElementById('tagbar');
if (tagbar) {
  tagbar.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-tag]');
    if (!btn) return;
    const tag = btn.dataset.tag;
    tagbar.querySelectorAll('[data-tag]').forEach((item) => item.classList.toggle('is-on', item === btn));
    document.querySelectorAll('[data-tags]').forEach((row) => {
      const tags = (row.dataset.tags || '').split(' ');
      row.hidden = tag !== 'all' && !tags.includes(tag);
    });
  });
}

const inquire = document.getElementById('inquire');
let inquireStep = 1;
function renderInquireChrome() {
  if (!inquire) return;
  const kicker = document.getElementById('inquireKicker');
  const next = document.getElementById('inquireNext');
  if (kicker) kicker.textContent = t(`inq.step${inquireStep}`);
  if (next) next.textContent = inquireStep === 4 ? t('inq.send') : t('inq.next');
  inquire.querySelectorAll('.progress span').forEach((bar, index) => {
    bar.classList.toggle('on', index < inquireStep);
  });
}
function showInquireStep(step) {
  inquireStep = step;
  inquire.querySelectorAll('[data-step]').forEach((panel) => {
    panel.hidden = Number(panel.dataset.step) !== step;
  });
  const back = document.getElementById('inquireBack');
  if (back) back.hidden = step === 1;
  syncInquireNext();
  renderInquireChrome();
}
function syncInquireNext() {
  const next = document.getElementById('inquireNext');
  if (!next || !inquire) return;
  let ok = false;
  const field = (name) => inquire.querySelector(`[name="${name}"]`);
  if (inquireStep === 1) ok = inquire.querySelectorAll('input[name="services"]:checked').length > 0;
  if (inquireStep === 2) ok = field('name').value.trim() && field('email').validity.valid && field('email').value.trim();
  if (inquireStep === 3) ok = field('budget').value.trim() && field('timeline').value.trim();
  if (inquireStep === 4) ok = field('message').value.trim();
  next.disabled = !ok;
}
if (inquire) {
  inquire.addEventListener('input', syncInquireNext);
  inquire.addEventListener('change', syncInquireNext);
  document.getElementById('inquireBack')?.addEventListener('click', () => {
    if (inquireStep > 1) showInquireStep(inquireStep - 1);
  });
  document.getElementById('inquireNext')?.addEventListener('click', async () => {
    if (inquireStep < 4) {
      showInquireStep(inquireStep + 1);
      return;
    }
    const status = document.getElementById('inquireStatus');
    if (inquire.action.indexOf('REPLACE_WITH_FORMSPREE_ID') !== -1) {
      status.hidden = false;
      status.textContent = t('inq.unconfigured');
      return;
    }
    const next = document.getElementById('inquireNext');
    next.disabled = true;
    try {
      const res = await fetch(inquire.action, {
        method: 'POST',
        body: new FormData(inquire),
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('inquire');
      inquire.reset();
      status.hidden = false;
      status.textContent = t('inq.sent');
      showInquireStep(1);
    } catch (_) {
      status.hidden = false;
      status.textContent = t('inq.error');
      next.disabled = false;
    }
  });
  showInquireStep(1);
}

applyLang(currentLang);
