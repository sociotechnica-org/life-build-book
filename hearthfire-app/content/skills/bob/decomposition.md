# Decomposition

How to extract cards from source material. Use when Conan's inventory is sparse or when working directly from SOT.

## What Becomes a Card

### Step 1: Is this about WHY we build?
- Guiding philosophy (a bet) → **Strategy**
- Judgment guidance (a rule of thumb) → **Principle**
- Testable spec (concrete rules, values, thresholds) → **Standard**

### Step 2: Is this about WHAT exists that users interact with?

Consult reference.md → Decision Tree for this product's type-specific classification gates.

Key universal questions to ask:
- **Navigate TO it?** → Top-level navigable type or nested type (see reference.md)
- **Persistent across all top-level contexts?** → Persistent type (see reference.md)
- **Interact WITHIN a context?** → Layout, component, content, or action type (see reference.md)
- **Core data entity?** → Data/model type (see reference.md)

### Step 3: Is this invisible infrastructure?
- Mechanism with state, processes inputs → **System**

### Step 4: Is this an AI team member?
- The agent itself → **Agent**
- The agent's implementation → **Prompt**

### Step 5: Is this temporal?
- Past insight → **Learning**
- Past choice → **Decision**
- Future vision → **Future**

### Common Confusions

| Question | Answer A | Answer B |
|----------|----------|----------|
| Navigate TO it, or interact WITHIN it? | Navigation type | Interaction type |
| Users say "I'm in X" or "I'm using X"? | Navigation type | Interaction type |
| Has runtime state? Processes inputs? | System | Standard |
| Content users create, or spatial fabric? | Content type | Layout type |
| Core data entity, or content object? | Data/model type | Content type |
| Action/workflow, or spatial canvas? | Action type | Layout type |

Consult reference.md for this product's specific type names.

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
| Changes require code? | Yes | No |

Examples (product-specific — consult reference.md for this product's):
- Auth service (manages session state) → System
- Scoring formula (defines calculation rules) → Standard
- Color palette (defines design values) → Standard
- Sync engine (manages data state) → System

---

## Reading Source Material

### Structure Signals

| Source Pattern | Likely Card Type |
|----------------|------------------|
| Top-level view/area users navigate to | Navigation type (see reference.md) |
| Named space nested within another | Nested type (see reference.md) |
| Always-visible, cross-context element | Persistent type (see reference.md) |
| Spatial canvas, grid, board layout | Layout type (see reference.md) |
| Specific UI widget, button, indicator | Component type (see reference.md) |
| Content object users create/edit | Content type (see reference.md) |
| Action, workflow, process users perform | Action type (see reference.md) |
| Core data entity | Data/model type (see reference.md) |
| "The X System" or "X Architecture" | System |
| Mentioned across multiple sections | System |
| Table of values, thresholds, rules | Standard |
| "Must conform to" or "follows spec" | Standard reference |
| AI personality, team member | Agent |

### Extraction Pass

1. **First read:** Note every named thing. Don't judge.
2. **Second read:** Mark things users navigate to (navigation-type candidates).
3. **Third read:** Mark things within contexts (component/content/action candidates).
4. **Fourth read:** Mark cross-cutting mechanisms (system candidates).
5. **Fifth read:** Mark specification content (standard candidates).
6. **Compare to inventory:** Reconcile with Conan's list.

### Standard Extraction Signals

Source material contains:
- Hex codes, RGB values, specific colors
- Threshold numbers, score formulas
- State definitions with specific values
- Rules with testable criteria
- "Must be" / "should always" language

→ Extract as Standard, don't embed in product-layer cards.

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
- "Type - Settings" with spokes for specific workflows
- Hub links to spokes, spokes link back

**Separate cards:** Distinct concepts that happen to relate.
- "Type - Minimal Mode" and "Type - Target Mode"
- Each stands alone

### Word Count as Signal

700+ words → review for atomicity violation. It's a trigger for inspection, not a splitting rule.

---

## Working with Companion Docs

Source material may include design documents, specs, and implementation code.

1. Start with design docs (overview, rationale)
2. Pull detail from specs or code (depth, behavior)
3. Card synthesizes both — don't just copy

Design docs often have better strategic context. Code and specs often have better behavioral detail.

---

## Discovered Cards

Found something inventory missed?

**Do:**
- Create the card
- Note as discovered: "Added: Type - X (not in inventory, found in source section Y)"
- Flag for human to confirm

**Don't:**
- Skip because not in inventory
- Assume Conan was wrong (flag and move on)
