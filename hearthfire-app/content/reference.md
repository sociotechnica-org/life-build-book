# Context Library Reference

Lookup tables for building and auditing Context Library cards.

---

## Type Taxonomy

### Universal Types

```
WHY we build things?
├─ Guiding philosophy → STRATEGY
├─ Judgment guidance → PRINCIPLE
└─ Testable specification → STANDARD

Infrastructure?
├─ Invisible mechanism with state → SYSTEM
└─ AI team member → AGENT
    └─ Agent implementation → PROMPT

WHEN?
├─ Historical → LEARNING / DECISION
└─ Future → FUTURE

WHAT ships?
├─ Shippable unit → INITIATIVE
└─ Version marker → RELEASE
```

### Product-Specific Types

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

_This section is populated after Conan runs `job-taxonomy` against source material in `content/sources/`. The taxonomy discovery process derives product-specific types from the source material using a noun palette selected by the human librarian._

_Selected palette: **[TBD — run job-taxonomy]**_

---

## Decision Tree

### Universal Gates

**Step 1: Is this about WHY we build?**
- Guiding philosophy (a bet) → Strategy
- Judgment guidance (a rule of thumb) → Principle
- Testable spec (concrete rules) → Standard

### Product-Specific Gates

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

**Step 2: Do users consciously interact with this?**
_Gate: "Do users say 'I'm using X'?" If NO → skip to Step 3 (System)._
_Having visible UI effects does not make something a Component._

_Product-specific classification gates go here after taxonomy discovery._

### Universal Gates (continued)

**Step 3: Is this invisible infrastructure?**
- Mechanism/rule → System

**Step 4: Is this an AI team member?**
- The agent itself → Agent
- The agent's implementation → Prompt

**Step 5: Is this temporal?**
- Past insight → Learning
- Past choice → Decision
- Future vision → Future

**Step 6: Is this about shipping?**
- Shippable scope → Initiative
- Version marker → Release

---

## Classification Guardrails

### Universal Guardrails

Apply these checks IN ORDER when classifying. Each gate eliminates common errors.

**Gate 1 — Interaction Test (apply FIRST):**
"Do users consciously invoke or say 'I'm using X'?" If NO → System, regardless of visible UI effects.

**Gate 2 — Component Litmus Test:**
Can you point at ONE specific, discrete widget on screen? If not, it's NOT a Component-type.

**Gate 3 — Action-words signal Capability-type:**
Verbs and process-words (filtering, navigating, planning, reviewing) → action/workflow type, not widget type.

### Product-Specific Guardrails

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

### Common Misclassifications

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

---

## Classification Examples

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

---

## Language Signals

### Universal Signals

| Signal | Suggests |
|--------|----------|
| "mechanism," "manages state," "processes" | System |
| "specification," "must conform," "defines values" | Standard |
| "principle," "guides," "judgment-based" | Principle |
| "AI agent," "team member," "advisor" | Agent |
| "system prompt," "prompt implementation" | Prompt |

### Product-Specific Signals

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

---

## Misclassification Signals

### Universal Signals

| Signal | Suggests |
|--------|----------|
| WHAT says "mechanism," "manages state," "processes" | System |
| WHAT says "specification," "defines values," "must conform" | Standard |
| WHAT says "principle," "guides," "judgment-based" | Principle |
| Card has no state but constrains other cards | Standard |
| Agent card has no Prompt card | Prompt missing |
| HOW has behavioral types table | Needs decomposition |

### Product-Specific Signals

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

---

## Templates

### Strategy

