# Drafting Room: Kanban Board Redesign Plan

## Overview

Redesign the Drafting Room from a list-based queue view into a visual kanban board with 4 stage columns and advanced filtering capabilities.

---

## Epic 6: Kanban Board Layout

**Goal:** Transform Planning Queue into a 4-column kanban board with compact, scannable cards.

### Current State Problems
- Cards are enormous, taking up excessive vertical space
- Hard to get overview of all projects at once
- No visual representation of stage progression
- Difficult to compare projects side-by-side

### Desired State
- 4 columns representing the 4 stages (Identified, Scoped, Drafted, Prioritized)
- Compact cards similar to Life Map style
- Visual flow showing project progression left-to-right
- Easy to scan all projects at a glance

---

### User Story 6.1: Four-Column Stage Layout

**As a Director**, I want to see my projects organized into 4 columns by stage so I can visualize the progression through planning.

**Acceptance Criteria:**
- 4 columns displayed horizontally: "Stage 1: Identified" | "Stage 2: Scoped" | "Stage 3: Drafted" | "Stage 4: Prioritized"
- Each column shows count of projects in that stage
- Columns have equal width and visual hierarchy
- Scrollable if content exceeds viewport height
- Empty state message in columns with 0 projects

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Planning Queue                                              [Filters ▼]│
├───────────────┬───────────────┬───────────────┬──────────────────────────┤
│ Identified    │ Scoped        │ Drafted       │ Prioritized              │
│ (Stage 1)     │ (Stage 2)     │ (Stage 3)     │ (Stage 4)                │
│ 2 projects    │ 3 projects    │ 1 project     │ 0 projects               │
├───────────────┼───────────────┼───────────────┼──────────────────────────┤
│               │               │               │                          │
│ [Card]        │ [Card]        │ [Card]        │ (Empty: Add projects     │
│               │               │               │  to begin prioritizing)  │
│ [Card]        │ [Card]        │               │                          │
│               │               │               │                          │
│               │ [Card]        │               │                          │
│               │               │               │                          │
└───────────────┴───────────────┴───────────────┴──────────────────────────┘
```

---

### User Story 6.2: Compact Card Design

**As a Director**, I want to see compact project cards that show essential information so I can scan many projects quickly.

**Acceptance Criteria:**
- Card height ~120-150px (vs current ~250px+)
- Shows: title, category badge, last modified (relative time)
- Optionally shows: stale indicator, objective count, task count
- Hover reveals additional details (description, deadline)
- Click to open full editor/resume
- Category color accent (left border)

**Card Design:**
```
┌─────────────────────────────┐
│ [CATEGORY]    🕒 3h ago      │ ← Category badge + timestamp
├─────────────────────────────┤
│ Launch Podcast Series       │ ← Title (bold)
│                             │
│ Purpose                     │ ← Category name
│ 3 objectives • 5 tasks      │ ← Meta info (when applicable)
│                             │
│ [Resume] [Abandon]          │ ← Actions
└─────────────────────────────┘
```

---

### User Story 6.3: Stage Progression Visual Flow

**As a Director**, I want to see how projects move through stages so I understand the workflow.

**Acceptance Criteria:**
- Left-to-right flow clearly indicates progression
- Visual connection between stages (subtle arrows or flow indicators)
- Completed projects (Stage 4) have distinct styling (e.g., green accent)
- Can see full pipeline at a glance

---

### User Story 6.4: Card Actions (Resume/Abandon)

**As a Director**, I want quick actions on each card so I can manage projects efficiently.

**Acceptance Criteria:**
- Resume button opens project at current stage
- Abandon button with confirmation removes project
- Actions available on hover or always visible (depends on card size)
- Keyboard shortcuts (optional enhancement)

---

### User Story 6.5: Empty State Per Column

**As a Director**, I want helpful empty states in columns with no projects so I understand what each stage represents.

**Acceptance Criteria:**
- Empty columns show descriptive message
- Stage 1 empty: "Click 'Start New Project' to begin"
- Stage 2 empty: "Complete Stage 1 projects to move them here"
- Stage 3 empty: "Define objectives to advance projects"
- Stage 4 empty: "Create task lists to reach this stage"

---

## Epic 7: Advanced Filtering & Views

**Goal:** Enable Directors to filter projects by category and/or tier to focus on specific work areas.

### Current State Problems
- No way to filter projects by category
- No way to filter by tier (gold/silver/bronze)
- Hard to focus on one life area (e.g., just Finances)
- Can't combine filters (e.g., "Gold Finance projects")

### Desired State
- Filter by category (8 life categories)
- Filter by tier (gold/silver/bronze) - requires tier assignment
- Combine filters (category AND tier)
- "Show All" default view
- Filter state persists in localStorage

---

### User Story 7.1: Category Filter

**As a Director**, I want to filter projects by life category so I can focus on one area at a time.

**Acceptance Criteria:**
- Dropdown or pill buttons for 8 categories: Health, Purpose, Finances, Relationships, Home, Community, Leisure, Growth
- "All Categories" option (default)
- Filtered view shows only projects matching selected category
- Filter applies across all 4 stage columns
- Active filter visually indicated
- Count shows "Showing 5 of 12 projects"

**Filter UI (Option A - Dropdown):**
```
┌─────────────────────────────────────────────┐
│ Planning Queue                              │
│                                             │
│ [All Categories ▼]  [All Tiers ▼]  [Clear] │
└─────────────────────────────────────────────┘
```

**Filter UI (Option B - Pills):**
```
┌──────────────────────────────────────────────────────────────────┐
│ Show: [All] [Health] [Purpose] [Finances] [Relationships] ...   │
│ Tier: [All] [Gold] [Silver] [Bronze]                            │
└──────────────────────────────────────────────────────────────────┘
```

---

### User Story 7.2: Tier Filter (Gold/Silver/Bronze)

**As a Director**, I want to filter projects by tier so I can focus on high-priority (Gold) or quick-win (Bronze) work.

**Acceptance Criteria:**
- Tier filter options: All, Gold, Silver, Bronze
- Tier determined by project archetype:
  - **Gold**: Initiative, Major/Epic scale projects
  - **Silver**: System Build, Discovery Mission, capacity-building
  - **Bronze**: Quick Task, Micro scale
- Filter can be combined with category filter
- Active tier filter indicated with badge/highlight

**Tier Assignment Logic:**
```javascript
const getTier = (archetype) => {
  if (archetype === 'Initiative') return 'gold';
  if (['System Build', 'Discovery Mission'].includes(archetype)) return 'silver';
  if (archetype === 'Quick Task') return 'bronze';
  return 'silver'; // default
};
```

---

### User Story 7.3: Combined Filters

**As a Director**, I want to combine category and tier filters so I can view very specific subsets (e.g., "Gold Finance projects").

**Acceptance Criteria:**
- Can select both category AND tier filters simultaneously
- Both filters apply (AND logic, not OR)
- Example: "Finances" + "Gold" shows only gold-tier finance projects
- Clear indication of active filters
- "Clear Filters" button resets to "All"

---

### User Story 7.4: Filter Persistence

**As a Director**, I want my filter selections to persist so I don't have to re-select them each visit.

**Acceptance Criteria:**
- Filter state saved to localStorage
- Filters restored on page load
- Filters survive browser refresh
- Can clear all filters with one action

---

### User Story 7.5: Filter Count Display

**As a Director**, I want to see how many projects match my filters so I understand the filtered view.

**Acceptance Criteria:**
- Header shows: "Showing 5 of 12 projects"
- Or per-column: "Stage 2: Scoped (2 of 5)"
- Count updates dynamically as filters change
- Shows "No projects match these filters" when result is empty

---

## Technical Implementation Notes

### Kanban Board (Epic 6)

**Layout Approach:**
- CSS Grid or Flexbox for 4-column layout
- Fixed header with column titles
- Scrollable card containers within each column
- Min-width per column: 280px
- Horizontal scroll on smaller screens

**Card Component Refactor:**
```jsx
const CompactProjectCard = ({ project, onResume, onAbandon }) => (
  <div className="compact-card">
    <div className="card-header">
      <CategoryBadge category={project.category} />
      <TimeStamp>{formatRelativeTime(project.lastModified)}</TimeStamp>
    </div>
    <h4 className="card-title">{project.title}</h4>
    <div className="card-meta">
      {project.objectives?.length > 0 && `${project.objectives.length} objectives`}
      {project.tasks?.length > 0 && ` • ${project.tasks.length} tasks`}
    </div>
    <div className="card-actions">
      <button onClick={onResume}>Resume</button>
      <button onClick={onAbandon}>Abandon</button>
    </div>
  </div>
);
```

**Data Grouping:**
```javascript
const projectsByStage = {
  1: planningProjects.filter(p => p.draftingStage === 1),
  2: planningProjects.filter(p => p.draftingStage === 2),
  3: planningProjects.filter(p => p.draftingStage === 3),
  4: planningProjects.filter(p => p.draftingStage === 4)
};
```

---

### Filtering System (Epic 7)

**Filter State:**
```javascript
const [filters, setFilters] = React.useState({
  category: 'all', // 'all' | 'health' | 'purpose' | ...
  tier: 'all'      // 'all' | 'gold' | 'silver' | 'bronze'
});
```

**Filter Logic:**
```javascript
const filteredProjects = planningProjects.filter(project => {
  // Category filter
  if (filters.category !== 'all' && project.category !== filters.category) {
    return false;
  }

  // Tier filter
  if (filters.tier !== 'all') {
    const projectTier = getTier(project.archetype);
    if (projectTier !== filters.tier) {
      return false;
    }
  }

  return true;
});
```

**Persistence:**
```javascript
// Save filters
React.useEffect(() => {
  localStorage.setItem('lifebuild_drafting_filters', JSON.stringify(filters));
}, [filters]);

