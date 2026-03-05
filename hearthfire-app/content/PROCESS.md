# Building a Context Library

A guide for anyone — human or AI — setting up and maintaining a context library for a software product.

---

## Part 1: What Is a Context Library?

### The Problem

AI builder agents are technically excellent but contextually blind. Give an agent a task and it will produce clean, working code — that completely misses the point. It builds the login page with the wrong brand colors. It implements sorting by alphabetical when the product sorts by priority score. It names things with the wrong vocabulary.

This is the "Angry Birds problem." An agent told to "build the bird launcher" produces a flawless catapult — painted blue, when the brand requires red. The code is correct. The product is wrong.

Humans avoid this because they carry implicit context: design decisions, naming conventions, strategic bets, past mistakes, the reason behind the weird exception in the billing module. Six months on a team and you just *know* these things.

Agents don't have six months. They have the current conversation.

### The Solution

A context library is a structured documentation system that captures the implicit knowledge humans accumulate over time — and makes it retrievable by AI agents at task time.

It works through **card constellations**: when an agent starts a task, it pulls the relevant cards from the library and assembles them into context. A card about the component, its parent screen, the standard it must conform to, the strategy behind its existence, the principle guiding its interaction pattern. Together, these cards give the agent the same situational awareness a tenured team member has.

### What a Card Is

A card is an atomic note that answers ONE complete question about your product. Every card has 5 mandatory sections:

| Section | What It Captures | Why It Matters |
|---------|-----------------|----------------|
| **WHAT** | Standalone definition — understand without the title | Agents need to know what this IS |
| **WHERE** | Ecosystem links — what this connects to, depends on, constrains | Agents need to navigate the graph |
| **WHY** | Strategy, principle, driver — why this exists | Agents need to make aligned micro-decisions |
| **WHEN** | Temporal status — is this current, planned, deprecated? | Agents need to know what's real |
| **HOW** | Implementation detail, examples, anti-examples | Agents need to know what to build |

Cards are connected by contextualized links — never naked references. Every `[[Link]]` gets a phrase explaining the relationship. The library is a graph, not a filing cabinet.

### The Two Layers

Every context library has two layers:

**Rationale (WHY)** — why we build what we build:
- **Strategies** — the bets we're making ("gamification drives sustained engagement")
- **Principles** — judgment-based rules ("reward real-world action, not app metrics")
- **Standards** — testable specifications ("XP formula: base 10 + per-item bonus")

**Product (WHAT)** — what gets built:
- Product-specific types that describe your app's components, screens, mechanics, data models, workflows — whatever nouns fit YOUR product
- **Systems** — invisible infrastructure (auth, storage, sync)
- **Agents** — AI team members and their implementations

Standards sit at the bridge between layers. They're rationale (they express WHY constraints) but they constrain the product layer (builders read them to know what to produce). This bridge is where the most value lives.

---

## Part 2: What Feeds the Library

A context library doesn't emerge from nothing. It's built from source material — documents, code, and conversations that already contain your product's implicit knowledge, just not in a structured form.

### Source Material Types

| Source Type | What to Extract | Where It Lives |
|-------------|----------------|----------------|
| **Design documents** | Strategy rationale, user scenarios, edge cases, the "why" behind decisions | Google Docs, Notion, Confluence, markdown files, PDFs |
| **Specifications** | Testable rules, formulas, thresholds, state definitions, value tables | Spec docs, PRDs, design system docs |
| **Codebases** | Actual implementations, naming conventions, architecture decisions, data models | Source code, schema files, config |
| **Brand/style guides** | Visual language, tone, naming vocabulary, what's allowed and forbidden | Design system, brand guidelines |
| **Decision records** | What was decided, what was rejected, why — the alternatives matter as much as the choice | ADRs, meeting notes, Slack threads |
| **User research** | Who the users are, what they struggle with, what mental models they use | Research reports, personas, interview notes |
| **Roadmaps** | What's planned, what's deferred, what's been cut — temporal context | Planning docs, backlogs |
| **Past mistakes** | What went wrong, what was learned, what to never do again | Retros, post-mortems, incident reports |

### What to Look For

When scanning source material, watch for these signals:

**Standard candidates** (high value — extract these first):
- Tables of values (colors, thresholds, formulas, scores)
- "Must be" / "should always" / "never" language
- Rules that multiple features reference
- Testable constraints

