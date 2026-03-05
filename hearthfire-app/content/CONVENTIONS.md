# Conventions

Code patterns, naming, and gotchas for the Hearthfire app.

## Stack

- **Frontend:** React 19, Vite
- **Backend:** Supabase (PostgreSQL, Auth)
- **Runtime deps:** React 19, Supabase JS client — nothing else
- **Environment:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

## File Organization

```
src/
  App.jsx             ← Root component, view routing, auth state
  main.jsx            ← Entry point
  components/         ← All page-level and widget components (PascalCase.jsx)
  constants.js        ← Game data constants (materials, levels, gear, quest items)
  game-logic.js       ← Pure game calculations (XP, levels, momentum, foraging)
  quest-data.js       ← 144 quests across 8 domains (generated — do not hand-edit)
  storage.js          ← Dual-backend storage abstraction (Supabase + localStorage)
  supabase.js         ← Supabase client initialization
  styles.css          ← Global styles
```

## Naming

| What | Convention | Examples |
|------|-----------|----------|
| Components | PascalCase `.jsx` | `Dashboard.jsx`, `CheckinMorning.jsx` |
| Utility modules | kebab-case `.js` | `game-logic.js`, `quest-data.js` |
| Functions | camelCase | `calcMorningXP`, `rollRarity`, `getPlayerProfile` |
| Constants | SCREAMING_SNAKE_CASE | `LEVEL_THRESHOLDS`, `MORNING_ITEMS`, `RARITY` |

## Architecture Decisions

### Dual-backend storage
`storage.js` abstracts Supabase (when configured) and localStorage (fallback). Components ONLY use `storage.js` exports — never call Supabase directly.

### No state management library
React `useState`/`useEffect` with storage abstraction. No Redux, no Context API for global state.

### Pure game logic
`game-logic.js` has zero side effects. Takes data in, returns data out. All XP calculations, level checks, momentum scoring, and foraging rolls live here.

### Client-side view routing
View state managed in `App.jsx` via `useState`. No React Router. Navigation is `setCurrentView('dashboard')`.

### Auth
Supabase Auth with module-scoped user state in `storage.js` (`_userId`, `_userRole`). Set by `App.jsx` on login. Two roles: `player`, `admin`.

## Gotchas

- **Fire-and-forget writes:** Supabase writes use `.then(() => {})` — network failures silently fall back to localStorage. This is intentional for offline resilience but means data can be lost if Supabase is down and localStorage is cleared.

- **quest-data.js is large and generated.** 144 quests across 8 domains. Do not hand-edit — regenerate from source.

- **Module-scoped auth state.** `storage.js` holds `_userId` and `_userRole` as module variables. These are set once on login by `App.jsx`. If auth state changes without calling `setAuthUser()`, storage operations will fail silently or write to wrong user.

- **No build step for CSS.** Single `styles.css` file with class-based styling. No CSS modules, no Tailwind, no preprocessor.

## Component Inventory

| Component | Type | Description |
|-----------|------|-------------|
| Dashboard | Screen | Home view, XP/level display, navigation hub |
| CheckinMorning | Screen | Morning check-in form |
| CheckinEvening | Screen | Evening reflection form |
| QuestBrowser | Screen | Browse and manage quests |
| Foraging | Screen | Foraging mini-game |
| Inventory | Screen | Material and provision inventory |
| GearCatalog | Screen | Craft gear from materials |
| Profile | Screen | Player stats and history |
| Auth | Screen | Login/signup splash |
| AdminPanel | Screen | Admin review panel |
| Nav | Widget | Bottom navigation bar |
| PageBanner | Widget | Branded page header |
