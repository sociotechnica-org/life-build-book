# Feature - Service Level Progression

## WHAT: Definition

The display showing a director's current Service Level, progress toward the next level, and capabilities unlocked at each stage — making the deepening relationship with LifeBuild visible and motivating continued engagement.

## WHERE: Ecosystem

- Implements: [[Standard - Service Levels]] — UI for the progression system
- Implements: [[Principle - Compound Capability]] — visible compounding
- Conforms to: [[Standard - Visual Language]] — level indicators, progress display render per spec
- Implements: [[Strategy - AI as Teammates]] — agents improve with levels
- Visible in: [[Feature - Council Chamber]] — Jarvis discusses progression
- Tracked by: [[Agent - Conan]] — historical data feeds level calculation

## WHY: Rationale

- System: [[Standard - Service Levels]] — levels need visibility to motivate
- Principle: [[Principle - Compound Capability]] — seeing progress reinforces investment
- Driver: Directors should see their relationship with LifeBuild deepening. Progression makes the invisible visible.
- Constraints: Progression reflects system capability growth, not director achievement scores. No badges, no leaderboards, no feature locks. Levels are honest about what the system can and cannot yet do.

## WHEN: Timeline

Supporting feature. Progression display develops as Service Level mechanics mature.

## HOW: Implementation

**Display elements:**

- Current level (0-5)
- Level name and description
- Progress indicator toward next level
- Recent milestones achieved
- Capabilities unlocked at current level

**Level summaries:**

| Level | Name         | Threshold                |
| ----- | ------------ | ------------------------ |
| 0     | Newcomer     | New account              |
| 1     | Establishing | First week complete      |
| 2     | Building     | Consistent weekly rhythm |
| 3     | Developing   | Patterns emerging        |
| 4     | Maturing     | Strong historical data   |
| 5     | Flourishing  | Deep partnership         |

**Agent quality indicators:**

- Higher levels = better agent recommendations
- Jarvis notes: "With more history, I can see patterns..."
- Visible connection between engagement and service quality

**Not gamification:** Levels reflect genuine capability growth, not arbitrary points. No badges, no leaderboards — just honest representation of system capability.

### Examples

- New director at Level 0 (Newcomer) → completes first week of planning and review → advances to Level 1 (Establishing) → Jarvis notes: "With a week of history, I can start noticing basic patterns in your preferences" → capability connection made visible.
- Director at Level 3 (Developing) for three months → Jarvis: "I've seen 12 weeks of your planning now. Your calibration is improving — estimates are 20% closer to reality than month one" → the relationship depth is tangible.

### Anti-Examples

- **Awarding badges for arbitrary engagement metrics** — "You viewed your Life Map 10 times!" is gamification. Progression reflects genuine system capability growth (better predictions, deeper pattern recognition), not click counts.
- **Gatekeeping features behind level requirements** — levels describe what the system can do for the director, not what the director is allowed to do. All features are available from Day 1. Higher levels unlock better quality, not access.
