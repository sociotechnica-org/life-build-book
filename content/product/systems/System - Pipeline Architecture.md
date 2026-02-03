# System - Pipeline Architecture

## WHAT: Definition

The two-queue system that separates work in development (Planning Queue) from work ready for activation (Priority Queue). Projects flow through the pipeline as they mature from idea to executable plan.

## WHERE: Ecosystem

- Zone: [[Feature - Drafting Room]] — both queues visible here
- Implements: [[System - Four-Stage Creation]] — stages determine which queue
- Feeds: [[System - Priority Queue Architecture]] — projects completing Stage 4 enter Priority Queue
- Governs: [[Feature - Planning Queue]] — Stages 1-3 projects
- Related: [[Feature - Project]] — projects move through the pipeline

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — structured flow from capture to activation
- Principle: [[Principle - Earn Don't Interrogate]] — progressive investment, not upfront interrogation
- Decision: Separating queues prevents the common failure mode where effort required to "properly create" a project discourages capturing ideas at all.

## WHEN: Timeline

Foundational architecture. The separation enables quick capture (Stage 1) without forcing immediate prioritization decisions.

## HOW: Implementation

**Planning Queue:**

- Contains: Projects in Stages 1-3
- Typical state: 0-3 projects in development
- Actions: Click to resume with Marvin, abandon if no longer relevant

**Priority Queue:**

- Contains: Projects completing Stage 4
- Entry: Automatic on Stage 4 completion
- Exit: Selection as Work at Hand, or abandonment

**Flow:**

```
Idea → Stage 1 (Planning Queue) → Stages 2-3 → Stage 4 → Priority Queue → Work at Hand
```

**Note on Systems:** Planted systems bypass the pipeline entirely. They generate tasks directly to Bronze according to configured patterns. The pipeline handles project lifecycle only.
