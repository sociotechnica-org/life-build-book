# System - Bronze Operations

## WHAT: Definition

The operational workflow governing Bronze stream tasks — mode selection, stack population, auto-replenishment, and completion handling. Bronze Operations manages the mechanics that keep maintenance work flowing without overwhelming transformation work.

## WHERE: Ecosystem

- Displayed in: [[The Table - Bronze Position]]
- Configured via: [[Feature - Sorting Room]] during [[Feature - Weekly Planning]]
- Agent: [[Agent - Cameron]] — guides mode decisions
- Implements: [[Standard - Three-Stream Portfolio]] — Bronze stream mechanics
- Sources: [[Primitive - Project]] (maintenance tasks), [[Primitive - System]] (generated tasks)
- Implements: [[Standard - Bronze Mode Behaviors]] — mode specifications

## WHY: Rationale

- System: [[Standard - Three-Stream Portfolio]] — Bronze requires unique mechanics
- Principle: [[Principle - Protect Transformation]] — Bronze stays contained
- Driver: Operational work behaves differently than transformational work. Bronze Operations codifies that difference.

## WHEN: Timeline

Core system. Mode mechanics refined based on observed capacity patterns.

## HOW: Implementation

**Mode selection:**
- Initial selection during Weekly Planning
- Can change mid-week via gear icon on Bronze position
- Mode change takes effect immediately

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

**Constraint:** Bronze never blocks Gold/Silver. Even with 100 Bronze tasks queued, directors have independent transformation slots.
