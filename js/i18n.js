// ─── Language toggle (EN/PT) ───
const I18N = {
  en: {
    'intro.1': "FFForma is the design engineering portfolio of ",
    'intro.2': ". Brands, interfaces, and creative experiments, built where design meets code — a collaboration between human taste and AI, adopted early and pushed daily. Three F's for Form Follows Function.",
    'cta.call': "Book a call",
    'ment.h': "Mentorship",
    'ment.p1': "Twenty-plus years in technology and design. Ten-plus leading design teams. Early adopter of AI.",
    'ment.p2': "I help designers sharpen their craft and founders level up their design thinking. If that sounds like you, I'd love to chat.",
    'work.h': "Selected work",
    'footer.meta': "© 2026 FFForma Studio. All rights reserved.",
    'brief.h': "Or send a brief",
    'brief.name': "Name",
    'brief.email': "Email",
    'brief.role': "I am",
    'brief.choose': "Choose",
    'brief.designer': "A designer",
    'brief.founder': "A founder",
    'brief.other': "Something else",
    'brief.message': "What should we talk about?",
    'brief.send': "Send",
    'brief.error': "Something went wrong. Book a call instead, or try again.",
    'brief.unconfigured': "This form is not connected yet. Book a call above.",
    'success.text': "We'll get back to you within 24 hours."
  },
  pt: {
    'intro.1': "A FFForma é o portfólio de design engineering de ",
    'intro.2': ". Marcas, interfaces e experimentos criativos, construídos onde o design encontra o código — uma colaboração entre taste humano e AI, adotada cedo e levada ao limite todos os dias. Três F's de Form Follows Function.",
    'cta.call': "Agendar uma call",
    'ment.h': "Mentoria",
    'ment.p1': "Mais de vinte anos em tecnologia e design. Mais de dez liderando times. Early adopter de AI.",
    'ment.p2': "Ajudo designers a apurar o ofício e founders a elevar seu design thinking. Se soa como você, adoraria conversar.",
    'work.h': "Trabalhos selecionados",
    'footer.meta': "© 2026 FFForma Studio. Todos os direitos reservados.",
    'brief.h': "Ou envie um briefing",
    'brief.name': "Nome",
    'brief.email': "Email",
    'brief.role': "Eu sou",
    'brief.choose': "Escolha",
    'brief.designer': "Designer",
    'brief.founder': "Founder",
    'brief.other': "Outra coisa",
    'brief.message': "Sobre o que devemos conversar?",
    'brief.send': "Enviar",
    'brief.error': "Algo deu errado. Agende uma call, ou tente de novo.",
    'brief.unconfigured': "Este formulário ainda não está ligado. Agende uma call acima.",
    'success.text': "Retornamos em até 24 horas."
  }
};

// localStorage can be unavailable in sandboxed previews
const langStore = {
  get() { try { return localStorage.getItem('ffforma-lang'); } catch (_) { return null; } },
  set(v) { try { localStorage.setItem('ffforma-lang', v); } catch (_) {} }
};

// ?lang= wins so the hreflang URLs (?lang=en, ?lang=pt) actually switch language.
function langFromQuery() {
  try {
    const q = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    if (q === 'pt' || q === 'pt-br') return 'pt';
    if (q === 'en') return 'en';
  } catch (_) {}
  return null;
}

let currentLang = langFromQuery()
  || langStore.get()
  || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en');

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = dict[el.dataset.i18n];
    if (t !== undefined) el.textContent = t;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const t = dict[el.dataset.i18nPh];
    if (t !== undefined) el.placeholder = t;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  langStore.set(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
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
