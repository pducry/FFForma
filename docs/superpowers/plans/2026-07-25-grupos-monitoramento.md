# Grupos de Monitoramento Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "Creative Process" tab with "Grupos de Monitoramento" — a new section presenting the groups as both a methodology and an offering, with a mailto CTA.

**Architecture:** Single-file HTML/CSS/JS site. All changes are in `index.html`: nav label, HTML section, CSS (one new class), JS page-switcher, and i18n keys (EN + PT).

**Tech Stack:** Vanilla HTML, CSS, JS — no build step, no dependencies.

## Global Constraints

- Tab label: `Grupos` (fits nav pill)
- Bilingual: all strings go through `translations` object (EN + PT)
- `data-page` attribute: `grupos` (replaces `process`)
- AI must be framed as collaborator/instrument — never as protagonist
- Reuse existing CSS classes where possible (`.process-step`, `.section-label`, `.btn`)
- CTA button: `mailto:` link (placeholder email: `pedro@ffforma.design`)

---

### Task 1: Update nav link

**Files:**
- Modify: `index.html:1284`

- [ ] Change `data-page="process"` → `data-page="grupos"` and `data-i18n="nav.process"` → `data-i18n="nav.grupos"` on the nav link. Update the visible fallback text to `Grupos`.

```html
<a class="nav-link" data-page="grupos" data-i18n="nav.grupos">Grupos</a>
```

- [ ] Verify: nav bar shows two pills — `Home` and `Grupos`.

---

### Task 2: Replace process-content HTML with grupos-content

**Files:**
- Modify: `index.html:1324-1391`

- [ ] Replace the entire `<!-- Creative Process -->` block with the new `grupos-content` div:

```html
<!-- Grupos de Monitoramento -->
<div class="grupos-content">

  <div class="section-label" data-i18n="grupos.label">Grupos de Monitoramento</div>
  <p class="learning-text" data-i18n="grupos.intro">Small groups of designers and creatives working with AI as a creative collaborator. Each cycle covers design fundamentals, reference building, creative systems and frameworks for using AI without losing the human edge. The creative capacity stays yours. AI amplifies it.</p>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">01</span>
        <span class="step-title" data-i18n="grupos.01.title">Look</span>
      </div>
      <span class="step-tag"><span class="tag-icon tag-icon--agent">⬡</span> References</span>
    </div>
    <p class="step-desc" data-i18n="grupos.01.desc">Build your creative eye before you touch any tool. References pulled, influences mapped, a visual point of view that's yours — not borrowed from the last thing you liked online.</p>
    <p class="step-agent" data-i18n="grupos.01.agent">Gaze before gesture.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">02</span>
        <span class="step-title" data-i18n="grupos.02.title">Make</span>
      </div>
      <span class="step-tag"><span class="tag-icon tag-icon--automated">⚡</span> Practice</span>
    </div>
    <p class="step-desc" data-i18n="grupos.02.desc">Design as daily discipline. Hands-on briefs worked by hand — logos, type, layout, identity. Volume builds instinct. The work teaches what theory doesn't.</p>
    <p class="step-agent" data-i18n="grupos.02.agent">Learning by making, not watching.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">03</span>
        <span class="step-title" data-i18n="grupos.03.title">Systematize</span>
      </div>
      <span class="step-tag"><span class="tag-icon tag-icon--agent">⬡</span> Systems</span>
    </div>
    <p class="step-desc" data-i18n="grupos.03.desc">Turn instincts into repeatable creative systems. Naming conventions, visual logic, decision frameworks. The point where taste becomes method.</p>
    <p class="step-agent" data-i18n="grupos.03.agent">Instinct with structure.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">04</span>
        <span class="step-title" data-i18n="grupos.04.title">Amplify</span>
      </div>
      <span class="step-tag"><span class="tag-icon tag-icon--automated">⚡</span> AI</span>
    </div>
    <p class="step-desc" data-i18n="grupos.04.desc">Where AI enters the process — as instrument, not author. Generate territory, accelerate exploration, stress-test ideas. Human vision sets the direction. AI expands the reach.</p>
    <p class="step-agent" data-i18n="grupos.04.agent">Your creative capacity, wider.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">05</span>
        <span class="step-title" data-i18n="grupos.05.title">Iterate</span>
      </div>
      <span class="step-tag"><span class="tag-icon tag-icon--agent">⬡</span> Critique</span>
    </div>
    <p class="step-desc" data-i18n="grupos.05.desc">Group critique in practice. Collaborative creative frameworks to give and receive feedback. Work evolves through honest collective pressure.</p>
    <p class="step-agent" data-i18n="grupos.05.agent">Better work through honest eyes.</p>
  </div>

  <hr style="border:none;border-top:1px solid var(--border);margin:0;">

  <div class="grupos-cta">
    <div class="section-label" data-i18n="grupos.cta.label">Next cycle</div>
    <p class="learning-text" data-i18n="grupos.cta.text">Groups are small by design. If this is the practice you've been looking for, apply for the next cycle.</p>
    <a class="btn btn-primary grupos-apply-btn" href="mailto:pedro@ffforma.design" data-i18n="grupos.cta.btn">Apply</a>
  </div>

</div>
```

