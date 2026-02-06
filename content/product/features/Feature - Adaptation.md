# Feature - Adaptation

## WHAT: Definition

The interface for modifying weekly commitments after planning — pausing active projects, promoting replacements, adjusting Bronze mode, or inserting emergency work. Directors interact with The Table and Project Boards to adapt their plans as circumstances change.

## WHERE: Ecosystem

- Modifies: [[Feature - The Table]] — changes what's displayed
- Accessed via: [[Feature - The Table]] (position interactions), [[Feature - Project Board]] (pause action)
- Agent: [[Agent - Marvin]] — supports transitions
- Returns to: [[System - Priority Queue Architecture]] — paused items requeue
- Conforms to: [[Standard - Visual Language]] — state transitions update visual treatments
- Conforms to: [[Standard - Project States]] — pause/promote follow state transition rules
- Conforms to: [[Standard - Planning Calibration]] — adaptation follows hypothesis framing
- Implements: [[Principle - Plans Are Hypotheses]] — adaptation is expected
- Implements: [[Strategy - Superior Process]] — structured flexibility

## WHY: Rationale

- Principle: [[Principle - Plans Are Hypotheses]] — plans change; that's leadership, not failure
- Strategy: [[Strategy - Superior Process]] — adaptation has structure, not chaos
- Driver: Life doesn't wait for Friday planning. Directors need to respond to change without guilt or friction.
- Constraints: Adaptation carries no guilt tax. The system never frames mid-week changes as failure. Modification UI feels like adjusting strategy, not editing a failure report.

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

### Examples

- Director's parent falls ill on Tuesday → director opens The Table → pauses Gold project "Career Course" → slot opens → director selects "Leave empty" → Bronze mode switches to Minimal → the week reshapes around care without guilt or friction.
- Sprint at work demands unexpected effort → director opens Bronze position → switches from Target +3 to Maximal → operational tasks surface to match the week's intensity → no judgment about the change, just responsive adaptation.

### Anti-Examples

- **Requiring a justification when pausing a Gold project** — adaptation is leadership, not deviation. A "reason for change" dialog treats modification as failure requiring explanation. The system should feel like adjusting strategy, not filing an incident report.
- **Displaying "Gold project incomplete" in the end-of-week summary after a deliberate pause** — the project was paused (a strategic choice), not failed. Language must distinguish between "didn't finish" and "chose to redirect."
