# Roster Room Rebuild - Wizard-Based UX
## Project Plan & User Stories

---

## Executive Summary

### Problem Statement
The current Roster Room design presents two overwhelming lists (projects and agents) simultaneously with a center matching button. This creates decision paralysis and poor usability because:
- Too much information at once (cognitive overload)
- Unclear workflow sequence (what do I do first?)
- Hard to focus on one decision at a time
- Difficult to understand the context of what help is needed

### Proposed Solution
A **wizard-based workflow** that guides users through three focused steps:
1. **Select Project** - Choose what you need help with
2. **Define Help Needed & Select Agent** - Describe the help or pick/create an agent
3. **Review & Confirm** - See staffed projects with easy unstaff options

This approach reduces cognitive load, provides clear progression, and makes each decision contextual and manageable.

---

## Design Philosophy

### Core Principles
1. **One Decision at a Time** - Progressive disclosure reduces overwhelm
2. **Context Before Choice** - Show project context before agent selection
3. **Natural Language First** - Let users describe what they need before showing agent list
4. **Clear Progress** - Visual indicators show where you are in the workflow
5. **Easy Escape** - Can go back, cancel, or unstaff at any time
6. **Purposeful & Calm** - Follows Lifebuild brand guidelines

### User Flow at a Glance
```
┌─────────────────┐
│  Select Project │ → Shows list of unstaffed projects
└────────┬────────┘
         ↓
┌─────────────────┐
│  Define Help &  │ → Type what you need OR browse agents
│  Select Agent   │ → Can create custom agent
└────────┬────────┘
         ↓
┌─────────────────┐
│ Review Staffing │ → Shows staffed projects
│  & Confirm      │ → Easy unstaff action
└─────────────────┘
```

---

## User Stories

### Epic 1: Wizard Step 1 - Project Selection

#### Story 1.1: Display Unstaffed Projects Queue
**As a** director
**I want to** see a focused list of projects that need staffing
**So that** I can choose which project to get help with

**Acceptance Criteria:**
- Display only unstaffed projects in the wizard's first step
- Projects shown as cards with clear visual hierarchy
- Each project card shows:
  - Project title
  - Priority tier (Gold/Silver/Bronze) with badge/color
  - Status (Active on Table / Ongoing)
  - Category/domain
  - Brief description or current status
  - Progress indicator (if applicable)
- Default sort: Priority (Gold → Silver → Bronze, Active → Ongoing)
- Scrollable list if projects exceed viewport
- Visual prominence for high-priority projects
- Empty state if all projects are staffed: "All projects are staffed! 🎉"

**Design Notes:**
- Full-width cards (not split panels)
- Generous whitespace between cards
- Clear hover states
- Mobile-friendly card size

---

#### Story 1.2: Search Unstaffed Projects
**As a** director
**I want to** search for specific projects
**So that** I can quickly find the project I want to staff

**Acceptance Criteria:**
- Search input at top of project list
- Real-time filtering as user types
- Search matches: title, description, category
- Clear search button (X icon) when text entered
- Empty state message: "No projects match '{search term}'"
- Search state persists during wizard step 1
- Case-insensitive search

**Technical Notes:**
- Debounce search input (300ms)
- Highlight matching text (optional enhancement)

---

#### Story 1.3: Sort Projects by Different Criteria
**As a** director
**I want to** sort projects by different criteria
**So that** I can view them from different perspectives

**Acceptance Criteria:**
- Sort controls above project list (pill buttons or dropdown)
- Sort options:
  - **Priority** (default) - Gold → Silver → Bronze, Active → Ongoing
  - **Category** - Group by domain (Finances, Health, Home, etc.)
  - **Alphabetical** - A-Z by project title
  - **Recent** - Recently added/updated projects first
- Visual indicator showing current sort
- Sort applies to search results when active
- Sort preference persists during session

**Design Notes:**
- Pill button group matching tour style
- Clear active state

---

#### Story 1.4: Select a Project to Staff
**As a** director
**I want to** click a project to begin staffing it
**So that** I can move to the next step

**Acceptance Criteria:**
- Click anywhere on project card to select
- Selected project briefly highlights (subtle animation)
- Wizard immediately advances to Step 2 (Define Help)
- Smooth transition animation between steps
- Selected project context visible in Step 2 header
- Can return to Step 1 via "Back" button

**Design Notes:**
- Purposeful transition (slide or fade, ~300ms)
- Selected project shown in condensed header during Step 2
- "Back" button clearly visible

---

### Epic 2: Wizard Step 2 - Define Help & Select Agent

