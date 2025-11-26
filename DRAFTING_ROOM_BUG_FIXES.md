# Drafting Room Bug Fixes & Tactical Improvements

## Bugs Identified

### Bug 1: Tier Filter Empties Board
**Issue**: Selecting any tier filter (Gold, Silver, Bronze) shows empty board
**Root Cause**: Not all projects in planningQueue have tier property set
**Impact**: Filter functionality broken for tier dimension

### Bug 2: No Save & Exit in Stages 2-4
**Issue**: Stage 1 has "Save & Exit" but Stages 2-4 only have "Back" and "Continue"
**Root Cause**: Stage components inconsistent in button layout
**Impact**: Users forced to complete stages or lose progress

### Bug 3: Back Button Goes Forward
**Issue**: Clicking "Back" in Stage 2+ actually advances to next stage
**Root Cause**: Back button handler incorrectly implemented
**Impact**: Navigation broken, confusing UX

### Bug 4: Can Advance with Blank Fields
**Issue**: Can click through stages without filling required data
**Root Cause**: Missing validation on "Continue" buttons
**Impact**: Empty/incomplete projects pollute queue

### Bug 5: Completed Projects Stay in Stage 4
**Issue**: After completing Stage 4, project stays in Planning Queue (Stage 4 column)
**Root Cause**: Projects should move to Priority Queue after approval, not remain in Drafting
**Impact**: Planning Queue becomes cluttered with finished projects

---

## User Stories for Fixes

### US-1: Consistent Tier Data
**As a Director**, I want all projects to have tier values so I can filter by tier reliably.

**Acceptance Criteria:**
- All projects in planningQueue have tier property (gold/silver/bronze)
- Tier filter shows correct counts for each tier
- Filtering by tier displays appropriate projects

**Implementation:**
- Add tier to all 6 mock projects in lifebuild-data.js
- Ensure tier is set during Stage 2 (Scoped) flow

---

### US-2: Save & Exit Available in All Stages
**As a Director**, I want to save and exit at any stage so I can pause work without losing progress.

**Acceptance Criteria:**
- All 4 stages show "Save & Exit" button
- Save & Exit saves current progress and returns to queue
- Resuming project opens at the stage where I left off
- No data loss when using Save & Exit

**Implementation:**
- Add onSave prop to all stage components
- Add "Save & Exit" button to Stages 2, 3, 4 (already exists in Stage 1)
- Wire up to saveCurrentProject function

---

### US-3: Back Button Navigation Works Correctly
**As a Director**, I want the Back button to go to the previous stage so I can review/edit earlier work.

**Acceptance Criteria:**
- Back button in Stage 2 returns to Stage 1
- Back button in Stage 3 returns to Stage 2
- Back button in Stage 4 returns to Stage 3
- Data is preserved when going back
- Can navigate forward again after going back

**Implementation:**
- Fix onBack handler to call setCurrentStage(currentStage - 1)
- Ensure currentProject data persists during navigation

---

### US-4: Required Field Validation
**As a Director**, I want to be prevented from advancing stages if required fields are incomplete so I create complete project plans.

**Acceptance Criteria:**
- **Stage 1**: Cannot continue without title, category, description
- **Stage 2**: Cannot continue without objectives (at least 1), archetype, tier
- **Stage 3**: Cannot continue without tasks (generated, at least 1)
- **Stage 4**: Can complete with summary (no strict validation)
- Continue button disabled when validation fails
- Visual feedback shows which fields are required

**Implementation:**
- Add validation functions to each stage
- Disable Continue button based on validation
- Show helper text for required fields

---

### US-5: Completed Projects Move to Priority Queue
**As a Director**, I want completed projects (Stage 4 approved) to move to my Priority Queue so my Planning Queue only shows in-progress work.

**Acceptance Criteria:**
- Completing Stage 4 removes project from Planning Queue
- Project added to Priority Queue (sorted queues in LifeBuildData)
- Project shows in Sorting Room
- Planning Queue no longer shows Stage 4 column (or shows as empty/transitional)
- Can still abandon projects in Stage 4 without completing

**Implementation:**
- Update completeStage logic for Stage 4
- Move project to appropriate tier queue (gold/silver/bronze)
- Remove from planningProjects
- Update localStorage for both queues

---

### US-6: Save Progress at Any Point
**As a Director**, I want my progress saved automatically so I don't lose work if I navigate away.

**Acceptance Criteria:**
- Clicking "Save & Exit" saves all entered data
- Resuming project shows all previously entered data
- Field values persist across Back/Forward navigation
- No duplicate projects created

**Implementation:**
- Ensure updateField function in ProjectCreationFlow updates currentProject
- Save intermediate state when using Back button
- Merge updates properly in saveCurrentProject

---

## Implementation Plan

### Phase 1: Data Fixes (Bug 1)
1. Add tier to all projects in lifebuild-data.js
2. Verify tier filter works correctly

### Phase 2: Navigation Fixes (Bugs 2, 3)
1. Add onSave handler to Stage2, Stage3, Stage4 components
2. Add "Save & Exit" button to all stages
3. Fix Back button to decrement stage instead of increment
4. Add saveProgress helper that saves without exiting

### Phase 3: Validation (Bug 4)
1. Add validation to Stage1Identified
2. Add validation to Stage2Scoped
3. Add validation to Stage3Drafted
4. Disable Continue buttons when invalid
5. Show validation messages

### Phase 4: Priority Queue Integration (Bug 5)
1. Update completeStage for Stage 4 completion
2. Add project to correct tier queue (gold/silver/bronze)
3. Remove from Planning Queue
4. Update both localStorage keys
5. Consider: Remove Stage 4 column or mark as transitional

### Phase 5: Testing
1. Test new project creation flow (all 4 stages)
2. Test resume at each stage
3. Test Save & Exit at each stage
4. Test Back navigation
5. Test validation prevents advancement
6. Test completed projects appear in Priority Queue
7. Test tier filtering

---

## Technical Notes

### Priority Queue Data Structure
Projects moving to Priority Queue should be added to the appropriate tier queue:
```javascript
// In lifebuild-data.js
const queues = {
  gold: [...],
  silver: [...],
  bronze: [...]
};
```

Projects need to be transformed from planning format to priority queue format:
```javascript
{
  title: project.title,
  meta: `${project.category} · ${project.tier} · ...`,
  category: project.category,
  progress: 0,
  stage: 'Stage 4 · Plans final',
  status: 'Ready',
  // ... other fields
}
```

### Stage 4 Column Decision
Options:
1. **Keep Stage 4 column** - Shows projects awaiting final approval/review
2. **Remove Stage 4 column** - Projects auto-complete to Priority Queue at end of Stage 3
3. **Make Stage 4 transitional** - Stage 4 completion immediately moves to Priority Queue

**Recommendation**: Option 3 - Keep Stage 4 for final review/summary, but completion moves to Priority Queue automatically.

---

## Success Criteria

- [ ] All tier filters show correct project counts
- [ ] Can Save & Exit from any stage without data loss
- [ ] Back button decrements stage number correctly
- [ ] Cannot advance stages with incomplete required fields
- [ ] Completed Stage 4 projects appear in Priority Queue
- [ ] Planning Queue only shows in-progress projects (Stages 1-4)
- [ ] No duplicate projects created
- [ ] localStorage stays in sync across queue transitions