**Strategy/Principle candidates:**
- "We believe..." / "Our bet is..." / "The philosophy behind..."
- Tensions between competing goals
- "Why not X?" explanations

**Anti-pattern content** (often the most valuable):
- "Don't confuse X with Y"
- Past mistakes and what was learned
- Explicit boundaries and constraints
- "This is NOT for..."

### The Source Gap Problem

Source material is never complete. Common gaps:

| Gap | Signal | Impact |
|-----|--------|--------|
| **WHY gap** | Product described but rationale missing | Cards will have hollow WHY sections — agents make misaligned decisions |
| **HOW gap** | What it does but not how it works | Cards won't have enough detail for builders |
| **Constraint gap** | No boundaries or anti-patterns | Agents will build technically correct but subtly wrong things |
| **Standard gap** | Spec content buried in prose, not extracted | Multiple cards will implement the same rule differently |
| **Decision gap** | Choices made but alternatives not documented | Future agents will re-litigate settled decisions |

Identifying these gaps BEFORE building cards prevents cascading weakness. A hollow Strategy note weakens every card that links to it.

---

## Part 3: The Team

Three roles. Clear boundaries.

### The Human Librarian (You)

You hold the authority. You initiate every step, approve every output, and make every priority decision. The agents never start work on their own.

**You do:**
- Launch agents and scope their work
- Approve taxonomy, inventory, and surgery plans
- Fill source gaps when agents identify them
- Make priority decisions (what to fix first, what to defer)
- Resolve ambiguity when agents flag `**HUMAN JUDGMENT NEEDED**`

