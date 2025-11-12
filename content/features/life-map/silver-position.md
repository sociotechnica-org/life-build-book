---
title: "Silver Position"
---

The Silver Position is the center slot on The Table displaying a single capacity-building project (System Build or Discovery Mission) with cool silver/platinum color accent and enhanced glow.

When occupied, shows the project's urushi image at final decoration stage. Silver work creates infrastructure that reduces future operational burden and enables more ambitious Gold work.

## Platform Architecture

Implements:
- [[Architecture - Silver Stream]] - Capacity-building work stream
- [[Architecture - Work at Hand System]] - Projects must have Work at Hand status
- [[Architecture - Project Archetypes System]] - System Build/Discovery Mission archetypes

Uses Interface Patterns:
- [[Interface - Silver Position Visual Treatment]] - Visual design implementation
- [[Interface - Silver Stream Platinum Accent]] - Cool platinum color accent
- [[Interface - Enhanced Glow and Breathing Animation]] - Glow effect applied to position

Guided by Workflows:
- [[Workflows - Silver Selection Process]] - How Silver projects are selected
- [[Workflows - Gold Silver Completion and Sculpture]] - What happens when Silver completes
- [[Workflows - Gold Silver Pausing Process]] - How to pause Silver projects

## Feature Dependencies

Part of:
- [[the-table|The Table]] - Silver is center position on The Table

Depends on:
- [[work-at-hand-designation|Work at Hand Designation]] - Projects must have Work at Hand status

Enables:
- [[project-pause-button|Project Pause Button]] - Pause available when Silver occupied
- [[project-board-overlay|Project Board Overlay]] - Opens when Silver project clicked

Related:
- [[gold-position|Gold Position]] - Complementary priority position
- [[bronze-position|Bronze Position]] - Part of three-position system
- [[urushi-sculpture-celebration|Urushi Sculpture Celebration]] - Triggers when Silver completes
