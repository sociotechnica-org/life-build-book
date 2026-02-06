---
title: LifeBuild Context Library
---

# LifeBuild Context Library

A documentation system designed to capture holistic context for humans and AI agents working on LifeBuild.

---

## The Core Idea

**If you'll need to say it again, put it in the library.**

This library exists so that context doesn't live in people's heads or get repeated in every AI handoff. Write it once, link to it forever.

---

## Quick Start

### For AI Agents

1. Read **[[CONTRIBUTING]]** — how to use and update this library
2. Read **[[CONVENTIONS]]** — code patterns and gotchas for this codebase
3. Before touching a feature, find its note and read the context
4. After completing work, update affected notes

### For Humans

1. Same as above, plus you're the authority on structural decisions
2. Review AI contributions to the library
3. Resolve ambiguities AI agents flag

---

## Folder Structure

```
/content/
├── index.md            # You are here
├── reference.md        # Library Reference — templates, naming, conformance
├── CONTRIBUTING.md     # How to add/edit notes (humans & AI)
├── CONVENTIONS.md      # Code patterns, naming, gotchas
│
├── /product/           # The thing itself
│   ├── /features/      # User-facing mechanics (The Table, Drafting Room)
│   ├── /systems/       # Cross-cutting mechanisms (Pipeline, Weekly Priority)
│   ├── /standards/     # Specifications constraining implementations
│   ├── /components/    # Technical implementation details
│   ├── /principles/    # Judgment-based design guidance
│   ├── /strategies/    # Strategic bets (Spatial Visibility, AI as Teammates)
│   ├── /Primitives/    # Core entities (Project, System, Task)
│   └── /Agents/        # AI agent profiles
│
├── /Rationale/         # Strategic context (WHY)
│   ├── /foundation/    # Foundational frameworks (Self-Determination Theory)
│   └── /needs/         # Core needs (Autonomy, Competence, Relatedness)
│
├── /timeline/          # How it got here, where it's going (WHEN)
│   ├── /past/          # Learnings, deprecated approaches
│   └── /future/        # Vision, roadmap items
│
└── /templates/         # Note templates (copy when creating new notes)
```

---

## Status Values (ca-when)

Every note has a temporal status:

| Status    | Meaning                                           | Example                            |
| --------- | ------------------------------------------------- | ---------------------------------- |
| `past`    | Historical—was tried, deprecated, or learned from | Abstract visual patterns (replaced by content-depicting illustrations) |
| `present` | Current—exists in codebase today                  | The Table, Drafting Room           |
| `planned` | Committed—has timeline, will be built soon        | Roster Room (Q1)                   |
| `future`  | Vision—in docs but no committed timeline          | Council Chamber, Archives          |

---

## Key Documents

| Document            | Purpose                                |
| ------------------- | -------------------------------------- |
| **[[CONTRIBUTING]]** | How to add and edit notes              |
| **[[CONVENTIONS]]**  | Code patterns, naming, gotchas         |

---

## Linking Conventions

Links should include context, not be naked pointers:

```markdown
# Good
- Depends on: [[priority-queue]] — provides candidate tasks for Bronze stack
- Part of: [[life-map]] — persistent element at top of workspace

# Bad
- Related: [[priority-queue]]
- See also: [[life-map]]
```

---

## The Test

**"Will I need to say this again next time?"**

- **Yes** → Put it in the library
- **No** → Fine in the handoff
