# Feature - Elicitation

## WHAT: Definition

The knowledge acquisition strategies agents use to learn about directors — the techniques for gathering information through natural conversation rather than interrogation. Elicitation is how the AI team earns knowledge progressively instead of demanding it upfront.

## WHERE: Ecosystem

- Used by: All agents, especially [[Agent - Jarvis]], [[Agent - Mesa]]
- Implements: [[Principle - Earn Don't Interrogate]] — the core elicitation principle
- Implements: [[Strategy - AI as Teammates]] — teammates learn organically
- Feeds: [[System - Knowledge Framework]] — where learned knowledge lives
- Feeds: [[Feature - The Charter]] — elicited values captured here

## WHY: Rationale

- Principle: [[Principle - Earn Don't Interrogate]] — elicitation is the how of this principle
- Strategy: [[Strategy - AI as Teammates]] — teammates learn over time, not via forms
- Driver: Upfront questionnaires create friction and capture stale data. Elicitation captures living, contextual knowledge through natural interaction.

## WHEN: Timeline

Core to agent design. Elicitation techniques refined as agent conversations mature.

## HOW: Implementation

**Elicitation techniques:**

| Technique                    | Example                                            | Use Case           |
| ---------------------------- | -------------------------------------------------- | ------------------ |
| **Observe-and-note**         | Director completes Gold → note preference patterns | Background capture |
| **Conversational inference** | "Sounds like family time is important"             | Strategic sessions |
| **Gentle calibration**       | "Is this harder than it looks?"                    | Task estimation    |
| **Reflection prompt**        | "What made that project satisfying?"               | Week-in-Review     |
| **Choice observation**       | Track what gets selected vs. deferred              | Priority patterns  |

**What gets elicited:**

- Values and priorities
- Capacity patterns
- Preference patterns
- Relationship context
- Domain knowledge
- Historical patterns

**Elicitation moments:**

- During onboarding (First 72 Hours)
- During strategic conversations (Council Chamber)
- During project creation (Drafting Room)
- During planning and review (Weekly rhythm)
- Passively through usage patterns

**Knowledge persistence:**

- Elicited knowledge feeds Knowledge Framework
- Strategic knowledge captured in Charter
- Patterns tracked by Conan in Archives

**Never interrogate:**

- No upfront questionnaires
- No mandatory profile completion
- No blocking on information capture
- Learn through doing, not asking

**Explicit vs. implicit:**

- Some knowledge stated directly ("family is priority")
- Some knowledge inferred from behavior (always pauses projects in December)
- Both are valid; inferred requires higher confidence threshold
