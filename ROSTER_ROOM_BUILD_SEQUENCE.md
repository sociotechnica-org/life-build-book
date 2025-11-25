# Roster Room - Recommended Build Sequence

## Philosophy

This sequence is designed to:
1. **Build incrementally** - Each milestone produces a working, demonstrable feature
2. **De-risk early** - Tackle technical unknowns (animations, gestures) before polishing
3. **Enable feedback loops** - Get visual/interactive feedback early to validate UX decisions
4. **Maintain momentum** - Each step is 1-3 days of focused work

---

## Milestone 1: Static Foundation (Days 1-2)
**Goal:** Create the visual shell - see the layout, cards, and basic styling

### What You'll Build
- [ ] Basic two-column layout (agents left, projects right)
- [ ] Mock data arrays (8-12 projects, 5-6 agents)
- [ ] ProjectCard component with all visual elements
- [ ] AgentCard component with all visual elements
- [ ] "Create Custom Agent" card (non-functional)
- [ ] "Staff Project" button (disabled state only)
- [ ] Basic responsive breakpoints (desktop/tablet/mobile)

### Why Start Here
- Establishes visual language and proportions
- Validates that mock data is realistic
- Confirms cards match existing tour aesthetic
- Easy to get stakeholder feedback on look/feel
- No complex logic yet - focus on design

### Deliverable
A static page where you can see all the elements arranged, scroll through projects and agents, but nothing is clickable yet.

**Demo:** "Here's what the Roster Room looks like - cards, layout, colors all match the tour style"

---

## Milestone 2: Core Interaction (Days 3-4)
**Goal:** Make selection and staffing work - the fundamental workflow

### What You'll Build
- [ ] Click to select project (highlight border)
- [ ] Click to select agent (highlight border)
- [ ] Staff Project button enable/disable logic
- [ ] Staffing action updates state
- [ ] Project card shows "Staffed by [Agent Name]"
- [ ] Agent card shows updated workload
- [ ] Clear selections after staffing
- [ ] Basic success message (text only, no animation yet)

### Why This Order
- Proves the core mechanic works
- No distractions from animations or fancy features
- Can manually test the full workflow end-to-end
- Establishes state management patterns
- Foundation for all other features

### Deliverable
A fully functional staffing workflow: click project, click agent, click Staff Project button, see assignment complete.

**Demo:** "I can now assign any agent to any project and see the results update"

---

## Milestone 3: Animated Connections (Days 5-6)
**Goal:** Add the animated lines connecting selections to button

### What You'll Build
- [ ] SVG or Canvas layer for connection lines
- [ ] Calculate positions of selected project, selected agent, and button
- [ ] Draw lines when both selections are active
- [ ] Smooth entrance animation (fade + draw)
- [ ] Lines fade out when staffing completes
- [ ] Update line positions if window resizes
- [ ] Purposeful, calm animation timing (not too fast/bouncy)

### Why Now
- Core functionality is proven, so this is "enhancement"
- Technical challenge - want to tackle while fresh
- Visual feedback is critical to UX but not blocking
- Can iterate on animation timing separately

### Deliverable
When you select a project and agent, elegant lines animate from each card to the Staff Project button.

**Demo:** "Watch these connection lines appear when I make both selections - purposeful and calm"

---

## Milestone 4: Search & Sort (Days 7-8)
**Goal:** Add project filtering and sorting controls

### What You'll Build
- [ ] Search input above project queue
- [ ] Real-time search filtering (title, description, category)
- [ ] Clear search button (X icon)
- [ ] Sort control (dropdown or pill buttons)
- [ ] Sort logic for: Priority (default), Status, Category, Alphabetical
- [ ] Empty search results state
- [ ] Search + sort interaction (sort filtered results)

### Why Now
- Independent feature - doesn't affect existing workflow
- Useful for demo with larger project lists
- Tests data manipulation patterns
- Nice quality-of-life improvement

### Deliverable
Can search "finances" and see only financial projects, or sort by status to see Active projects first.

**Demo:** "I can search for specific projects and sort the queue different ways"

---

## Milestone 5: localStorage Persistence (Day 9)
**Goal:** Make assignments persist across page refreshes

### What You'll Build
- [ ] Save assignments to localStorage on staffing action
- [ ] Load assignments from localStorage on mount
- [ ] Sync project "staffed" status with localStorage
- [ ] Sync agent workload with localStorage
- [ ] Handle localStorage not available (graceful degradation)
- [ ] Clear data utility (for testing/demo resets)

