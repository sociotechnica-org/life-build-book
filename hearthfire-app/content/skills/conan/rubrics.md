# Rubrics

All sections 20% weight. Phase: Vision Capture.

## WHAT

Criteria: Standalone, Specific, Complete

| Grade | Criteria |
|-------|----------|
| A | All three met. 2-4 sentences. Reader fully understands. |
| B | All three met, one weak. |
| C | One criterion missing. |
| D | Two missing. Reader confused. |
| F | Empty, placeholder, or pointer only. |

Failure example: "The settings for Bronze mode." → F (pointer, not definition)

## WHY

Criteria: Strategy linked (with explanation), Rationale present, Driver traced

| Grade | Criteria |
|-------|----------|
| A | Full causal chain. Alternatives/tensions acknowledged. |
| B | Strategy + driver + rationale. No tensions. |
| C | Thin explanation OR missing driver. |
| D | Vague strategy reference, no real rationale. |
| F | Empty or no strategic connection. |

**Trace Test:** Follow strategy links. If upstream is stub → penalize downstream card.

Failure example: "Strategy: [[Visual Work]]" → D (naked link)

## WHERE

Criteria: 3+ links, All contextualized, Bidirectional, Conformance present

| Grade | Criteria |
|-------|----------|
| A | Rich ecosystem map. All categories with context. Conformance links where obligated. |
| B | Key relationships present. May miss one category. 3+ links. Conformance present or N/A. |
| C | Naked links OR one direction only OR <3 links OR missing conformance. |
| D | 1-2 links, mostly naked. |
| F | Empty. |

Naked link: `[[Data Store]]` → penalize
Contextualized: `[[Data Store]] — provides candidate items for filtering` → credit

**Conformance Check:** Card touches governed domain? → conformance link required.

Missing conformance when obligated = C ceiling for WHERE.

See reference.md → Conformance Obligations table.

## HOW

Criteria: Sufficient for builder, Examples present, Anti-examples present, Separated (no rationale)

| Grade | Criteria |
|-------|----------|
| A | Builder could implement. ≥2 examples. ≥1 anti-example. Clear behavior spec. |
| B | Clear direction. Has examples OR anti-examples but not both. |
| C | Vague. Missing examples. Significant clarification needed. |
| D | Restates WHAT, no implementation detail, no examples. |
| F | Empty. |

**Examples check:** Concrete input → output? Not abstract descriptions?
**Anti-examples check:** Shows what wrong implementation looks like?

**Enumeration flag:** Table of types/modes in HOW → note AUDIT SIGNAL.

## WHEN (Vision Capture)

Binary pass/fail — structural readiness only.

| Grade | Criteria |
|-------|----------|
| PASS (A) | Section exists. Temporal status marked. Known predecessors acknowledged. |
| FAIL (F) | Section missing OR ignores known predecessors. |

## Misclassification Signals

Flag during grading, don't halt. Complete grade + note AUDIT SIGNAL.

| Signal | Suggests |
|--------|----------|
| WHAT says "mechanism," "manages state," "processes" | System |
| WHAT says "specification," "defines values," "must conform" | Standard |
| WHAT says "principle," "guides," "judgment-based" | Principle |
| Card has no state but constrains other cards | Standard |
| Card typed as Component-type but users don't consciously invoke it | System |
| Card typed as Component-type but name/description uses action-words | Capability-type (see reference.md) |
| Card typed as Component-type but describes a process/workflow | Capability-type (see reference.md) |
| Card typed as Component-type but is a content object | Content-type (see reference.md) |
| Agent card has no Prompt card | Prompt missing |
| HOW has behavioral types table | Needs decomposition |
| Missing containment link | Structural deficiency (see reference.md → Containment) |

For product-specific misclassification signals, consult reference.md → Misclassification Signals.

## Type-Specific Notes

### Universal Types

**Standards:**
- WHERE uses "Conforming:" to list constrained product-layer cards
- WHY must link to Principle (Standards implement Principles)
- HOW contains the specification itself (values, rules, thresholds)
- Must have Anti-Examples section (what violation looks like)

**Principles:**
- WHERE uses "Standards:" to link to implementing Standards
- WHY focuses on belief/evidence, not driver
- Must have "What Violating This Looks Like" section

**Strategies:**
- Must have "What Violating This Looks Like" section
- WHY must have reasoning, not just assertion

**Agents:**
- WHERE must link to coordinating Agents
- Must describe voice/personality, responsibilities, boundaries
- Must link to Prompt card (implementation)
- Must specify handoff relationships with other agents

**Prompts:**
- WHERE must link to parent Agent
- Must include actual prompt text
- Must have version and changelog

### Product-Specific Types

Consult reference.md → Type-Specific Rubric Notes for this product's WHAT-layer types. Each product type has its own requirements for WHERE containment, HOW detail, and conformance obligations.
