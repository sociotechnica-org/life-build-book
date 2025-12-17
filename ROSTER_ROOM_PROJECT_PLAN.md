# Roster Room - Interactive Tour Implementation
## Project Plan & User Stories

---

## Overview

The Roster Room is where directors assign AI Workers (agents) to projects during the weekly Delegate Phase. This implementation creates an interactive demo showing the staffing workflow: selecting projects from a prioritized queue and matching them with agents from the roster.

### Core Concept
- **Left Side**: Agent Roster (staff members + create custom option)
- **Right Side**: Project Queue (searchable, sortable list)
- **Center Action**: "Staff Project" button to create assignment

### Initial Sort Priority
1. **Gold tier** - Active on Table projects first, then Ongoing
2. **Silver tier** - Active on Table projects first, then Ongoing
3. **Bronze tier** - All projects

---

## User Stories

### Epic 1: Project Queue Display

#### Story 1.1: Display Prioritized Project Queue
**As a** director
**I want to** see all eligible projects in a prioritized queue
**So that** I can identify which projects need staffing

**Acceptance Criteria:**
- Projects displayed in right panel with clear visual hierarchy
- Gold projects appear at top with gold accent/badge
- Silver projects appear second with silver accent/badge
- Bronze projects appear third with bronze accent/badge
- Within each tier, "Active on Table" projects appear before "Ongoing" projects
- Each project card shows:
  - Project title
  - Priority tier (Gold/Silver/Bronze)
  - Status (Active on Table / Ongoing)
  - Project category/domain
  - Brief description or context
  - Current staffing status (unstaffed/partially staffed/staffed)

**Design Notes:**
- Follow existing card layout patterns from tour
- Use CSS variables: `--gold`, `--silver`, `--bronze`
- Visual indicator for "Active on Table" vs "Ongoing" (icon or badge)

---

#### Story 1.2: Search Projects by Keyword
**As a** director
**I want to** search the project queue by keyword
**So that** I can quickly find specific projects

**Acceptance Criteria:**
- Search bar at top of project queue panel
- Real-time filtering as user types
- Search matches against project title, description, category
- Empty state message when no matches found
- Clear search button (X icon) when text entered
- Maintains priority sort within filtered results

**Technical Notes:**
- Case-insensitive search
- Debounce search input (300ms) for performance

---

#### Story 1.3: Sort Projects by Different Criteria
**As a** director
**I want to** sort projects by different criteria
**So that** I can view them from different perspectives

**Acceptance Criteria:**
- Sort dropdown/button group above project queue
- Sort options:
  - **Priority** (default) - Gold→Silver→Bronze, then Active→Ongoing
  - **Status** - Active on Table first, then Ongoing
  - **Category** - Group by domain (Finances, Health, Home, etc.)
  - **Alphabetical** - A-Z by project title
- Visual indicator showing current sort
- Sort applies to filtered results when search active

**Design Notes:**
- Use pill button group or dropdown matching tour style
- Default sort is Priority (as specified)

---

#### Story 1.4: Select a Project
**As a** director
**I want to** select a project from the queue
**So that** I can assign an agent to it

**Acceptance Criteria:**
- Click anywhere on project card to select it
- Selected project highlighted with distinct border/background
- Only one project can be selected at a time
- Click selected project again to deselect
- Selection persists while browsing agent roster
- Selected project shows visual connection to "Staff Project" button

**Design Notes:**
- Use border highlight (e.g., 3px solid primary color)
- Subtle scale transform on hover for interactive feedback
- Disable selection when agent roster is in "create mode"

---

### Epic 2: Agent Roster Display

#### Story 2.1: Display Agent Roster
**As a** director
**I want to** see my available agents
**So that** I can choose who to staff on projects

**Acceptance Criteria:**
- Agents displayed in left panel as cards
- Each agent card shows:
  - Agent name/identifier
  - Agent type/specialization (e.g., "Code Specialist", "Research Agent")
  - Current workload indicator (e.g., "2 projects", "Available")
  - Avatar or icon representing the agent
  - Brief capability description
- Visual distinction between available and busy agents
- Scrollable list if roster exceeds viewport height

