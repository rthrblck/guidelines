# Svelte 5 Rewrite Plan

## Goal

Rewrite the guidelines app from React 16 / MUI v4 to Svelte 5 on the existing `rewrite/svelte-5` branch. Same functionality, modern Svelte codebase, fraction of the code.

## Why Svelte 5

- No virtual DOM — SVG lines update directly (better perf for this use case)
- Reactivity via runes (`$state`, `$derived`, `$effect`) — no hooks, no `useState`
- Scoped CSS built in — no `makeStyles`, no JSS, no Emotion
- Component syntax is minimal — roughly 40% less code than equivalent React
- Svelte 5 uses the same Vite toolchain — `@sveltejs/vite-plugin-svelte` slots in
- Same testing setup — Vitest works with Svelte

## Summary

| React Current | Svelte Target | Notes |
|---|---|---|
| 11 source files / ~1,029 LOC | ~7 source files / ~600 LOC | Rough estimate |
| 3 npm deps for UI (react, mui/core, mui/icons) | 0 UI deps | Use native HTML elements |
| JSS (`makeStyles`) + CSS files | Scoped `<style>` per component | Built into Svelte |
| Class components (App, SVG) | Svelte components with `$state` runes | Simpler reactivity |

## New File Structure

```
src/
  App.svelte            (~80 LOC)   State owner, layout, PDF export
  Inputs.svelte         (~200 LOC)  Three card groups with CustomInput rows
  CustomInput.svelte    (~60 LOC)   Single labeled input row with +/-/help buttons
  SVG.svelte            (~40 LOC)   SVG renderer from lineArray prop
  Header.svelte         (~30 LOC)   Top app bar (if still wanted)
  drawLine.js           (keep)      Pure function — no change needed
  fixtures.js           (keep)      Data — no change needed
  app.css                          Global styles
  main.js              (~10 LOC)   Svelte mount point
```

## React → Svelte Component Mapping

### `src/main.jsx` → `src/main.js`

```js
// React (before)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

// Svelte (after)
import { mount } from 'svelte';
import App from './App.svelte';
mount(App, { target: document.getElementById('root') });
```

### `src/App.jsx` → `src/App.svelte`

**React (145 LOC class component):**
- `this.state = { nW: 3, xH: 5, ... }` with 15 numeric fields
- `handleChange`, `addButtonClick`, `subtractButtonClick` as arrow functions
- `render()` returns JSX with `<Inputs>`, `<SVG>`, `<Fab>`
- `download()` method using `findDOMNode` + `jspdf-yworks`

**Svelte:**
```svelte
<script>
  let nW = $state(3);
  let xH = $state(5);
  // ... all 15 state fields

  let lineArray = $derived(lineGroup({ nW, xH, ... }));

  function addButtonClick(id, step, max, min) {
    // clamp increment
  }
  function subtractButtonClick(id, step, min, max) {
    // clamp decrement
  }

  let svgEl;
  function download() {
    const pdf = new JSPDF('l', 'mm', [pW, pH]);
    svg2pdf(svgEl, pdf, { xOffset: 0, yOffset: 0, scale: 1 });
    pdf.save('myPDF.pdf');
  }
</script>

<div class="app">
  <div class="container">
    <div class="inputs">
      <Inputs bind:{nW} bind:{xH} ... />
    </div>
    <div class="svg">
      <SVG {lineArray} {pW} {pH} bind:el={svgEl} />
    </div>
  </div>
  <button class="fab" onclick={download}>
    <span class="material-icons">arrow_downward</span> Download
  </button>
</div>
```

**Key changes:**
- `$state()` replaces `this.state = {}` and `this.setState()`
- `$derived()` auto-computes `lineArray` whenever any dependency changes — no manual `lineGroup(this.state)` call needed
- Arrow functions are just regular functions
- Ref is a `let` variable bound with `bind:this` — no `createRef`, no `findDOMNode`
- All 15 state fields are individual `$state` variables or a single reactive object

### `src/Inputs.jsx` → `src/Inputs.svelte`

