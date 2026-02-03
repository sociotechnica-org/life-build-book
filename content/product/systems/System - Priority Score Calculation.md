# System - Priority Score Calculation

## WHAT: Definition

The formula that computes priority ranking within streams: (Urgency × Importance) / Effort, with stream-specific weightings that encode philosophical commitments about what each stream should prioritize.

## WHERE: Ecosystem

- Zone: [[Feature - Sorting Room]] — scores displayed during selection
- Implements: [[Principle - Familiarity Over Function]] — score suggests, director decides
- Implements: [[System - Three-Stream Portfolio]] — different weights per stream
- Depends on: [[Project - Purpose Assignment]] — determines which weighting applies
- Used by: [[Agent - Cameron]] — surfaces recommendations based on scores

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — systematic prioritization support
- Driver: Without stream weighting, the formula would rank Gold and Bronze on same criteria. Weightings encode philosophy: Gold amplifies Importance, Bronze amplifies Urgency, Silver rewards Leverage.
- Decision: Formula is hypothesis, not validated algorithm. We expect to tune based on override frequency and director feedback.

## WHEN: Timeline

Initial implementation. The specific weights are tunable — the architecture supports evolution as we learn.

## HOW: Implementation

**Base formula:**

```
Priority Score = (Urgency × Importance) / Effort
```

**Stream weightings:**

| Stream | Adjustment              | Rationale                                 |
| ------ | ----------------------- | ----------------------------------------- |
| Gold   | Importance × 1.5        | Transformation chosen for significance    |
| Silver | Score × Leverage Factor | Infrastructure evaluated by future return |
| Bronze | Urgency × 1.5           | Maintenance surfaces time-sensitive first |

**Director override is sacred:** The score is a suggestion, never a mandate. Consistent overrides are data about the formula, not evidence the director is wrong.

**Inputs required:**

- Urgency (1-10): Time-sensitivity
- Importance (1-10): How much it matters
- Effort (1-10): What it costs
- Deadline (optional): External constraint