- [ ] Verify: section renders with intro, 5 steps, and CTA when Grupos tab is active.

---

### Task 3: Add CSS for grupos-content and CTA

**Files:**
- Modify: `index.html` (CSS section, after `.process-disclaimer`)

- [ ] Add `.grupos-content` display rule and CTA styling after existing process CSS:

```css
/* ─── Grupos Section ─── */
.grupos-content {
  display: none;
  flex-direction: column;
  gap: 1.6rem;
  animation: fadeSlideUp 0.4s ease forwards;
}

.grupos-cta {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.grupos-apply-btn {
  display: inline-block;
  text-decoration: none;
  width: fit-content;
  padding: 0.55rem 1.2rem;
  font-size: 0.78rem;
}
```

- [ ] Verify: no visual regressions on Home tab; Grupos tab shows steps spaced correctly.

---

### Task 4: Update JS page-switcher

**Files:**
- Modify: `index.html:1795-1823`

- [ ] Update the nav switching logic to include `gruposContent`:

```js
const panelContent = document.querySelector('.panel-content');
const gruposContent = document.querySelector('.grupos-content');

const logoMark = document.querySelector('.logo-mark');
if (logoMark) {
  logoMark.addEventListener('click', () => {
    const homeLink = document.querySelector('.nav-link[data-page="home"]');
    if (homeLink) homeLink.click();
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const page = link.dataset.page;
    const sections = [panelContent, gruposContent];
    sections.forEach(s => { if (s) { s.style.display = 'none'; s.classList.remove('animate-in'); } });

    let active;
    if (page === 'grupos') active = gruposContent;
    else active = panelContent;

    active.style.display = 'flex';
    void active.offsetWidth;
    active.classList.add('animate-in');
  });
});
```

- [ ] Verify: clicking Home shows home content; clicking Grupos shows grupos content; logo click returns to Home.

---

### Task 5: Update i18n — English keys

**Files:**
- Modify: `index.html` (translations.en object)

- [ ] Replace `nav.process` with `nav.grupos` and all `process.*` keys with `grupos.*`:

