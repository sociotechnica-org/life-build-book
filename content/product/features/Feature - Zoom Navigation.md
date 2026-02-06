# Feature - Zoom Navigation

## WHAT: Definition

The scale control system for the Life Map, allowing directors to smoothly transition between landscape view (entire life visible) and detail view (individual tile focus). Semantic zoom means information density changes with scale — zoomed out shows less detail per tile.

## WHERE: Ecosystem

- Parent: [[Feature - Life Map]]
- Implements: [[Strategy - Spatial Visibility]] — multiple scales of the same space
- Implements: [[Principle - Visibility Creates Agency]] — see everything or focus on one thing
- Conforms to: [[Standard - Visual Language]] — semantic zoom changes visual density per level
- Affects: [[Feature - Hex Grid]] — zoom changes tile rendering
- Affects: [[Feature - The Table]] — always visible regardless of zoom

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — directors need both overview and detail
- Principle: [[Principle - Visibility Creates Agency]] — agency requires ability to change perspective
- Driver: Life is complex — directors need to zoom out for big picture, zoom in for action. Same space, different scales.
- Constraints: Zoom controls information density, not access. All data exists at every level — zoom reveals or conceals detail layers. The Table remains fixed size regardless of zoom.

## WHEN: Timeline

Core to Life Map design. Zoom behavior refined based on usability testing.

## HOW: Implementation

**Zoom levels:**

- Landscape (far): Entire life visible, tiles as small icons
- Neighborhood (mid): Category cluster visible, tiles readable
- Detail (close): Few tiles visible, full information density

**Semantic zoom:**

- Far: Title only, state color
- Mid: Title, image thumbnail, progress
- Close: Full tile detail, health indicators, recent activity

**Controls:**

- Pinch/scroll to zoom
- Double-tap to toggle between levels
- The Table remains fixed size (always readable)

**Persistence:** Zoom level persists across sessions. Directors return to where they were.

### Examples

- Director pinch-zooms out on Life Map → hex tiles shrink to colored icons → individual titles disappear → cluster shapes and category colors become the dominant visual → director sees the full landscape of their life at a glance.
- Director double-taps a cluster at Landscape level → zoom animates smoothly to Neighborhood level → tiles now show titles, image thumbnails, and progress indicators → director reads project names and states without opening any boards.

### Anti-Examples

- **Showing full tile detail (task lists, health metrics, activity logs) at Landscape zoom** — far zoom shows shapes, colors, and patterns. Rendering full detail at every level creates visual noise where the director needs landscape awareness.
- **Resetting zoom level when the director returns after closing the app** — zoom persists across sessions. Directors build spatial habits based on their preferred working perspective. Resetting destroys that muscle memory.
