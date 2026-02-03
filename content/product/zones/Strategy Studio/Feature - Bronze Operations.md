# Feature - Bronze Operations

## WHAT: Definition

The complete operational workflow for managing Bronze tasks — from mode selection through task completion, including mid-week adjustments, auto-population behavior, and stack management. Bronze Operations governs everything about the maintenance stream.

## WHERE: Ecosystem

- Displayed in: [[The Table - Bronze Position]] — stack display
- Configured in: [[Feature - Sorting Room]] — mode selection
- Agent: [[Agent - Cameron]] — guides mode decisions
- Implements: [[System - Three-Stream Portfolio]] — Bronze stream mechanics
- Implements: [[Principle - Protect Transformation]] — Bronze contained
- Sources: [[Feature - Project]] (maintenance), [[Feature - System]] (generated), [[Task - Bronze Stack]]

## WHY: Rationale

- System: [[System - Three-Stream Portfolio]] — Bronze has unique mechanics
- Principle: [[Principle - Protect Transformation]] — Bronze must stay in its lane
- Driver: Operational work is different from transformational work. Bronze Operations manages that difference.

## WHEN: Timeline

Core operational feature. Bronze mechanics refined based on user capacity patterns.

## HOW: Implementation

**Mode options:**

| Mode      | Stack Behavior                                        | Best For              |
| --------- | ----------------------------------------------------- | --------------------- |
| Minimal   | Required only (due dates, critical, system-generated) | High-commitment weeks |
| Target +X | Minimal + X discretionary, auto-replenish             | Normal weeks          |
| Maximal   | Continuous pull until queue empty                     | Catch-up weeks        |

**Mode selection:**

- Initial selection during Weekly Planning
- Can change mid-week via gear icon on Bronze position
- Mode change takes effect immediately

**Auto-replenishment (Target/Maximal):**

- Task completes → next task surfaces
- Order determined by Bronze priority scoring
- Continues until stack hits target or queue empties

**Stack sources (priority order):**

1. Due-date items (deadline approaching)
2. Critical Responses (urgent flags)
3. System-generated tasks (from planted systems)
4. Quick Task project tasks
5. Decomposed tasks from larger projects

**Completion flow:**

- Check off task → task marked complete
- Stack updates per mode rules
- Progress visible on Bronze position

**Never blocks Gold/Silver:** Even with 100 Bronze tasks queued, directors still have independent Gold and Silver slots. Bronze doesn't steal capacity from transformation.
