# System - Dual Presence

## WHAT: Definition

The pattern where Work at Hand projects appear in two places simultaneously: their hex tile on the Life Map grid AND their position on The Table. Both render the same object; state changes update both automatically.

## WHERE: Ecosystem

- Zone: [[Feature - Life Map]] — both Table and grid visible
- Implements: [[Principle - Visibility Creates Agency]] — priority always visible
- Implements: [[System - Visual Language]] — enhanced treatment for Work at Hand
- Depends on: [[System - Weekly Priority]] — creates Work at Hand status
- Related: [[Feature - The Table]] — one presence location
- Related: [[Hex Grid - Hex Tile]] — other presence location

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — work has spatial location AND priority status
- Principle: [[Principle - Visibility Creates Agency]] — director sees both where work lives (grid) and that it's prioritized (Table)
- Decision: Same object rendered twice, not two objects synced. Ensures consistency.

## WHEN: Timeline

Core architecture. Dual presence enables the Life Map to show both spatial context (hex grid) and priority focus (The Table) simultaneously.

## HOW: Implementation

**Visual treatment:**

- Hex tile: Full saturation, active glow, progress ring, stream-color shimmer
- Table position: Same project rendered with position-specific treatment

**State synchronization:**

- Progress updates: Both views update
- Completion: Both views respond
- Pause: Both views dim appropriately

**Interaction:**

- Click either: Opens Project Board overlay
- Changes in overlay: Reflected in both views
