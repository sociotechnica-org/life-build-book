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

**Trace Test:** Follow strategy links. If upstream is stub → penalize feature.

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

Naked link: `[[Priority Queue]]` → penalize
Contextualized: `[[Priority Queue]] — provides candidate tasks` → credit

**Conformance Check:** Card touches governed domain? → conformance link required.

Missing conformance when obligated = C ceiling for WHERE.

See Library Reference → Conformance Obligations table.

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
| Feature WHAT says "mechanism" | System |
| Feature WHAT says "specification" or "defines values" | Standard |
| Feature WHAT says "principle" or "guides" | Principle |
| Feature fails Interaction Test | System |
| Card has no state but constrains other cards | Standard |
| HOW has behavioral types table | Needs decomposition |

## Type-Specific Notes

**Standards:**
- WHERE uses "Conforming features/components" not "Dependencies/Dependents"
- WHY must link to Principle (Standards implement Principles)
- HOW contains the specification itself (values, rules, thresholds)
- Must have Anti-Examples section (what violation looks like)

**Principles:**
- WHERE uses "Implemented by" to link to Standards
- WHY focuses on belief/evidence, not driver
- Must have Anti-Patterns section (what violating this looks like)

**Strategies:**
- Must have Anti-Patterns section
- WHY must have reasoning, not just assertion
