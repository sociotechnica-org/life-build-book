# Standard - Visual Language

## WHAT: Definition

The specification for visual vocabulary across all LifeBuild interfaces — category colors, stream accents, state indicators, and entity type markers. This standard defines what visual treatments must be applied; the rendering systems implement these specifications.

## WHERE: Ecosystem

- Conforming features: [[Feature - Life Map]], [[Feature - The Table]], [[Feature - Hex Grid]], [[Feature - Project Board]], [[Feature - System Board]]
- Conforming components: [[Hex Grid - Hex Tile]], [[The Table - Gold Position]], [[The Table - Silver Position]], [[The Table - Bronze Position]]
- Implements: [[Principle - Visual Recognition]] — instant identification without inspection
- Implements: [[Principle - Visibility Creates Agency]] — state visible at a glance
- Advances: [[Strategy - Spatial Visibility]] — spatial organization requires visual clarity
- Related: [[Standard - Image Evolution]] — project illustration progression

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — visibility requires legibility
- Principle: [[Principle - Visual Recognition]] — two-second identification test
- Decision: Content-depicting illustrations over abstract patterns. Recognition trumps beauty.

## WHEN: Timeline

Established in Brand Standards v2. Visual language is stable — changes require updating all conforming elements simultaneously.

## HOW: Specification

### Category Colors

| Category | Color |
|----------|-------|
| Health | Vibrant green |
| Purpose | Deep purple/indigo |
| Finances | Gold/amber |
| Relationships | Warm pink/rose |
| Home | Earthy brown/terracotta |
| Community | Orange |
| Leisure | Sky blue |
| Personal Growth | Teal |

### Stream Accents

| Stream | Color |
|--------|-------|
| Gold position | Deep amber/gold |
| Silver position | Cool silver/platinum |
| Bronze position | Warm bronze/copper |

### State Indicators

| State | Treatment |
|-------|-----------|
| Live projects / Planted systems | Full saturation |
| Planned projects / Hibernating systems | Dimmed (~60%) |
| Paused projects | Very dimmed (~30%) |
| Work at Hand | Enhanced + glow |

### Entity Type Markers

| Entity | Marker |
|--------|--------|
| Projects | Progress ring (% complete) |
| Systems | Health dots (●●●●○) |

## Anti-Examples

- **Using arbitrary colors not mapped to life categories** — Each category has a specific color (Health = vibrant green, Finances = gold/amber, etc.). Introducing unmapped colors breaks the visual vocabulary and forces directors to re-learn associations.
- **Rendering a Planned project at full saturation** — Planned projects render at ~60% saturation (dimmed). Showing them at full saturation makes them visually identical to Live projects, destroying the state-at-a-glance signal.
- **Using progress rings on systems or health dots on projects** — Entity type markers are distinct: projects get progress rings (% complete), systems get health dots (●●●●○). Mixing markers creates confusion about what kind of entity the director is looking at.
