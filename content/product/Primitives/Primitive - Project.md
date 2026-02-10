# Primitive - Project

## WHAT: Definition

A discrete initiative with a finish line — bounded work that completes and moves to Archives. Projects range from small (scheduling a dentist appointment) to transformative (career transition planning). Every project has objectives, tasks, and moves through states toward completion.

## WHERE: Ecosystem

- Zone: Cross-zone — projects live on [[Zone - Life Map]], created in [[Room - Drafting Room]]
- Implements: [[Standard - Three-Stream Portfolio]] — every project has a Purpose determining stream
- Implements: [[System - Four-Stage Creation]] — projects develop through four stages
- Implements: [[System - Pipeline Architecture]] — projects flow through queues
- Depends on: [[Primitive - Task]] — projects contain tasks
- Governs: [[Room - Project Board]] — execution interface for projects
- Governs: [[Structure - Kanban Board]] — task flow within projects
- Components: [[Standard - Project States]], [[Capability - Purpose Assignment]], [[Standard - Image Evolution]]
- Conforms to: [[Standard - Life Categories]] — every project requires a Life Category
- Contrast: [[Primitive - System]] — systems are continuous, projects are bounded

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — structured work management
- Strategy: [[Strategy - Spatial Visibility]] — projects have spatial presence on hex grid
- Principle: [[Principle - Plans Are Hypotheses]] — project plans can adapt
- Driver: Directors need bounded containers for work with finish lines. The question for projects is always: "How close am I to finished?"

## WHEN: Timeline

Core entity from initial design. Projects are one of two initiative types (alongside Systems) that occupy hex tiles on the Life Map.

## HOW: Implementation

**Defining characteristic:** Projects are bounded. They have a beginning and an end. Success means completion. When a project completes, it moves to Archives.

**Required properties:**

- Life Category (one of eight)
- Purpose (determines stream: Gold/Silver/Bronze)
- Objectives (what success looks like)
- Tasks (specific actions)
- Priority attributes (Urgency, Importance, Effort, Deadline)

**Project lifecycle:**

```
Identified → Scoped → Drafted → Prioritized → Live → Work at Hand → Completed
```

**Visual representation:** Hex tile with project illustration, progress ring, category color accent, state indicators. Illustration evolves through five stages as project progresses.

**Projects that create Systems:** Silver projects marked as "system-building" plant a new System on completion. The project archives; the system persists.
