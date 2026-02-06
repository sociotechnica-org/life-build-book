# Standard - Dual Presence

## WHAT: Definition

The specification for how Work at Hand projects appear in two places simultaneously: their hex tile on the Life Map grid AND their position on The Table. Both render the same object; state changes update both automatically.

## WHERE: Ecosystem

- Conforming features: [[Feature - Life Map]], [[Feature - The Table]]
- Conforming components: [[Hex Grid - Hex Tile]], [[The Table - Gold Position]], [[The Table - Silver Position]]
- Implements: [[Principle - Visibility Creates Agency]] — priority always visible
- Uses: [[Standard - Visual Language]] — enhanced treatment for Work at Hand
- Depends on: [[System - Weekly Priority]] — creates Work at Hand status

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — work has spatial location AND priority status
- Principle: [[Principle - Visibility Creates Agency]] — director sees both where work lives (grid) and that it's prioritized (Table)
- Decision: Same object rendered twice, not two objects synced. Ensures consistency.

## WHEN: Timeline

Core architecture. Dual presence enables the Life Map to show both spatial context (hex grid) and priority focus (The Table) simultaneously.

## HOW: Specification

### Visual Treatment

| Location | Treatment |
|----------|-----------|
| Hex tile | Full saturation, active glow, progress ring, stream-color shimmer |
| Table position | Same project rendered with position-specific treatment |

### State Synchronization Rules

| Event | Behavior |
|-------|----------|
| Progress update | Both views update |
| Completion | Both views respond |
| Pause | Both views dim appropriately |

### Interaction Rules

| Action | Result |
|--------|--------|
| Click either | Opens Project Board overlay |
| Changes in overlay | Reflected in both views |

## Anti-Examples

- **Syncing two separate objects instead of rendering one object twice** — If hex tile and Table position are different objects, state can drift. Same object, two views is the architecture.
- **Updating Table position but not hex tile on progress change** — Both views must respond to every state change. A completion reflected only on The Table breaks the spatial context the grid provides.
- **Opening different overlays from each location** — Click on hex tile and click on Table position must both open the same Project Board overlay. Two entry points, one destination.
