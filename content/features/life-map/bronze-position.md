---
title: "Bronze Position"
---

The Bronze Position is the rightmost slot on The Table displaying a stack of operational tasks and micro-projects with warm bronze/copper color accent and enhanced glow.

Shows task count (e.g., "8 tasks") and queue indicator (e.g., "34 candidates queued"). Settings gear icon below enables mode control (Minimal/Target/Maximal).

## Platform Architecture

Implements:
- [[Architecture - Bronze Stream]] - Operational work stream
- [[Architecture - Work at Hand System]] - Tasks must have Work at Hand status
- [[Architecture - Project Archetypes System]] - Quick Task archetype primarily

Uses Interface Patterns:
- [[Interface - Bronze Position Visual Treatment]] - Visual design implementation
- [[Interface - Bronze Stream Copper Accent]] - Warm copper color accent
- [[Interface - Settings Gear Icon]] - Access to mode controls
- [[Interface - Stacking Pattern]] - Multiple tasks shown as stack

Guided by Workflows:
- [[Workflows - Bronze Mode Setting Process]] - How Bronze mode is configured
- [[Workflows - Bronze Mode Switching]] - Changing modes mid-week
- [[Workflows - Bronze Task Completion Behavior]] - What happens when tasks complete
- [[Workflows - Dynamic Bronze Adjustment]] - Mid-week capacity changes

## Feature Dependencies

Part of:
- [[the-table|The Table]] - Bronze is rightmost position on The Table

Depends on:
- [[bronze-stack|Bronze Stack]] - Visual representation of tasks
- [[bronze-mode-settings|Bronze Mode Settings]] - Controls engagement level

Enables:
- [[bronze-stack-expansion|Bronze Stack Expansion]] - Opens when Bronze position clicked
- [[bronze-settings-gear-icon|Bronze Settings Gear Icon]] - Access to mode controls
- [[bronze-task-reordering|Bronze Task Reordering]] - Task management in expanded view

Related:
- [[gold-position|Gold Position]] - Part of three-position system
- [[silver-position|Silver Position]] - Part of three-position system
- [[bronze-auto-population|Bronze Auto-Population]] - Populates based on mode
