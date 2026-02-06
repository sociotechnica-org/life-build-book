# Standard (Type Definition)

## WHAT: Definition

A Standard is an implementation specification that constrains how features and components are built. Standards have no runtime state and perform no computation — they define what implementations must conform to.

Standards sit between Principles (what guides decisions) and Features/Components (how things are built). A Principle says "directors should recognize elements instantly." A Standard says "Jarvis is cobalt blue #2B5C9E, 10-30 strokes, rounded endpoints."

## WHERE: Ecosystem

- Upstream: [[Principle]] cards — Standards implement Principles
- Downstream: [[Feature]] and [[Component]] cards — must conform to Standards
- Sibling types: [[System]] (has state, computes), [[Feature]] (directors interact)

## WHY: Rationale

- Driver: The "Angry Birds problem" — agents building without specification constraints produce technically correct but wrong outputs (blue bird instead of red bird)
- Decision: Standards are a distinct type because specifications require different treatment than mechanisms. A builder reads Standards to know what to produce; a builder reads Systems to understand how things work.

## WHEN: Timeline

Type added February 2026 to address misclassification of specification cards previously typed as Systems.

## HOW: Classification

**Decision tree position:**

```
WHAT exists?
├─ Directors consciously interact? → FEATURE/COMPONENT
├─ NO + foundational mechanism (has state, computes) → SYSTEM
└─ NO + implementation specification (constrains, no state) → STANDARD
```

**Interaction test:**

| Question | System | Standard |
|----------|--------|----------|
| Has runtime state? | Yes | No |
| Processes inputs? | Yes | No |
| Other things conform to it? | Sometimes | Always |
| Changes require code? | Yes | No (spec update) |
| Builder reads to implement? | Rarely | Always |

**Card structure:** Standards use the same five sections (WHAT/WHERE/WHY/HOW/WHEN) with these adaptations:

- **WHAT:** What this standard specifies
- **WHERE:** What features/components must conform to it
- **WHY:** Which principles it implements
- **HOW:** The specification itself (values, rules, constraints)
- **WHEN:** Stability status, change history
