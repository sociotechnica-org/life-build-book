# Feature - Kanban Board

## WHAT: Definition

The task flow interface within a Project Board — a visual representation of task states showing what's pending, in progress, and complete. The Kanban Board provides at-a-glance project execution status and enables drag-and-drop task management.

## WHERE: Ecosystem

- Parent: [[Feature - Project Board]] — embedded within project detail
- Displays: [[Primitive - Task]] — task cards in columns
- Implements: [[Strategy - Spatial Visibility]] — progress has spatial form
- Implements: [[Principle - Visual Recognition]] — task state instantly visible
- Related: [[Task - Bronze Stack]] — Bronze tasks may show here

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — work flow should be visible
- Principle: [[Principle - Visual Recognition]] — familiar pattern for task management
- Principle: [[Principle - Familiarity Over Function]] — Kanban is widely understood
- Driver: Directors need to see and manage task flow within projects. Kanban provides that at-a-glance view.

**Why the WIP limit of 3:**

- **Research basis:** Sjøberg et al. (2018) studied 8,000+ work items across five teams over four years. Key finding: lower WIP correlates with shorter lead times, aligning with Little's Law (Average lead time = Average WIP / Average throughput).
- **Cognitive basis:** Mark et al. (2005) found approximately 23 minutes to return to full engagement after a task switch. With 3 in-progress items, a director might switch twice per session. With 6, they never reach deep engagement.
- **Honest caveat:** The kanban research notes "indicating an optimal WIP limit is difficult." Three is a principled starting point, not a proven optimum. Different directors may need different limits, and the system should accommodate that learning.
- **Relationship to The Table:** The Table's 1 Gold + 1 Silver + Bronze stack is a project-level WIP limit. The task-level WIP limit of 3 operates within individual project kanban boards — a two-tier WIP system.

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
