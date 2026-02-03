# Primitive - Project

## WHAT: Definition

A discrete initiative with a finish line — bounded work that completes and moves to Archives. Projects range from small (scheduling a dentist appointment) to transformative (career transition planning). Every project has objectives, tasks, and moves through states toward completion.

## WHERE: Ecosystem

- Zone: Cross-zone — projects live on [[Feature - Life Map]], created in [[Feature - Drafting Room]]
- Implements: [[System - Three-Stream Portfolio]] — every project has a Purpose determining stream
- Implements: [[System - Four-Stage Creation]] — projects develop through four stages
- Implements: [[System - Pipeline Architecture]] — projects flow through queues
- Depends on: [[Feature - Task]] — projects contain tasks
- Governs: [[Feature - Project Board]] — execution interface for projects
- Governs: [[Feature - Kanban Board]] — task flow within projects
- Components: [[Project - States]], [[Project - Purpose Assignment]], [[Project - Image Evolution]]
- Contrast: [[Feature - System]] — systems are continuous, projects are bounded

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

**Visual representation:** Hex tile with Urushi image, progress ring, category color accent, state indicators. Image evolves through five stages as project progresses.

**Projects that create Systems:** Silver projects marked as "system-building" plant a new System on completion. The project archives; the system persists.
