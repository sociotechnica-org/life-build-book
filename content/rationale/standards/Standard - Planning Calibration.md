# Standard - Planning Calibration

## WHAT: Definition

The specification for how planning interfaces frame plans as hypotheses, how agents communicate about plan changes, and how the system measures planning quality through calibration accuracy rather than completion rate.

## WHERE: Ecosystem

- Conforming: [[System - Adaptation]] — mid-week modification follows hypothesis framing
- Conforming rooms: [[Room - Sorting Room]] — priority rankings treated as testable predictions
- Conforming rooms: [[Room - Council Chamber]] — strategic conversations frame plans as hypotheses
- Conforming capabilities: [[Capability - Week-in-Review]] — review measures calibration accuracy, not completion
- Implements: [[Principle - Plans Are Hypotheses]] — makes hypothesis framing testable

## WHY: Rationale

- Principle: [[Principle - Plans Are Hypotheses]] — a weekly plan is a bet, not a commitment
- Driver: Without this spec, planning interfaces default to completion-tracking patterns that create guilt cycles and discourage adaptation.

## WHEN: Timeline

Core specification. Calibration metrics refine as usage data accumulates.

## HOW: Specification

### Framing Rules

| Context | Correct Framing | Wrong Framing |
|---------|-----------------|---------------|
| Plan modification | "Adjusting strategy" | "Editing failure report" |
| Weekly review | "Testing hypothesis" | "Measuring compliance" |
| Incomplete plan | "Calibration data" | "Underperformance" |
| Mid-week change | "Engaged leadership" | "Deviation from plan" |

### Metrics

| Metric | Role | Notes |
|--------|------|-------|
| Calibration accuracy | **Primary** | How well plans predict reality. Tracked over time. |
| Estimation trend | Secondary | Are estimates getting more accurate week-over-week? |
| Completion rate | **Never primary** | May be tracked but never headlined or guilt-inducing |

### Agent Tone Rules

- Jarvis never says "you didn't complete your Gold this week"
- Correct framing: "your Gold hypothesis was tested — what did you learn?"
- Language shapes whether directors avoid planning or embrace it
- Adaptation is presented as engaged leadership, not failure

### Pause-and-Replace Pattern

- Mid-week plan modification is a legitimate strategy adjustment
- No justification dialog or "reason for change" field required
- Modification UI should feel like adjusting a strategy, not editing a failure report
- Changes logged for calibration data, not for accountability

## Anti-Examples

- **Jarvis saying "you completed 60% of your plan this week"** — frames plan as contract with a compliance score. Correct: "your calibration improved — estimates were 15% closer to reality this week."
- **Requiring a reason field when modifying Work at Hand** — treats adaptation as deviation requiring justification. Modification should feel like strategy adjustment, not failure documentation.
- **Dashboard showing completion percentage as the primary planning metric** — rewards rigidity over learning. Calibration accuracy and estimation trend should headline the planning dashboard.
