# Process Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Process page to the FFForma portfolio left panel with 5 AI-highlighted steps, toggled via the existing nav.

**Architecture:** All changes are in `index.html`. The process content block (`.process-content`) is a sibling to `.panel-content`, hidden by default. The existing nav click handler is extended to show/hide the correct block based on `data-page`. No new files needed.

**Tech Stack:** Vanilla HTML/CSS/JS, CSS custom properties already defined in `:root`.

---

### Task 1: Add CSS for process section

**Files:**
- Modify: `index.html` — add CSS rules inside the `<style>` block, after `.clients-block` styles (~line 365)

- [ ] **Step 1: Add CSS rules**

In `index.html`, find the comment `/* ─── Footer ─── */` (around line 385) and insert the following block immediately before it:

```css
/* ─── Process Section ─── */
.process-content {
  display: none;
  flex: 1;
  flex-direction: column;
  gap: 0;
}

.process-step {
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border);
}

.process-step:last-child {
  border-bottom: none;
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}

.step-header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.step-number {
  font-size: 0.63rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.step-title {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-primary);
}

.step-tag {
  font-size: 0.63rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 0.15rem 0.5rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.step-desc {
  font-size: 0.74rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 0 0.2rem 0;
}

.step-agent {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0;
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:8080 — no visual change yet (CSS is added but no HTML using it). No console errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "style: add CSS for process section"
```

---

### Task 2: Add process HTML block

**Files:**
- Modify: `index.html` — add `.process-content` div after the closing `</div>` of `.panel-content` (~line 920)

- [ ] **Step 1: Insert process HTML**

In `index.html`, find the line `</div>` that closes `.panel-content` (the one right before `<!-- Footer -->`). Insert the following block after it:

```html
<!-- Process -->
<div class="process-content">

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">01</span>
        <span class="step-title">Discover</span>
      </div>
      <span class="step-tag">⬡ AI Agent</span>
    </div>
    <p class="step-desc">We dive into your business, audience, and goals before anything gets designed. You fill out a detailed questionnaire, we hop on a call, and align on direction.</p>
    <p class="step-agent">An AI agent audits your market and competitors — returning a structured brief before the first call.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">02</span>
        <span class="step-title">Align</span>
      </div>
      <span class="step-tag">⚡ Automated</span>
    </div>
    <p class="step-desc">A focused kick-off call to get on the same page on direction, timeline, and what success looks like.</p>
    <p class="step-agent">Timeline, deliverables, and review loops are configured automatically — no back-and-forth emails.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">03</span>
        <span class="step-title">Design</span>
      </div>
      <span class="step-tag">⬡ AI Agent</span>
    </div>
    <p class="step-desc">We go heads down and build. Focused and intentional work, with check-ins along the way.</p>
    <p class="step-agent">AI assists in generating directions, naming systems, and visual explorations — accelerating every iteration.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">04</span>
        <span class="step-title">Refine</span>
      </div>
      <span class="step-tag">⚡ Automated</span>
    </div>
    <p class="step-desc">We present the work, gather feedback, and sharpen everything to completion.</p>
    <p class="step-agent">Feedback is collected and organized through structured review loops — revisions tracked automatically.</p>
  </div>

  <div class="process-step">
    <div class="step-header">
      <div class="step-header-left">
        <span class="step-number">05</span>
        <span class="step-title">Deliver</span>
      </div>
      <span class="step-tag">⬡ AI Agent</span>
    </div>
    <p class="step-desc">Clean files, clear guidelines, and everything you need to move forward with confidence.</p>
    <p class="step-agent">An AI agent packages files, generates brand guidelines, and prepares handoff docs automatically.</p>
  </div>

</div>
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:8080 — home view unchanged (process block is `display: none`). No console errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add process section HTML"
```

---

### Task 3: Wire nav switching to show/hide content blocks

**Files:**
- Modify: `index.html` — replace the existing nav click handler in the `<script>` block (~line 1197)

- [ ] **Step 1: Replace nav click handler**

Find this block in `index.html`:

```js
// Nav link switching
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
```

Replace it with:

```js
// Nav link switching
const panelContent = document.querySelector('.panel-content');
const processContent = document.querySelector('.process-content');

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const page = link.dataset.page;
    if (page === 'process') {
      panelContent.style.display = 'none';
      processContent.style.display = 'flex';
    } else {
      panelContent.style.display = '';
      processContent.style.display = 'none';
    }
  });
});
```

- [ ] **Step 2: Test in browser**

Open http://localhost:8080:
1. Click "Process" nav — home content disappears, 5 process steps appear
2. Click "Home" nav — process content disappears, home content returns
3. Click "About" nav — both panels hidden (expected, About is out of scope)
4. Right panel slideshow continues unaffected throughout

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: wire nav switching for process/home content toggle"
```
