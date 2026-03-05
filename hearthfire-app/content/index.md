# Hearthfire Context Library

Context library for the Hearthfire life-RPG app. Gives AI builder agents implicit context for aligned micro-decisions during development.

## Status

- **Phase:** Setup — agents ready, taxonomy pending
- **Next step:** Run Conan `job-taxonomy` against source material to establish product-specific types

## Structure

```
content/
  sources/            ← organized source documents
  rationale/          ← WHY we build (strategies, principles, standards)
    strategies/
    principles/
    standards/
  product/            ← WHAT gets built (product-specific types + systems, agents, prompts)
    systems/
    agents/
    prompts/
    [type folders created after taxonomy discovery]
  skills/             ← agent operating procedures
    conan/            ← quality guardian (15 files)
    bob/              ← builder (6 files)
  reference.md        ← type taxonomy, templates, conformance obligations
  CONVENTIONS.md      ← code patterns, naming, gotchas
  CONTRIBUTING.md     ← how to add/update cards
  index.md            ← this file
```

## Quick Start

### For humans

1. Source material lives in `content/sources/`
2. Read `reference.md` for templates and type taxonomy
3. Read `CONTRIBUTING.md` for workflow

### For AI agents

1. Load skill files via `content/skills/[agent]/launch.md`
2. Load `content/reference.md` for templates and types
3. Wait for assignment

## Agents

| Agent | Role | Launch |
|-------|------|--------|
| Conan | Quality guardian — grade, audit, diagnose, recommend | `content/skills/conan/launch.md` |
| Bob | Builder — create and fix cards | `content/skills/bob/launch.md` |

## Card Structure

Every card has 5 mandatory sections:

| Section | Purpose |
|---------|---------|
| WHAT | Standalone definition |
| WHERE | Ecosystem links (3+ contextualized) |
| WHY | Strategy/Principle link + driver |
| WHEN | Temporal status (embedded in card body) |
| HOW | Implementation detail with examples |
