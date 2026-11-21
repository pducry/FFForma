// Mentoring brief. Posts to a Formspree form id — never to an email address.
(function () {
  const form = document.getElementById('briefForm');
  if (!form) return;
  const status = document.getElementById('briefStatus');
  const send = form.querySelector('.brief-send');
  const PLACEHOLDER = 'REPLACE_WITH_FORMSPREE_ID';

  function show(key) {
    status.hidden = false;
    status.dataset.i18n = key;
    const lang = document.documentElement.lang === 'pt-BR' ? 'pt' : 'en';
    if (typeof applyLang === 'function') applyLang(lang);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.action.indexOf(PLACEHOLDER) !== -1) {
      show('brief.unconfigured');
      return;
    }
    send.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('brief');
      form.reset();
      show('success.text');
    } catch (_) {
      show('brief.error');
    }
    send.disabled = false;
  });
})();
