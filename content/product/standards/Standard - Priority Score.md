# Standard - Priority Score

## WHAT: Definition

The specification for computing priority ranking within streams: base formula plus stream-specific weightings that encode philosophical commitments about what each stream should prioritize. The Processing Layer implements this calculation.

## WHERE: Ecosystem

- Implemented by: [[System - Processing Layer]] — performs the calculation
- Used in: [[Feature - Sorting Room]] — scores displayed during selection
- Used by: [[Agent - Cameron]] — surfaces recommendations based on scores
- Implements: [[Principle - Familiarity Over Function]] — score suggests, director decides
- Depends on: [[Project - Purpose Assignment]] — determines which weighting applies
- Related: [[Standard - Three-Stream Portfolio]] — defines the streams

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — systematic prioritization support
- Driver: Without stream weighting, the formula would rank Gold and Bronze on same criteria. Weightings encode philosophy: Gold amplifies Importance, Bronze amplifies Urgency, Silver rewards Leverage.
- Decision: Formula is hypothesis, not validated algorithm. Expect tuning based on override frequency and director feedback.

## WHEN: Timeline

Initial specification. Weights are tunable — architecture supports evolution as we learn.

## HOW: Specification

### Base Formula

```
Priority Score = (Urgency × Importance) / Effort
```

### Required Inputs

| Input | Range | Description |
|-------|-------|-------------|
| Urgency | 1-10 | Time-sensitivity |
| Importance | 1-10 | How much it matters |
| Effort | 1-10 | What it costs |
| Deadline | Date (optional) | External constraint |

### Stream Weightings

| Stream | Adjustment | Rationale |
|--------|------------|-----------|
| Gold | Importance × 1.5 | Transformation chosen for significance |
| Silver | Score × Leverage Factor | Infrastructure evaluated by future return |
| Bronze | Urgency × 1.5 | Maintenance surfaces time-sensitive first |

### Override Policy

Director override is sacred. The score is a suggestion, never a mandate. Consistent overrides are data about the formula, not evidence the director is wrong.