### Why Now
- Quick win - relatively straightforward
- Enables better testing (don't lose state on refresh)
- Required for cross-room sync later
- Low risk of breaking existing features

### Deliverable
Staff a project, refresh the page, assignment is still there.

**Demo:** "Assignments persist across sessions - watch me refresh and they're still assigned"

---

## Milestone 6: Inline Agent Creation (Days 10-11)
**Goal:** Build the "Create Custom Agent" workflow with Devin

### What You'll Build
- [ ] Click "Create Custom Agent" card expands inline form
- [ ] Form with fields: name, specialization, description
- [ ] Form validation (name required, specialization required)
- [ ] "Create & Staff" and "Cancel" buttons
- [ ] Cancel collapses form back to card
- [ ] Create adds agent to roster array
- [ ] Auto-select newly created agent
- [ ] Smooth expansion/collapse animation
- [ ] **Devin introduction**: Small Devin character/message appears with form
- [ ] Devin says: "I'm here to help you tune existing agents and create new ones tailored to your projects"

### Why Now
- Major feature, but doesn't interfere with existing workflow
- Introduces Devin character (important for later tutorial)
- Tests inline expansion pattern (technical challenge)
- Rewarding to complete - feels like a big feature

### Deliverable
Click "Create Custom Agent", fill out form with Devin's help, create agent, it appears in roster and is auto-selected.

**Demo:** "I can create a custom agent on the fly - Devin helps me through the process"

---

## Milestone 7: Purposeful Animations & Polish (Days 12-13)
**Goal:** Add subtle, calm animations and visual refinements

### What You'll Build
- [ ] Success animation when staffing completes (subtle checkmark or pulse)
- [ ] Gentle fade when clearing selections
- [ ] Smooth transitions when project/agent cards update
- [ ] Hover states with subtle transforms
- [ ] Loading skeleton states for cards (brief delay simulation)
- [ ] Empty state graphics/messages
- [ ] Tooltip on disabled Staff Project button
- [ ] Attention to timing: all animations ~200-400ms, ease-out curves
- [ ] Polish spacing, alignment, typography

### Why Now
- Core features are complete - time to refine
- Animations work best when applied holistically
- Polish pass catches all the small details
- Confirms brand guidelines (purposeful, calm) throughout

### Deliverable
The whole experience feels smooth, refined, and on-brand. Nothing jarring or rushed.

**Demo:** "Notice how calm and purposeful all the transitions feel - no confetti or bounce"

---

## Milestone 8: Mobile Swipe Gestures (Days 14-15)
**Goal:** Implement swipe navigation for mobile devices

### What You'll Build
- [ ] Detect mobile viewport (<768px)
- [ ] Implement touch/swipe detection (Hammer.js or native)
- [ ] Swipe left: agents panel → projects panel
- [ ] Swipe right: projects panel → agents panel
- [ ] Smooth panel transitions (slide animation)
- [ ] Visual indicators (dots or tabs showing active panel)
- [ ] Disable swipe when agent creation form is open
- [ ] Test on iOS and Android devices
- [ ] Adjust sensitivity/threshold for natural feel

### Why Now
- Desktop/tablet experience is fully working
- Mobile is separate interaction model - won't break existing work
- Technical challenge - want dedicated focus time
- Can test on real devices once implemented

### Deliverable
On mobile, swipe between agent roster and project queue smoothly with visual feedback.

**Demo:** "On mobile, you swipe between panels - see how natural it feels"

---

## Milestone 9: Devin Introduction & Tour Integration (Days 16-17)
**Goal:** Add Roster Room introduction with Devin and connect to tour navigation

### What You'll Build
- [ ] Opening scene/chapter for Roster Room
- [ ] Devin character prominently featured
- [ ] Devin's introduction message:
  - "I'm here to help you tune existing agents and create new ones"
  - When to use Roster Room (Delegate Phase, Friday)
  - What you do here (assign agents to projects)
  - Why it matters (alignment, automation, delegation)
- [ ] "Continue" or "Start" button to enter main Roster Room view
- [ ] Update navigation bar to link to Roster Room (when ready for sequence)
- [ ] Friendly, conversational tone throughout
- [ ] Match existing tour introduction patterns (Drafting/Sorting/Life Map)

### Why Now
- All Roster Room functionality is complete
- Ready to wrap it in tour context
- Devin character already introduced in agent creation
- Can now decide where in tour sequence it fits

### Deliverable
A welcoming introduction to the Roster Room with Devin explaining what's about to happen.

**Demo:** "Devin welcomes you to the Roster Room and explains what we'll be doing"

---

## Milestone 10: Guided Tutorial (Days 18-19)
**Goal:** Add step-by-step tutorial for first-time users

### What You'll Build
- [ ] Tutorial mode flag in state
- [ ] Step-by-step instructions:
  1. "Let's pick a project!" (highlight project panel)
  2. "Now choose an agent!" (highlight agent panel)
  3. "Watch the connection lines appear!" (highlight lines)
  4. "Click Staff Project to assign!" (highlight button)
- [ ] Overlay dimming with spotlights
- [ ] Tooltip-style instruction boxes
- [ ] Animated arrows/pointers (purposeful, calm)
- [ ] "Skip Tutorial" link
- [ ] Auto-advance or "Next" button per step
- [ ] Prevent off-script actions during tutorial (optional)
- [ ] Devin encouragement at key moments

### Why Now
- All features are working - tutorial can reference them
- Friendly, conversational language guides new users
- Validates that workflow is intuitive
- Last major feature before integration testing

### Deliverable
First-time users get a friendly, guided walkthrough of the staffing workflow.

**Demo:** "Follow along with the tutorial - Devin guides you through your first assignment"

---

## Milestone 11: Cross-Room State Sync (Days 20-21)
**Goal:** Sync Roster Room assignments with other tour rooms

### What You'll Build
- [ ] Identify projects shown in Sorting Room and Life Map
- [ ] Update those views to show staffing status from Roster Room
- [ ] When navigating to Roster Room, load current project states
- [ ] When leaving Roster Room, persist assignments for other rooms
- [ ] Test full tour flow: Sorting → Roster → Life Map
- [ ] Ensure consistent project names, priorities, statuses
- [ ] Verify localStorage syncs correctly across rooms
- [ ] Handle edge cases (assignment to deleted project, etc.)

### Why Now
- Roster Room is fully built - ready to integrate
- Other rooms are stable - safe to modify
- Critical for cohesive tour experience
- Best done all at once to avoid partial sync issues

### Deliverable
Assign an agent in Roster Room, navigate to Life Map, see the assignment reflected there.

**Demo:** "Watch assignments from Roster Room appear in other parts of the tour"

---

## Milestone 12: Testing, Refinement & Documentation (Days 22-23)
**Goal:** Comprehensive testing, bug fixes, and final polish

### What You'll Test
- [ ] Full workflow on desktop, tablet, mobile
- [ ] All user stories validated against acceptance criteria
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Touch device testing (iPad, iPhone, Android)
- [ ] Accessibility: keyboard navigation, ARIA labels, screen reader
- [ ] Performance: smooth animations at 60fps, no jank
- [ ] Edge cases: empty data, invalid inputs, rapid clicking
- [ ] localStorage limits and graceful degradation
- [ ] Integration with full tour (all rooms, all chapters)

### What You'll Refine
- [ ] Fix any bugs discovered in testing
- [ ] Adjust animation timings based on feel
- [ ] Refine copy/messaging for clarity
- [ ] Optimize performance if needed
- [ ] Final visual polish pass

### What You'll Document
- [ ] Update project plan with "as-built" notes
- [ ] Document any deviations from original plan
- [ ] Create developer notes for future maintenance
- [ ] Write user-facing help text if needed
- [ ] Update reference files list

### Deliverable
A fully tested, polished, production-ready Roster Room ready for launch.

**Demo:** "Here's the complete Roster Room experience - tested on all devices and integrated with the tour"

---

## Total Timeline: ~23 Days (~4.5 Weeks)

### Week 1 (Days 1-5)
- Milestone 1: Static Foundation
- Milestone 2: Core Interaction
- Milestone 3: Animated Connections (start)

### Week 2 (Days 6-10)
- Milestone 3: Animated Connections (finish)
- Milestone 4: Search & Sort
- Milestone 5: localStorage Persistence

### Week 3 (Days 11-15)
- Milestone 6: Inline Agent Creation
- Milestone 7: Purposeful Animations & Polish
- Milestone 8: Mobile Swipe Gestures

### Week 4 (Days 16-21)
- Milestone 9: Devin Introduction & Tour Integration
- Milestone 10: Guided Tutorial
- Milestone 11: Cross-Room State Sync

### Week 5 (Days 22-23)
- Milestone 12: Testing, Refinement & Documentation

---

## Alternative: MVP-First Approach (2 Weeks)

If you need something working faster, here's a compressed sequence:

### Week 1: Core MVP
- **Day 1-2:** Milestones 1 & 2 (Static + Core Interaction)
- **Day 3-4:** Milestone 4 (Search & Sort)
- **Day 5:** Milestone 5 (localStorage)

### Week 2: Essential Features
- **Day 6-7:** Milestone 6 (Agent Creation - no Devin yet)
- **Day 8-9:** Milestone 9 (Basic intro, no tutorial)
- **Day 10:** Testing & bug fixes

**What You'd Defer:**
- Animated connection lines (Milestone 3)
- Purposeful animations & polish (Milestone 7)
- Mobile swipe gestures (Milestone 8)
- Guided tutorial (Milestone 10)
- Cross-room sync (Milestone 11)

This gives you a working Roster Room in 2 weeks, then you can layer on enhancements incrementally.

---

## Key Decision Points

### After Milestone 2 (Day 4)
**Decision:** Does the core workflow feel right?
- If yes → continue to animations
- If no → iterate on interaction model before proceeding

### After Milestone 7 (Day 13)
**Decision:** Is the desktop experience complete enough to show stakeholders?
- If yes → get feedback before tackling mobile
- If no → identify what's missing and adjust plan

### After Milestone 10 (Day 19)
**Decision:** Is the Roster Room ready for tour integration?
- If yes → proceed to cross-room sync
- If no → what's blocking? (likely tutorial refinement)

### After Milestone 11 (Day 21)
**Decision:** Where in the tour sequence should Roster Room go?
- Work with stakeholders to determine chapter placement
- May require adjustments to tour navigation logic

---

## Risk Mitigation

### Technical Risks
1. **Animated connection lines** (Milestone 3)
   - Risk: SVG/Canvas positioning tricky, lines don't look right
   - Mitigation: Budget extra time, have simpler fallback (highlight only)

2. **Mobile swipe gestures** (Milestone 8)
   - Risk: Conflicts with scrolling, feels janky
   - Mitigation: Use proven library (Hammer.js), test early on real devices

3. **Cross-room state sync** (Milestone 11)
   - Risk: Complex state management, race conditions
   - Mitigation: Design sync strategy upfront, use localStorage carefully

### UX Risks
1. **Inline agent creation** (Milestone 6)
   - Risk: Form expansion feels disruptive
   - Mitigation: Prototype animation early, get feedback

2. **Tutorial feels forced** (Milestone 10)
   - Risk: Users skip tutorial, or it's too prescriptive
   - Mitigation: Make skippable, use friendly language, test with users

### Scope Risks
1. **Feature creep**
   - Risk: "Let's also add..." during development
   - Mitigation: Refer to MVP scope, defer enhancements to post-launch

2. **Polish takes too long**
   - Risk: Milestone 7 expands indefinitely
   - Mitigation: Timebox polish pass, prioritize high-impact refinements

---

## Success Criteria

At the end of this build sequence, you should have:

✅ A fully functional Roster Room that matches all user stories
✅ Purposeful, calm animations throughout (brand-aligned)
✅ Mobile-friendly with swipe navigation
✅ Devin introduction and guided tutorial
✅ localStorage persistence and cross-room sync
✅ Clean, maintainable code following tour patterns
✅ Comprehensive testing across devices and browsers
✅ Documentation for future developers

And most importantly: **A delightful experience that makes staffing projects feel intuitive and engaging.**

---

## Recommendations

1. **Start with Milestone 1 today** - Get the visual foundation in place ASAP so you can see what you're building

2. **Demo after Milestone 2** - Once core interaction works, show it to stakeholders for early feedback

3. **Don't skip Milestone 5** - localStorage persistence enables better testing throughout development

4. **Be flexible on sequencing** - If you hit a blocker on one milestone, jump to another independent feature

5. **Test mobile early** - Don't wait until Milestone 8 to see it on a phone; check responsive behavior throughout

6. **Keep animations subtle** - When in doubt, less is more. Purposeful and calm > flashy and busy

7. **Get feedback often** - After Milestones 2, 7, 10, and 11, pause and demo to stakeholders

---

*This sequence balances incremental progress, technical risk management, and iterative feedback. Adjust as needed based on your team's velocity and priorities.*