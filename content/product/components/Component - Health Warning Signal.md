# Component - Health Warning Signal

## WHAT: Definition

A visual treatment applied to system tiles when health metrics decline — color tinting from yellow (attention needed) to red (critical) based on cycle adherence and task completion rates.

## WHERE: Ecosystem

- Parent: [[System - Smoke Signals]]
- Applied to: [[Hex Grid - Hex Tile]] for system tiles
- Source data: [[Feature - System]] health metrics
- Related: [[Feature - System Board]] — detailed health view

## WHY: Rationale

- System: [[System - Smoke Signals]] — one of four signal types
- Driver: Systems can silently degrade. Health Warning makes degradation visible before it becomes critical.

## WHEN: Timeline

Part of Smoke Signals system.

## HOW: Implementation

**Trigger thresholds:**
- Yellow: Cycle completion < 80% over past 2 weeks
- Red: Cycle completion < 50% OR 3+ consecutive misses

**Visual treatment:**
- Tile background tint (yellow or red)
- Visible at Working View and closer
- Clears automatically when health improves

**Dismissal:** Director can snooze for 1 week. Signal returns if condition persists.
