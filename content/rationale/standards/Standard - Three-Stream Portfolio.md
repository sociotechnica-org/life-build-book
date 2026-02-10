# Standard - Three-Stream Portfolio

## WHAT: Definition

The specification for classifying all director work into three purpose-based streams: Gold (expansion), Silver (capacity), and Bronze (maintenance). Each stream answers a different question about what the time investment is for.

## WHERE: Ecosystem

- Conforming: [[Overlay - The Table]], [[Room - Sorting Room]], [[Capability - Three-Stream Filtering]]
- Conforming components: [[Component - Gold Position]], [[Component - Silver Position]], [[Component - Bronze Position]]
- Implements: [[Principle - Protect Transformation]] — structural protection for transformation work
- Implements: [[Principle - Familiarity Over Function]] — director chooses stream based on their relationship to work
- Related: [[Standard - Priority Score]] — uses stream for weighting
- Related: [[Capability - Purpose Assignment]] — where stream is assigned

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — applies structured framework to prevent urgency bias
- Driver: Neurological reality — the brain's threat-detection system responds to urgent/concrete faster than prefrontal cortex evaluates important/abstract. A single ranked list lets urgency always win.
- Decision: Three streams aren't three lists — they're three separate competitions. Gold competes with Gold on importance. Bronze competes with Bronze on urgency. Cross-type competition is structurally prevented.

**Why exactly one Gold, one Silver:**

- **The focus case:** Research on goal pursuit (Fishbach & Dhar, 2005) shows single-goal commitment produces better outcomes than pursuing multiple goals simultaneously. Two Gold projects create a daily decision — "which transformation today?" — that consumes the executive function meant for the work itself.
- **The momentum case:** A single Gold project accumulates momentum through consistent attention. Transformation work (learning a language, writing a book, training for a marathon) requires sustained, compounding effort that divided attention prevents.
- **The honesty case:** If a director considers two things Gold, the system forces them to choose: "which one matters more this week?" That's a genuinely useful strategic question a two-slot system would let them avoid.
- **Exception consideration:** Directors with genuinely parallel transformations should sequence them — one Gold this month, the other next — or reframe one as Silver (capacity-building toward a future Gold).

## WHEN: Timeline

Core architecture from initial design. The three-stream model is foundational — changing it requires redesigning The Table, Priority Queue, and all prioritization interfaces.

## HOW: Specification

### Stream Definitions

| Stream | Purpose | Question | Example |
|--------|---------|----------|---------|
| Gold | Expansion | What changes my life? | Train for marathon |
| Silver | Capacity | What creates leverage? | Set up automated bill pay |
| Bronze | Maintenance | What prevents decay? | Pay the electric bill |

### Behavioral Intent

Invest in Silver → drown less in Bronze → have room for Gold.

### Classification Rule

Purpose is determined by the director's relationship to the work, not objective criteria. The same task is Gold for one person and Bronze for another.

### Stream Flow Pattern

Work often matures through streams:
- Learning Spanish starts as **Gold** (expansion)
- Becomes **Silver** (building practice system)
- Then **Bronze** (maintaining the routine)

### Slot Constraints

| Stream | Maximum on Table |
|--------|------------------|
| Gold | 1 |
| Silver | 1 |
| Bronze | No maximum (mode-controlled) |

## Anti-Examples

- **Ranking Gold and Bronze projects in the same list** — Streams are separate competitions. Gold competes with Gold on importance; Bronze competes with Bronze on urgency. A combined list lets urgent Bronze tasks crowd out transformational Gold work, which is the core problem the three-stream model solves.
- **Classifying work by objective criteria instead of director relationship** — The same task (learning Spanish) is Gold for one person and Bronze for another. Purpose is subjective — determined by the director's relationship to the work, not external taxonomy.
- **Allowing more than 1 Gold or 1 Silver project on The Table** — Slot constraints (1 Gold, 1 Silver) are structural protection. Expanding slots dilutes focus and recreates the overloaded priority list the model replaces.
