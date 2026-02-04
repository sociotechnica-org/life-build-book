# Component - Maximal Mode

## WHAT: Definition

The Bronze mode that continuously pulls from the queue — aggressive operational clearing with no stack limit. Tasks auto-populate as fast as they're completed.

## WHERE: Ecosystem

- Parent: [[System - Bronze Operations]]
- Selected in: [[Feature - Sorting Room]]
- Displayed on: [[The Table - Bronze Position]]

## WHY: Rationale

- System: [[System - Bronze Operations]] — one of three modes
- Driver: Catch-up weeks or low-transformation periods benefit from clearing operational backlog.

## WHEN: Timeline

Part of Bronze Operations system.

## HOW: Implementation

**Stack behavior:**
- Continuous pull until queue empty
- No discretionary limit
- Task completes → next candidate immediately surfaces

**Best for:** Catch-up weeks, administrative clearing, low Gold/Silver periods.
