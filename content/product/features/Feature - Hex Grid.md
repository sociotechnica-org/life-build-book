# Feature - Hex Grid

## WHAT: Definition

The spatial organization canvas that fills most of the Life Map — a tessellated field of hexagonal tiles where each tile represents a project or system. Directors arrange tiles spatially by category and relationship, creating a visual map of their life's work.

## WHERE: Ecosystem

- Zone: [[Feature - Life Map]] — the Hex Grid exists only in Life Map
- Parent: [[Feature - Life Map]]
- Implements: [[Strategy - Spatial Visibility]] — work has spatial position
- Implements: [[Principle - Bidirectional Loop]] — arrangement reflects and shapes understanding
- Implements: [[Principle - Visual Recognition]] — spatial memory for navigation
- Contains: [[Hex Grid - Hex Tile]] — individual project/system representations
- Uses: [[Standard - Visual Language]] — colors, states, indicators
- Uses: [[Feature - Zoom Navigation]] — scale changes what's visible

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — hexagons are the spatial unit
- Principle: [[Principle - Visual Recognition]] — "my health stuff is upper-left" becomes automatic
- Principle: [[Principle - Familiarity Over Function]] — spatial metaphor feels natural
- Decision: Hexagons (not squares) because they tessellate without privileged axes. Every hex has six equal neighbors — no "up is better than sideways" bias.

## WHEN: Timeline

Core to Life Map design. The hex grid is the foundational spatial metaphor for LifeBuild.

## HOW: Implementation

**Grid behavior:**

- Infinite canvas (extends as needed)
- Directors drag tiles to arrange
- Adjacent tiles form visual clusters (categories)
- Empty hexes between clusters create breathing room

**Tile types:**

- Project tiles — bounded work with finish lines
- System tiles — continuous infrastructure

**Visual treatments:**

- Category colors on tile borders
- Stream accents for Work at Hand
- State treatments (Planning: sketch style, Live: full color, etc.)
- Health indicators for systems

**Zoom interaction:**

- Zoomed out: see entire landscape, tiles as icons
- Zoomed in: see detail, tile contents readable
- Semantic zoom: detail increases with magnification

**Arrangement freedom:** No forced grid positions. Directors place tiles wherever makes sense to them. The system learns from arrangement over time.
