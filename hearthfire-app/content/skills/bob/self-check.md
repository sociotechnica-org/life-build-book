# Self-Check

Run before handing cards to Conan. Catches obvious issues.

## Per-Card Checklist

### Structure (30 seconds)

- [ ] All five sections present? (WHAT, WHERE, WHEN, WHY, HOW)
- [ ] Section headers match template?
- [ ] No empty sections?

### WHAT Section (30 seconds)

- [ ] **Standalone test:** Cover title. Read only WHAT. Understand what this is?
- [ ] 2-4 sentences?
- [ ] No unexplained jargon?

### WHERE Section (1 minute)

- [ ] At least 3 links?
- [ ] **Every link has context?** (No naked `[[Note]]`)
- [ ] **Containment parent linked?** (see below)
- [ ] At least one dependency?
- [ ] At least one dependent? (or noted as leaf)
- [ ] **Conformance links present?** (see below)

### Conformance Check

Does this card touch a governed domain?

Consult reference.md → Conformance Obligations table. If the card touches a governed domain, the corresponding Standard link must be in WHERE.

If Standard doesn't exist yet → flag for creation.

### Containment Check

Consult reference.md → Containment Relationships. Every card with a containment relationship must link to its parent.

### Folder Placement Check

- [ ] **Card in correct layer?**
  - Strategy, Principle, Standard → `/rationale/` subtree
  - Product-layer types → `/product/` subtree (see reference.md → Folder Structure for specific type-to-folder mapping)

### WHY Section (1 minute)

- [ ] Strategy or Principle link present with explanation?
- [ ] **Linked note exists?** (Check — don't link to nothing)
- [ ] **Linked note is substantive?** (Not a stub)
- [ ] Driver identified?

### WHEN Section (15 seconds)

- [ ] Temporal status present?
- [ ] Predecessor mentioned if exists in source?

### HOW Section (1 minute)

- [ ] Describes behavior, not rationale?
- [ ] Sufficient for builder to understand what to implement?
- [ ] Links to components if complex?
- [ ] **Has ≥2 concrete examples?** (input → output)
- [ ] **Has ≥1 anti-example?** (what wrong looks like)

### Links Overall (30 seconds)

- [ ] **Minimum 5 links?**
- [ ] **Links span 3+ dimensions?**
- [ ] Spot check 2-3: Do linked notes link back?

---

## Standard Card Checklist

Different structure than product-layer cards.

- [ ] WHAT describes what it specifies, not what it does?
- [ ] WHERE has "Conforming" section listing product-layer cards?
- [ ] WHY links to Principle? (Standards implement Principles)
- [ ] HOW contains actual spec? (values, rules, thresholds)
- [ ] **Has ≥1 anti-example?** (what violation looks like)
- [ ] Existing cards that should conform are linked?
- [ ] **Filed in `/rationale/standards/`?** (not `/product/`)

---

## Strategy/Principle Checklist

- [ ] WHY has reasoning, not just assertion?
- [ ] **Has Anti-Patterns section?** (what violating this looks like)
- [ ] Tensions documented?
- [ ] **Filed in `/rationale/strategies/` or `/rationale/principles/`?** (not `/product/`)

---

## Quick Tally

| Result | Meaning |
|--------|---------|
| All pass | Ready for Conan |
| 1-2 minor | Fix now |
| 3+ issues | Fix before continuing |
| Unclear | Flag for human |

---

## Batch Check

After finishing a scope's cards:

### Inventory Reconciliation

- [ ] All inventory items have cards?
- [ ] Discovered cards noted?
- [ ] Skipped items have reason?

### Cross-Card Consistency

- [ ] Same terms used consistently?
- [ ] Related cards link to each other?
- [ ] Shared dependencies point to same note?

### Conformance Coverage

- [ ] All Standards have conforming cards linked?
- [ ] All product-layer cards touching governed domains have conformance links?

### Strategy/Principle Coverage

- [ ] Every linked strategy note exists?
- [ ] Strategy notes have substance?
- [ ] No orphan strategy notes?
- [ ] **All Strategy/Principle notes have Anti-Patterns section?**

### Examples & Anti-Patterns Coverage

- [ ] All product-layer card HOW sections have ≥2 examples?
- [ ] All product-layer card HOW sections have ≥1 anti-example?
- [ ] All Standards have anti-examples?
- [ ] Missing examples flagged for human input?

### Link Health

- [ ] No broken links?
- [ ] Bidirectional sample: Pick 5, verify they link back

---

## Common Issues

**Missing link context:**
```markdown
# Bad
- [[Data Store]]

# Good
- [[Data Store]] — provides candidate items for filtering
```

**WHAT not standalone:**
```markdown
# Bad
"The settings for this mode. See [[Mode Operations]]."

# Good
"Mode Settings let users control how many items
appear in their queue each session..."
```

**WHY links to stub:**
```markdown
# The card says:
Strategy: [[Strategy - [Name]]] — implements visibility

# But the strategy note is just:
"Visual work is important."

# Fix: Enrich the strategy note before handing off
```

**Missing conformance:**
```markdown
# Card renders visual indicators but WHERE has no Standard link

# Fix: Add
- [[Standard - [Name]]] — constrains indicator rendering
```

**All links in one dimension:**
```markdown
# Bad (all WHERE)
Parent, System, Dependency, Dependency, Component

# Good (spread across dimensions)
Parent, System, Dependency (WHERE)
Strategy, Decision (WHY)
Future enhancement (WHEN)
```

**Missing examples in HOW:**
```markdown
# Bad
"The component displays scores for items."

# Good
"### Examples
- Item with score 85 → displays in primary stream, highlighted
- Item with score 45 → displays in secondary stream, dimmed"
```

**Missing anti-examples:**
```markdown
# Bad (no boundaries defined)
"Colors follow the visual language."

# Good
"### Anti-Examples
- Wrong: Using #FF0000 for errors (too harsh, not in palette)
- Wrong: Applying highlight to low-priority items (reserved for high-priority)"
```

**Strategy without anti-patterns:**
```markdown
# Bad
"We believe in spatial visibility."

# Good
"## Anti-Patterns
- Wrong: Hiding status in dropdown menus
- Wrong: Requiring hover to see critical info"
```

**Wrong folder placement:**
```markdown
# Bad
Standard - [Name] filed in /product/standards/

# Good
Standard - [Name] filed in /rationale/standards/
```

---

## Self-Check Report

```
Scope: [Name]
Cards checked: [N]
Passing: [N]
Fixed during check: [N]
Flagged for human: [N]

Issues found and fixed:
- [Card]: [Issue] → [Fix]

Conformance gaps addressed:
- [Card]: Added [[Standard - X]]

Folder placement issues:
- [Card]: Moved from [old] to [correct]

Flagged for human judgment:
- [Card]: [Question]

Ready for Conan: [Yes/No]
```
