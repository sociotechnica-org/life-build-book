# Feature - System Board

## WHAT: Definition

The detail overlay that opens when a director clicks any system tile — a focused view showing system health, configuration, generated tasks, cycle history, and available actions. The System Board is where directors monitor and manage their continuous infrastructure.

## WHERE: Ecosystem

- Parent: [[Feature - Life Map]] — opens as overlay
- Displays: [[Feature - System]] — all system details
- Displays: Generated tasks — what the system produces
- Uses: [[System - Actions]] — Hibernate, Upgrade, Uproot available here
- Uses: [[System - Visual Language]] — health indicators, state treatments
- Agent: [[Agent - Category Advisor (Concept)]] — in-context consultation available
- Parallel: [[Feature - Project Board]] — same pattern for projects

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — systems need monitoring interface
- Principle: [[Principle - Visibility Creates Agency]] — system health visible, not hidden
- Driver: Directors need to see how their infrastructure is performing. The System Board answers "is this system healthy?"

## WHEN: Timeline

Core to Life Map design. System Board parallels Project Board for the other tool type.

## HOW: Implementation

**Contents:**

- Header: Title, category, health indicator, state
- Configuration: Pattern, frequency, controls
- Generated Tasks: What this system produces for Bronze
- Cycle History: Recent executions, completions, misses
- Health Metrics: Cycle adherence, task completion rate
- Actions: Hibernate, Upgrade, Uproot, Edit

**Overlay behavior:**

- Opens over Life Map (grid visible behind, dimmed)
- Close to return to grid
- Can navigate to related Project Boards

**Health display:**

- Green: Healthy — cycles completing, tasks done
- Yellow: Attention — some misses, declining completion
- Red: Struggling — frequent misses, system may need adjustment

**Smoke Signals:** If system health degrades, [[Feature - Smoke Signals]] triggers alerts visible from Life Map.
