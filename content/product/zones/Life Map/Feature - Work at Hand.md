# Feature - Work at Hand

## WHAT: Definition

The active weekly commitment — the specific projects and tasks a director has selected to focus on this week. Work at Hand consists of up to one Gold project, up to one Silver project, and a Bronze task stack. It's what appears on The Table and represents the director's current priorities.

## WHERE: Ecosystem

- Displayed on: [[Feature - The Table]] — visual representation
- Selected via: [[Feature - Weekly Planning]] in [[Feature - Sorting Room]]
- Agent: [[Agent - Cameron]] — guides selection
- Implements: [[System - Weekly Priority]] — the selection mechanism
- Implements: [[System - Three-Stream Portfolio]] — three-stream structure
- Implements: [[Principle - Protect Transformation]] — Gold/Silver protected
- Sources from: [[System - Priority Queue Architecture]] — candidate pool
- Modified via: [[Feature - Mid-Week Adaptation]] — changes during week

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — weekly commitment creates focus
- Principle: [[Principle - Protect Transformation]] — Work at Hand enforces stream constraints
- Principle: [[Principle - Empty Slots Strategic]] — empty positions are valid choices
- Driver: Directors need clarity on "what am I working on this week?" Work at Hand is the answer.

## WHEN: Timeline

Core concept from initial design. Work at Hand is the central organizing principle — everything leads to or flows from it.

## HOW: Implementation

**Composition:**

- Gold position: 0-1 expansion projects (Purpose = "Moving forward")
- Silver position: 0-1 capacity projects (Purpose = "Building leverage")
- Bronze position: Variable task stack (controlled by mode)

**Selection timing:**

- Selected during Weekly Planning (typically Friday/Sunday)
- Valid for one week
- Reselected each planning cycle

**Constraints:**

- Maximum 1 Gold, 1 Silver (hard limit)
- Bronze has no maximum (mode-controlled)
- Cross-stream placement blocked

**State transitions:**

- Project selected → becomes Work at Hand → enhanced treatment on Life Map
- Project completed → leaves Work at Hand → position opens
- Project paused → returns to Priority Queue top → position opens

**The central question:** Work at Hand answers "what matters this week?" Everything else is candidate, context, or history.
