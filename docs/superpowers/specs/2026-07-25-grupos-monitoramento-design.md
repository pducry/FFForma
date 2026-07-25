# Grupos de Monitoramento — Design Spec

**Date:** 2026-07-25  
**Project:** FFForma (ffforma.design)  
**Scope:** Replace "Creative Process" tab with "Grupos de Monitoramento"

---

## Summary

Replace the existing "Creative Process" tab in the FFForma site with a new "Grupos" tab. The new section presents the Grupos de Monitoramento both as a **methodology** (how modern creative practice works with AI) and as an **offering** (small groups designers can apply to join).

Audience: designers and creatives who want to develop themselves through structured creative practice with AI as a collaborator.

---

## Navigation

- **Tab label:** `Grupos` (EN) / `Grupos` (PT) — replaces `Creative Process` / `Creative Process`
- **data-page attribute:** `grupos` (replaces `process`)
- Follows existing nav pill pattern — same visual style, same behavior

---

## Content Structure

### 1. Intro Block

**section-label:** `Grupos de Monitoramento`

**Body (EN):**
> Small groups of designers and creatives working with AI as a creative collaborator. Each cycle covers design fundamentals, reference building, creative systems and frameworks for using AI without losing the human edge. The creative capacity stays yours. AI amplifies it.

**Body (PT):**
> Grupos pequenos de designers e criativos que trabalham com AI como colaboradora criativa. Cada ciclo cobre fundamentos de design, construção de referências, sistemas criativos e frameworks para usar AI sem perder a voz humana. A capacidade criativa é sua. A AI amplifica.

---

### 2. Steps (Methodology Schematic)

Five numbered steps in the same visual format as the current Creative Process steps (step number, title, description, reinforcement line).

| # | EN Title | PT Title |
|---|----------|----------|
| 01 | Look | Olhar |
| 02 | Make | Fazer |
| 03 | Systematize | Sistematizar |
| 04 | Amplify | Ampliar |
| 05 | Iterate | Iterar |

**01 — Look / Olhar**
- EN desc: Build your creative eye before you touch any tool. References pulled, influences mapped, a visual point of view that's yours — not borrowed from the last thing you liked online.
- EN agent: *Gaze before gesture.*
- PT desc: Construa seu olhar criativo antes de tocar em qualquer ferramenta. Referências reunidas, influências mapeadas, um ponto de vista visual que é seu — não emprestado da última coisa que você curtiu online.
- PT agent: *Olhar antes do gesto.*

**02 — Make / Fazer**
- EN desc: Design as daily discipline. Hands-on briefs worked by hand — logos, type, layout, identity. Volume builds instinct. The work teaches what theory doesn't.
- EN agent: *Learning by making, not watching.*
- PT desc: Design como disciplina diária. Briefs práticos trabalhados à mão — logos, tipografia, layout, identidade. Volume constrói instinto. O trabalho ensina o que a teoria não ensina.
- PT agent: *Aprender fazendo, não assistindo.*

**03 — Systematize / Sistematizar**
- EN desc: Turn instincts into repeatable creative systems. Naming conventions, visual logic, decision frameworks. The point where taste becomes method.
- EN agent: *Instinct with structure.*
- PT desc: Transforme instintos em sistemas criativos repetíveis. Convenções de naming, lógica visual, frameworks de decisão. O ponto onde o gosto vira método.
- PT agent: *Instinto com estrutura.*

**04 — Amplify / Ampliar**
- EN desc: Where AI enters the process — as instrument, not author. Generate territory, accelerate exploration, stress-test ideas. Human vision sets the direction. AI expands the reach.
- EN agent: *Your creative capacity, wider.*
- PT desc: Onde a AI entra no processo — como instrumento, não como autora. Gere território, acelere exploração, teste ideias sob pressão. A visão humana define a direção. A AI expande o alcance.
- PT agent: *Sua capacidade criativa, mais ampla.*

**05 — Iterate / Iterar**
- EN desc: Group critique in practice. Collaborative creative frameworks to give and receive feedback. Work evolves through honest collective pressure.
- EN agent: *Better work through honest eyes.*
- PT desc: Crítica em grupo na prática. Frameworks criativos colaborativos para dar e receber feedback. O trabalho evolui pela pressão coletiva honesta.
- PT agent: *Trabalho melhor por olhos honestos.*

---

### 3. CTA Block

**section-label:** `Next cycle` (EN) / `Próximo ciclo` (PT)

**Body (EN):**
> Groups are small by design. If this is the practice you've been looking for, apply for the next cycle.

**Body (PT):**
> Os grupos são pequenos por escolha. Se essa é a prática que você procurava, candidate-se para o próximo ciclo.

**Button:** `Apply` (EN) / `Candidatar-se` (PT)  
**Action:** `mailto:pedro@ffforma.design` — placeholder, Pedro defines final destination.

---

## Implementation Notes

- Remove all `process.*` i18n keys; add `grupos.*` keys
- The `grupos-content` div replaces `process-content` div
- CSS for steps is reused as-is from `.process-step` — no new styles needed
- CTA button uses existing `.btn-primary` style
- `data-page="grupos"` wired to nav link click handler (same JS pattern as current pages)
- Bilingual: all strings go through the existing `translations` object (EN + PT)

---

## Out of Scope

- No changes to Home tab or About tab
- No changes to hero carousel
- No new images or assets required
- No backend / form infrastructure — mailto CTA only
