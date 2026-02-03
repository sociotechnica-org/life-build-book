# Feature - Three-Stream Filtering

## WHAT: Definition

The filtered views in the Sorting Room that separate Priority Queue candidates by their stream classification — Gold filter shows expansion projects, Silver filter shows capacity projects, Bronze sources shows operational tasks. Three-Stream Filtering makes selection manageable.

## WHERE: Ecosystem

- Parent: [[Feature - Sorting Room]]
- Implements: [[System - Three-Stream Portfolio]] — stream separation in UI
- Implements: [[Principle - Protect Transformation]] — filters enforce stream boundaries
- Uses: [[System - Priority Queue Architecture]] — source of candidates
- Uses: [[System - Priority Score Calculation]] — rankings within filters
- Used by: [[Agent - Cameron]] — presents filtered views

## WHY: Rationale

- System: [[System - Three-Stream Portfolio]] — streams need separate views
- Principle: [[Principle - Protect Transformation]] — can't accidentally put Bronze in Gold slot
- Driver: Showing all candidates together would be overwhelming. Filtering by stream makes selection tractable.

## WHEN: Timeline

Core to Sorting Room design. Filters embody the three-stream philosophy in interaction.

## HOW: Implementation

**Gold Filter:**

- Shows projects with Purpose = "Moving forward"
- Sorted by priority score (importance-weighted)
- Cameron presents top candidates with context

**Silver Filter:**

- Shows projects with Purpose = "Building leverage"
- Sorted by priority score (leverage-weighted)
- Cameron presents top candidates with context

**Bronze Sources:**

- Not a single filter — shows source breakdown
- Quick Task projects (Purpose = Maintenance)
- System-generated tasks
- Due-date driven items
- Critical Responses

**Filter behavior:**

- Only one filter active at a time
- Selection from filter places item on The Table
- Cannot cross-select (Gold filter → Gold position only)

**Empty filters:** If Gold filter is empty, Cameron notes it and asks about new project creation or pausing existing work.