#### Story 2.1: Show Selected Project Context
**As a** director
**I want to** see which project I'm staffing
**So that** I have context while selecting an agent

**Acceptance Criteria:**
- Condensed project card shown at top of Step 2
- Shows: project title, priority badge, category
- Click to expand full project details (optional)
- "Back to Projects" button to return to Step 1
- Project context remains visible while scrolling agent list

**Design Notes:**
- Sticky header with project context
- Subtle background color to differentiate from agent selection area
- Clear visual hierarchy

---

#### Story 2.2: Describe What Help Is Needed (Natural Language Input)
**As a** director
**I want to** type what kind of help I need
**So that** I can clarify my needs before choosing an agent

**Acceptance Criteria:**
- Text input field prominently placed: "What help do you need with this project?"
- Placeholder text: "e.g., Research pricing options, Draft listing copy, Schedule vendor calls..."
- Optional field (can skip and go straight to agent list)
- Text saved with assignment
- Character limit: 500 characters
- Real-time character count shown
- Input auto-focuses when entering Step 2
- **AI-assisted suggestion** (future enhancement): Show suggested agents based on text

**Design Notes:**
- Large, friendly text area
- Conversational placeholder examples
- Smooth transition from input to agent list below

**Technical Notes:**
- Store help description in assignment data model
- Future: Parse description for agent recommendations

---

#### Story 2.3: Browse Available Agents
**As a** director
**I want to** see agents who can help with this project
**So that** I can choose the right person/system

**Acceptance Criteria:**
- Agents displayed as cards below help description input
- Each agent card shows:
  - Agent name/identifier
  - Agent type/specialization
  - Current workload (e.g., "Available", "2 projects", "At capacity")
  - Avatar or icon
  - Capability description
  - Current projects (expandable list)
- Visual distinction between availability states:
  - Available (green indicator)
  - Partial capacity (amber indicator)
  - At capacity (red indicator, grayed out, not selectable)
- Scrollable list if agents exceed viewport
- Sort agents by: Availability (default), Specialization, Workload

**Design Notes:**
- Consistent card style with project cards
- Clear capacity indicators
- Disabled state for unavailable agents
- Tooltip on disabled agents: "At capacity - currently on X projects"

---

#### Story 2.4: Search/Filter Agents
**As a** director
**I want to** search for specific types of agents
**So that** I can quickly find specialists

**Acceptance Criteria:**
- Search input above agent list: "Search agents..."
- Real-time filtering by: name, specialization, capability description
- Filter by availability:
  - All agents
  - Available only
  - Partial capacity
- Clear search/filters button
- Empty state: "No agents match your criteria"

