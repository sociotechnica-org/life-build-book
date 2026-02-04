# Component - Pattern Concern Signal

## WHAT: Definition

A subtle visual treatment indicating repeated behavioral patterns worth examining — a gentle pulse effect when projects show recurring slippage, repeated pausing, or other patterns Conan has identified.

## WHERE: Ecosystem

- Parent: [[System - Smoke Signals]]
- Applied to: [[Hex Grid - Hex Tile]]
- Source data: [[Agent - Conan]] pattern analysis, [[Feature - Archives]] historical data

## WHY: Rationale

- System: [[System - Smoke Signals]] — one of four signal types
- Principle: [[Principle - Compound Capability]] — patterns surface from history
- Driver: Some problems are invisible in the moment but obvious over time. Pattern signals surface accumulated evidence.

## WHEN: Timeline

Part of Smoke Signals system. Depends on sufficient historical data (Service Level 2+).

## HOW: Implementation

**Trigger:**
- Conan identifies statistically significant pattern
- Examples: project paused 3+ times, estimated vs. actual consistently off, same week slippage repeating

**Visual treatment:**
- Subtle pulse animation
- Less urgent than health/staleness/due-date

**Interaction:** Click or Mesa query explains the pattern detected.
