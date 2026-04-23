# Process Section — FFForma Portfolio

**Date:** 2026-04-23  
**Status:** Approved

## Goal

Add a "Process" section to the portfolio that replaces the left panel content when the Process nav link is clicked. Each step highlights AI agent and automation involvement through a tag + bold description pattern.

## Behavior

- Clicking "Process" in the nav hides the home content (`.panel-content`) and shows the process content (`.process-content`)
- Clicking "Home" restores the original content
- The right panel (image slideshow) is unchanged in both views
- Nav switching already handled by existing JS — extend it to toggle content visibility

## Layout

The process content lives inside `.panel-left`, sibling to `.panel-content`. Hidden by default, shown when Process is active.

### Each step structure

```
01  Discover                          [⬡ AI Agent]
    Regular description text in secondary color.
    Bold AI agent description in primary color.
```

- Step number: `0.63rem`, muted, uppercase
- Step title: `0.8rem`, `font-weight: 500`, primary color
- AI tag: `0.7rem`, muted, pill border, floated right
- Regular description: `0.74rem`, secondary color, `line-height: 1.6`
- Agent description: `0.74rem`, **bold**, primary color, `line-height: 1.6`
- Divider: `1px solid var(--border)` between steps, none after last

## The 5 Steps

| # | Title | Tag | Agent description |
|---|---|---|---|
| 01 | Discover | ⬡ AI Agent | An AI agent audits your market and competitors — returning a structured brief before the first call. |
| 02 | Align | ⚡ Automated | Timeline, deliverables, and review loops are configured automatically — no back-and-forth emails. |
| 03 | Design | ⬡ AI Agent | AI assists in generating directions, naming systems, and visual explorations — accelerating every iteration. |
| 04 | Refine | ⚡ Automated | Feedback is collected and organized through structured review loops — revisions tracked automatically. |
| 05 | Deliver | ⬡ AI Agent | An AI agent packages files, generates brand guidelines, and prepares handoff docs automatically. |

## CSS

New classes needed:

- `.process-content` — mirrors `.panel-content` structure, hidden by default (`display: none`)
- `.process-step` — each step container, `padding: 0.8rem 0`, `border-bottom: 1px solid var(--border)`
- `.process-step:last-child` — `border-bottom: none`
- `.step-header` — flex row, space-between, align items center
- `.step-number` — muted, small, uppercase
- `.step-title` — `font-weight: 500`, primary
- `.step-tag` — pill, border, muted, small
- `.step-desc` — secondary color, small
- `.step-agent` — same size, **bold**, primary color

## JS

Extend the existing nav click handler to toggle `.panel-content` and `.process-content` based on `data-page`:

```js
// data-page="home"    → show .panel-content, hide .process-content
// data-page="process" → hide .panel-content, show .process-content
// data-page="about"   → hide both (about section TBD)
```

## Out of scope

- "About" page content (not requested)
- Animations between page transitions (keep it simple)
- Mobile layout