**Design Notes:**
- Match card styling from project queue
- Use capacity indicators (e.g., progress bar or badge)
- Color coding: Green for available, amber for partial capacity, red for at capacity

---

#### Story 2.2: "Create Custom Agent" Option
**As a** director
**I want to** create a custom agent tailored to project needs
**So that** I can staff projects requiring specialized skills

**Acceptance Criteria:**
- "Create Custom Agent" card always visible at top of roster
- Distinct visual treatment (dashed border, + icon)
- Click to enter "agent creation mode"
- **Inline expansion** of creation form within the roster panel
- Creation form shows:
  - Agent name (text input)
  - Agent specialization (dropdown or text input)
  - Agent description (textarea)
  - "Create & Staff" button
  - "Cancel" button
- Form validation (name required, specialization required)
- Created agent appears in roster immediately
- Auto-selects new agent for staffing
- **Devin introduction**: When entering creation mode, Devin appears/speaks to introduce her role in helping tune existing agents and create new ones

**Design Notes:**
- **Inline expansion pattern** - form expands within the roster panel, pushing other agent cards down
- Smooth expansion animation (purposeful, calm)
- Follow existing form patterns from tour if any
- Subtle success feedback when agent created (consistent with brand guidelines)
- Devin character provides friendly, helpful guidance during creation

---

#### Story 2.3: Select an Agent
**As a** director
**I want to** select an agent from the roster
**So that** I can staff them to a project

**Acceptance Criteria:**
- Click agent card to select
- Selected agent highlighted with distinct border/background
- Only one agent can be selected at a time
- Click selected agent again to deselect
- Selection persists while browsing project queue
- Selected agent shows visual connection to "Staff Project" button
- Cannot select agents at full capacity (disabled state)

**Design Notes:**
- Consistent selection pattern with project cards
- Visual feedback for unavailable/disabled agents
- Tooltip on disabled agents explaining why (e.g., "At capacity")

---

### Epic 3: Staffing Action

#### Story 3.1: Staff Project Button Enabled State
**As a** director
**I want to** see when I can staff a project
**So that** I understand what actions are available

**Acceptance Criteria:**
- "Staff Project" button positioned centrally between panels
- Button disabled (grayed out) when:
  - No project selected, OR
  - No agent selected
- Button enabled (primary styling) when:
  - Both project AND agent selected
- Hover state shows tooltip when disabled explaining requirements
- **Animated connection lines** from selected project and agent to button when both are selected

**Design Notes:**
- Large, prominent button (follows tour button patterns)
- Use existing primary button styling from tour
- Animate SVG lines or CSS-based connections from selections to button
- Lines should appear smoothly when second selection is made
- Use brand colors with subtle animation (purposeful, calm)

---

#### Story 3.2: Complete Staffing Action
**As a** director
**I want to** click "Staff Project" to create the assignment
**So that** the agent is assigned to the project

**Acceptance Criteria:**
- Click "Staff Project" executes assignment
- Success feedback shown with **purposeful, calm animation** (no confetti or excessive celebration)
- Project card updates to show "Staffed" status with agent name
- Agent card updates to show added workload
- Both selections cleared after successful staffing
- Connection lines fade out smoothly
- Button returns to disabled state
- User can immediately make another assignment

**Design Notes:**
- Success animation: subtle checkmark or gentle pulse (follows brand guidelines: purposeful and calm)
- Brief confirmation message (e.g., "Agent assigned to project")
- Smooth, subtle transitions for UI state updates
- Consider gentle fade or slide animations rather than bouncy/celebratory effects

**Technical Notes:**
- Update data model to track assignments
- Handle capacity calculations (decrement available capacity)
- **Persist assignments to localStorage** for session continuity
- Consider undo/remove assignment feature (future enhancement)

---

#### Story 3.3: Handle Staffing Conflicts
**As a** director
**I want to** be warned about potential staffing conflicts
**So that** I can make informed decisions

**Acceptance Criteria:**
- Warning shown if assigning agent already on similar/related project
- Warning shown if project priority conflicts with agent's current workload
- Option to proceed anyway or cancel
- Clear explanation of the conflict
- Doesn't block assignment, just informs

