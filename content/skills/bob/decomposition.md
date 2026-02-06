# Decomposition

How to extract cards from source material. Use when Conan's inventory is sparse or when working directly from SOT.

## What Becomes a Card

### Feature
- Named mechanic users interact with ("The Table", "Bronze Mode Settings")
- Has behavioral specification
- SOT devotes a subsection or multiple paragraphs
- Users would recognize it as "a thing"

### System
- Infrastructure multiple features depend on
- Cross-cutting mechanism spanning zones
- Has runtime state, processes inputs
- Features reference it but users don't interact directly

### Standard
- Specification that constrains implementations
- Tables of values (colors, thresholds, formulas)
- Rules multiple features must follow
- No runtime state — things conform to it
- Builder reads this to know what to produce

### Component
- Implementation detail inside one feature
- UI element, algorithm, data structure
- Wouldn't make sense standalone
- Only referenced from parent feature

### Principle
- Judgment-based guidance
- "Directors should recognize elements instantly"
- Testable through evaluation, not measurement
- Standards make Principles concrete

### Could Go Either Way

Flag for human judgment:
- Mechanisms both user-facing AND infrastructure
- Concepts spanning zones with direct user interaction

**When unsure:** Create the card, flag it, keep moving.

---

## System vs Standard

Most common confusion. Ask:

| Question | System | Standard |
|----------|--------|----------|
| Has runtime state? | Yes | No |
| Processes inputs? | Yes | No |
| Things conform to it? | Sometimes | Always |
| Builder reads to implement? | Rarely | Always |

Examples:
- Processing Layer (computes calibration) → System
- Priority Score (defines formula) → Standard
- Visual Language (defines colors) → Standard
- Weekly Priority (manages state) → System

---

## Reading the SOT

### Structure Signals

| SOT Pattern | Likely Card Type |
|-------------|------------------|
| Section heading with behavior description | Feature |
| Subsection under a feature | Spoke or Component |
| "The X System" or "X Architecture" | System |
| Mentioned in multiple feature sections | System |
| Table of values, thresholds, rules | Standard |
| "Must conform to" or "follows spec" | Standard reference |
| UI element with specific behavior | Feature or Component |

### Extraction Pass

1. **First read:** Note every named thing. Don't judge.
2. **Second read:** Mark what has behavior (feature candidates).
3. **Third read:** Mark what's referenced by multiple features (system candidates).
4. **Fourth read:** Mark specification content (standard candidates).
5. **Compare to inventory:** Reconcile with Conan's list.

### Standard Extraction Signals

Source material contains:
- Hex codes, RGB values, specific colors
- Threshold numbers, score formulas
- State definitions with specific values
- Rules with testable criteria
- "Must be" / "should always" language

→ Extract as Standard, don't embed in Features.

---

## Atomicity

One card answers ONE complete question.

### Split When
- Card documents multiple concepts agent might need independently
- Removing a section still leaves a complete, useful card
- Different tasks would require different portions

### Don't Split When
- One concept with multiple aspects (use hub/spoke)
- Related information agent would always need together

### Hub/Spoke vs Separate Cards

**Hub/Spoke:** One concept, multiple aspects.
- "Feature - Bronze Mode" with spokes for specific workflows
- Hub links to spokes, spokes link back

**Separate cards:** Distinct concepts that happen to relate.
- "Component - Minimal Mode" and "Component - Target Mode"
- Each stands alone

### Word Count as Signal

700+ words → review for atomicity violation. It's a trigger for inspection, not a splitting rule.

---

## Working with Companion Docs

SOT references companion docs for depth.

1. Start with SOT section (overview)
2. Pull detail from companion doc (depth)
3. Card synthesizes both — don't just copy

Companion docs often have better behavioral specs. SOT often has better strategic context.

---

## Discovered Cards

Found something inventory missed?

**Do:**
- Create the card
- Note as discovered: "Added: Feature - X (not in inventory, found in SOT 2.3)"
- Flag for human to confirm

**Don't:**
- Skip because not in inventory
- Assume Conan was wrong (flag and move on)