**You don't do:**
- Grade cards (that's Conan)
- Write cards (that's Bob)
- Worry about link integrity or conformance (that's structural — the agents handle it)

### Conan (Quality Guardian)

Barbarian turned librarian. Professionally furious, deeply competent. Conan ensures the library has sufficient structural integrity for builder agents to find, assemble, and act on documentation.

**Conan does:**
- Discover product-specific types from source material
- Assess source quality before building
- Create inventories of expected cards
- Grade cards against rubrics
- Diagnose root causes when grades are low
- Recommend fixes prioritized by blast radius
- Audit typing, atomicity, and conformance
- Produce surgery plans for complex restructuring
- Assess overall library health

**Conan does NOT:**
- Write cards
- Make priority decisions
- Decide what to build or defer

### Bob (Builder)

Cheerful craftsman. No drama — read the inventory, read the source, make the cards.

**Bob does:**
- Create cards from Conan's inventory using templates and source material
- Fix cards per Conan's recommendations
- Self-check cards before handing off to Conan
- Create supporting notes (Strategy, Principle, Decision, Learning) when discovered during building

**Bob does NOT:**
- Grade cards or assess quality
- Decide what to build (follows the inventory)
- Make classification decisions (flags uncertain types for human judgment)

---

## Part 4: Choosing Your Vocabulary

### The Noun Problem

Every product has its own entities. A productivity app has workspaces, boards, and tasks. A game has levels, quests, and inventory. An e-commerce platform has listings, carts, and orders.

Your context library needs type names that fit YOUR product. Using generic names ("Component," "Feature," "Module") creates ambiguity. Using product-specific names that everyone understands creates clarity.

### Noun Palettes

A noun palette is a themed vocabulary set drawn from a familiar domain. Using a consistent palette means all type names share a metaphor — which makes them self-documenting and reduces cognitive load.

| Palette | Best For | Sample Nouns |
|---------|----------|-------------|
| **Metroidvania** | Products with exploration, progression, gated discovery | Region, Area, Room, Hub, Gate, Ability, Item, Map, Corridor |
| **RPG** | Products with character advancement, quests, leveling | Quest, Achievement, Level, Class, Skill, Trait, Inventory |
| **Architecture** | Products with structured organization, blueprints | Building, Floor, Wing, Room, Section, Component, Foundation |
| **Library** | Products with classical information organization | Shelf, Section, Catalog, Index, Reference, Entry, Archive |
| **Taxonomy** | Products with biological/scientific classification | Kingdom, Phylum, Class, Order, Family, Genus, Species |
| **Custom** | When no palette fits | You propose vocabulary |

The palette provides naming vocabulary, not structure. Don't force entities into palette nouns that don't fit — the source material drives types, the palette names them.

### Universal vs Product-Specific Types

Some types are universal — every product has them:

| Layer | Types | Why Universal |
|-------|-------|---------------|
| WHY | Strategy, Principle, Standard | Every product has bets, judgment rules, and testable specs |
| Infrastructure | System, Agent, Prompt | Every product has invisible mechanisms and AI team members |
| Temporal | Learning, Decision, Future | Every product has history and plans |
| Shipping | Initiative, Release | Every product ships things |

The WHAT layer — what users interact with — is product-specific. A life-RPG has quests and foraging mechanics. A productivity app has kanban boards and priority queues. A marketplace has listings and storefronts. These types emerge from YOUR source material.

---

## Part 5: The Process

### Step 1: Taxonomy Discovery

**Goal:** Establish what types of cards this library needs.

**You do:** Launch Conan with `job-taxonomy`. Tell him what palette you want (or ask him to propose one).

**Conan does:**
1. Reads all source material
2. Extracts every repeated entity/noun
3. Confirms the WHY layer (universal, no changes)
4. Presents noun palette options — you select
5. Maps entities to palette nouns, proposes product-specific types
6. Tests: can every type be distinguished with a yes/no question? Are there 3+ instances of each?
7. Proposes decision tree, folder structure, conformance obligations
8. Delivers a **Taxonomy Proposal**

**You do:** Approve, adjust, or iterate. On approval, reference.md gets populated.

**After this step:** The library has its vocabulary. Everyone speaks the same nouns.

---

### Step 2: Source Assessment

**Goal:** Audit whether source material is rich enough to build quality cards.

**You do:** Launch Conan with `job-source-assessment`.

**Conan does:**
1. Reads all source material + scans codebase
2. Assesses coverage across 5 dimensions (WHAT/WHY/WHERE/HOW/WHEN)
3. Flags Standard candidates and anti-pattern content
4. Identifies source gaps
5. Classifies readiness: **READY**, **GAPS**, or **BLOCKED**

**You do:** If BLOCKED, fill critical gaps before proceeding. If GAPS, acknowledge and proceed with caution.

**After this step:** You know where the source is strong and where Bob will struggle.

---

### Step 3: Inventory

**Goal:** The master list of every card that should exist.

**You do:** Launch Conan with `job-inventory`.

**Conan does:**
1. Extracts every entity that should have a card
2. Classifies each using the decision tree
3. Determines build order (Standards → WHY-layer → product-layer by dependency → Agents)
4. Delivers an **Inventory** with expected counts, classification rationale, conformance map, and build order

**You do:** Review and approve. This is Bob's work order.

**After this step:** The blueprint is set.

---

### Step 4: Build Standards

**Goal:** Standards first — they constrain everything downstream.

**You do:** Launch Bob with the Standards section of the inventory.

**Bob does:** Creates each Standard card. Extracts actual spec content (values, formulas, thresholds) into HOW. Adds anti-examples. Links to implementing Principles. Self-checks the batch.

---

### Step 5: Spot-Check Standards

**Goal:** Verify the foundation before building on it.

**You do:** Launch Conan with `job-spot-check` on the Standards.

**Conan does:** Applies abbreviated rubric. Classifies each: **PASS**, **FIX**, or **ESCALATE**. Flags cascade risk.

**You do:**
- PASS → proceed
- FIX → send Bob to fix, re-check
- ESCALATE → provide missing info

---

### Step 6: Build WHY Layer

**Goal:** Strategy and Principle cards — the rationale upstream.

**You do:** Launch Bob with the Strategy/Principles section. Then spot-check with Conan.

**Key difference from Standards:** Strategy notes need real reasoning ("because..." not "this is important") and anti-patterns ("what violating this looks like"). These are the most likely to be hollow — Conan grades them harder.

---

### Step 7: Build Product Layer

**Goal:** The main body — all product-specific type cards.

**You do:** Launch Bob with product-layer sections, in build order from the inventory.

**Bob does:** Works through cards in dependency order. Links to Standards (conformance), Strategies/Principles (WHY), and other product cards (WHERE). Creates supporting Decision/Learning notes when discovered. Self-checks the batch.

---

### Step 8: Grade

**Goal:** Score every card. Find deficiencies.

**You do:** Launch Conan with `job-grade`.

**Conan does:**
1. Grades every card section by section using rubrics (each section 20% weight)
2. Flags misclassification signals
3. Computes card scores → category scores → system score
4. Sets rage level

**You do:** Read grades. If system grade < B, proceed to the fix cycle.

---

### Step 9: Fix Cycle

**Goal:** Systematically improve the library. This is a loop.

| Phase | Agent | Job | Output |
|-------|-------|-----|--------|
| 9a. Diagnose | Conan | job-diagnose | Root causes ranked by blast radius |
| 9b. Recommend | Conan | job-recommend | Fixes in 4 tiers (high-impact/low-effort first) |
| 9c. Fix | Bob | Fix cards | Updated cards |
| 9d. Review | Conan | job-review | Re-grades, deltas, teach-backs |

**You do:** After 9b, approve which tiers to address. After 9d, decide if grades are good enough or loop back.

**Teach-backs:** For new or significantly improved cards, Conan writes 2-3 sentences summarizing his understanding and asks "Does this match your intent?" This catches misalignment early.

---

### Step 10: Audit (Periodic)

**Goal:** Verify typing correctness, atomicity, and conformance.

**When:** After major builds, when grading flagged AUDIT SIGNALs, or on a regular cadence.

**Conan does:** Walks the decision tree on every card. Checks System vs Standard. Checks conformance obligations. Checks atomicity (700+ words = signal to review). Classifies violations: SEVERE (wrong type), MODERATE (conformance/atomicity gap), LOW (minor).

**You do:** Approve reclassifications. For SEVERE violations, trigger surgery.

---

### Step 11: Surgery (As Needed)

**Goal:** Execute complex restructuring — reclassifications, splits, merges.

**Conan does:** Produces a 6-phase plan:
1. Inventory all backlinks
2. Create replacements (before deleting anything)
3. Delete old cards
4. Update all backlinks
5. Validate (search for broken links)
6. Review (re-grade affected cards)

**You do:** Approve the plan. Launch Bob to execute. Launch Conan to review.

---

### Step 12: Health Check (Periodic)

**Goal:** Is the library drifting from reality?

**When:** Quarterly, after major source updates, or "how healthy is the library?"

**Conan does:** 6-phase assessment:
1. Source alignment — cards match source material? Drift? Orphans?
2. Inventory reconciliation — expected vs actual
3. Standards health — all concrete and conforming?
4. Strategy/Principle health — all substantive with anti-patterns?
5. Product layer sampling — grade a representative sample
6. Cascade analysis — trace weak cards upstream

Classifies: **Healthy** (>80% pass, B+ average), **Needs Work** (60-80%), **Critical** (<60%).

---

## Part 6: Quick Reference

| Step | You Start | Conan Does | Bob Does | Gate |
|------|-----------|------------|----------|------|
| 1. Taxonomy | Scope + palette | Propose types | — | Your approval |
| 2. Source Assessment | Scope | Assess coverage + gaps | — | READY / GAPS / BLOCKED |
| 3. Inventory | Scope | Card list + build order | — | Your approval |
| 4. Build Standards | Launch Bob | — | Create cards | Self-check |
| 5. Spot-Check | Launch Conan | Verify Standards | — | PASS / FIX / ESCALATE |
| 6. Build WHY | Launch Bob | Spot-check after | Create cards | Self-check |
| 7. Build Product | Launch Bob | — | Create cards | Self-check |
| 8. Grade | Launch Conan | Score everything | — | System grade |
| 9. Fix Cycle | Approve scope | Diagnose → Recommend | Fix cards | Review deltas |
| 10. Audit | Periodic | Type + conformance check | — | Violation severity |
| 11. Surgery | Approve plan | 6-phase plan | Execute plan | Review |
| 12. Health Check | Periodic | 6-phase assessment | — | Health level |

---

## The Principles

**Source material drives everything.** Cards don't come from imagination — they come from documents, code, and decisions that already exist. The library structures what's already known.

**Fix the tools first, then use them to build.** Taxonomy before inventory. Standards before product-layer. Upstream before downstream. Always.

**The graph matters more than any card.** A perfect card with broken links is worse than an adequate card with strong connections. Links are load-bearing.

**WHY is the hardest section and the most valuable.** It's the most likely to be hollow, the most dependent on upstream, and the most essential for preventing misaligned decisions. Grade it harder. Trace it deeper. Fix it first.

**You are always the initiator.** Conan and Bob never start work on their own. You launch them, scope them, and approve their output. They are powerful, opinionated tools — but tools. The human librarian holds the authority. Conan holds the standards. Bob holds the hammer.
