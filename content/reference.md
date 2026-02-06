# Context Library Reference

Lookup tables for building and auditing Context Library cards.

---

## Templates

### Feature

```markdown
# Feature - [Name]

## WHAT: Definition
[2-4 sentences. Standalone.]

## WHERE: Ecosystem
- Zone: [[Zone]] — [context]
- Conforms to: [[Standard]] — [what spec constrains this]
- Dependencies:
  - [[X]] — [what it needs]
- Dependents:
  - [[X]] — [what needs it]
- Components:
  - [[X]] — [what implements it]

## WHY: Rationale
- Strategy: [[Strategy]] — [how this implements it]
- Principle: [[Principle]] — [what guidance it follows]
- Driver: [Signal/Pressure/Exploratory]
- Constraints: [What this CAN'T do. Boundaries.]

## WHEN: Timeline
[Temporal status. Past approaches if any.]

## HOW: Implementation

### Behavior
[What it does. User-observable behavior. State transitions.]

### Examples
[Concrete input → output. At least 2.]

### Anti-Examples
[What wrong implementation looks like. At least 1.]
```

### Standard

```markdown
# Standard - [Name]

## WHAT: Definition
[What this specifies. What it constrains.]

## WHERE: Ecosystem
- Conforming features: [[Feature]] — [must follow this]
- Conforming components: [[Component]] — [must follow this]
- Implements: [[Principle]] — [what guidance this makes testable]

## WHY: Rationale
- Principle: [[Principle]] — [what guidance it makes concrete]
- Driver: [What goes wrong without this spec]

## WHEN: Timeline
[Stability status.]

## HOW: Specification
[The spec. Values, rules, thresholds. Tables preferred.]

## Anti-Examples
[What violation looks like. Concrete wrong outputs.]
```

### System

```markdown
# System - [Name]

## WHAT: Definition
[What mechanism. What state it manages.]

## WHERE: Scope
- Zones: [[Zone]], [[Zone]]
- Features: [[Feature]], [[Feature]]
- Implements: [[Standard]] — [what spec it follows]

## WHY: Purpose
[Why this exists.]

## HOW: Mechanics
[State transitions, processing logic.]

## WHEN: Status
[Temporal status.]
```

### Component

```markdown
# Component - [Name]

## WHAT: Purpose
[What this does.]

## WHERE: Parent
- Feature: [[Feature]]
- Conforms to: [[Standard]] — [what spec constrains this]

## HOW: Technical
[Implementation details.]
```

### Zone

```markdown
# Zone - [Name]

## WHAT: Definition
[What product area.]

## WHERE: Position
- Contains: [[Feature]], [[Feature]]

## WHY: Purpose
[Why distinct area.]

## WHEN: Status
[Temporal status.]
```

### Principle

```markdown
# Principle - [Name]

## WHAT: The Principle
[One sentence. Judgment-based.]

## WHERE: Scope
- Governs: [[Feature]], [[Feature]]
- Implemented by: [[Standard]] — [specs that make this testable]

## WHY: Belief
[Why we believe this.]

## HOW: Application
[What following this looks like.]

## Anti-Patterns
[What violating this looks like. Concrete examples.]

## Tensions
[Tradeoffs with other principles.]
```

### Strategy

```markdown
# Strategy - [Name]

## WHAT: The Strategy
[One sentence.]

## WHERE: Scope
- Governs: [[Feature]], [[Feature]]
- Generates: [[Principle]], [[Standard]]

## WHY: Belief
[Reasoning behind it. Not just assertion.]

## HOW: Application
[What following this looks like.]

## Anti-Patterns
[What violating this looks like. Concrete examples.]

## Tensions
[Tradeoffs with other strategies.]
```

### Decision

```markdown
# Decision - [Name]

## WHAT: The Choice
[What was decided.]

## WHERE: Affected
- [[Feature]] — [how it shapes this]

## WHY: Rationale
Options:
- A: [rejected because]
- B: [chosen because]

## WHEN: Timeline
[When made.]
```

### Learning

```markdown
# Learning - [Name]

## WHAT: The Insight
[Generalized lesson.]

## WHERE: Applies To
[What this informs.]

## WHY: Significance
[Why it matters.]

## WHEN: How Learned
[What happened.]
```

### Initiative

