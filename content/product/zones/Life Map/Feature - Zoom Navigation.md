# Feature - Zoom Navigation

## WHAT: Definition

The scale control system for the Life Map, allowing directors to smoothly transition between landscape view (entire life visible) and detail view (individual tile focus). Semantic zoom means information density changes with scale — zoomed out shows less detail per tile.

## WHERE: Ecosystem

- Parent: [[Feature - Life Map]]
- Implements: [[Strategy - Spatial Visibility]] — multiple scales of the same space
- Implements: [[Principle - Visibility Creates Agency]] — see everything or focus on one thing
- Affects: [[Feature - Hex Grid]] — zoom changes tile rendering
- Affects: [[Feature - The Table]] — always visible regardless of zoom

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — directors need both overview and detail
- Principle: [[Principle - Visibility Creates Agency]] — agency requires ability to change perspective
- Driver: Life is complex — directors need to zoom out for big picture, zoom in for action. Same space, different scales.

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
