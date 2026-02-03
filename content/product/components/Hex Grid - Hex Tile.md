# Hex Grid - Hex Tile

## WHAT: Definition

An individual hexagonal tile on the grid representing a single project or system. Each tile displays identifying information (title, image, category) plus state indicators (progress, health, Work at Hand status).

## WHERE: Ecosystem

- Parent: [[Feature - Hex Grid]]
- Displays: [[Feature - Project]] or [[Feature - System]]
- Uses: [[System - Visual Language]] — colors, indicators, treatments
- Uses: [[Project - Image Evolution]] — Urushi images show on tiles
- Opens: [[Feature - Project Board]] — click to see detail
- Enhanced by: [[System - Dual Presence]] — Work at Hand tiles get special treatment

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — tiles are the atomic spatial unit
- Principle: [[Principle - Visual Recognition]] — consistent tile format aids scanning
- Driver: Directors need to recognize work at a glance. Tiles provide consistent, scannable representation.

## WHEN: Timeline

Core to Hex Grid design. Tile visual treatment evolves as the design system matures.

## HOW: Implementation

**Tile contents:**

- Urushi image (project illustration)
- Title (truncated if long)
- Category color border
- Progress indicator (for projects)
- Health indicator (for systems)

**State treatments:**

- Planning: Sketch/pencil style, lower saturation
- Live: Full color, active
- Work at Hand: Enhanced glow, stream accent
- Completed: Greyed, archived indicator
- Hibernating (systems): Dimmed, sleep indicator

**Interactions:**

- Click → opens Project Board overlay
- Drag → repositions on grid
- Long press → quick actions menu

**Size:** All tiles same size. No "bigger = more important" — that's what The Table is for.
