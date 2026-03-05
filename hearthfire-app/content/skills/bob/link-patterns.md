# Link Patterns

Standard phrases for relationship context. No naked links — every `[[Note]]` gets a phrase.

---

## Conformance (Product-Layer Cards → Standards)

```markdown
- [[Standard - X]] — constrains [what aspect]
- [[Standard - X]] — specifies [colors/thresholds/states] used here
- [[Standard - X]] — defines [values/rules] this implements
```

**Examples:**
```markdown
- [[Standard - X]] — constrains [what aspect]
- [[Standard - X]] — specifies [values/rules] used here
- [[Standard - X]] — defines [classification/formula] this implements
```

---

## Conforming Elements (Standards → Product-Layer Cards)

```markdown
- [[Type - X]] — must conform to this spec
- [[Type - X]] — renders according to this standard
- [[Type - X]] — implements this specification
```

Consult reference.md for this product's type names to use in links.

---

## Dependencies (What This Needs)

```markdown
- [[X]] — provides [data/state] for [function]
- [[X]] — must exist before this can [function]
- [[X]] — supplies [input] that this [processes/displays/uses]
- [[X]] — handles [capability] that this relies on
```

**Examples:**
```markdown
- [[Data Store]] — provides candidate items for filtering
- [[Settings]] — stores selected mode between sessions
- [[Dashboard]] — displays output from this system
```

---

## Dependents (What Needs This)

```markdown
- [[X]] — uses this to [function]
- [[X]] — displays/renders output from this
- [[X]] — breaks if this [changes/disappears]
- [[X]] — built on top of this [mechanism/data]
```

**Examples:**
```markdown
- [[Data Store]] — provides candidate items for filtering
- [[Settings]] — stores selected mode between sessions
- [[Dashboard]] — displays output from this system
```

---

## Systems (Cross-Cutting Mechanisms)

```markdown
- [[X]] — foundational mechanism for [what it enables]
- [[X]] — cross-cutting system handling [function]
- [[X]] — architectural layer providing [capability]
```

**Examples:**
```markdown
- [[Data Store]] — foundational mechanism for all item ordering
- [[Sync Engine]] — cross-cutting system handling data consistency
```

---

## Containment (Parent → Child)

Every card with a containment relationship must link to its parent.

Consult reference.md → Containment Relationships for this product's type hierarchy. Use patterns:

```markdown
# Child → Parent
- [[Parent Type - X]] — parent context / where this lives

# Parent → Child
- [[Child Type - X]] — contained element / nested within
```

---

## Product-Layer Types

For product-specific link patterns, use the type name from reference.md:

```markdown
- [[Type - X]] — [relationship context]
```

Common patterns by role:
- Navigation types: "parent context", "nested within", "adjacent for [flow]"
- Layout types: "spatial canvas for", "layout handling"
- Component types: "UI element handling", "widget providing"
- Content types: "content object for", "created during"
- Action types: "action enabling", "workflow for"
- Data/model types: "core entity representing", "data model for"

---

## Agents and Prompts

```markdown
- [[Agent - X]] — AI team member handling [responsibility]
- [[Agent - X]] — coordinates with this agent on [handoff]
- [[Prompt - X]] — implementation of [[Agent - X]]
```

---

## Strategy/Principle Links (WHY Section)

```markdown
- [[Strategy - X]] — this implements [principle] by [how]
- [[Principle - X]] — guidance driving [aspect] of this card
- [[Strategy - X]] — philosophy behind [design choice]
```

**Examples:**
```markdown
- [[Strategy - Visual Work]] — this implements visibility by showing state
- [[Principle - Progressive Disclosure]] — guidance driving interaction design
```

---

## Standard → Principle Links

```markdown
- [[Principle - X]] — this standard makes [principle] testable
- [[Principle - X]] — judgment-based guidance this specification implements
```

**Examples:**
```markdown
- [[Principle - Visual Recognition]] — this standard makes instant recognition testable
```

---

## Decision Links (WHY Section)

```markdown
- [[Decision - X]] — key choice that [shaped/constrained] this card
- [[Decision - X]] — decision determining [specific aspect]
```

---

## Learning Links (WHY Section)

```markdown
- [[Learning - X]] — insight that informed [design choice]
- [[Learning - X]] — past experience shaping [aspect]
```

---

## Temporal Links (WHEN Section)

```markdown
Supersedes: [[X]] — replaced [old approach] because [reason]
Enables: [[X]] — foundation for [future capability]
Blocked by: [[X]] — can't proceed until [dependency resolved]
```

---

## Peer Relationships

```markdown
- [[X]] — complements this by [how they work together]
- [[X]] — alternative approach to [same problem]
- [[X]] — sibling card sharing [common parent/system]
```

---

## Quick Reference

| Relationship | Pattern Start |
|--------------|---------------|
| Conforms to | "constrains", "specifies", "defines [values]" |
| Conforming | "must conform", "implements this spec" |
| Containment | "parent context", "where this lives", "where this is performed" |
| Navigation types | "parent context", "nested within" |
| Layout types | "spatial canvas", "layout handling" |
| Component types | "UI element", "widget providing" |
| Content types | "content object", "created during" |
| Action types | "action enabling", "workflow for" |
| Agent/Prompt | "AI team member", "implementation of" |
| Depends on | "provides", "must exist", "supplies" |
| Depended on by | "uses this to", "displays", "built on" |
| System | "foundational mechanism", "cross-cutting" |
| Strategy | "implements [principle] by" |
| Principle | "guidance driving", "makes testable" |
| Decision | "key choice that", "decision determining" |
| Learning | "insight that informed" |
| Temporal | "supersedes", "enables", "blocked by" |
