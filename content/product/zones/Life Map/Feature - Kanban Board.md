# Feature - Kanban Board

## WHAT: Definition

The task flow interface within a Project Board — a visual representation of task states showing what's pending, in progress, and complete. The Kanban Board provides at-a-glance project execution status and enables drag-and-drop task management.

## WHERE: Ecosystem

- Parent: [[Feature - Project Board]] — embedded within project detail
- Displays: [[Feature - Task]] — task cards in columns
- Implements: [[Strategy - Spatial Visibility]] — progress has spatial form
- Implements: [[Principle - Visual Recognition]] — task state instantly visible
- Related: [[Task - Bronze Stack]] — Bronze tasks may show here

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — work flow should be visible
- Principle: [[Principle - Visual Recognition]] — familiar pattern for task management
- Principle: [[Principle - Familiarity Over Function]] — Kanban is widely understood
- Driver: Directors need to see and manage task flow within projects. Kanban provides that at-a-glance view.

## WHEN: Timeline

Core to Project Board design. Kanban familiar pattern chosen for immediate usability.

## HOW: Implementation

**Columns:**

- **To Do** — Tasks not yet started
- **In Progress** — Active tasks (limit: 1-3 recommended)
- **Done** — Completed tasks

**Task cards show:**

- Task title
- Estimated effort (if set)
- Due date (if set)
- Delegated indicator (if assigned)
- Quick actions

**Interactions:**

- Drag between columns
- Click to expand task detail
- Check to mark complete
- Add new task inline

**Constraints:**

- In Progress WIP limit (optional, director-configurable)
- Done column collapsible
- Order within columns customizable

**Bronze integration:**

- Bronze tasks from this project appear here
- Completing here updates Bronze stack
- Task source indicator (project vs. system-generated)

**Not mandatory:** Simple projects may skip Kanban and use checklist view instead.