```markdown
# Initiative - [Name]

## WHAT: The Goal
[What this achieves.]

## WHERE: The Cast
- [[Feature]] — [launched/changed]

## WHY: The Driver
- [[Strategy]] — [alignment]

## WHEN: The Arc
- [[Release]] — [milestone]

## Learnings
- [[Learning]]
```

### Release

```markdown
# Release [Version]

## WHAT: Summary
[What shipped.]

## WHERE: Affected
- [[Feature]] — [launched/changed]

## WHY: Arc
Part of: [[Initiative]]

## WHEN: Key Moments
- [[Decision]]
```

### Future

```markdown
# Future - [Name]

## WHAT: Vision
[What it will do.]

## WHERE: Position
- Zone: [[Zone]]
- Builds on: [[Feature]]
- Blocked by: [dependencies]

## WHY: Driver
- [[Strategy]]

## WHEN: Timeline
- Target: [version/quarter]
- Confidence: exploratory | low | medium | high
- Status: proposed | approved | in-progress | blocked
```

---

## Folder Structure

| Type | Folder |
|------|--------|
| Zone | `/product/zones/` |
| Feature | `/product/features/` |
| Component | `/product/components/` |
| System | `/product/systems/` |
| Standard | `/product/standards/` |
| Principle | `/product/principles/` |
| Strategy | `/product/strategies/` |
| Decision | `/product/` (flat) |
| Learning | `/product/` (flat) |
| Initiative | `/product/` (flat) |
| Release | `/releases/` |
| Future | `/product/` (flat) |

---

## Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Zone | `Zone - [Name]` | `Zone - Life Map` |
| Feature | `Feature - [Name]` | `Feature - Bronze Mode Settings` |
| Feature spoke | `Feature - [Parent] - [Aspect]` | `Feature - Bronze Mode - Friday Workflow` |
| Component | `Component - [Name]` | `Component - Mode Toggle UI` |
| System | `System - [Name]` | `System - Pipeline Architecture` |
| Standard | `Standard - [Name]` | `Standard - Visual Language` |
| Principle | `Principle - [Name]` | `Principle - Visual Recognition` |
| Strategy | `Strategy - [Name]` | `Strategy - Spatial Visibility` |
| Decision | `Decision - [Choice]` | `Decision - Three Slot Limit` |
| Learning | `Learning - [Insight]` | `Learning - Queue Overwhelm` |
| Initiative | `Initiative - [Name]` | `Initiative - AI Prioritization` |
| Release | `Release [Version]` | `Release 2.3` |
| Future | `Future - [Name]` | `Future - Context-Aware Slots` |

---

## Conformance Obligations

Features/Components touching governed domains must link to constraining Standards.

| If the card... | Must link to... |
|----------------|-----------------|
| Renders visually | Standard - Visual Language |
| Has state indicators (saturation, glow, dimming) | Standard - Visual Language |
| Displays project illustrations | Standard - Image Evolution |
| Involves priority ordering or scoring | Standard - Priority Score |
| Involves stream classification (Gold/Silver/Bronze) | Standard - Three-Stream Portfolio |
| Has project lifecycle states | Standard - Project States |
| Shows smoke signal indicators | Standard - Smoke Signal Thresholds |
| Has Bronze mode behavior | Standard - Bronze Mode Behaviors |
| Involves service level awareness | Standard - Service Levels |
| Renders Work at Hand in multiple locations | Standard - Dual Presence |

**When creating a Standard:**
- Must implement ≥1 Principle
- Must have ≥1 conforming Feature/Component
- Audit existing cards for conformance gaps

---

## Sources to Mine

### Vision Capture Phase

| Source Type | Extract |
|-------------|---------|
| SOT + companion docs | Feature definitions, ecosystem maps, strategic reasoning, behavior specs |
| Strategy/vision docs | Strategy principles, initiative goals |
| Brand standards docs | Standards (colors, typography, illustration rules) |
| Roadmap/planning docs | Future state, phasing, dependencies |
| Design docs/PRDs | Feature specs, user scenarios, edge cases |
| Decision records | Rationale, alternatives, learnings |

**Standard extraction signal:** Tables of values, testable rules, specs multiple features must conform to → extract as Standard.

### Later Phases

| Source Type | Phase |
|-------------|-------|
| Codebase | Reality Grounding |
| Git history | Reality Grounding |
| Support tickets, feedback | Live Operations |
| Analytics, metrics | Live Operations |
| Retrospectives | Build Cycle onward |
