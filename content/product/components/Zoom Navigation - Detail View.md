# Zoom Navigation - Detail View

## WHAT: Definition

The closest zoom level on the Life Map — where individual tiles fill significant screen space and show maximum information density. At Detail View, directors see everything about a small number of tiles without opening Project Board.

## WHERE: Ecosystem

- Parent: [[Feature - Zoom Navigation]]
- Implements: [[Strategy - Spatial Visibility]] — maximum detail in spatial context
- Implements: [[Principle - Visibility Creates Agency]] — full information access
- Related: [[Zoom Navigation - Horizon View]], [[Zoom Navigation - Working View]]
- Leads to: [[Feature - Project Board]] — click for even more detail

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — detail available in spatial context
- Principle: [[Principle - Visibility Creates Agency]] — see details without modal switch
- Driver: Sometimes directors want detail without leaving the grid. Detail View provides that.

## WHEN: Timeline

Core zoom tier. Detail View provides pre-click information density.

## HOW: Implementation

**What's visible:**

- Full tile contents
- Project images (larger)
- Progress indicators with specifics
- Health indicators with details
- Recent activity snippet
- Task count (for projects)
- The Table (always full size)

**Semantic treatment:**

- Maximum visual language detail
- Subtle animations for active items
- Health color gradients visible

**Use cases:**

- Examining specific tiles before clicking
- Comparing adjacent projects
- Checking health without opening System Board
- Focused work on a small cluster

**Transition:** From Detail View, clicking a tile opens Project Board or System Board overlay.
