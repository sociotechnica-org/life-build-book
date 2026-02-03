# Project - States

## WHAT: Definition

The lifecycle stages a project moves through from initial capture to completion and archival. States determine where a project appears, what actions are available, and how it renders visually.

## WHERE: Ecosystem

- Parent: [[Feature - Project]]
- Implements: [[System - Pipeline Architecture]] — states determine queue placement
- Implements: [[System - Visual Language]] — states have distinct visual treatment
- Related: [[System - Four-Stage Creation]] — creation stages overlap with early states

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — clear lifecycle enables structured management
- Principle: [[Principle - Visibility Creates Agency]] — state visible at a glance
- Driver: Directors need to know where each project stands and what they can do with it.

## WHEN: Timeline

Core to project entity. States enable the pipeline flow and visual feedback systems.

## HOW: Implementation

**Project states:**

| State            | Description                         | Location             |
| ---------------- | ----------------------------------- | -------------------- |
| **Planning**     | Stages 1-3, in development          | Planning Queue       |
| **Planned**      | Stage 4 complete, ready to activate | Priority Queue       |
| **Live**         | Active with kanban board            | Hex tile on grid     |
| **Work at Hand** | Live + weekly priority              | Table + hex tile     |
| **Paused**       | Temporarily stopped                 | Priority Queue (top) |
| **Completed**    | Finished                            | Archives             |

**Visual treatment by state:**

- **Work at Hand:** Full saturation, active glow, progress ring, stream-color shimmer
- **Live:** Full saturation, standard presence, progress ring
- **Planned:** Reduced saturation (70%), no glow
- **Paused:** Further reduced saturation (50%), muted presence

**State transitions:**

- Planning → Planned: Complete Stage 4
- Planned → Live: Select as Work at Hand (temporary) or activate directly
- Live → Work at Hand: Weekly selection
- Work at Hand → Live: Week ends or paused
- Work at Hand → Completed: All objectives met
- Any → Paused: Director choice
- Paused → Planned: Returns to Priority Queue top
