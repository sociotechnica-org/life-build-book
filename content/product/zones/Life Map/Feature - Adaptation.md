# Feature - Adaptation

## WHAT: Definition

The interface for modifying weekly commitments after planning — pausing active projects, promoting replacements, adjusting Bronze mode, or inserting emergency work. Directors interact with The Table and Project Boards to adapt their plans as circumstances change.

## WHERE: Ecosystem

- Modifies: [[Feature - The Table]] — changes what's displayed
- Accessed via: [[Feature - The Table]] (position interactions), [[Feature - Project Board]] (pause action)
- Agent: [[Agent - Marvin]] — supports transitions
- Returns to: [[System - Priority Queue Architecture]] — paused items requeue
- Implements: [[Principle - Plans Are Hypotheses]] — adaptation is expected
- Implements: [[Strategy - Superior Process]] — structured flexibility

## WHY: Rationale

- Principle: [[Principle - Plans Are Hypotheses]] — plans change; that's leadership, not failure
- Strategy: [[Strategy - Superior Process]] — adaptation has structure, not chaos
- Driver: Life doesn't wait for Friday planning. Directors need to respond to change without guilt or friction.

## WHEN: Timeline

Core feature. Adaptation mechanics designed to feel supportive, not punitive.

## HOW: Implementation

**Pause-and-Replace (Gold/Silver positions):**
- Click project on The Table → Open Project Board
- Click Pause button
- Paused project returns to Priority Queue (top position)
- Slot opens; director chooses:
  1. Promote from queue — select different project
  2. Create emergency — new project jumps to position
  3. Leave empty — intentional gap for remainder of week

**Mode Change (Bronze position):**
- Click gear icon on Bronze position
- Select new mode (Minimal/Target/Maximal)
- If Target, adjust number
- Stack updates immediately

**Emergency Insertion:**
- Created via Drafting Room with "urgent" flag
- Skips normal queue positioning
- Can go directly to The Table
- Jarvis notes for pattern tracking

**Tone throughout:**
- Never "you failed to complete"
- Always "circumstances changed"
- Adaptation framed as responsive leadership
