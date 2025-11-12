---
title: "The Table"
---

The Table is the persistent priority spotlight displaying Work at Hand across three positions (Gold/Silver/Bronze) at the top of the Life Map.

It occupies approximately 20% of screen height and remains visible at both overview and domain altitudes. The Table ensures directors' weekly priorities stay in peripheral vision during execution regardless of current focus.

## Platform Architecture

Implements:
- [[Architecture - The Table System]] - Core architectural pattern
- [[Architecture - Work at Hand System]] - Items displayed are Work at Hand status
- [[Architecture - Three-Stream Filtering]] - Gold/Silver/Bronze positions

Uses Interface Patterns:
- [[Interface - The Table Three Position Layout]] - Visual structure
- [[Interface - Always-Visible Persistence]] - Visibility behavior
- [[Interface - Enhanced Saturation and Glow for Work at Hand]] - Visual treatment

## Feature Dependencies

Depends on:
- [[gold-position|Gold Position]] - The Table contains Gold position
- [[silver-position|Silver Position]] - The Table contains Silver position
- [[bronze-position|Bronze Position]] - The Table contains Bronze position
- [[work-at-hand-designation|Work at Hand Designation]] - Items must have Work at Hand status to appear

Enables:
- [[dual-presence-display|Dual Presence Display]] - The Table is one of two display locations
- [[overview-altitude-view|Overview Altitude View]] - The Table remains visible at overview
- [[domain-altitude-view|Domain Altitude View]] - The Table remains visible at domain altitude

Related:
- [[life-category-cards-visualization|Life Category Cards]] - The Table appears above category cards
