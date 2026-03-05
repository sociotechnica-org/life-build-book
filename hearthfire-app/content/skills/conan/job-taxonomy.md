# Job T: Taxonomy Discovery

**Purpose:** Derive product-specific types from source material. Establish the WHAT-layer vocabulary for this product's context library.

**Trigger:** New product library setup, or major product pivot requiring reclassification.

Taxonomy Discovery gates everything else. Without types, there is no inventory, no grading, no library.

## Procedure

### Step 1: Read source material

Read all documents in `content/sources/`. Absorb — don't extract yet.

### Step 2: Extract entities

List every noun that appears repeatedly as a distinct concept. Group related nouns into clusters.

For each cluster, note:
- How many times does this noun or synonyms appear?
- Is it something users interact with directly?
- Is it something builders need to implement?
- Is it infrastructure users never see?

### Step 3: Confirm WHY layer

The WHY layer is universal. No changes needed:

| Type | Definition |
|------|-----------|
| Strategy | Guiding philosophy — a bet |
| Principle | Judgment guidance — a rule of thumb |
| Standard | Testable specification — concrete rules |

Verify source material contains content for each. Flag gaps.

### Step 4: Select noun palette

Present the human with themed vocabulary options. Each palette provides a consistent naming vocabulary for the WHAT layer.

| Palette | Best For | Sample Nouns |
|---------|----------|-------------|
| **Metroidvania** | Exploration, progression, gated discovery | Region, Area, Room, Hub, Gate, Ability, Item, Map, Corridor, Boss, Secret |
| **RPG** | Character advancement, quest systems | Quest, Achievement, Level, Class, Skill, Trait, Inventory, Loot |
| **Architecture** | Structured organization, blueprints | Building, Floor, Wing, Room, Section, Component, Foundation, Blueprint |
| **Library** | Classical information organization | Shelf, Section, Catalog, Index, Reference, Entry, Archive, Collection |
| **Taxonomy** | Biological classification | Kingdom, Phylum, Class, Order, Family, Genus, Species |
| **Custom** | When no palette fits | Human proposes vocabulary |

**Present:** "Which palette best fits how your team talks about this product? You can select one, mix palettes, or propose custom vocabulary."

Record selected palette.

### Step 5: Map entities to types

For each entity cluster from Step 2, classify using these universal questions:

**Q1: Is this about WHY?** → Strategy / Principle / Standard (already handled in Step 3)

**Q2: Do users consciously interact with this?**
  - **Q2a: Do users navigate TO it?** → Top-level navigable context. Name using palette.
  - **Q2b: Does it nest inside another context?** → Nested context. Name using palette.
  - **Q2c: Does it persist across all top-level contexts?** → Persistent cross-context element. Name using palette.
  - **Q2d: Do users interact WITHIN a context?**
    - Spatial arrangement / visual fabric → Layout type. Name using palette.
    - Specific widget you can point at → Component type. Name using palette.
    - Content object users create/edit → Content type. Name using palette.
    - Action/workflow users perform → Action type. Name using palette.
  - **Q2e: Core data entity?** → Data type. Name using palette.

**Q3: Invisible infrastructure?** → System (universal, no palette needed)

**Q4: AI team member?** → Agent / Prompt (universal)

**Q5: Temporal?** → Learning / Decision / Future (universal)

**Q6: About shipping?** → Initiative / Release (universal)

**Q7: Does a product-specific category exist that doesn't fit the above?**
This is where the source material reveals types unique to this product. Examples:
- Game with distinct mechanic rules → "Mechanic" type
- Content organized by skill domains → "Domain" type
- Marketplace with distinct listing types → "Listing" type

For each proposed product-specific type:
- Name it (using palette vocabulary where possible)
- Define it in one sentence
- List 3+ examples from source material
- Explain why no existing universal type covers it

### Step 6: Test classification

For each proposed type, verify:

**Distinctness test:** Can you distinguish it from every other type with a single yes/no question?
- If two types can't be distinguished → merge or refine the gate question

**Completeness test:** Does the decision tree produce a single unambiguous type for EVERY entity from Step 2?
- If an entity falls through all gates → missing type or ambiguous gate

**Population test:** Are there at least 3 instances of this type in the source material?
- If fewer than 3 → consider merging into a related type

**Confusion test:** For the 3 most likely misclassification pairs, write the distinguishing question:
- "Is this [Type A] or [Type B]?" → "[The distinguishing question]"

### Step 7: Propose decision tree

Write the ordered classification gates using this product's language.

Format:
```
Step 1: Is this about WHY?
  [unchanged — Strategy / Principle / Standard]

Step 2: Do users consciously interact?
  Gate: "Do users say 'I'm using X'?" If NO → Step 3.
  - [product-specific navigation question] → [Type name]
  - [product-specific nesting question] → [Type name]
  - [product-specific persistence question] → [Type name]
  - [product-specific interaction questions] → [Type names]

Step 3: [product-specific infrastructure gate] → System

Step 4: AI team member? → Agent / Prompt

Step 5: [product-specific additional gates if needed]

Step 6: Temporal? → Learning / Decision / Future

Step 7: Shipping? → Initiative / Release
```

### Step 8: Propose folder structure

One subdirectory per WHAT-layer type under `product/`:

```
product/
  [type-plural]/    ← one folder per product-layer type
  systems/          ← universal
  agents/           ← universal
  prompts/          ← universal
```

### Step 9: Propose conformance obligations

Which Standards constrain which product types?

| If the card... | Must link to... |
|----------------|-----------------|
| [governed domain] | [Standard name] |

These are product-specific. Derive from:
- Source material that mentions rules, constraints, specifications
- Standard candidates identified during Source Assessment
- Patterns where multiple product-layer cards reference the same rule

### Step 10: Present to human

Deliver the taxonomy proposal:

```
# Taxonomy Proposal: [Product Name]

Palette: [selected]
Date: [date]

## Type Taxonomy

### WHY Layer (universal)
Strategy, Principle, Standard

### WHAT Layer (product-specific)

| Type | Definition | Examples | Folder |
|------|-----------|----------|--------|
| [Name] | [1 sentence] | [3+ examples] | product/[plural]/ |

### Infrastructure (universal)
System, Agent, Prompt

### Temporal (universal)
Learning, Decision, Future

### Shipping (universal)
Initiative, Release

## Decision Tree
[Full tree from Step 7]

## Classification Guardrails

Apply IN ORDER:
1. [Gate] — catches [error pattern]
2. [Gate] — catches [error pattern]

| Often Misclassified As | Actually | Example | Why |
|------------------------|----------|---------|-----|

## Conformance Obligations

| If the card... | Must link to... |
|----------------|-----------------|

## Containment Relationships

| Type | Must Link To | Relationship |
|------|--------------|-------------|

## Language Signals

| Signal | Suggests |
|--------|----------|

## Misclassification Signals

| Signal | Suggests |
|--------|----------|

## Build Order

[Dependency-ordered sequence for card creation]

## Folder Structure

[Complete directory tree]

---

**HUMAN JUDGMENT NEEDED:** [any unresolved classification questions]
```

Human approves, iterates, or overrides. On approval → populate reference.md WHAT-layer sections and create product/ subdirectories.

## Principles

- Source material drives types, not convention
- The palette provides vocabulary, not structure — don't force entities into palette nouns that don't fit
- 3-instance minimum prevents over-typing
- Every type must be distinguishable with a yes/no question
- Product-specific types are expected and good — don't force everything into universal types
- When in doubt, flag for human — taxonomy is foundational and expensive to change later
