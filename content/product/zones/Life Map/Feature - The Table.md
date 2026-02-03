# Feature - The Table

## WHAT: Definition

A persistent priority spotlight that sits at the top of the Life Map, displaying the director's Work at Hand across three distinct positions: Gold (expansion), Silver (capacity), and Bronze (operations). The Table remains visible at all zoom levels — current priorities never disappear from view.

## WHERE: Ecosystem

- Zone: [[Feature - Life Map]] — persistent element above hex grid
- Implements: [[System - Three-Stream Portfolio]] — three positions map to three streams
- Implements: [[System - Weekly Priority]] — displays selected Work at Hand
- Implements: [[System - Dual Presence]] — projects appear here AND on hex grid
- Implements: [[Principle - Visibility Creates Agency]] — priorities always visible
- Implements: [[Principle - Protect Transformation]] — structural separation of streams
- Depends on: [[Feature - Sorting Room]] — where selections are made
- Depends on: [[Feature - Project]] — Gold/Silver positions display projects
- Depends on: [[Feature - Task]] — Bronze position displays task stack
- Components: [[The Table - Gold Position]], [[The Table - Silver Position]], [[The Table - Bronze Position]]
- Constraint: Maximum 1 Gold + 1 Silver (SOT 5.1)

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — priority visible at all times
- Strategy: [[Strategy - Superior Process]] — structured weekly commitment
- Principle: [[Principle - Protect Transformation]] — Gold/Silver slots protected from Bronze overflow
- Principle: [[Principle - Empty Slots Strategic]] — empty positions are valid choices
- Driver: Directors need constant awareness of what they've committed to this week. The Table is the answer to "what am I working on right now?"

## WHEN: Timeline

Core interface element from initial design. The Table's three-position structure is foundational — it embodies the three-stream philosophy in UI.

## HOW: Implementation

**Layout:** Three positions arranged left to right:

- Gold Position (leftmost) — single expansion project
- Silver Position (center) — single capacity project
- Bronze Position (rightmost) — stack of operational tasks

**Persistence:** The Table remains visible regardless of zoom level or navigation state on the Life Map. Directors can always see their current priorities.

**Interaction:**

- Click any position → Opens relevant Project Board or Bronze stack view
- Positions reflect real-time state (progress, completion, changes)

**Visual treatment:**

- Each position has stream-specific color accent
- Active items show enhanced treatment (glow, full saturation)
- Empty positions render as calm, intentional states (not warnings)

**Constraint enforcement:**

- System blocks adding second Gold or second Silver
- Pausing creates opening; promotion can fill it
