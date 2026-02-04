# Standard - Three-Stream Portfolio

## WHAT: Definition

The specification for classifying all director work into three purpose-based streams: Gold (expansion), Silver (capacity), and Bronze (maintenance). Each stream answers a different question about what the time investment is for.

## WHERE: Ecosystem

- Conforming features: [[Feature - The Table]], [[Feature - Sorting Room]], [[Feature - Three-Stream Filtering]]
- Conforming components: [[The Table - Gold Position]], [[The Table - Silver Position]], [[The Table - Bronze Position]]
- Implements: [[Principle - Protect Transformation]] — structural protection for transformation work
- Implements: [[Principle - Familiarity Over Function]] — director chooses stream based on their relationship to work
- Related: [[Standard - Priority Score]] — uses stream for weighting
- Related: [[Project - Purpose Assignment]] — where stream is assigned

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — applies structured framework to prevent urgency bias
- Driver: Neurological reality — the brain's threat-detection system responds to urgent/concrete faster than prefrontal cortex evaluates important/abstract. A single ranked list lets urgency always win.
- Decision: Three streams aren't three lists — they're three separate competitions. Gold competes with Gold on importance. Bronze competes with Bronze on urgency. Cross-type competition is structurally prevented.

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