```markdown
# Strategy - [Name]

## WHAT: The Strategy
[One sentence articulating the bet. What we believe will work.]

## WHERE: Ecosystem
- Principles:
  - [[Principle]] — [what judgment guidance this generates]
- Standards:
  - [[Standard]] — [what specifications this generates]
- Product:
  - [[Type - X]] — [what product areas embody this]
- Tensions:
  - [[Strategy]] — [what other strategies this trades off against]

## WHY: Belief
[2-4 sentences. The reasoning behind this bet. What evidence or intuition supports it. What user truth it's grounded in.]

## WHEN: Timeline
- Status: experimental | evolving | stable
- Since: [version or date]
- Last validated: [date]

## HOW: Application

### What Following This Looks Like
[2-3 concrete examples. Observable design choices, agent behaviors, UI patterns.]

### What Violating This Looks Like
[2-3 concrete anti-patterns. Wrong implementations.]

### Decision Heuristic
[When facing a tradeoff, how does this strategy guide the choice?]
```

---

### Principle

```markdown
# Principle - [Name]

## WHAT: The Principle
[One sentence. A judgment-based rule that guides decisions.]

## WHERE: Ecosystem
- Strategy:
  - [[Strategy]] — [what bet this serves]
- Standards:
  - [[Standard]] — [what specifications make this testable]
- Governs:
  - [[Type - X]] — [what product areas this applies to]
- Related:
  - [[Principle]] — [complementary or contrasting principles]

## WHY: Belief
[2-4 sentences. Why we believe this. What goes wrong without it. What user truth grounds it.]

## WHEN: Timeline
- Status: experimental | evolving | stable
- Since: [version or date]
- Derived from: [[Decision]] — [if born from specific choice]

## HOW: Application

### What Following This Looks Like
[2-3 concrete examples. Observable design choices, agent behaviors, UI patterns.]

### What Violating This Looks Like
[2-3 concrete anti-patterns. What wrong looks like.]

### Tensions
[What other principles this trades off against. When to favor this vs. that.]

### Test
[A question to ask when evaluating whether a design follows this principle.]
```

---

### Standard

```markdown
# Standard - [Name]

## WHAT: Definition
[What this specifies. What it constrains. What conformance means. 2-3 sentences.]

## WHERE: Ecosystem
- Implements:
  - [[Principle]] — [what judgment guidance this makes concrete]
- Conforming:
  - [[Type - X]] — [must follow this]
- Related:
  - [[Standard]] — [complementary or overlapping standards]

## WHY: Rationale
- Principle: [[Principle]] — [what guidance this makes testable]
- Driver: [What breaks without this spec. Concrete failure mode.]

## WHEN: Timeline
- Status: draft | active | deprecated
- Since: [version or date]
- Last updated: [date]

## HOW: Specification

### Rules
[The spec. Concrete values, thresholds, behaviors. Tables preferred.]

| Property | Value | Notes |
|----------|-------|-------|
| [X] | [Y] | [Z] |

### Examples
[2+ concrete correct implementations.]

**Example 1:** [Scenario]
- Input: [X]
- Correct output: [Y]

**Example 2:** [Scenario]
- Input: [X]
- Correct output: [Y]

### Anti-Examples
[2+ concrete violations. What wrong looks like.]

**Violation 1:** [Scenario]
- What happened: [X]
- Why it's wrong: [Y]
- Correct alternative: [Z]

**Violation 2:** [Scenario]
- What happened: [X]
- Why it's wrong: [Y]
- Correct alternative: [Z]

### Conformance Test
[How to verify a card/implementation follows this standard.]
```

---

### System

```markdown
# System - [Name]

## WHAT: Definition
[What mechanism. What state it manages. What it governs invisibly. 2-4 sentences, standalone.]

## WHERE: Scope
- Product:
  - [[Type - X]] — [where this operates / where effects are visible]
- Capabilities:
  - [[Type - X]] — [what actions invoke this]
- Data:
  - [[Type - X]] — [what data entities this manages]
- Implements:
  - [[Standard]] — [what spec it follows]

## WHY: Purpose
- Strategy: [[Strategy]] — [what bet this serves]
- Principle: [[Principle]] — [what guidance shapes it]
- Gap: [What breaks without this. What problem it solves invisibly.]

## WHEN: Timeline
- Status: core | evolving | proposed
- Since: [version or date]

## HOW: Mechanics

### State
[What state this system manages. What values it tracks.]

### Transitions
[How state changes. Table preferred.]

| From | Trigger | To | Side Effects |
|------|---------|-----|--------------|
| [X] | [Y] | [Z] | [W] |

### Processing Logic
[Rules, calculations, algorithms. Pseudocode if helpful.]

### Examples
[2+ concrete scenarios of system behavior.]

**Example 1:** [Scenario]
- Initial state: [X]
- Trigger: [Y]
- New state: [Z]
- User observes: [W]

**Example 2:** [Scenario]
- Initial state: [X]
- Trigger: [Y]
- New state: [Z]
- User observes: [W]

### Anti-Examples
[What this system should NOT do. Boundary conditions. Edge cases it explicitly ignores.]
```