**Design Notes:**
- Modal dialog or inline alert
- Use warning color (amber/yellow)
- "Proceed Anyway" and "Cancel" actions

**Technical Notes:**
- Conflict detection logic based on:
  - Project categories
  - Agent current assignments
  - Priority mismatches

---

### Epic 4: Room Integration & UX

#### Story 4.1: Navigate to Roster Room
**As a** director
**I want to** access the Roster Room from the tour navigation
**So that** I can explore staffing workflows

**Acceptance Criteria:**
- "Roster Room" link in navigation bar functional
- Clicking navigates to Roster Room view (new chapter)
- URL updates to reflect current room (if using routing)
- Smooth transition animation
- Table Bar remains visible at bottom
- Can navigate back to other rooms

**Design Notes:**
- Follow existing navigation pattern from Drafting/Sorting/Life Map rooms
- Consistent transition animations

---

#### Story 4.2: Responsive Layout
**As a** director
**I want to** use the Roster Room on different screen sizes
**So that** I can explore on any device

**Acceptance Criteria:**
- Desktop (>1024px): Side-by-side panels with center button
- Tablet (768-1024px): Stacked panels with floating button
- **Mobile (<768px): Swipe gesture navigation between agent roster and project queue panels**
- Touch-friendly interaction targets (min 44x44px)
- Readable text at all sizes
- Scrolling works naturally on each device
- Swipe indicators/hints on mobile to guide users
- Smooth transitions between panels when swiping

**Design Notes:**
- Use CSS Grid/Flexbox for responsive layout
- Media queries matching existing tour breakpoints
- **Implement touch/swipe gesture library** (e.g., Hammer.js or native touch events)
- Visual pagination dots or tabs to show which panel is active on mobile
- Swipe threshold and velocity tuning for natural feel
- Test on iOS and Android devices

---

#### Story 4.3: Empty States
**As a** director
**I want to** see helpful empty states
**So that** I understand what to do when data is missing

**Acceptance Criteria:**
- Empty project queue shows:
  - Friendly illustration or icon
  - Message: "No projects in queue"
  - Explanation: "All projects are staffed or not ready for assignment"
- Empty agent roster shows:
  - Message: "No agents available"
  - "Create Custom Agent" CTA prominently displayed
- Empty search results show:
  - Message: "No projects match '{search term}'"
  - Suggestion to try different keywords or clear search

**Design Notes:**
- Centered content with ample whitespace
- Use muted colors for empty state text
- Friendly, encouraging tone

---

#### Story 4.4: Loading States
**As a** director
**I want to** see loading indicators
**So that** I know the app is working

**Acceptance Criteria:**
- Skeleton loaders for project cards while loading
- Skeleton loaders for agent cards while loading
- Smooth transitions when data loads
- Loading doesn't block navigation
- Graceful degradation if loading fails

**Design Notes:**
- Subtle pulse animation on skeleton elements
- Match card dimensions of actual content
- Use existing tour loading patterns if present

---

### Epic 5: Interactive Tour Integration

#### Story 5.1: Introduce Roster Room Concept
**As a** tour participant
**I want to** understand the Roster Room's purpose
**So that** I know how it fits in the workflow

**Acceptance Criteria:**
- Opening scene/chapter for Roster Room
- **Devin introduces herself and the Roster Room**
- Devin's introduction covers:
  - Her role: "I'm here to help you tune existing agents and create new ones tailored to your projects"
  - When you use the Roster Room (Delegate Phase, Friday)
  - What you do here (assign agents to projects)
  - Why it matters (alignment, automation, delegation)
- Visual introduction to the interface
- "Continue" or "Next" button to proceed to interaction
- **Friendly, conversational tone** throughout

**Design Notes:**
- Follow existing tour chapter introduction pattern
- Devin character prominently featured with warm, friendly messaging
- Brief, scannable text (3-4 sentences max per concept)
- Conversational language (avoid formal/instructional tone)

---

#### Story 5.2: Guided Staffing Tutorial
**As a** tour participant
**I want to** follow a guided tutorial
**So that** I learn how to staff projects

