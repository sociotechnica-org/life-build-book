# Contributing to the Hearthfire Context Library

## What Is This Library?

A documentation system giving AI builder agents implicit context for aligned micro-decisions. Cards are atomic notes with 5 mandatory dimensions (WHAT, WHERE, WHY, WHEN, HOW) that agents retrieve and assemble into constellations for task context.

**If you'll need to say it again, put it in the library.**

## When to Add/Update Cards

**Add when:**
- You build a new feature, system, or component
- You make a strategic decision worth preserving
- You learn from a failed approach
- You discover a pressure or signal driving decisions
- You're repeatedly explaining the same context to agents

**Update when:**
- Implementation changes
- Card is incomplete or wrong
- Dependencies change
- Temporal status changes

**Don't create when:**
- One-time task-specific context
- Duplicates existing content (link instead)
- Obvious from reading the code

## Where Cards Go

| Type | Folder |
|------|--------|
| Strategy | `rationale/strategies/` |
| Principle | `rationale/principles/` |
| Standard | `rationale/standards/` |
| System | `product/systems/` |
| Agent | `product/agents/` |
| Prompt | `product/prompts/` |
| Product-specific types | See `reference.md → Folder Structure` |

## Card Structure

Every card has 5 mandatory sections:

```markdown
# [Type] - [Name]

## WHAT: [Section Name]
[Standalone definition. 2-4 sentences. Reader understands without title.]

## WHERE: [Section Name]
[3+ contextualized links. No naked [[links]]. Conformance links where obligated.]

## WHY: [Section Name]
[Strategy/Principle link with explanation. Driver traced.]

## WHEN: [Section Name]
[Temporal status. Status values vary by type — see reference.md.]

## HOW: [Section Name]
[Implementation detail. 2+ examples. 1+ anti-example.]
```

Use `reference.md` for type-specific templates.

## Link Rules

Every link must have context:

```markdown
# Wrong
- [[Data Store]]

# Right
- [[System - Data Store]] — provides candidate items for filtering
```

Minimum: 5+ links, 3+ dimensions, all contextualized.

## Quality Checklist

- [ ] All five sections present?
- [ ] WHAT standalone? (cover title, still makes sense?)
- [ ] 5+ links with context?
- [ ] Conformance links where obligated? (see reference.md)
- [ ] Strategy note exists and is substantive?
- [ ] WHEN has temporal status?
- [ ] HOW has ≥2 examples?
- [ ] HOW has ≥1 anti-example?
- [ ] Card in correct folder?

## AI Agent Workflow

### Before starting work:
1. Check if relevant cards exist
2. Read cards and follow links
3. Check WHERE dependencies
4. Check WHEN status
5. Check WHY rationale

### After completing work:
1. Update affected cards
2. Add new cards for created features
3. Flag gaps where context didn't exist

## Agents

| Agent | Job | Does NOT |
|-------|-----|----------|
| **Conan** | Grade, audit, diagnose, recommend, surgery plans | Write cards |
| **Bob** | Create cards, fix per recommendations | Grade or prioritize |
| **Human** | Priority decisions, resolve ambiguity, go/no-go | — |

## Getting Started

1. Read `reference.md` — templates, types, conformance
2. Read `CONVENTIONS.md` — code patterns, naming, gotchas
3. Browse existing cards to see the pattern
4. Use `reference.md → Templates` for your card's type
