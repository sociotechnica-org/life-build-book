# Component - Due Date Signal

## WHAT: Definition

A visual indicator on project or task tiles when deadlines approach — a calendar icon or date badge showing time-sensitive items requiring attention.

## WHERE: Ecosystem

- Parent: [[System - Smoke Signals]]
- Applied to: [[Hex Grid - Hex Tile]], [[Feature - Project Board]], [[Task - Bronze Stack]]
- Source data: [[System - Priority Queue Architecture]] due date fields

## WHY: Rationale

- System: [[System - Smoke Signals]] — one of four signal types
- Driver: Deadlines can sneak up. Due Date signals surface time pressure.

## WHEN: Timeline

Part of Smoke Signals system.

## HOW: Implementation

**Trigger thresholds:**
- Appears when deadline within configured window (default: 7 days)
- Intensifies as deadline approaches

**Visual treatment:**
- Calendar icon with date
- Color intensifies (yellow → orange → red) as deadline nears

**Interaction:** Click opens relevant Project Board or task detail.