**Acceptance Criteria:**
- Step-by-step walkthrough:
  1. "Select a project from the queue" (highlight project panel)
  2. "Choose an agent from your roster" (highlight agent panel)
  3. "Notice the animated connection lines appear"
  4. "Click Staff Project to assign" (highlight button)
- Visual indicators (arrows, highlights, spotlights) guide user
- **Friendly, conversational instructions** (e.g., "Let's pick a project!" instead of "Select a project")
- Tutorial progresses automatically or via "Next" clicks
- Can skip tutorial if desired
- Prevents off-script actions during tutorial (optional)

**Design Notes:**
- Overlay dimming with spotlights on active elements
- Animated arrows or pointers (purposeful, calm animations)
- Tooltip-style instruction boxes with friendly language
- "Skip Tutorial" link
- Devin may provide encouragement/tips at key moments

---

#### Story 5.3: Sample Data Population
**As a** tour participant
**I want to** see realistic sample projects and agents
**So that** the demo feels authentic

**Acceptance Criteria:**
- At least 8-12 sample projects:
  - Mix of Gold (3-4), Silver (3-4), Bronze (3-4)
  - Mix of Active on Table and Ongoing status
  - Diverse categories (Finances, Health, Home, Career, etc.)
  - Realistic titles and descriptions
- At least 5-6 sample agents:
  - **Generic, functional agents** (no distinct personalities)
  - Various specializations (Code, Research, Creative, Operations, etc.)
  - Different availability levels (some busy, some available)
  - Descriptive names and capabilities (focused on function, not personality)
  - Examples: "Code Specialist", "Research Agent", "Project Coordinator"
- Data reflects actual lifebuild scenarios from documentation

**Technical Notes:**
- Mock data in JavaScript constants or JSON
- Based on examples from tour documentation
- Easy to update/extend
- Agent descriptions focus on capabilities and specializations, not personality traits

---

#### Story 5.4: Context from Previous Rooms
**As a** tour participant
**I want to** see continuity from earlier tour rooms
**So that** the experience feels cohesive

**Acceptance Criteria:**
- Projects shown in Roster Room match projects from:
  - Sorting Room (if visited)
  - Life Map planted projects (if visited)
- Agent assignments made in Roster Room reflect in:
  - Other room views that show project staffing
  - **Changes persist across tour session via localStorage**
- Consistent project names, priorities, and statuses
- Shared color coding and visual language

**Technical Notes:**
- Shared state object for tour data
- Projects array used across chapters
- **Assignment data persisted to localStorage** for cross-room consistency
- Load assignments from localStorage on room initialization
- Sync state updates across rooms when navigating

---

## Technical Implementation Plan

### Architecture Approach
- Continue single-file React app pattern (`integrated-lifemap-tour.html`)
- Add new chapter(s) for Roster Room (e.g., Chapter 7+)
- Use React hooks for state management
- Follow existing component patterns

### Component Structure
```
RosterRoom (parent component)
├── ProjectQueue
│   ├── SearchBar
│   ├── SortControls
│   └── ProjectCard (repeating)
├── StaffProjectButton
│   └── Connection indicators (optional)
└── AgentRoster
    ├── CreateAgentCard
    ├── CreateAgentForm (conditional)
    └── AgentCard (repeating)
```

### State Management
```javascript
const [selectedProject, setSelectedProject] = useState(null);
const [selectedAgent, setSelectedAgent] = useState(null);
const [projects, setProjects] = useState(MOCK_PROJECTS);
const [agents, setAgents] = useState(MOCK_AGENTS);
const [searchTerm, setSearchTerm] = useState('');
const [sortBy, setSortBy] = useState('priority');
const [assignments, setAssignments] = useState([]);
const [isCreatingAgent, setIsCreatingAgent] = useState(false);
```

### Data Model
```javascript
// Project
{
  id: string,
  title: string,
  description: string,
  priority: 'gold' | 'silver' | 'bronze',
  status: 'active' | 'ongoing',
  category: string,
  staffing: {
    assigned: boolean,
    agentId: string | null,
    agentName: string | null
  }
}

// Agent
{
  id: string,
  name: string,
  specialization: string,
  description: string,
  capacity: {
    total: number,
    used: number,
    available: number
  },
  currentProjects: string[], // project IDs
  avatar: string // emoji or icon
}

// Assignment
{
  projectId: string,
  agentId: string,
  timestamp: number
}
```