**Design Notes:**
- Compact filter controls (doesn't dominate the view)
- Pill buttons for availability filters

---

#### Story 2.5: Select an Agent
**As a** director
**I want to** click an agent to assign them
**So that** I can complete the staffing

**Acceptance Criteria:**
- Click agent card to select (only if available capacity)
- Selected agent highlighted with border
- Can change selection (click different agent)
- "Assign Agent" button appears at bottom when agent selected
- Button text: "Assign [Agent Name] to [Project Name]"
- Clicking button completes assignment and advances to Step 3
- Smooth transition to Step 3 (Review)

**Design Notes:**
- Prominent "Assign Agent" button (fixed at bottom or floating)
- Clear visual feedback on selection
- Button disabled until agent selected

**Technical Notes:**
- Update project.staffing object
- Update agent.capacity and currentProjects
- Save to localStorage
- Dispatch event for cross-component sync

---

#### Story 2.6: Create Custom Agent
**As a** director
**I want to** create a custom agent for specific needs
**So that** I can staff projects requiring specialized help

**Acceptance Criteria:**
- "Create Custom Agent" card always at top of agent list
- Distinct visual treatment (dashed border, + icon)
- Click to expand inline agent creation form
- Form fields:
  - Agent name (required, max 50 chars)
  - Specialization (required, max 50 chars)
  - Description (optional, max 200 chars)
  - Capacity (dropdown: 1-5 projects, default 3)
- Validation messages for required fields
- "Create & Assign" button creates agent and completes assignment
- "Cancel" button collapses form
- Newly created agent:
  - Added to roster immediately
  - Auto-assigned to current project
  - Advances to Step 3 (Review)
- **Devin introduction**: When form expands, Devin character appears with message:
  - "I'm here to help you create agents tailored to your needs"
  - Friendly, encouraging tone

**Design Notes:**
- Smooth inline expansion animation (~400ms)
- Form slides down, pushing other agent cards below
- Devin appears as small character/avatar with speech bubble
- Follow existing form patterns from tour

**Technical Notes:**
- Generate unique ID for new agent
- Add to agents array
- Save to localStorage
- New agent should persist across sessions

---

### Epic 3: Wizard Step 3 - Review Staffed Projects

#### Story 3.1: Display Staffed Projects List
**As a** director
**I want to** see all my current project assignments
**So that** I can review my delegation plan

**Acceptance Criteria:**
- List of all staffed projects shown in Step 3
- Each staffed project card shows:
  - Project title
  - Priority tier badge
  - Category
  - Assigned agent name with avatar
  - "Unstaff" or "Remove Assignment" button
  - Help description (if provided)
- Projects sorted by: Priority (default), Category, or Agent
- Empty state if no projects staffed: "No projects staffed yet. Let's assign someone!"
- "Staff Another Project" button prominently displayed
- Visual confirmation after completing assignment (subtle success animation)

**Design Notes:**
- Clear, organized list view
- Staffed projects feel "complete" (checkmark, green accent)
- Easy to scan all assignments at once

---

#### Story 3.2: Success Feedback After Assignment
**As a** director
**I want to** see confirmation that the assignment worked
**So that** I know my action was successful

**Acceptance Criteria:**
- Immediate transition to Step 3 after assigning
- Brief success message: "✓ [Agent Name] assigned to [Project Name]"
- Newly assigned project appears at top of staffed list
- Subtle animation highlighting new assignment (gentle pulse or glow)
- Success message fades after 3 seconds
- Can immediately staff another project or close wizard

**Design Notes:**
- Purposeful, calm animation (no confetti)
- Subtle green glow or checkmark
- Follows brand guidelines: calm and affirming

---

#### Story 3.3: Unstaff a Project
**As a** director
**I want to** remove an agent from a project
**So that** I can adjust my delegation plan

**Acceptance Criteria:**
- "Unstaff" button on each staffed project card
- Click shows confirmation modal:
  - "Remove [Agent Name] from [Project Name]?"
  - "This will free up capacity for [Agent Name]"
  - "Unstaff Project" button (destructive styling)
  - "Cancel" button
- Confirming unstaff action:
  - Removes assignment from project
  - Updates agent capacity (available +1)
  - Updates agent currentProjects list
  - Removes project from staffed list
  - Project returns to unstaffed queue (Step 1)
  - Smooth exit animation for removed card
- Success message: "Assignment removed"

**Design Notes:**
- Clear destructive action styling (red/amber)
- Confirmation prevents accidental clicks
- Smooth card removal animation

**Technical Notes:**
- Update project.staffing to null/unassigned
- Update agent.capacity.available
- Remove project ID from agent.currentProjects
- Save to localStorage

---

#### Story 3.4: View Agent Details from Staffed Project
**As a** director
**I want to** see which other projects an agent is working on
**So that** I can understand their workload

**Acceptance Criteria:**
- Click agent name/avatar on staffed project card to expand details
- Expanded view shows:
  - Agent specialization
  - Current capacity (e.g., "2 of 3 projects")
  - List of all assigned projects
  - Link to each project
- Click outside or "Close" button to collapse
- Can unstaff from expanded view

**Design Notes:**
- Inline expansion or popover
- Clear visual connection to agent
- Easy to navigate to other assignments

---

#### Story 3.5: Staff Another Project
**As a** director
**I want to** quickly start staffing another project
**So that** I can build my delegation plan efficiently

**Acceptance Criteria:**
- "Staff Another Project" button prominently placed:
  - At top of Step 3
  - At bottom of staffed projects list
  - Always visible (sticky positioning)
- Click returns to Step 1 (project selection)
- Smooth transition animation back to Step 1
- Previous selections cleared
- Search and sort states reset

**Design Notes:**
- Primary action styling
- Clear call-to-action text
- Easy to find and click

---

### Epic 4: Wizard Navigation & UX

#### Story 4.1: Wizard Step Progress Indicator
**As a** director
**I want to** see where I am in the staffing workflow
**So that** I understand what's next

**Acceptance Criteria:**
- Step indicator shown at top of wizard:
  - Step 1: Select Project
  - Step 2: Define Help & Select Agent
  - Step 3: Review & Confirm
- Current step highlighted
- Completed steps shown with checkmark
- Future steps grayed out
- Can click completed steps to go back (non-linear navigation)
- Step numbers or icons for visual clarity

**Design Notes:**
- Horizontal progress bar or step bubbles
- Clean, minimal design
- Follows tour visual language

---

#### Story 4.2: Back Navigation
**As a** director
**I want to** go back to previous steps
**So that** I can change my selections

**Acceptance Criteria:**
- "Back" button visible in Steps 2 and 3
- Click returns to previous step
- Selections preserved when going back:
  - Selected project preserved
  - Help description preserved
  - Selected agent preserved (if going back from confirmation)
- Smooth transition animation
- "Back" button clearly distinguishable from "Cancel"

**Design Notes:**
- Secondary button styling
- Positioned consistently (top-left or bottom-left)
- Icon: ← or "← Back"

---

#### Story 4.3: Cancel/Exit Wizard
**As a** director
**I want to** cancel the staffing workflow
**So that** I can leave without making changes

**Acceptance Criteria:**
- "Cancel" or "Close" button visible at all steps
- Click shows confirmation if selections have been made:
  - "Cancel staffing? Your selections will be lost."
  - "Yes, Cancel" and "Continue Staffing" buttons
- If no selections made, exits immediately
- Returns to Roster Room overview or main tour view
- All wizard state cleared

**Design Notes:**
- Subtle button (not prominent)
- Top-right X icon or text link
- Confirmation modal for safety

---

#### Story 4.4: Keyboard Navigation
**As a** director
**I want to** use keyboard shortcuts
**So that** I can navigate efficiently

**Acceptance Criteria:**
- Tab navigation through all interactive elements
- Enter key:
  - Selects project (Step 1)
  - Selects agent (Step 2)
  - Confirms assignment
- Escape key cancels/closes wizard
- Arrow keys navigate between cards (optional)
- Focus indicators clearly visible
- Keyboard accessible at all steps

**Design Notes:**
- Clear focus states (outline)
- Logical tab order
- ARIA labels for screen readers

---

#### Story 4.5: Responsive Behavior
**As a** director
**I want to** use the wizard on any device
**So that** I can staff projects from anywhere

**Acceptance Criteria:**
- Desktop (>1024px):
  - Full-width wizard with generous spacing
  - Cards in grid (2-3 columns where appropriate)
- Tablet (768-1024px):
  - Single column layout
  - Cards full-width
  - Sticky headers and buttons
- Mobile (<768px):
  - Single column, full-width
  - Touch-friendly buttons (min 44x44px)
  - Optimized scrolling
  - Step indicator condensed
- Smooth transitions at all breakpoints
- No horizontal scrolling

**Design Notes:**
- CSS Grid/Flexbox
- Media queries matching tour breakpoints
- Test on iOS and Android

---

### Epic 5: Data Persistence & Integration

#### Story 5.1: Persist Assignments to localStorage
**As a** director
**I want to** keep my assignments across sessions
**So that** I don't lose my work

**Acceptance Criteria:**
- All assignments saved to localStorage on change
- Assignments loaded on wizard mount
- Data structure:
  ```javascript
  {
    projectId: string,
    agentId: string,
    helpDescription: string,
    assignedAt: timestamp
  }
  ```
- Projects array updated with staffing info
- Agents array updated with capacity and currentProjects
- Graceful degradation if localStorage unavailable
- Clear/reset option for testing

**Technical Notes:**
- Save on every assignment/unassignment
- Load on component mount
- Handle localStorage quota exceeded

---

#### Story 5.2: Sync with Other Tour Rooms
**As a** director
**I want to** see assignments reflected across the tour
**So that** the experience feels cohesive

**Acceptance Criteria:**
- Assignments made in Roster Room visible in:
  - Sorting Room (if visited)
  - Life Map (if visited)
  - Any other room showing projects
- Project staffing status consistent across rooms
- Changes in other rooms reflected in Roster Room
- Shared state via localStorage
- Custom events dispatched on assignment changes

**Technical Notes:**
- Dispatch `rosterUpdated` event on assignment
- Listen for project updates from other components
- Shared project data model
- Consistent data keys in localStorage

---

#### Story 5.3: Handle Edge Cases
**As a** director
**I want to** handle unexpected situations gracefully
**So that** the wizard doesn't break

**Acceptance Criteria:**
- Handle empty data:
  - No unstaffed projects → friendly empty state
  - No agents available → prompt to create custom agent
- Handle deleted projects:
  - If assigned project deleted, gracefully remove assignment
- Handle deleted agents:
  - If assigned agent deleted, mark project as unassigned
- Handle capacity conflicts:
  - If agent manually edited to exceed capacity, show warning
- Handle localStorage errors:
  - Fallback to in-memory state
  - Show warning message
- Network errors (future API integration):
  - Retry logic
  - Error messages

**Design Notes:**
- Friendly error messages
- Clear recovery actions
- No crashes or blank screens

---

### Epic 6: Content & Onboarding

#### Story 6.1: First-Time User Introduction
**As a** new director
**I want to** understand how the wizard works
**So that** I can staff my first project

**Acceptance Criteria:**
- Intro screen shown on first visit:
  - "Welcome to the Roster Room"
  - Brief explanation of wizard workflow (3 steps)
  - "Let's staff your first project" CTA
- Skip option for returning users
- Devin character introduces the room:
  - "I'm Devin, and I'm here to help you build your support team"
  - Friendly, conversational tone
- "Got it" or "Start" button to enter Step 1
- Never show again checkbox

**Design Notes:**
- Full-screen or modal overlay
- Devin prominently featured
- Clear, scannable text
- Follows tour introduction patterns

**Technical Notes:**
- localStorage flag: `rosterRoom_introSeen`
- Reset option in settings

---

#### Story 6.2: Contextual Help & Tooltips
**As a** director
**I want to** get help when I'm stuck
**So that** I can complete the workflow

**Acceptance Criteria:**
- Help icon (?) at each wizard step
- Click shows contextual help:
  - Step 1: "Choose which project needs help"
  - Step 2: "Describe what you need, then pick or create an agent"
  - Step 3: "Review your team assignments"
- Tooltips on key elements:
  - Priority badges: "Gold projects are highest priority"
  - Agent capacity: "Shows current workload"
  - Create agent card: "Make a custom agent for specific needs"
- Help text friendly and concise
- Dismissible tooltips

**Design Notes:**
- Small, unobtrusive help icon
- Popover or tooltip style
- Consistent with tour help patterns

---

#### Story 6.3: Empty State Messaging
**As a** director
**I want to** see helpful messages when lists are empty
**So that** I know what to do next

**Acceptance Criteria:**
- Empty unstaffed projects:
  - "All projects are staffed! 🎉"
  - "You can unstaff projects to make changes."
  - "Staff Another Project" button (if in Step 3)
- Empty agents list:
  - "No agents available yet"
  - "Create your first custom agent to get started"
  - Prominent "Create Custom Agent" CTA
- Empty search results:
  - "No projects match '{search term}'"
  - "Try different keywords or clear search"
- Empty staffed projects:
  - "No projects staffed yet"
  - "Let's assign someone! Start by selecting a project."
  - "Go to Step 1" button

**Design Notes:**
- Friendly, encouraging tone
- Clear call-to-action
- Illustrations or icons (optional)

---

## Technical Implementation Plan

### Architecture Approach
- Continue single-file React app pattern (`lifebuild-immersive-tour.jsx`)
- Replace existing RosterRoom component with wizard implementation
- Use React hooks for state management
- Follow existing component patterns

### Component Structure
```
RosterRoomWizard (parent component)
├── WizardStepIndicator
│   └── Step bubbles (1, 2, 3)
├── Step1_ProjectSelection
│   ├── SearchBar
│   ├── SortControls
│   └── ProjectCard[] (clickable)
├── Step2_DefineHelpAndSelectAgent
│   ├── SelectedProjectHeader (condensed)
│   ├── HelpDescriptionInput
│   ├── AgentSearchFilter
│   ├── CreateAgentCard (expandable)
│   ├── CreateAgentForm (conditional)
│   └── AgentCard[] (clickable)
├── Step3_ReviewStaffedProjects
│   ├── SuccessMessage (conditional)
│   ├── StaffedProjectCard[]
│   │   └── UnstaffButton
│   └── StaffAnotherProjectButton
└── WizardNavigation
    ├── BackButton
    └── CancelButton
```

### State Management
```javascript
// Wizard state
const [currentStep, setCurrentStep] = useState(1); // 1, 2, or 3
const [selectedProject, setSelectedProject] = useState(null);
const [helpDescription, setHelpDescription] = useState('');
const [selectedAgent, setSelectedAgent] = useState(null);

// Data state
const [projects, setProjects] = useState([]);
const [agents, setAgents] = useState([]);
const [assignments, setAssignments] = useState([]);

// UI state
const [searchTerm, setSearchTerm] = useState('');
const [sortBy, setSortBy] = useState('priority');
const [agentFilter, setAgentFilter] = useState('all');
const [isCreatingAgent, setIsCreatingAgent] = useState(false);
const [showIntro, setShowIntro] = useState(true);
```

### Data Model

#### Project (unchanged from original)
```javascript
{
  id: string,
  title: string,
  description: string,
  priority: 'gold' | 'silver' | 'bronze',
  status: 'active' | 'ongoing',
  category: string,
  progress: number,
  staffing: {
    assigned: boolean,
    agentId: string | null,
    agentName: string | null,
    helpDescription: string | null,
    assignedAt: timestamp | null
  }
}
```

#### Agent (unchanged from original)
```javascript
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
  avatar: string, // emoji or icon
  createdAt: timestamp
}
```

#### Assignment (new, for easier tracking)
```javascript
{
  id: string,
  projectId: string,
  agentId: string,
  helpDescription: string,
  assignedAt: timestamp
}
```

### localStorage Keys
- `rosterRoom_projects` - Projects array
- `rosterRoom_agents` - Agents array
- `rosterRoom_assignments` - Assignments array
- `rosterRoom_introSeen` - Boolean flag

### Styling Approach
- Reuse existing CSS variables from tour
- New classes:
  - `.wizard-container`
  - `.wizard-step-indicator`
  - `.wizard-step-1`, `.wizard-step-2`, `.wizard-step-3`
  - `.wizard-step-content`
  - `.wizard-navigation`
  - `.selected-project-header`
  - `.help-description-input`
  - `.staffed-project-card`
- Transitions: slide or fade between steps (~300-400ms)
- Purposeful, calm animations (brand aligned)

---

## Development Phases

### Phase 1: Wizard Foundation (Days 1-3)
**Goal:** Build wizard shell and step navigation

**Tasks:**
1. Create wizard container and step state management
2. Build step indicator component
3. Implement step transitions (animations)
4. Add Back/Cancel navigation
5. Create wizard step components (empty shells)
6. Test step navigation flow

**Deliverable:** Empty wizard that navigates between 3 steps smoothly

---

### Phase 2: Step 1 - Project Selection (Days 4-6)
**Goal:** Complete project selection workflow

**Tasks:**
1. Display unstaffed projects as cards
2. Implement search functionality
3. Add sort controls (Priority, Category, Alphabetical)
4. Handle project selection (click to advance)
5. Add empty states
6. Test responsive behavior

**Deliverable:** Functional project selection that advances to Step 2

---

### Phase 3: Step 2 - Help Definition & Agent Selection (Days 7-10)
**Goal:** Complete agent selection workflow

**Tasks:**
1. Show selected project in header
2. Build help description input
3. Display agent cards with capacity indicators
4. Implement agent search/filter
5. Handle agent selection
6. Add "Assign Agent" button with logic
7. Update project and agent state on assignment
8. Test assignment workflow end-to-end

**Deliverable:** Can select project, describe help, select agent, complete assignment

---

### Phase 4: Custom Agent Creation (Days 11-12)
**Goal:** Enable creating custom agents

**Tasks:**
1. Create "Create Custom Agent" card
2. Build inline expansion form
3. Add form validation
4. Implement "Create & Assign" logic
5. Add Devin introduction/character
6. Handle cancel action
7. Test custom agent creation workflow

**Deliverable:** Can create custom agent and auto-assign to project

---

### Phase 5: Step 3 - Review Staffed Projects (Days 13-15)
**Goal:** Complete review and unstaff workflow

**Tasks:**
1. Display staffed projects list
2. Show assignment details (agent, help description)
3. Build success message/animation after assignment
4. Implement unstaff action with confirmation
5. Add "Staff Another Project" button
6. Update agent capacity on unstaff
7. Test full cycle: staff → review → unstaff

**Deliverable:** Complete review experience with easy unstaff

---

### Phase 6: Data Persistence (Days 16-17)
**Goal:** Persist all data to localStorage

**Tasks:**
1. Implement localStorage save on assignment
2. Load assignments on mount
3. Sync projects and agents arrays
4. Handle edge cases (deleted projects/agents)
5. Graceful degradation if localStorage unavailable
6. Add reset/clear data utility for testing

**Deliverable:** Assignments persist across page refreshes

---

### Phase 7: Onboarding & Content (Days 18-19)
**Goal:** Add intro, help, and empty states

**Tasks:**
1. Create first-time intro screen with Devin
2. Add contextual help tooltips
3. Refine all empty state messages
4. Add loading states (if needed)
5. Polish copy throughout for friendly tone
6. Test onboarding flow for new users

**Deliverable:** Welcoming, helpful experience for new users

---

### Phase 8: Polish & Animations (Days 20-21)
**Goal:** Refine all transitions and visual details

**Tasks:**
1. Polish step transition animations
2. Add success animations (subtle, calm)
3. Refine card hover states
4. Smooth card removal animations (unstaff)
5. Polish spacing, typography, colors
6. Ensure all animations follow brand guidelines
7. Test animation timing on different devices

**Deliverable:** Smooth, purposeful animations throughout

---

### Phase 9: Integration & Testing (Days 22-24)
**Goal:** Cross-room sync and comprehensive testing

**Tasks:**
1. Implement cross-room state sync (localStorage events)
2. Test with Sorting Room and Life Map
3. Full workflow testing on desktop, tablet, mobile
4. Cross-browser testing (Chrome, Firefox, Safari, Edge)
5. Accessibility testing (keyboard, screen reader)
6. Edge case testing (empty data, capacity conflicts, etc.)
7. Performance testing (smooth 60fps)
8. Bug fixes from testing

**Deliverable:** Production-ready wizard integrated with tour

---

### Phase 10: Documentation & Handoff (Day 25)
**Goal:** Document implementation and create handoff materials

**Tasks:**
1. Update project plan with as-built notes
2. Document component structure
3. Create developer notes for future maintenance
4. Document data model and localStorage schema
5. Write user-facing help content
6. Create demo video or walkthrough

**Deliverable:** Complete documentation for maintenance and future enhancements

---

## Total Timeline: ~25 Days (~5 Weeks)

### Week 1 (Days 1-5)
- Phase 1: Wizard Foundation
- Phase 2: Step 1 - Project Selection (start)

### Week 2 (Days 6-10)
- Phase 2: Step 1 - Project Selection (finish)
- Phase 3: Step 2 - Help Definition & Agent Selection

### Week 3 (Days 11-15)
- Phase 4: Custom Agent Creation
- Phase 5: Step 3 - Review Staffed Projects

### Week 4 (Days 16-21)
- Phase 6: Data Persistence
- Phase 7: Onboarding & Content
- Phase 8: Polish & Animations

### Week 5 (Days 22-25)
- Phase 9: Integration & Testing
- Phase 10: Documentation & Handoff

---

## Success Metrics

### Functional Completeness
- [ ] All user stories implemented
- [ ] All acceptance criteria met
- [ ] No blocking bugs or errors
- [ ] Data persists correctly across sessions

### User Experience
- [ ] Clear, intuitive workflow (one decision at a time)
- [ ] Reduced cognitive load vs. previous design
- [ ] Smooth transitions between steps
- [ ] Helpful empty states and error messages
- [ ] Responsive on all target devices
- [ ] Accessible (keyboard navigation, ARIA labels)

### Design Consistency
- [ ] Matches existing tour aesthetic
- [ ] Uses established color palette
- [ ] Follows typography standards
- [ ] Purposeful, calm animations (brand aligned)
- [ ] Component patterns align with other rooms

### Performance
- [ ] Smooth animations (60fps)
- [ ] Fast transitions (<400ms)
- [ ] No jank or lag
- [ ] Responsive UI updates

---

## Migration from Current Design

### What Changes
- **Structure**: Two-panel layout → wizard steps
- **Workflow**: Simultaneous selection → sequential selection
- **Navigation**: Static panels → step-based progression
- **Assignment**: Center button → contextual "Assign" in Step 2

### What Stays the Same
- Data models (projects, agents, assignments)
- localStorage persistence
- Search and sort functionality
- Create custom agent feature
- Devin character integration
- Cross-room state sync

### Migration Tasks
1. Extract reusable components (ProjectCard, AgentCard)
2. Adapt existing state management to wizard pattern
3. Keep localStorage schema (backward compatible)
4. Reuse mock data (MOCK_PROJECTS, MOCK_AGENTS)
5. Preserve connection line logic (optional for wizard)
6. Keep success messaging patterns

---

## Future Enhancements (Post-MVP)

### Advanced Workflow Features
- **AI-powered agent suggestions** - Analyze help description and suggest best agents
- **Batch assignment** - Staff multiple projects at once
- **Assignment templates** - Save common agent-project pairings
- **Recurring assignments** - Auto-assign agents to weekly recurring projects
- **Agent schedules** - View agent availability over time

### Collaboration Features
- **Assignment comments** - Add notes on why agent was chosen
- **Assignment history** - See past assignments and outcomes
- **Agent performance tracking** - Rate agent effectiveness per project
- **Team view** - See all assignments for a team/domain

### Intelligence Features
- **Workload balancing** - Warn if agent overloaded
- **Skill gap detection** - Suggest creating new agent types
- **Priority conflicts** - Warn if low-priority agent on high-priority project
- **Deadline awareness** - Factor in project deadlines for assignments

### Integration Features
- **Calendar sync** - Block agent time in calendar
- **Task automation** - Auto-create tasks for assigned projects
- **Notification system** - Alert agents of new assignments
- **Reporting dashboard** - Analytics on delegation patterns

---

## Design Decisions

### Confirmed Decisions
1. **Wizard-based workflow** ✅ - Sequential steps reduce cognitive load
2. **Natural language help input** ✅ - Lets users clarify needs before selecting agent
3. **Inline agent creation** ✅ - Keep flow without modal interruption
4. **Step 3 review screen** ✅ - Dedicated space to see all assignments
5. **Unstaff confirmation** ✅ - Prevent accidental removal
6. **Purposeful animations** ✅ - Calm, subtle, brand-aligned (no confetti)
7. **Mobile-friendly** ✅ - Single column, touch-optimized
8. **localStorage persistence** ✅ - Maintain state across sessions
9. **Devin integration** ✅ - Friendly guide for agent creation
10. **Non-linear navigation** ✅ - Can go back/forward in wizard

### Open Questions (for discussion)
1. **Should "Staff Another Project" return to Step 1 or show a quick-select overlay?**
   - Recommendation: Return to Step 1 (consistent with wizard pattern)
2. **Should we show connection lines in Step 2 when agent is selected?**
   - Recommendation: Optional enhancement, not critical for MVP
3. **Should help description be required or optional?**
   - Recommendation: Optional (lets advanced users skip)
4. **Should we limit custom agent creation (max agents per user)?**
   - Recommendation: No limit for now, monitor for abuse
5. **Should staffed projects be sortable in Step 3?**
   - Recommendation: Yes, by Priority and Category
6. **Should we show project progress bars in cards?**
   - Recommendation: Yes, helpful context

---

## Risk Mitigation

### UX Risks
1. **Wizard feels too slow**
   - Mitigation: Fast transitions, allow non-linear navigation, skip intro
2. **Users miss the review screen (Step 3)**
   - Mitigation: Clear step indicator, show success message
3. **Help description feels unnecessary**
   - Mitigation: Make optional, clear placeholder examples

### Technical Risks
1. **localStorage conflicts with other rooms**
   - Mitigation: Shared data keys, event-based sync
2. **Step transitions feel janky on mobile**
   - Mitigation: Test on real devices, optimize animations
3. **Form validation feels too strict**
   - Mitigation: Friendly error messages, only require essentials

### Scope Risks
1. **Feature creep during development**
   - Mitigation: Refer to MVP scope, defer enhancements to post-launch
2. **Polish takes too long**
   - Mitigation: Timebox Phase 8, prioritize high-impact refinements

---

## Recommendations

1. **Start with Phase 1 today** - Get wizard shell working ASAP
2. **Demo after Phase 3** - Show full assignment workflow for early feedback
3. **Don't skip Phase 6** - Data persistence enables better testing
4. **Test mobile early** - Don't wait until Phase 9 to check responsive behavior
5. **Keep animations subtle** - When in doubt, less is more
6. **Get feedback often** - After Phases 3, 5, 8, and 9
7. **Prioritize usability over features** - A simple, clear wizard beats a feature-rich confusing one

---

## Appendix: Reference Files

### Key Documentation (Current Workspace)
- Original plan: `ROSTER_ROOM_PROJECT_PLAN.md`
- Original build sequence: `ROSTER_ROOM_BUILD_SEQUENCE.md`
- Architecture: `content/platform/architecture/Architecture - Roster Room.md`
- Features: `content/features/roster-room/roster-room-team-assignment.md`
- Workflows: `content/platform/workflows/Workflows - Delegate Phase.md`
- Devin: `content/platform/ai-team/AI Team - Devin Roster Room Facilitation.md`

### Implementation File
- `quartz/static/apps/lifebuild-immersive-tour.jsx` (current RosterRoom component at line 956)

### Related Components
- Sorting Room (reference for step-based workflows)
- Life Map (reference for project cards)
- Navigation bar (tour integration)

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Clarify open questions** (see Design Decisions section)
3. **Approve MVP scope** and timeline
4. **Begin Phase 1 development** (wizard foundation)
5. **Schedule demo checkpoints** after Phases 3, 5, 8, 9

---

*This plan transforms the overwhelming two-panel design into a focused, step-by-step wizard that reduces cognitive load and guides users through the staffing workflow naturally. The wizard pattern makes delegation feel manageable, not overwhelming.*
