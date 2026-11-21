// Language, theme, lab tag filter, and the contact note.
const I18N = {
  en: {
    'nav.work': 'Work',
    'nav.experiments': 'Experiments',
    'nav.info': 'Info',
    'nav.contact': 'Contact',
    'home.sig': 'Forma is a side project for disruptive visuals, brand systems, and the occasional product.',
    'home.lead': 'Creative resources by Pedro Julien. The cases are the images on file. Process notes are still open.',
    'home.work': 'Work',
    'home.lab': 'Experiments',
    'info.h': 'Info',
    'info.p1': 'Forma is Pedro Julien’s design side project. The work is creative resources: disruptive visuals, branding, and a bit of product.',
    'info.p2': 'Mentoring stays a small door on the contact page. This site is not a studio, and it has no price list.',
    'info.voice': 'Voice',
    'info.voice.note': 'Two lines. Option A is the one in use until Pedro picks.',
    'info.a': 'Option A — in use',
    'info.b': 'Option B',
    'info.lineA': 'Forma is a side project for disruptive visuals, brand systems, and the occasional product.',
    'info.lineB': 'Make the mark. Then put it on something real.',
    'work.h': 'Work',
    'work.lead': 'Five cases, plus Objects for posters and apparel. No industry labels are shown, because none are in the repo.',
    'work.count': '{n} images on file',
    'work.video': '1 video on file',
    'work.none': 'No images on file yet',
    'objects.h': 'Objects',
    'objects.p': 'Posters and apparel, including pieces from Pedro’s t-shirt store. No product images are in the repo yet.',
    'case.summary': 'Summary',
    'case.research': 'Research / moodboard',
    'case.concept': 'Concept',
    'case.construction': 'Construction of the mark',
    'case.system': 'Brand system',
    'case.application': 'Application',
    'case.renders': '3D / mockup renders',
    'case.link': 'Public link already on the previous site',
    'case.files': '{n} images on file. Captions are not written.',
    'case.video': 'Video on file. It plays muted, as it did on the previous site.',
    'ph.tag': 'For Pedro to fill',
    'ph.summary': 'No written summary is in the repo. Add what this project is, in your words.',
    'ph.research': 'No moodboard or research notes are in the repo.',
    'ph.concept': 'No concept write-up is in the repo.',
    'ph.construction': 'No construction of the mark is documented in the repo.',
    'ph.system': 'No notes on type, color, or iconography are in the repo.',
    'ph.renders': 'No frames were filed as renders. Move any 3D or mockup images here.',
    'ph.objects': 'Add posters, shirts, and other objects here. Only show pieces that are pictured.',
    'exp.h': 'Experiments',
    'exp.lead': 'Six pieces already on the site, dated the day they were added to the repo.',
    'exp.all': 'All',
    'exp.open': 'Open',
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
    'contact.h': 'Contact',
    'contact.p': 'A small path. Book a call, or send a note. Mentoring can start here. It is not the front of Forma.',
    'contact.book': 'Book a call',
    'contact.note': 'Or send a note',
    'brief.name': 'Name',
    'brief.email': 'Email',
    'brief.message': 'Note',
    'brief.send': 'Send',
    'brief.error': 'Something went wrong. Book a call instead, or try again.',
    'brief.unconfigured': 'This form is not connected yet. Book a call above.',
    'success.text': 'Received. We’ll get back to you within 24 hours.',
    'footer.line': 'Form Follows Function.',
    'footer.meta': '© 2026 Forma.',
    'pager.prev': 'Previous',
    'pager.next': 'Next'
  },
  pt: {
    'nav.work': 'Trabalhos',
    'nav.experiments': 'Experimentos',
    'nav.info': 'Info',
    'nav.contact': 'Contato',
    'home.sig': 'A Forma é um side project de visuais disruptivos, sistemas de marca e o produto ocasional.',
    'home.lead': 'Recursos criativos de Pedro Julien. Os cases são as imagens que estão no arquivo. As notas de processo ainda estão abertas.',
    'home.work': 'Trabalhos',
    'home.lab': 'Experimentos',
    'info.h': 'Info',
    'info.p1': 'A Forma é o side project de design de Pedro Julien. O trabalho é recurso criativo: visuais disruptivos, branding e um pouco de produto.',
    'info.p2': 'Mentoria fica numa porta pequena na página de contato. Este site não é um estúdio e não tem tabela de preço.',
    'info.voice': 'Voz',
    'info.voice.note': 'Duas frases. A opção A está em uso até o Pedro escolher.',
    'info.a': 'Opção A — em uso',
    'info.b': 'Opção B',
    'info.lineA': 'A Forma é um side project de visuais disruptivos, sistemas de marca e o produto ocasional.',
    'info.lineB': 'Faz a marca. Depois coloca nela alguma coisa real.',
    'work.h': 'Trabalhos',
    'work.lead': 'Cinco cases, mais Objetos para posters e roupa. Nenhum rótulo de indústria aparece, porque nenhum está no repositório.',
    'work.count': '{n} imagens no arquivo',
    'work.video': '1 vídeo no arquivo',
    'work.none': 'Nenhuma imagem no arquivo ainda',
    'objects.h': 'Objetos',
    'objects.p': 'Posters e roupa, inclusive peças da loja de camisetas do Pedro. Ainda não há fotos de produto no repositório.',
    'case.summary': 'Resumo',
    'case.research': 'Pesquisa / moodboard',
    'case.concept': 'Conceito',
    'case.construction': 'Construção da marca',
    'case.system': 'Sistema de marca',
    'case.application': 'Aplicação',
    'case.renders': 'Renders 3D / mockups',
    'case.link': 'Link público que já estava no site anterior',
    'case.files': '{n} imagens no arquivo. Legendas não foram escritas.',
    'case.video': 'Vídeo no arquivo. Toca sem som, como no site anterior.',
    'ph.tag': 'Para o Pedro preencher',
    'ph.summary': 'Não há resumo escrito no repositório. Escreva o que este projeto é, com as suas palavras.',
    'ph.research': 'Não há moodboard nem notas de pesquisa no repositório.',
    'ph.concept': 'Não há texto de conceito no repositório.',
    'ph.construction': 'A construção da marca não está documentada no repositório.',
    'ph.system': 'Não há notas de tipo, cor ou iconografia no repositório.',
    'ph.renders': 'Nenhum quadro foi separado como render. Mova para cá imagens 3D ou mockups.',
    'ph.objects': 'Adicione posters, camisetas e outros objetos aqui. Mostre só o que estiver fotografado.',
    'exp.h': 'Experimentos',
    'exp.lead': 'Seis peças que já estavam no site, datadas do dia em que entraram no repositório.',
    'exp.all': 'Tudo',
    'exp.open': 'Abrir',
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
    'contact.h': 'Contato',
    'contact.p': 'Um caminho curto. Agende uma call ou envie uma nota. Mentoria pode começar aqui. Não é a frente da Forma.',
    'contact.book': 'Agendar uma call',
    'contact.note': 'Ou envie uma nota',
    'brief.name': 'Nome',
    'brief.email': 'Email',
    'brief.message': 'Nota',
    'brief.send': 'Enviar',
    'brief.error': 'Algo deu errado. Agende uma call, ou tente de novo.',
    'brief.unconfigured': 'Este formulário ainda não está ligado. Agende uma call acima.',
    'success.text': 'Recebido. Retornamos em até 24 horas.',
    'footer.line': 'Form Follows Function.',
    'footer.meta': '© 2026 Forma.',
    'pager.prev': 'Anterior',
    'pager.next': 'Próximo'
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

function applyLang(lang) {
  currentLang = lang === 'pt' ? 'pt' : 'en';
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    let text = dict[el.dataset.i18n];
    if (text === undefined) return;
    if (el.dataset.n != null) text = text.replaceAll('{n}', el.dataset.n);
    el.textContent = text;
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  store.set('ffforma-lang', currentLang);
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

applyLang(currentLang);

const themeMeta = document.querySelector('meta[name="theme-color"]');
function applyTheme(theme) {
  if (theme === 'light') document.documentElement.dataset.theme = 'light';
  else delete document.documentElement.dataset.theme;
  if (themeMeta) themeMeta.content = theme === 'light' ? '#f2f0ec' : '#0b0a09';
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.setAttribute('aria-label', theme === 'light' ? 'Toggle dark mode' : 'Toggle light mode');
  store.set('ffforma-theme', theme);
}
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
  });
}
applyTheme(store.get('ffforma-theme') === 'light' ? 'light' : 'dark');

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

const form = document.getElementById('noteForm');
if (form) {
  const status = document.getElementById('noteStatus');
  const send = form.querySelector('.brief-send');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.action.indexOf('REPLACE_WITH_FORMSPREE_ID') !== -1) {
      status.hidden = false;
      status.dataset.i18n = 'brief.unconfigured';
      applyLang(currentLang);
      return;
    }
    send.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('note');
      form.reset();
      status.hidden = false;
      status.dataset.i18n = 'success.text';
    } catch (_) {
      status.hidden = false;
      status.dataset.i18n = 'brief.error';
    }
    applyLang(currentLang);
    send.disabled = false;
  });
}
