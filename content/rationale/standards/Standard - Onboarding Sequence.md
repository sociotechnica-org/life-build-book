# Standard - Onboarding Sequence

## WHAT: Definition

The specification for the day-by-day first 72 hours experience: what happens each day, which features unlock when, which agents appear in what order, and the progressive disclosure rules that prevent overwhelm while building momentum.

## WHERE: Ecosystem

- Conforming features: [[Feature - The Charter]] — initial version created during Day 2
- Conforming components: [[Hex Grid - Campfire]] — Day 1 first-contact point
- Implemented by: [[System - Onboarding]] — executes the sequence
- Implements: [[Principle - First 72 Hours]] — makes onboarding sequence testable

## WHY: Rationale

- Principle: [[Principle - First 72 Hours]] — the first 72 hours define the relationship
- Driver: Without a sequenced spec, features compete for attention during onboarding, creating cognitive overload and abandonment.

## WHEN: Timeline

Core specification. Sequence refined based on onboarding completion and retention data.

## HOW: Specification

### Day 1: Welcome & Orient

| Step | Actor | Outcome |
|------|-------|---------|
| Warm greeting | Mesa at Campfire | Director feels welcomed |
| Spatial metaphor | Life Map introduction | "This is a map of your life" |
| First project | Director creates (low stakes) | "I made something" |

**Emotional target:** "I made something."
**Constraint:** Only Campfire, Life Map basics, and project creation are available.

### Day 2: Meet the Team

| Step | Actor | Outcome |
|------|-------|---------|
| Jarvis introduction | Council Chamber unlocks | Director meets planning advisor |
| Charter conversation | Jarvis guides | Values and current focus captured |
| Second project | Marvin in Drafting Room | "I have help" |

**Emotional target:** "I have help."
**Constraint:** Strategy Studio unlocks. Sorting Room not yet available.

### Day 3: Establish Rhythm

| Step | Actor | Outcome |
|------|-------|---------|
| Sorting Room visit | Cameron guides | Director prioritizes for first time |
| Work at Hand selection | Director chooses (even minimal) | First weekly commitment |
| Table populated | System displays selections | "I know what to do each week" |

**Emotional target:** "I know what to do each week."
**Constraint:** Full feature set now available. Progressive disclosure complete.

### Progressive Disclosure Rules

| Rule | Requirement |
|------|-------------|
| Feature unlock | Features unlock as relevant, not all at once |
| Day 1 scope | Campfire + Life Map + project creation only |
| Never show on Day 1 | The Table, Sorting Room, full agent capabilities |
| Each day | One primary emotional outcome |
| Framing | "You can explore more later" throughout |
| Tone | Warm, patient, encouraging |

## Anti-Examples

- **Full feature tour on Day 1** — Day 1 has one job: spatial metaphor + first project + "I made something." Showing The Table, Sorting Room, and agent capabilities creates cognitive overload and abandonment.
- **Requiring profile completion before first project creation** — every field between arrival and first "I made something" moment is friction. Directors should create their first project within minutes.
- **Day 1 ending without director having created something tangible** — if the first session ends without a visible artifact, the tool feels hollow. The first project (low stakes, quick win) establishes that LifeBuild produces, not just organizes.