**React (326 LOC, function component):**
- Renders 3 `<Card>` groups with 14 `<CustomInput>` instances
- Passes all props down individually

**Svelte (projected ~200 LOC):**
- Replaces MUI `Card`/`CardContent` with styled `<div>` elements
- Each `CustomInput` is bound bidirectionally or receives value + callback props
- No `PropTypes` needed — Svelte uses `let export` for props

**Alternative:** Since MUI is being removed, consider simplifying the card layout to plain `<fieldset>` elements with `<legend>` headers — semantic HTML that looks clean with minimal CSS.

### `src/CustomInput.jsx` → `src/CustomInput.svelte`

**React (122 LOC):**

Current structure per input row:
```
<div class="wrapper">
  <TextField label={label} type="number" value={value} onChange={onChange} />
  <div class="buttonWrapper">
    <IconButton onClick={addButtonClick}><AddBoxIcon /></IconButton>
    <IconButton onClick={subtractButtonClick}><IndeterminateCheckBoxIcon /></IconButton>
  </div>
  <Tooltip title={helpText}>
    <IconButton><HelpOutlineIcon /></IconButton>
  </Tooltip>
</div>
```

**Svelte (projected ~60 LOC):**

Replace MUI components with native HTML:
```svelte
<div class="wrapper">
  <label>
    {label}
    <input type="number" bind:value min max step />
    <span class="adornment">{inputAdornment}</span>
  </label>
  <div class="buttons">
    <button onclick={addButtonClick} aria-label="addStep">+</button>
    <button onclick={subtractButtonClick} aria-label="subtractStep">−</button>
  </div>
  <span class="help" title={helpText}>?</span>
</div>
```

**Icon buttons:** Use simple text/unicode characters (`+`, `−`, `?`) instead of MUI icon SVGs. This eliminates the `@material-ui/icons` dependency entirely and looks clean.

**Tooltip:** Svelte has no built-in tooltip — use the native `title` attribute for simple tooltips, or wrap a lightweight tooltip component.

### `src/SVG.jsx` → `src/SVG.svelte`

**React (54 LOC, class component):**

```jsx
<svg width={pW} height={pH} viewBox={`0 0 ${pW} ${pH}`}>
  <defs><clipPath id="margins"><rect ... /></clipPath></defs>
  <g clipPath="url(#margins)">
    {lineArray.map(line => <line {...line} />)}
  </g>
  <rect ... />
</svg>
```

**Svelte (projected ~40 LOC):**
```svelte
<svg {width} {height} viewBox="0 0 {pW} {pH}" bind:this={el}>
  <defs>
    <clipPath id="margins">
      <rect x={lM} y={tM} width={pW - lM - rM} height={pH - tM - bM} />
    </clipPath>
  </defs>
  <g clip-path="url(#margins)">
    {#each lineArray as line}
      <line {...line} />
    {/each}
  </g>
  <rect ... />
</svg>
```

**Key:**
- `{pW}`, `{pH}` are auto-reactive — SVG redraws when they change
- `{#each}` replaces `.map()` — no keys needed for static lists
- `bind:this={el}` replaces `React.createRef` + `findDOMNode`
- `clip-path` uses hyphenated SVG attribute (not camelCase)

### `src/Header.jsx` → `src/Header.svelte` (if needed)

Current component uses MUI `AppBar`, `Toolbar`, `IconButton` (MenuIcon), `Button`, `Typography` with `makeStyles`. It's not actually used by the app (App renders its own inline `<header>`). Either:
- Delete it
- Wire it up as a slim `<header>` with basic styling

## Styling Strategy

No more `makeStyles` or JSS. Use:
1. **Scoped `<style>` blocks** inside each `.svelte` component — CSS is auto-scoped to the component
2. **`app.css`** for global resets and shared layout (the `.container`, `.inputs`, `.svg` flex layout)

Example of scoped Svelte styling:
```svelte
<div class="wrapper">
  <input type="number" />
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  input {
    width: 12rem;
  }
</style>
```

