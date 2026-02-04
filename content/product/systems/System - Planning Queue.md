# System - Planning Queue

## WHAT: Definition

The holding area for projects still in development — work in stages 1-3 of the four-stage creation process, not yet ready for prioritization. The Planning Queue holds ideas becoming plans.

## WHERE: Ecosystem

- Zone: [[Feature - Strategy Studio]] — visible during planning work
- Fed by: [[Feature - Drafting Room]] — where projects are created
- Flows to: [[System - Priority Queue Architecture]] — on Stage 4 completion
- Implements: [[System - Four-Stage Creation]] — stages 1-3 live here
- Agent: [[Agent - Marvin]] — can surface stalled items

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — development is distinct from prioritization
- Principle: [[Principle - Earn Don't Interrogate]] — projects can be incomplete
- Driver: Not all projects are ready for prioritization. The Planning Queue holds work-in-progress until it's ready.

## WHEN: Timeline

Core system. Planning Queue distinguishes "in development" from "ready to prioritize."

## HOW: Implementation

**Contents:**
- Projects in Identified state (Stage 1)
- Projects in Scoped state (Stage 2)
- Projects in Drafted state (Stage 3)

**Not included:**
- Projects in Prioritized state (Stage 4) — those live in [[System - Priority Queue Architecture]]

**Visibility:**
- Accessible from Strategy Studio
- Shows development stage for each project
- Click to open in Drafting Room for continued work

**Flow:**
```
New idea → Identified (Stage 1) → Scoped (Stage 2) → Drafted (Stage 3) → Prioritized (Stage 4)
           |<-------- Planning Queue -------->|        |<-- Priority Queue -->|
```

**Stall detection:**
- Marvin can surface items that haven't progressed
- "This has been in Scoped for three weeks — want to work on it or archive it?"
