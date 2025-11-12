---
title: "Gold Position"
---

The Gold Position is the leftmost slot on The Table displaying a single Initiative or Epic-scale project with deep amber/gold color accent and enhanced glow.

When occupied, shows the project's urushi image at final decoration stage. When empty, displays muted outline with "Empty - Strategic Choice" text, acknowledging that intentional emptiness is valid strategy.

## Platform Architecture

Implements:
- [[Architecture - Gold Stream]] - Strategic transformative work stream
- [[Architecture - Work at Hand System]] - Projects must have Work at Hand status
- [[Architecture - Project Archetypes System]] - Initiative/Epic archetypes

Uses Interface Patterns:
- [[Interface - Gold Position Visual Treatment]] - Visual design implementation
- [[Interface - Gold Stream Amber Accent]] - Deep amber color accent
- [[Interface - Enhanced Glow and Breathing Animation]] - Glow effect applied to position

Guided by Workflows:
- [[Workflows - Gold Selection Process]] - How Gold projects are selected
- [[Workflows - Gold Silver Completion and Sculpture]] - What happens when Gold completes
- [[Workflows - Gold Silver Pausing Process]] - How to pause Gold projects

## Feature Dependencies

Part of:
- [[the-table|The Table]] - Gold is leftmost position on The Table

Depends on:
- [[work-at-hand-designation|Work at Hand Designation]] - Projects must have Work at Hand status

Enables:
- [[project-pause-button|Project Pause Button]] - Pause available when Gold occupied
- [[project-board-overlay|Project Board Overlay]] - Opens when Gold project clicked

Related:
- [[silver-position|Silver Position]] - Complementary priority position
- [[bronze-position|Bronze Position]] - Part of three-position system
- [[urushi-sculpture-celebration|Urushi Sculpture Celebration]] - Triggers when Gold completes
