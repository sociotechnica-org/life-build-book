# Standard - Table Slot Behaviors

## WHAT: Definition

The specification for visual treatment and interaction behavior of empty Gold and Silver slots on The Table — distinguishing between "not yet selected" (planning incomplete) and "intentionally empty" (strategic choice), with rules for agent behavior around empty slots.

## WHERE: Ecosystem

- Conforming features: [[Feature - The Table]] — renders empty slot visual states
- Conforming features: [[Feature - Weekly Planning]] — slot selection includes intentional-empty option
- Conforming components: [[The Table - Gold Position]] — Gold empty state behavior
- Conforming components: [[The Table - Silver Position]] — Silver empty state behavior
- Implements: [[Principle - Empty Slots Strategic]] — makes intentional emptiness testable

## WHY: Rationale

- Principle: [[Principle - Empty Slots Strategic]] — an empty slot can be a deliberate choice
- Driver: Without explicit spec, empty slots default to "incomplete" visual treatment that pressures directors to fill them, undermining the capacity-first philosophy.

## WHEN: Timeline

Core specification. Visual treatments defined during Vision Capture.

## HOW: Specification

### Empty Slot States

| State | Visual Treatment | Meaning | Affordance |
|-------|-----------------|---------|------------|
| Not selected yet | Subtle outline, gentle prompt | Planning incomplete — director hasn't chosen | Action affordance present |
| Intentionally empty | Calm, solid, distinct visual | Strategic choice — director chose restraint | No action prompt |

### Visual Requirements

- "Not selected yet" may include a subtle action affordance (e.g., "Select Gold project")
- "Intentionally empty" must look calm and intentional, not alarming
- No red borders, exclamation marks, or warning indicators on intentionally-empty slots
- Both states must be visually distinct from each other
- Intentionally-empty uses a calm, warm visual — not absence but presence of rest

### Interaction Rules

| Rule | Requirement |
|------|-------------|
| Setting intentional-empty | One deliberate action, not multi-step |
| Agent check | Agents check intent once when slot is empty, then accept |
| Repeat prompting | Prohibited for intentionally-empty slots |
| Metrics | Do not penalize weeks with intentionally-empty slots |

### Agent Behavior

- Cameron checks intent once: "Taking a lighter week?" — accepts response
- No follow-up: "are you sure you don't want a Gold project?"
- Jarvis frames empty weeks as strategic: "investing in capacity" not "missing Gold"
- Weekly summary recognizes intentional restraint, does not report "0/1 Gold completed"

## Anti-Examples

- **Red border or exclamation mark on an empty Gold slot** — treats emptiness as error. Intentionally-empty slots should feel calm and intentional, communicating strategic restraint.
- **Cameron asking "are you sure you don't want a Gold project?" after director chose intentional rest** — agent already checked intent and should accept the choice. Repeated prompting undermines director autonomy.
- **Weekly summary showing "0/1 Gold projects completed" for intentionally-empty weeks** — frames strategic rest as zero performance. The metric should recognize intentional restraint as a valid outcome.
