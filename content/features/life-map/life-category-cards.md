---
title: "Life Category Cards"
---

Life Category Cards are the large rectangular containers on the Life Map displaying all projects within each of eight life domains.

Each card shows category name, signature color, Work at Hand projects, Live projects, Maintenance Loop indicators, collapsed Plan stacks, collapsed Paused indicators, and overall activity status. Clicking card background zooms to Domain altitude for detailed view.

## Platform Architecture

Implements:
- [[Architecture - Eight Life Categories System]] - Eight domains structure
- [[Architecture - Categories Contain Projects]] - Organizational hierarchy
- [[Architecture - Dual Presence Pattern]] - Work at Hand items shown here too

Uses Interface Patterns:
- [[Interface - Life Category Card Design]] - Visual structure
- [[Interface - Life Category Colors]] - Signature category colors
- [[Interface - Category Seal Design]] - Category identifier
- [[Interface - Stacking Pattern]] - Plans and Paused shown as stacks

Guided by Workflows:
- [[Workflows - Three-Stream Filter Switching]] - Viewing different work streams
- [[Workflows - Navigation Between Workspaces]] - Transitions between views

## Feature Dependencies

Contains:
- [[dual-presence-display|Dual Presence Display]] - Work at Hand projects appear here
- [[stack-collapse-and-expand|Stack Collapse and Expand]] - Plans and Paused shown as stacks

Depends on:
- [[category-color-accents|Category Color Accents]] - Each card has signature color
- [[progress-rings|Progress Rings]] - Projects display progress rings
- [[urushi-image-evolution|Urushi Image Evolution]] - Projects show current stage images
- [[saturation-state-indicators|Saturation State Indicators]] - Projects show state via saturation

Enables:
- [[domain-altitude-view|Domain Altitude View]] - Clicking card zooms to domain
- [[project-board-overlay|Project Board Overlay]] - Clicking projects opens boards

Related:
- [[the-table|The Table]] - Cards appear below The Table
- [[overview-altitude-view|Overview Altitude View]] - Cards visible at overview altitude
