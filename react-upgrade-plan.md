# React 19 + MUI v6 Upgrade Plan

## Goal

Upgrade the app from React 16.14 / MUI v4 to React 19 / MUI v6 on the existing `upgrade/react-19` branch. No feature changes — same app, modern stack.

## Summary

| Current | Target | Breaking Changes |
|---|---|---|
| React 16.14 | React 19 | Class → functional components, new JSX transform |
| MUI v4 (`@material-ui/*`) | MUI v6 (`@mui/material`) | All imports, styling API, component props |
| `makeStyles` (JSS) | Emotion `sx` prop | Every styled component rewrites |
| `createMuiTheme` | `createTheme` | One line |
| `findDOMNode` | `forwardRef` | SVG ref + PDF download |

## Source Files to Modify (11 files, ~1,029 LOC)

### `src/App.jsx` (145 lines) — Class → Function Component

**Current:** Class component with state in `this.state`, arrow function callbacks in constructor, `ReactDOM.findDOMNode`.

**Target:** Functional component with `useState` hooks, `useCallback` for handlers, `useRef` for SVG ref, `useEffect` or `useCallback` for PDF download.

State shape (15 fields):
```
{ nW, xH, aH, dH, iS, sA, sS, pA, pS, pH, pW, tM, bM, lM, rM }
```

Callbacks to convert:
- `handleChange(event)` → reading `event.target.id` + `parseFloat`
- `addButtonClick(id, step, max, min)` → clamp increment
- `subtractButtonClick(id, step, min, max)` → clamp decrement
- `download()` → `findDOMNode` → `svgRef.current` (React 19 `forwardRef`)

Remove `ReactDOM.findDOMNode` — it's deprecated and removed in React 19.

### `src/SVG.jsx` (54 lines) — Class → Function Component

**Current:** Class component with `render()`, receives `ref` from parent.

**Target:** Functional component wrapped in `React.forwardRef`. Parent passes ref via `ref` prop.

### `src/CustomInput.jsx` (122 lines) — makeStyles → sx

**Current:** `makeStyles` hook with 5 class entries:
- `wrapper` — flex row
- `buttonWrapper` — flex column for +/- buttons
- `plusButton` — negative bottom margin
- `help` — top margin
- `minusButton` — implied class

Also uses JSS-generated classes in `className={}` props.

**Target:** Replace `makeStyles` with Emotion `sx` prop on each MUI component and wrapping `<Box>` or `<div>`. Or use the MUI v6 `styled()` API for custom components.

### `src/Inputs.jsx` (326 lines) — Minimal changes

This component is a pure function component — least affected. Mainly:
- Update MUI component imports
- Any prop changes from MUI v4 → v6

### `src/Header.jsx` (40 lines) — makeStyles → sx

Same `makeStyles` → `sx` transition as CustomInput.

### `src/main.jsx` (6 lines)

Probably fine as-is. Confirm JSX runtime works with React 19.

### `src/index.css` + `src/App.css` (~50 lines total)

Plain CSS — not affected by the upgrade.

### `src/drawLine.js` + `src/fixtures.js` — No changes

Pure functions and data. No React dependencies.

### `src/jest/drawLine.test.js`

Update test config if needed for React 19 + Vitest compatibility.

## MUI v4 → v6 Import Mapping

### Components

```
@material-ui/core/styles          → @mui/material/styles
@material-ui/core/Fab             → @mui/material/Fab
@material-ui/core/Card            → @mui/material/Card
@material-ui/core/CardContent     → @mui/material/CardContent
@material-ui/core/Typography      → @mui/material/Typography
@material-ui/core/Divider         → @mui/material/Divider
@material-ui/core/TextField       → @mui/material/TextField
@material-ui/core/IconButton      → @mui/material/IconButton
@material-ui/core/Tooltip         → @mui/material/Tooltip
@material-ui/core/InputAdornment  → @mui/material/InputAdornment
@material-ui/core/AppBar          → @mui/material/AppBar
@material-ui/core/Toolbar         → @mui/material/Toolbar
@material-ui/core/Button          → @mui/material/Button
```

### Icons

```
@material-ui/icons/AddBox                → @mui/icons-material/AddBox
@material-ui/icons/IndeterminateCheckBox → @mui/icons-material/IndeterminateCheckBox
@material-ui/icons/HelpOutline           → @mui/icons-material/HelpOutline
@material-ui/icons/ArrowDownward         → @mui/icons-material/ArrowDownward
@material-ui/icons/Menu                  → @mui/icons-material/Menu
```

### Theme

```js
// MUI v4
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// MUI v6
import { createTheme, ThemeProvider } from '@mui/material/styles';
```

## MUI v4 → v6 Props Changes to Watch

These are the most common breaking changes:

### TextField
- `InputProps` → `slotProps.input`
- `inputProps` → `slotProps.htmlInput`
- Input label styling changed

### IconButton
- `aria-label` still works but preferred placement may differ

### Tooltip
- `title` prop → `title` still works but children must forward ref

### ThemeProvider
- `MuiThemeProvider` → `ThemeProvider` (the old name was already an alias)

### makeStyles removal
- In MUI v5, `makeStyles` was deprecated (still worked via `@mui/styles`)
- In MUI v6, `@mui/styles` is removed entirely
- All styles must be migrated to Emotion (`sx` prop, `styled()`, or the `sx` prop on MUI components)

## Dependencies to Update

Remove from `package.json`:
```
@material-ui/core
@material-ui/icons
@material-ui/styles
```

Add to `package.json`:
```
@mui/material ^6.x
@mui/icons-material ^6.x
@emotion/react ^11.x
@emotion/styled ^11.x
```

Also update:
```
react     ^16.12.0  →  ^19.0.0
react-dom ^16.12.0  →  ^19.0.0
```

## Migration Strategy: Side-by-Side

The safest approach: install MUI v6 alongside v4 temporarily, migrate component-by-component, then remove v4.

1. Install `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`
2. Migrate one component at a time:
   - Start with `CustomInput` (has styles + MUI components)
   - Then `Inputs` (pure, easiest)
   - Then `SVG` (class → function)
   - Then `App` (class → function + state management)
   - Then `Header`
3. Convert `main.jsx` import from `MuiThemeProvider` to `ThemeProvider`
4. Delete `@material-ui/*` from dependencies
5. Run `npm test` (6 tests should still pass)
6. Run `node verify.mjs` (12 UI checks should pass)
7. Run `npm run build`
8. Commit

## Files Not to Touch

- `src/drawLine.js` — pure function, no React deps
- `src/fixtures.js` — data only
- `src/index.css` — plain CSS
- `src/App.css` — plain CSS
- `vite.config.js` — may need minor adjustment for Emotion, but the alias can be removed
- `verify.mjs` — Playwright script
