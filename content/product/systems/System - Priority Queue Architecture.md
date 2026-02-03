# System - Priority Queue Architecture

## WHAT: Definition

The ordered repository of all fully-planned work ready for activation, organized by purpose-based streams with stream-specific priority scoring. The Priority Queue is what directors draw from when selecting Work at Hand.

## WHERE: Ecosystem

- Zone: [[Feature - Drafting Room]] — visible in Strategy Studio
- Implements: [[System - Three-Stream Portfolio]] — organized by Gold/Silver/Bronze
- Implements: [[System - Priority Score Calculation]] — items ordered by score within streams
- Depends on: [[System - Pipeline Architecture]] — receives projects completing Stage 4
- Governs: [[Feature - Three-Stream Filtering]] — how directors view the queue
- Governs: [[Feature - Sorting Room]] — where selection from queue happens
- Related: [[Feature - Planning Queue]] — upstream source of projects

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — structured prioritization replaces reactive decision-making
- Principle: [[Principle - Protect Transformation]] — stream organization prevents Bronze from crowding Gold/Silver
- Decision: Separating Planning Queue from Priority Queue creates psychological safety — capture ideas quickly without immediately prioritizing.

## WHEN: Timeline

Foundational architecture. The queue structure enables the entire prioritization flow from project creation through Work at Hand selection.

## HOW: Implementation

**Queue contents:**

- Planned projects (Stage 4 complete, never activated)
- Paused projects (were Live, temporarily stopped — appear at top)
- Bronze candidates (ready tasks from various sources)

**Three-stream filters:**

- Gold Candidates: Purpose = "Moving forward" — typically 2-8 projects
- Silver Candidates: Purpose = "Building leverage" — typically 5-15 projects
- Bronze Candidates: Purpose = "Maintenance" — typically 20-100+ items

**Ordering within streams:**

- Gold: Importance-weighted priority score
- Silver: Leverage-weighted priority score
- Bronze: Urgency-weighted priority score

Directors can manually reorder within streams. The score suggests; the director decides.
