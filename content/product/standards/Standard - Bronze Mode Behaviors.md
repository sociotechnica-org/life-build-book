# Standard - Bronze Mode Behaviors

## WHAT: Definition

The specification for three Bronze stack operating modes — Minimal, Target, and Maximal — each defining different stack population and replenishment behaviors. Directors select mode during planning; System - Bronze Operations implements the behavior.

## WHERE: Ecosystem

- Implemented by: [[System - Bronze Operations]] — executes mode behavior
- Selected in: [[Feature - Sorting Room]]
- Displayed on: [[The Table - Bronze Position]]
- Implements: [[Standard - Three-Stream Portfolio]] — Bronze stream mechanics

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — operational work managed with flexible controls
- Principle: [[Principle - Protect Transformation]] — modes let directors constrain Bronze expansion
- Driver: Different weeks need different operational engagement. Modes provide that flexibility.

## WHEN: Timeline

Core to Bronze Operations. Mode selection is part of weekly planning.

## HOW: Specification

### Mode Definitions

| Mode | Behavior | Best For |
|------|----------|----------|
| Minimal | Only due-date tasks, critical responses, and system-generated items. Stack shrinks as tasks complete (no replenishment). | High Gold/Silver commitment weeks, recovery periods |
| Target +X | Minimal tasks + X discretionary. Auto-replenishes to maintain count. | Normal weeks, steady operational cadence |
| Maximal | Continuous pull from queue. As tasks complete, next candidate immediately surfaces. | Catch-up weeks, administrative clearing |

### Stack Sources (Priority Order)

1. Due-date items (deadline approaching)
2. Critical Responses (urgent flags)
3. System-generated tasks (from planted systems)
4. Quick Task project tasks
5. Decomposed tasks from larger projects

### Mode Selection Rules

- Initial selection during Weekly Planning
- Can change mid-week via gear icon on Bronze position
- Mode change takes effect immediately
