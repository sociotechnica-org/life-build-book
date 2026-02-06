# Feature - Strategy Studio

## WHAT: Definition

The planning workspace — a collection of specialized rooms where directors engage in strategic conversations with AI advisors, make prioritization decisions, and shape their approach to life's categories. The Strategy Studio is where thinking happens before execution.

## WHERE: Ecosystem

- Zone: Secondary workspace (planning focus)
- Implements: [[Strategy - AI as Teammates]] — advisor conversations happen here
- Contains: [[Feature - Council Chamber]] — strategic conversation with Jarvis
- Contains: [[Feature - Category Studios]] — domain-specific planning (8 rooms)
- Contains: [[Feature - Sorting Room]] — priority selection
- Agent access: [[Agent - Jarvis]], [[Agent - Cameron]], all Category Advisors
- Sibling: [[Feature - Life Map]] — execution workspace
- Sibling: [[Feature - Archives]] — learning workspace

## WHY: Rationale

- Strategy: [[Strategy - AI as Teammates]] — planning requires conversation partners
- Strategy: [[Strategy - Superior Process]] — planning is distinct from execution
- Principle: [[Principle - Guide When Helpful]] — advisors available when directors seek them
- Driver: Directors need space to think strategically before committing to action. The Strategy Studio provides that space.

## WHEN: Timeline

Core workspace from initial design. Strategy Studio evolved as advisor architecture developed.

## HOW: Implementation

**Room structure:**

- Council Chamber (1) — Jarvis's space for high-level strategic conversation
- Category Studios (8) — one per Life Category, each with its advisor
- Sorting Room (1) — Cameron's space for prioritization decisions

**Navigation:**

- Hub view showing all rooms
- Click to enter any room
- Room context persists (conversation history)

**When to use:**

- Weekly planning sessions
- Category-level strategic reviews
- Priority selection for Work at Hand
- When directors want to think, not just do
