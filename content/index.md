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
├── CONTRIBUTING.md     # How to add/edit notes (humans & AI)
├── CONVENTIONS.md      # Code patterns, naming, gotchas
│
├── /product/           # The thing itself (WHERE)
│   ├── /zones/         # Major product areas (Life Map, Strategy Studio)
│   ├── /systems/       # Cross-cutting mechanisms (Priority Queue, Work at Hand)
│   ├── /features/      # User-facing mechanics (The Table, Bronze Mode)
│   └── /components/    # Technical implementation details
│
├── /context/           # Why it's this way (WHY)
│   ├── /strategy/      # Guiding principles ("Visual work creates agency")
│   ├── /pressures/     # External forces (customer demands, market shifts)
│   └── /signals/       # Metrics & observations driving decisions
│
├── /timeline/          # How it got here, where it's going (WHEN)
│   ├── /past/          # Learnings, deprecated approaches
│   └── /future/        # Vision, roadmap items
│
├── /slugs/             # Pre-assembled context bundles for common tasks
└── /templates/         # Note templates (copy when creating new notes)
```

---

## Status Values (ca-when)

Every note has a temporal status:

| Status    | Meaning                                           | Example                            |
| --------- | ------------------------------------------------- | ---------------------------------- |
| `past`    | Historical—was tried, deprecated, or learned from | Urushi image evolution (cancelled) |
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