// Load filters
const [filters, setFilters] = React.useState(() => {
  const stored = localStorage.getItem('lifebuild_drafting_filters');
  return stored ? JSON.parse(stored) : { category: 'all', tier: 'all' };
});
```

---

## UI/UX Considerations

### Responsive Design
- Desktop (>1200px): 4 columns side-by-side
- Tablet (768-1199px): 4 columns with horizontal scroll
- Mobile (<768px): Single column stacked view with stage tabs

### Accessibility
- Keyboard navigation between cards (Tab, Arrow keys)
- Screen reader labels for all filters
- Focus management when opening/closing cards

### Performance
- Virtualization for columns with 20+ cards (optional)
- Memoize filtered project lists
- Debounce filter changes

---

## Migration Strategy

**Phase 1: Epic 6 - Kanban Board**
1. Create new 4-column layout component
2. Refactor cards to compact design
3. Group projects by stage
4. Add empty states per column
5. Test drag-and-drop (optional enhancement)
6. Update localStorage schema if needed

**Phase 2: Epic 7 - Filtering**
1. Add tier calculation logic to projects
2. Create filter UI component (pills or dropdown)
3. Implement filter state management
4. Apply filters to displayed projects
5. Add filter persistence
6. Add filter count display
7. Test combined filters

---

## Out of Scope (Future Enhancements)

- Drag-and-drop cards between stages (manual stage advancement)
- Search/text filter by project title
- Sort within columns (by date, alphabetical, tier)
- Bulk actions (abandon multiple, advance multiple)
- Export view as PDF/CSV
- Saved filter presets ("My Gold Projects", "Stale Items")

---

## Success Metrics

**Epic 6: Kanban Board**
- Average time to scan full queue < 10 seconds
- Can see 8-12 projects on screen simultaneously (vs 2-3 currently)
- Directors report easier project management

**Epic 7: Filtering**
- Filters used in 60%+ of sessions
- Average filtered view shows 3-6 projects (focused subset)
- Reduced time to find specific project by category

---

## Design Mockup (Kanban + Filters)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  Drafting Room: Planning Queue                          Showing 8 of 12    │
│                                                                            │
│  Category: [All ▼] [Health] [Purpose] [Finances] [Relationships] ...      │
│  Tier:     [All ▼] [Gold] [Silver] [Bronze]                    [Clear]    │
├──────────────┬──────────────┬──────────────┬─────────────────────────────┤
│ Identified   │ Scoped       │ Drafted      │ Prioritized                 │
│ 3 projects   │ 2 projects   │ 2 projects   │ 1 project                   │
├──────────────┼──────────────┼──────────────┼─────────────────────────────┤
│              │              │              │                             │
│ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐              │
│ │ FINANCES │ │ │ HEALTH   │ │ │ PURPOSE  │ │ │ FINANCES │              │
│ │ 🕒 2h ago│ │ │ 🕒 1d ago│ │ │ 🕒 3h ago│ │ │ 🕒 4d ago│              │
│ │          │ │ │          │ │ │          │ │ │          │              │
│ │ Tax      │ │ │ Health   │ │ │ Podcast  │ │ │ Budget   │              │
│ │ Prep     │ │ │ Checkup  │ │ │ Launch   │ │ │ System   │              │
│ │          │ │ │          │ │ │          │ │ │          │              │
│ │ Quick    │ │ │ 3 obj •  │ │ │ 3 obj •  │ │ │ 12 tasks │              │
│ │ Task     │ │ │ 5 tasks  │ │ │ 8 tasks  │ │ │ Ready    │              │
│ │          │ │ │          │ │ │          │ │ │          │              │
│ │ [Resume] │ │ │ [Resume] │ │ │ [Resume] │ │ │ [Resume] │              │
│ └──────────┘ │ └──────────┘ │ └──────────┘ │ └──────────┘              │
│              │              │              │                             │
│ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │                             │
│ │ HOME     │ │ │ COMMUNITY│ │ │ HEALTH   │ │                             │
│ │ 🕒 18d   │ │ │ 🕒 25d ⚠ │ │ │ 🕒 2d ago│ │                             │
│ │ ⚠️ Stale │ │ │ ⚠️ Stale │ │ │          │ │                             │
│ │          │ │ │          │ │ │          │ │                             │
│ │ Garage   │ │ │ Garden   │ │ │ Dental   │ │                             │
│ │ Workshop │ │ │ Project  │ │ │ Schedule │ │                             │
│ │          │ │ │          │ │ │          │ │                             │
│ │ Home     │ │ │ 3 obj    │ │ │ Silver   │ │                             │
│ │          │ │ │ Stale    │ │ │          │ │                             │
│ │          │ │ │          │ │ │          │ │                             │
│ │ [Resume] │ │ │ [Resume] │ │ │ [Resume] │ │                             │
│ └──────────┘ │ └──────────┘ │ └──────────┘ │                             │
│              │              │              │                             │
└──────────────┴──────────────┴──────────────┴─────────────────────────────┘

[+ Start New Project]                             [Clean Up Stale Projects]
```

---

## Implementation Order

### Epic 6: Kanban Board (Days 1-3)
1. **Day 1**: Layout structure (4-column grid, headers, scrolling)
2. **Day 2**: Compact card component, data grouping by stage
3. **Day 3**: Empty states, actions (resume/abandon), polish

### Epic 7: Filtering (Days 4-5)
1. **Day 4**: Filter UI, tier calculation, category filter
2. **Day 5**: Tier filter, combined filters, persistence, counts

---

## Questions to Resolve

1. **Tier Assignment**: Should tier be explicitly set by user in Stage 2, or auto-calculated from archetype?
   - **Recommendation**: Auto-calculate initially, allow override in advanced settings

2. **Filter UI**: Pills vs Dropdown?
   - **Recommendation**: Pills for categories (more visual), dropdown for tier (fewer options)

3. **Card Height**: Fixed height or auto-expand based on content?
   - **Recommendation**: Fixed ~140px, overflow hidden with "..." for long titles

4. **Mobile Experience**: Tabs or stacked columns?
   - **Recommendation**: Horizontal tabs with swipe between stages

---

This plan provides a clear roadmap for transforming the Drafting Room into a highly scannable, filterable kanban board that scales with the Director's project portfolio.
