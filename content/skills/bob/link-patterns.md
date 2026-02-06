# Link Patterns

Standard phrases for relationship context. No naked links — every `[[Note]]` gets a phrase.

---

## Conformance (Features/Components → Standards)

```markdown
- [[Standard - X]] — constrains [what aspect]
- [[Standard - X]] — specifies [colors/thresholds/states] used here
- [[Standard - X]] — defines [values/rules] this implements
```

**Examples:**
```markdown
- [[Standard - Visual Language]] — constrains color and indicator rendering
- [[Standard - Priority Score]] — specifies ranking formula used here
- [[Standard - Three-Stream Portfolio]] — defines stream classification this implements
- [[Standard - Project States]] — constrains lifecycle state handling
```

---

## Conforming Elements (Standards → Features/Components)

```markdown
- [[Feature - X]] — must conform to this spec
- [[Component - X]] — implements this specification
- [[Feature - X]] — renders according to this standard
```

**Examples:**
```markdown
- [[Feature - The Table]] — must conform to this spec
- [[Component - State Indicator]] — implements this specification
- [[Feature - Work at Hand]] — renders according to this standard
```

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
- [[Priority Queue]] — provides candidate tasks for filtering
- [[User Preferences]] — stores selected mode between sessions
- [[SODA Cycle]] — determines when Bronze stack refreshes
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
- [[Work at Hand]] — uses this to populate daily focus
- [[The Table]] — displays priorities this system ranks
- [[AI Suggestions]] — built on top of this scoring mechanism
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
- [[Priority Queue]] — foundational mechanism for all task ordering
- [[SODA Cycle]] — cross-cutting system handling weekly rhythm
```

---

## Zones (Product Areas)

```markdown
- [[X]] — zone where this feature lives
- [[X]] — product area containing [related features]
```

---

## Components (Implementation Details)

```markdown
- [[X]] — UI element handling [interaction]
- [[X]] — algorithm computing [calculation]
- [[X]] — data structure storing [state]
```

---

## Strategy/Principle Links (WHY Section)

```markdown
- [[Strategy - X]] — this implements [principle] by [how]
- [[Principle - X]] — guidance driving [aspect] of this feature
- [[Strategy - X]] — philosophy behind [design choice]
```

**Examples:**
```markdown
- [[Strategy - Visual Work]] — this implements visibility by showing queue state
- [[Principle - Visual Recognition]] — guidance driving indicator design
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
- [[Decision - X]] — key choice that [shaped/constrained] this feature
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
- [[X]] — sibling feature sharing [common parent/system]
```

---

## Quick Reference

| Relationship | Pattern Start |
|--------------|---------------|
| Conforms to | "constrains", "specifies", "defines [values]" |
| Conforming | "must conform", "implements this spec" |
| Depends on | "provides", "must exist", "supplies" |
| Depended on by | "uses this to", "displays", "built on" |
| System | "foundational mechanism", "cross-cutting" |
| Component | "UI element", "algorithm", "data structure" |
| Strategy | "implements [principle] by" |
| Principle | "guidance driving", "makes testable" |
| Decision | "key choice that", "decision determining" |
| Learning | "insight that informed" |
| Temporal | "supersedes", "enables", "blocked by" |