### Styling Approach
- Leverage existing CSS variables from tour
- Add new classes in `<style>` block:
  - `.roster-room-container`
  - `.project-queue`, `.agent-roster`
  - `.staff-button-container`
  - `.project-card-selected`, `.agent-card-selected`
- Use CSS Grid for two-column layout
- Media queries for responsive behavior

### Mock Data Requirements
- 10-12 sample projects (diverse priorities and statuses)
- 6-8 sample agents (various specializations and capacity)
- Based on lifebuild documentation examples

### Navigation Integration
- Update `NavigationBar` component to activate Roster Room link
- Add chapter number(s) for Roster Room scenes
- Update chapter switching logic in main app component

---

## Development Phases

### Phase 1: Foundation (Core Display)
**Goal:** Basic layout and static data display

**Tasks:**
1. Add Roster Room chapter to tour
2. Create two-column layout (agents left, projects right)
3. Implement ProjectCard component with mock data
4. Implement AgentCard component with mock data
5. Style cards to match tour aesthetic
6. Add responsive breakpoints

**Deliverable:** Static roster room view with sample data

---

### Phase 2: Interaction (Selection & Staffing)
**Goal:** Enable project-agent selection and assignment

**Tasks:**
1. Implement project selection (click to highlight)
2. Implement agent selection (click to highlight)
3. Add "Staff Project" button with enable/disable logic
4. Implement staffing action (update state)
5. Add success feedback (animation/message)
6. Update project and agent cards after staffing

**Deliverable:** Functional staffing workflow

---

### Phase 3: Filtering & Sorting
**Goal:** Add search and sort capabilities

**Tasks:**
1. Implement project search bar
2. Add search filtering logic
3. Implement sort dropdown/buttons
4. Add sort logic for each criterion:
   - Priority (default)
   - Status
   - Category
   - Alphabetical
5. Handle search + sort interaction
6. Add empty search results state

**Deliverable:** Searchable, sortable project queue

---

### Phase 4: Agent Creation
**Goal:** Enable custom agent creation

**Tasks:**
1. Add "Create Custom Agent" card
2. Implement agent creation form
3. Add form validation
4. Create new agent on submit
5. Add new agent to roster
6. Auto-select created agent
7. Handle cancel action

**Deliverable:** Custom agent creation workflow

---

### Phase 5: Tutorial & Polish
**Goal:** Add guided tour and refinements

**Tasks:**
1. Create Roster Room introduction chapter
2. Implement guided tutorial steps
3. Add visual guides (arrows, highlights)
4. Implement skip tutorial option
5. Add loading states and skeletons
6. Refine empty states
7. Test responsive behavior
8. Polish animations and transitions
9. Accessibility improvements (keyboard nav, ARIA labels)

**Deliverable:** Complete, polished Roster Room tour experience

---

### Phase 6: Integration & Testing
**Goal:** Ensure cohesion with existing tour

**Tasks:**
1. Sync project data with Sorting Room and Life Map
2. Test navigation between all rooms
3. Ensure consistent visual language
4. Cross-browser testing
5. Mobile device testing
6. Performance optimization (if needed)
7. Documentation updates

**Deliverable:** Integrated Roster Room in complete tour

---

## Success Metrics

### Functional Completeness
- [ ] All user stories implemented
- [ ] All acceptance criteria met
- [ ] No blocking bugs or errors

### User Experience
- [ ] Clear visual hierarchy
- [ ] Intuitive interaction patterns
- [ ] Smooth transitions and animations
- [ ] Responsive on all target devices

### Design Consistency
- [ ] Matches existing tour aesthetic
- [ ] Uses established color palette
- [ ] Follows typography standards
- [ ] Component patterns align with other rooms

### Content Quality
- [ ] Sample data realistic and diverse
- [ ] Tutorial instructions clear and concise
- [ ] Empty states helpful and encouraging
- [ ] Messaging aligns with lifebuild concepts

---

## Future Enhancements (Post-MVP)

