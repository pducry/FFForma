# Viewport Fit + Typography Scale — FFForma Portfolio

**Date:** 2026-04-22  
**Status:** Approved

## Goal

Make the left panel content always fit within the user's viewport (no internal scroll), and reduce the typography scale by ~10% for a denser, more refined look.

## Approach

### Opção escolhida: Sticky simples (A)

The left panel becomes sticky and fixed to the viewport height, identical in behavior to the existing right panel. No JS scaling, no dynamic font clamping. Content is clipped if the viewport is below ~650px — an acceptable trade-off for a desktop-focused portfolio.

## Changes

### 1. Left panel layout

`.panel-left` changes from scrollable to sticky:

```css
/* Remove */
overflow-y: auto;
max-height: 100vh;
scrollbar-width: none;

/* Add */
position: sticky;
top: 0;
height: 100vh;
overflow: hidden;
```

Also remove the `.panel-left::-webkit-scrollbar { display: none; }` rule — no longer needed.

### 2. Typography scale (~10% reduction)

All font sizes in the left panel reduced proportionally:

| Selector | Property | Before | After |
|---|---|---|---|
| `.nav-link` | `font-size` | `0.8rem` | `0.72rem` |
| `.intro-text` | `font-size` | `0.88rem` | `0.8rem` |
| `.section-label` | `font-size` | `0.7rem` | `0.63rem` |
| `.pricing-row` | `font-size` | `0.82rem` | `0.74rem` |
| `.pricing-row .price` | `font-size` | `0.82rem` | `0.74rem` |
| `.service-tag` | `font-size` | `0.78rem` | `0.7rem` |
| `.cta-heading` | `font-size` | `1.1rem` | `1rem` |
| `.cta-sub` | `font-size` | `0.78rem` | `0.7rem` |
| `.btn` | `font-size` | `0.78rem` | `0.7rem` |
| `.client-name` | `font-size` | `0.75rem` | `0.68rem` |
| `.panel-footer` | `font-size` | `0.65rem` | `0.58rem` |

## Out of scope

- Mobile/responsive breakpoints (site is desktop-focused)
- Dynamic scaling for very small viewports
- Changes to the right panel
