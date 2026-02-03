# Feature - Planning Queue

## WHAT: Definition

The collection of projects still in development — work that has been identified but not yet placed in the Priority Queue. The Planning Queue holds projects in stages 1-3 of the four-stage creation process.

## WHERE: Ecosystem

- Zone: [[Feature - Strategy Studio]] — visible during planning
- Implements: [[System - Pipeline Architecture]] — first half of pipeline
- Implements: [[System - Four-Stage Creation]] — stages 1-3 live here
- Fed by: [[Feature - Drafting Room]] — where projects are created
- Flows to: [[System - Priority Queue Architecture]] — on Stage 4 completion
- Shows: [[Project - States]] — Planning state projects

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — development distinct from prioritization
- Principle: [[Principle - Earn Don't Interrogate]] — projects can be incomplete
- Driver: Not all projects are ready for prioritization. The Planning Queue holds work-in-progress until it's ready.

## WHEN: Timeline

Core to pipeline architecture. Planning Queue distinguishes "in development" from "ready to prioritize."

## HOW: Implementation

**Contents:**

- Projects in Identified state (Stage 1)
- Projects in Scoped state (Stage 2)
- Projects in Drafted state (Stage 3)

**Not shown:**

- Projects in Prioritized state (Stage 4) — those are in Priority Queue
- Projects in Planning state on Life Map — same projects, different view

**Visibility:**

- Accessible from Strategy Studio
- Shows development stage for each project
- Click to open in Drafting Room for continued development

**Flow:**

- New project enters Planning Queue in Identified state
- Progresses through stages via Drafting Room
- Completes Stage 4 → moves to Priority Queue

**Marvin integration:** Marvin can surface Planning Queue items that have stalled ("this has been in Scoped for three weeks").
