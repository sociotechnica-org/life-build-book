# Feature - Sorting Room

## WHAT: Definition

Cameron's dedicated space in the Strategy Studio — where directors make prioritization decisions, select Work at Hand for the week, and review their Priority Queue. The Sorting Room is where the three-stream selection process happens.

## WHERE: Ecosystem

- Parent: [[Feature - Strategy Studio]]
- Agent: [[Agent - Cameron]] — priority coordinator
- Uses: [[System - Priority Queue Architecture]] — source of candidates
- Uses: [[System - Priority Score Calculation]] — ranking logic
- Uses: [[Feature - Three-Stream Filtering]] — filtered views
- Selects: [[Feature - The Table]] positions — Gold, Silver, Bronze mode
- Implements: [[Strategy - Superior Process]] — structured prioritization

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — prioritization deserves its own space
- Principle: [[Principle - Familiarity Over Function]] — sorting metaphor is intuitive
- Principle: [[Principle - Protect Transformation]] — selection process enforces stream constraints
- Driver: Directors need help seeing options and making choices. The Sorting Room presents candidates and guides selection.

## WHEN: Timeline

Core to Strategy Studio design. Sorting Room mechanics refined as priority math evolved.

## HOW: Implementation

**Selection flow:**

1. Gold selection — view expansion candidates, choose one (or confirm empty)
2. Silver selection — view capacity candidates, choose one (or confirm empty)
3. Bronze review — set mode, review what will populate stack

**Cameron's role:**

- Present filtered candidates with priority scores
- Explain rankings and tradeoffs
- Detect patterns ("this keeps slipping")
- Ask calibrating questions

**Filters:**

- Gold filter: Purpose = "Moving forward"
- Silver filter: Purpose = "Building leverage"
- Bronze sources: Maintenance projects, system tasks, due-date items

**Output:** Selections populate The Table. Director leaves Sorting Room with Work at Hand set.