```js
'nav.grupos': 'Grupos',
'grupos.label': 'Monitoring Groups',
'grupos.intro': 'Small groups of designers and creatives working with AI as a creative collaborator. Each cycle covers design fundamentals, reference building, creative systems and frameworks for using AI without losing the human edge. The creative capacity stays yours. AI amplifies it.',
'grupos.01.title': 'Look',
'grupos.01.desc': 'Build your creative eye before you touch any tool. References pulled, influences mapped, a visual point of view that\'s yours — not borrowed from the last thing you liked online.',
'grupos.01.agent': 'Gaze before gesture.',
'grupos.02.title': 'Make',
'grupos.02.desc': 'Design as daily discipline. Hands-on briefs worked by hand — logos, type, layout, identity. Volume builds instinct. The work teaches what theory doesn\'t.',
'grupos.02.agent': 'Learning by making, not watching.',
'grupos.03.title': 'Systematize',
'grupos.03.desc': 'Turn instincts into repeatable creative systems. Naming conventions, visual logic, decision frameworks. The point where taste becomes method.',
'grupos.03.agent': 'Instinct with structure.',
'grupos.04.title': 'Amplify',
'grupos.04.desc': 'Where AI enters the process — as instrument, not author. Generate territory, accelerate exploration, stress-test ideas. Human vision sets the direction. AI expands the reach.',
'grupos.04.agent': 'Your creative capacity, wider.',
'grupos.05.title': 'Iterate',
'grupos.05.desc': 'Group critique in practice. Collaborative creative frameworks to give and receive feedback. Work evolves through honest collective pressure.',
'grupos.05.agent': 'Better work through honest eyes.',
'grupos.cta.label': 'Next cycle',
'grupos.cta.text': 'Groups are small by design. If this is the practice you\'ve been looking for, apply for the next cycle.',
'grupos.cta.btn': 'Apply',
```

---

### Task 6: Update i18n — Portuguese keys

**Files:**
- Modify: `index.html` (translations.pt object)

- [ ] Replace `nav.process` with `nav.grupos` and all `process.*` keys with `grupos.*`:

```js
'nav.grupos': 'Grupos',
'grupos.label': 'Grupos de Monitoramento',
'grupos.intro': 'Grupos pequenos de designers e criativos que trabalham com AI como colaboradora criativa. Cada ciclo cobre fundamentos de design, construção de referências, sistemas criativos e frameworks para usar AI sem perder a voz humana. A capacidade criativa é sua. A AI amplifica.',
'grupos.01.title': 'Olhar',
'grupos.01.desc': 'Construa seu olhar criativo antes de tocar em qualquer ferramenta. Referências reunidas, influências mapeadas, um ponto de vista visual que é seu — não emprestado da última coisa que você curtiu online.',
'grupos.01.agent': 'Olhar antes do gesto.',
'grupos.02.title': 'Fazer',
'grupos.02.desc': 'Design como disciplina diária. Briefs práticos trabalhados à mão — logos, tipografia, layout, identidade. Volume constrói instinto. O trabalho ensina o que a teoria não ensina.',
'grupos.02.agent': 'Aprender fazendo, não assistindo.',
'grupos.03.title': 'Sistematizar',
'grupos.03.desc': 'Transforme instintos em sistemas criativos repetíveis. Convenções de naming, lógica visual, frameworks de decisão. O ponto onde o gosto vira método.',
'grupos.03.agent': 'Instinto com estrutura.',
'grupos.04.title': 'Ampliar',
'grupos.04.desc': 'Onde a AI entra no processo — como instrumento, não como autora. Gere território, acelere exploração, teste ideias sob pressão. A visão humana define a direção. A AI expande o alcance.',
'grupos.04.agent': 'Sua capacidade criativa, mais ampla.',
'grupos.05.title': 'Iterar',
'grupos.05.desc': 'Crítica em grupo na prática. Frameworks criativos colaborativos para dar e receber feedback. O trabalho evolui pela pressão coletiva honesta.',
'grupos.05.agent': 'Trabalho melhor por olhos honestos.',
'grupos.cta.label': 'Próximo ciclo',
'grupos.cta.text': 'Os grupos são pequenos por escolha. Se essa é a prática que você procurava, candidate-se para o próximo ciclo.',
'grupos.cta.btn': 'Candidatar-se',
```

---

### Task 7: Commit and deploy

- [ ] `git add index.html`
- [ ] `git commit -m "feat: replace Creative Process with Grupos de Monitoramento"`
- [ ] `git push origin main`
- [ ] Verify GitHub Pages deployment triggers and `ffforma.design` reflects changes.