### Advanced Features
- **Remove/Unassign Agent**: Allow undoing assignments
- **Bulk Assignment**: Select multiple projects/agents at once
- **Agent Availability Calendar**: Visual timeline of agent capacity
- **Project Dependencies**: Show which projects should be staffed first
- **Smart Recommendations**: AI-suggested agent-project matches
- **Delegation History**: View past assignments and outcomes

### Integration Features
- **Devin Guidance**: Interactive character providing tips
- **Automation Indicators**: Show which projects have automation potential
- **Human Delegation**: Expand to include human team members
- **Real-Time Collaboration**: Multiple directors working together

### Analytics & Insights
- **Staffing Analytics**: Capacity utilization, assignment patterns
- **Project Bottlenecks**: Identify unstaffed high-priority work
- **Agent Performance**: Track project outcomes by agent

---

## Design Decisions ✓

### Design Decisions (Confirmed)
1. **Visual connection between selections and button**: ✅ **Animated lines** - Show visual connections from selected project and agent to the "Staff Project" button
2. **Agent creation modal vs inline**: ✅ **Inline** - Expand the creation form inline within the roster panel
3. **Mobile interaction model**: ✅ **Swipe between panels** - Enable swipe gestures to navigate between agent roster and project queue
4. **Staffing success feedback**: ✅ **Follow brand guidelines** - Purposeful and calm animations (no confetti or excessive celebration, use subtle transitions and confirmations)

### Content Decisions (Confirmed)
1. **Sample agent personalities**: ✅ **Generic** - Keep agents functional without distinct personalities
2. **Tutorial tone**: ✅ **Friendly** - Use conversational, approachable language
3. **Devin's role**: ✅ **Helper for tuning and creating agents** - Devin introduces herself and her role: helping directors tune existing agents and create new ones tailored to project needs

### Technical Decisions (Confirmed)
1. **State persistence**: ✅ **Yes, use localStorage** - Assignments persist across tour sessions
2. **Chapter numbering**: ✅ **Later integration** - Roster Room will be added to tour sequence in a future phase (not part of initial chapter flow)
3. **Data sync**: ✅ **Yes** - Changes in Roster Room should affect other room views to maintain consistency

---

## Appendix: Reference Files

### Key Documentation
- Architecture: `content/platform/architecture/Architecture - Roster Room.md`
- Features:
  - `content/features/roster-room/roster-room-team-assignment.md`
  - `content/features/roster-room/automation-configuration.md`
  - `content/features/roster-room/human-delegation-setup.md`
- Workflows: `content/platform/workflows/Workflows - Delegate Phase.md`
- Devin: `content/platform/ai-team/AI Team - Devin Roster Room Facilitation.md`

### Implementation File
- `quartz/static/apps/integrated-lifemap-tour.html` (lines 1-1800+)

### Related Components
- Sorting Room implementation (reference for lane-based layouts)
- Life Map planted projects grid (reference for project cards)
- Navigation bar (lines 1600-1608)
- Table Bar component (persistent bottom bar)

---

## Next Steps

1. ✅ **Review this plan** with stakeholders - COMPLETE
2. ✅ **Clarify open questions** - COMPLETE (all design, content, and technical decisions confirmed)
3. **Prioritize user stories** (confirm MVP scope)
4. **Begin Phase 1 development** (foundation)
5. **Iterate based on feedback** after each phase

### Implementation-Ready Features

With all decisions confirmed, the following features are ready for immediate development:

**High Priority (MVP):**
- Animated connection lines between selections and Staff Project button
- Inline agent creation form with Devin introduction
- Swipe gestures for mobile navigation
- Purposeful, calm success animations (no confetti/celebration)
- localStorage persistence for assignments
- Generic, functional agents (no personalities)
- Friendly, conversational tutorial tone
- Cross-room state synchronization

**Notes for Development:**
- Roster Room will be integrated into tour sequence later (not part of initial chapter flow)
- All animations should follow brand guidelines: purposeful and calm
- Devin's role: helping directors tune existing agents and create new ones
- Tutorial should use conversational language throughout

---

*This plan is based on the lifebuild documentation and existing immersive tour patterns. It prioritizes creating an intuitive, engaging experience that teaches the Roster Room concept through interaction.*