---

### Agent

```markdown
# Agent - [Name]

## WHAT: Identity
[Role/title. One-sentence personality. Core responsibility. 2-4 sentences, standalone.]

## WHERE: Presence
- Home: [primary location or context]
- Manages:
  - [[Type - X]] — [what they own]
- Coordinates with:
  - [[Agent]] — [handoff relationships]

## WHY: Rationale
- Strategy: [[Strategy]] — [what bet this serves]
- Principle: [[Principle]] — [what guidance shapes behavior]
- Gap: [What breaks without this agent. What need they fill.]

## WHEN: Timeline
- Status: core | evolving | proposed
- Since: [version or date]

## HOW: Behavior

### Responsibilities
[What they do. 3-7 bullet points.]

### Voice
[Personality. Tone. Signature phrases. 2-3 sentences.]

### Boundaries
[What they do NOT do. When they hand off.]

### Knowledge Domains
[What they know/track. What they learn over time.]

### Examples
[2+ concrete interaction scenarios.]

**Example 1:** [Scenario]
- User says: [X]
- Agent does: [Y]
- Outcome: [Z]

**Example 2:** [Scenario]
- User says: [X]
- Agent does: [Y]
- Outcome: [Z]

### Anti-Examples
[What this agent should NOT do. Scope violations.]

## PROMPT
- Implementation: [[Prompt - [Name]]]
- Context required: [What must be injected at runtime]
```

---

### Prompt

```markdown
# Prompt - [Name]

## WHAT: Purpose
[What this prompt accomplishes. What agent it implements. 1-2 sentences.]

## WHERE: Parent
- Agent: [[Agent]] — [the agent this implements]
- Conforms to:
  - [[Standard]] — [prompt engineering standards if any]

## WHEN: Version
- Current: [version number]
- Status: draft | testing | production | deprecated
- Last updated: [date]

### Changelog
| Version | Date | Changes |
|---------|------|---------|
| [X] | [Y] | [Z] |

## HOW: Implementation

### Context Required
[What must be injected at runtime.]

### The Prompt

\`\`\`
[The actual system prompt text]
\`\`\`

### Examples
[2+ example interactions showing prompt behavior.]

### Anti-Examples
[Responses this prompt should NOT produce.]
```

---

### Decision

```markdown
# Decision - [Name]

## WHAT: The Choice
[What was decided. One sentence.]

## WHERE: Ecosystem
- Affects:
  - [[Type - X]] — [how it shapes this]
- Governed by:
  - [[Principle]] — [what guided the choice]
  - [[Strategy]] — [what bet it serves]
- Generates:
  - [[Principle]] — [if this decision became a principle]
  - [[Standard]] — [if this decision became a standard]

## WHY: Rationale

### Context
[What situation prompted this decision. 2-3 sentences.]

### Options Considered
**Option A: [Name]**
- Description: [X]
- Pros: [Y]
- Cons: [Z]
- Rejected because: [W]

**Option B: [Name]** ← CHOSEN
- Description: [X]
- Pros: [Y]
- Cons: [Z]
- Chosen because: [W]

### Reversibility
[Is this reversible? What would trigger reconsideration?]

## WHEN: Timeline
- Decided: [date]
- Revisit trigger: [what would cause reconsideration]

## HOW: Implementation
[How this decision is implemented. What changed.]

### Examples
[2+ concrete examples of this decision in action.]
```

