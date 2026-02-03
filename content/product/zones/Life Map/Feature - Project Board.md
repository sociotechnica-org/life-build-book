# Feature - Project Board

## WHAT: Definition

The detail overlay that opens when a director clicks any project tile — a focused view showing everything about a single project: description, objectives, tasks, progress, history, and available actions. The Project Board is where detailed work happens.

## WHERE: Ecosystem

- Parent: [[Feature - Life Map]] — opens as overlay
- Displays: [[Feature - Project]] — all project details
- Displays: [[Feature - Task]] — task list within project
- Agent: [[Agent - Category Advisor (Concept)]] — in-context consultation available
- Uses: [[Project - States]] — shows current state, enables transitions
- Uses: [[Project - Image Evolution]] — shows current Urushi stage
- Enables: Task completion, objective tracking, project pausing

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — detailed work needs detailed view
- Principle: [[Principle - Familiarity Over Function]] — board metaphor feels natural for project management
- Driver: Directors need to work on projects, not just see them. The Project Board is the workspace within the workspace.

## WHEN: Timeline

Core to Life Map design. Project Board is where most execution work happens.

## HOW: Implementation

**Contents:**

- Header: Title, Urushi image, state indicator, category
- Description: What this project is
- Objectives: What success looks like
- Tasks: The work to be done (checkable)
- Progress: Completion status, time tracking
- History: Recent activity, state transitions
- Actions: Pause, complete, add task, edit

**Overlay behavior:**

- Opens over Life Map (grid visible behind, dimmed)
- Close to return to grid
- Can navigate directly to other Project Boards

**Category Advisor access:**

- Subtle indicator when advisor available
- Click to open in-context consultation
- Conversation logs to advisor's Strategy Studio thread

**Task management:**

- Add tasks
- Check off completed
- Reorder
- Delegate (opens Roster Room context)