No class name collisions, no JSS runtime, no Emotion bundle.

## Dependencies

### Remove
```
react
react-dom
@material-ui/core
@material-ui/icons
@material-ui/styles
prop-types
@vitejs/plugin-react     (replaced by svelte plugin)
```

### Add
```
svelte ^5.x
@sveltejs/vite-plugin-svelte ^5.x
```

### Keep
```
vite ^8.x
vitest ^3.x
jsdom ^26.x
playwright ^1.x
jspdf-yworks (github:yWorks/jsPDF)
svg2pdf.js ^1.5.0
svgpath (github:fontello/svgpath)  — check if used; remove if not
```

## Setup Steps

1. `npm install svelte @sveltejs/vite-plugin-svelte`
2. `npm uninstall react react-dom @material-ui/core @material-ui/icons @material-ui/styles prop-types @vitejs/plugin-react`
3. Update `vite.config.js`:
   ```js
   import { defineConfig } from 'vite';
   import { svelte } from '@sveltejs/vite-plugin-svelte';

   export default defineConfig({
     plugins: [svelte()],
     resolve: {
       alias: {
         '@material-ui/core': '@material-ui/core/esm',
         '@material-ui/icons': '@material-ui/icons/esm',
         '@material-ui/styles': '@material-ui/styles/esm',
       },
     },
     test: { environment: 'jsdom' },
   });
   ```
   (Keep the MUI aliases during migration if doing it incrementally, otherwise drop them)
4. Create the Svelte component files — start from the leaves (CustomInput, SVG) and work up to App
5. Delete old React files
6. Update `index.html` entry point if needed
7. Run `npm run build` → should output to `dist/`
8. Run `node verify.mjs` — may need minor updates to selectors since MUI class names will change

## Implementation Order

Recommended order, each step is independently testable:

1. **Scaffold** — install Svelte, configure Vite, verify `npm run dev` shows blank page
2. **`drawLine.js` + `fixtures.js`** — keep as-is, they're pure JS
3. **`SVG.svelte`** — render SVG from `lineArray` prop, verify lines appear
4. **`CustomInput.svelte`** — render a single input row with buttons, verify +/− works
5. **`Inputs.svelte`** — compose 14 CustomInput instances in 3 groups
6. **`App.svelte`** — state, wiring, layout, PDF download
7. **`Header.svelte`** — slim top bar
8. **`main.js`** — mount App
9. **Delete old React files**
10. **Verify** — `npm test`, `npm run build`, `node verify.mjs`

## Files That Don't Change

- `src/drawLine.js` — pure function, no framework dependency
- `src/fixtures.js` — data only
- `src/jest/drawLine.test.js` — Vitest works with plain JS
- `verify.mjs` — Playwright script, may need minor selector updates
- `.gitignore` — already has `/dist`

## Potential Roadblocks

1. **`jspdf-yworks` + `svg2pdf`** — these work by reading the real DOM. In Svelte, you use `bind:this` instead of `findDOMNode` to get the SVG element. This should work identically.
2. **No MUI Tooltip** — the native `title` attribute on `<button>` is a reasonable substitute for this app. Or build a simple 10-line Svelte tooltip component.
3. **Number input binding** — Svelte's `bind:value` on `<input type="number">` returns a string. Use `oninput` with `parseFloat` for numeric state, or create a tiny helper.
4. **`verify.mjs` selectors** — The script uses `[aria-label=addStep]` which will still work. But `[class*=MuiIconButton-root]` will break since there are no MUI classes. Update those selectors to look for `button[aria-label]` instead.

## Verification

After completion, all of these must pass:
- `npm run build` — production build succeeds
- `npm test` — existing 6 tests still pass (they test `drawLine.js`, not React)
- `node verify.mjs` — all 12 UI checks pass (may need minor selector updates)
- Open `http://localhost:5175/` — app renders, SVG lines visible
- Click +/− — values change, SVG updates
- Click help — tooltip or title appears
- Type a value — SVG redraws
- Click Download — PDF file downloads