---

### Learning

```markdown
# Learning - [Name]

## WHAT: The Insight
[Generalized lesson. One sentence. What we now know.]

## WHERE: Applies To
- Informs:
  - [[Type - X]] — [how this shapes it]
- Became:
  - [[Principle]] — [if insight became principle]
  - [[Standard]] — [if insight became standard]
  - [[Decision]] — [if insight drove decision]

## WHY: Significance
[Why this insight matters. What goes wrong without it. 2-3 sentences.]

## WHEN: Origin
- Discovered: [date]
- Context: [What happened. What we tried. What failed or succeeded.]

## HOW: Application

### What We Do Differently
[Concrete behavior changes.]

### Examples
[2+ concrete examples of applying this learning.]

### Anti-Examples
[What ignoring this learning looks like.]
```

---

### Initiative

```markdown
# Initiative - [Name]

## WHAT: The Goal
[What this achieves. What bet it represents. 2-3 sentences.]

## WHERE: The Cast
- Product:
  - [[Type - X]] — [launched/changed]
- Systems:
  - [[System]] — [launched/changed]
- Agents:
  - [[Agent]] — [launched/changed]

## WHY: The Driver
- Strategy: [[Strategy]] — [alignment]
- Principle: [[Principle]] — [guidance]
- Trigger: [What prompted this initiative.]

## WHEN: The Arc
- Started: [date]
- Target: [date or version]
- Status: proposed | in-progress | shipped | paused | cancelled
- Releases:
  - [[Release]] — [milestone]

## HOW: Approach

### Scope
[What's in scope. What's explicitly out of scope.]

### Phases
1. [Phase]
2. [Phase]

### Success Criteria
[How we know it worked.]

## Learnings
- [[Learning]] — [insight gained]
```

---

### Release

```markdown
# Release [Version]

## WHAT: Summary
[What shipped. One paragraph.]

## WHERE: Affected
- Product:
  - [[Type - X]] — [launched/changed]
- Systems:
  - [[System]] — [launched/changed]

## WHY: Arc
- Part of: [[Initiative]] — [what initiative this advances]

## WHEN: Timeline
- Released: [date]
- Decisions:
  - [[Decision]] — [key choices made]
- Learnings:
  - [[Learning]] — [insights gained]
```

---

### Future

```markdown
# Future - [Name]

## WHAT: Vision
[What it will do. What it enables. 2-4 sentences.]

## WHERE: Position
- Product:
  - [[Type - X]] — [where this lives]
- Builds on:
  - [[Type - X]] — [foundation]
- Blocked by:
  - [dependency or constraint]
- Enables:
  - [[Future]] — [what this unlocks]

## WHY: Driver
- Strategy: [[Strategy]] — [what bet this serves]
- Principle: [[Principle]] — [what guidance shapes it]
- Trigger: [What's prompting this.]

## WHEN: Timeline
- Target: [version or quarter]
- Confidence: exploratory | low | medium | high
- Status: proposed | approved | in-progress | blocked | cancelled | shipped

## HOW: Approach

### Design Options
[If multiple approaches are being considered.]

### Open Questions
[What's unresolved.]

### Success Criteria
[How we'll know it worked.]
```

---

### Product-Specific Type Templates

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

_Templates for product-specific WHAT-layer types will be added here after taxonomy discovery._

---

## Type-Specific Rubric Notes

### Universal Types

**Standards:**
- WHERE uses "Conforming:" to list constrained product-layer cards
- WHY must link to Principle (Standards implement Principles)
- HOW contains the specification itself (values, rules, thresholds)
- Must have Anti-Examples section (what violation looks like)

**Principles:**
- WHERE uses "Standards:" to link to implementing Standards
- WHY focuses on belief/evidence, not driver
- Must have "What Violating This Looks Like" section

**Strategies:**
- Must have "What Violating This Looks Like" section
- WHY must have reasoning, not just assertion

