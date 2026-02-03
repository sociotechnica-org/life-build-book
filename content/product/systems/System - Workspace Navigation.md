# System - Workspace Navigation

## WHAT: Definition

The system for moving between LifeBuild's three main workspaces — Life Map (execution), Strategy Studio (planning), and Archives (learning). Workspace Navigation provides consistent access to all zones while maintaining context awareness.

## WHERE: Ecosystem

- Connects: [[Feature - Life Map]], [[Feature - Strategy Studio]], [[Feature - Archives]]
- Implements: [[Strategy - Spatial Visibility]] — zones have spatial identity
- Implements: [[Principle - Familiarity Over Function]] — navigation feels natural
- Available: Globally throughout application

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — workspaces are distinct places
- Principle: [[Principle - Familiarity Over Function]] — movement should feel intuitive
- Driver: Directors need to move between execution, planning, and learning fluidly. Navigation makes that movement effortless.

## WHEN: Timeline

Core infrastructure. Navigation patterns established early, refined based on usage.

## HOW: Implementation

**Three primary zones:**

1. **Life Map** — Execution workspace (default)
2. **Strategy Studio** — Planning workspace
3. **Archives** — Learning workspace

**Navigation methods:**

- Persistent nav bar/menu (always accessible)
- Keyboard shortcuts
- Agent-initiated transitions ("let's move to the Sorting Room")
- Context links (click project in conversation → opens Project Board)

**Context preservation:**

- Leaving a workspace preserves state
- Return to where you were
- Deep links work (URL to specific room/project)

**Strategy Studio sub-navigation:**

- Council Chamber
- Category Studios (8)
- Sorting Room
- Drafting Room
- Roster Room

**Visual distinction:**

- Each workspace has distinct visual treatment
- Current location always clear
- Breadcrumb awareness for nested spaces

**Entry points:**

- Life Map: Default home, "back to map"
- Strategy Studio: "Plan" or specific room
- Archives: "History" or search results
