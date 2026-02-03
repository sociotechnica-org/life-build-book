# The Table - Bronze Position

## WHAT: Definition

The rightmost position on The Table, displaying a stack of operational tasks — work that prevents decay. Unlike Gold and Silver (single projects), Bronze shows multiple tasks drawn from various sources, controlled by mode settings.

## WHERE: Ecosystem

- Parent: [[Feature - The Table]]
- Displays: [[Task - Bronze Stack]] — collection of operational tasks
- Implements: [[System - Three-Stream Portfolio]] — Bronze stream mechanics
- Implements: [[Principle - Protect Transformation]] — Bronze contained to its own position
- Sources: [[Feature - Project]] (maintenance), [[Feature - System]] (generated tasks)
- Configured in: [[Feature - Sorting Room]] — mode selection with [[Agent - Cameron]]
- Visual: [[System - Visual Language]] — warm bronze/copper color accent
- Related: [[Feature - Bronze Operations]] — full operational workflow

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — operational work managed separately
- Principle: [[Principle - Protect Transformation]] — Bronze has dedicated space, cannot overflow into Gold/Silver
- Decision: Stack (multiple tasks) rather than single project because Bronze represents operational multiplicity. Maintenance is many small things, not one big thing.

## WHEN: Timeline

Core to Table structure. Bronze's stack behavior distinguishes it from the singular focus of Gold/Silver.

## HOW: Implementation

**Display contents:**

- Task stack (variable height based on mode)
- Task count indicator
- Queue indicator (more tasks waiting)
- Warm bronze/copper stream accent

**Mode settings (control stack size):**

| Mode          | Behavior                                             |
| ------------- | ---------------------------------------------------- |
| **Minimal**   | Only due-date + Critical Response + system-generated |
| **Target +X** | Minimal + X discretionary tasks, auto-replenish      |
| **Maximal**   | Continuous pull as tasks complete                    |

**Interactions:**

- Click → Opens Bronze stack view (task list)
- Gear icon → Change mode mid-week
- Task completion → Stack updates per mode rules

**Stack sources:**

- Quick Task projects (Purpose = Maintenance)
- System-generated tasks from planted systems
- Small Critical Responses
- Decomposed work from larger efforts

**Never blocks transformation:** Even with 50+ Bronze candidates queued, Gold and Silver slots remain independent. Bronze expansion cannot invade transformation capacity.