**Agents:**
- Must describe voice/personality, responsibilities, boundaries
- Must link to Prompt card (implementation)
- Must specify handoff relationships with other agents

**Prompts:**
- WHERE must link to parent Agent
- Must include actual prompt text
- Must have version and changelog

### Product-Specific Types

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

---

## Folder Structure

```
/rationale/
  strategies/
  principles/
  standards/

/product/
  systems/
  agents/
  prompts/
  [product-specific type folders — populated after taxonomy discovery]

/skills/
  conan/
  bob/

/sources/
  [organized source material]

reference.md
CONTRIBUTING.md
CONVENTIONS.md
index.md
```

---

## Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Strategy | Strategy - [Name] | Strategy - [Name] |
| Principle | Principle - [Name] | Principle - [Name] |
| Standard | Standard - [Name] | Standard - [Name] |
| System | System - [Name] | System - [Name] |
| Agent | Agent - [Name] | Agent - Conan |
| Prompt | Prompt - [Name] | Prompt - Conan |
| Decision | Decision - [Choice] | Decision - [Choice] |
| Learning | Learning - [Insight] | Learning - [Insight] |
| Initiative | Initiative - [Name] | Initiative - [Name] |
| Release | Release [Version] | Release 1.0 |
| Future | Future - [Name] | Future - [Name] |

Product-specific type naming conventions: _populated after taxonomy discovery._

---

## Conformance Obligations

### Universal Rule

Cards touching governed domains must link to constraining Standards.

### When creating a Standard:
- Must implement ≥1 Principle
- Must have ≥1 conforming card
- Audit existing cards for conformance gaps

### Product-Specific Conformance

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

_Conformance obligations table will be added after taxonomy discovery identifies which Standards constrain which product types._

---

## Containment Relationships

### Universal

| Type | Must Link To | Relationship |
|------|--------------|--------------|
| Prompt | Agent | What it implements |

### Product-Specific

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

---

## Build Order

1. Standards first (they constrain everything)
2. Strategy/Principles next (WHY upstream)
3. Systems next (cross-cutting mechanisms)
4. _Product-layer types in dependency order — populated after taxonomy discovery_
5. Agents + Prompts last

---

## Link Quality Rules

Every link must have context. No naked links.

**Wrong:**
```
- [[Data Store]]
```

**Right:**
```
- [[System - Data Store]] — provides candidate items for filtering
```

---

## Noun Palette

<!-- PLACEHOLDER: Run Conan job-taxonomy to populate -->

_Selected palette: **[TBD]**_

Available palettes:

| Palette | Best For | Sample Nouns |
|---------|----------|-------------|
| **Metroidvania** | Exploration, progression, gated discovery | Region, Area, Room, Hub, Gate, Ability, Item, Map |
| **RPG** | Character advancement, quest systems | Quest, Achievement, Level, Class, Skill, Trait |
| **Architecture** | Structured organization, blueprints | Building, Floor, Wing, Room, Section, Component |
| **Library** | Classical information organization | Shelf, Section, Catalog, Index, Reference, Entry |
| **Taxonomy** | Biological classification | Kingdom, Phylum, Class, Order, Family, Genus, Species |

---

## Sources

### Source Material

Located in `content/sources/`:

| File | Contents |
|------|----------|
| design-bible.md | Comprehensive game design document |
| quest-library.md | 144 quests across 8 domains |
| launch-sequence.md | Parent-facing operations manual |
| foraging-spec.md | Foraging mini-game specification |

### Code

Located in `src/`:

| File | Extract |
|------|---------|
| App.jsx | View routing, component structure, auth flow |
| components/ | UI components, screens |
| game-logic.js | Pure game calculations (XP, levels, momentum, foraging) |
| constants.js | Game data constants (materials, levels, gear, quest items) |
| quest-data.js | 144 quests across 8 domains |
| storage.js | Dual-backend storage abstraction |
| supabase-schema.sql | Database schema |

**Standard extraction signal:** Tables of values, testable rules, specs multiple cards must conform to → extract as Standard.
