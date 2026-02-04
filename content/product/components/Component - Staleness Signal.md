# Component - Staleness Signal

## WHAT: Definition

A visual treatment applied to project tiles when untouched beyond a threshold — a dust or fade effect indicating the project hasn't received attention and may need review or archival.

## WHERE: Ecosystem

- Parent: [[System - Smoke Signals]]
- Applied to: [[Hex Grid - Hex Tile]] for project tiles
- Source data: [[Feature - Project]] last activity timestamp
- Related: [[Feature - Project Board]] — where action happens

## WHY: Rationale

- System: [[System - Smoke Signals]] — one of four signal types
- Driver: Projects can slip off radar. Staleness makes neglect visible.

## WHEN: Timeline

Part of Smoke Signals system.

## HOW: Implementation

**Trigger threshold:**
- No activity (task completion, note, state change) for configured period
- Default: 3 weeks for active projects, 6 weeks for paused

**Visual treatment:**
- Dust/fade overlay effect
- Progressively more pronounced with time

**Dismissal:** Director can acknowledge ("still relevant") or archive.
