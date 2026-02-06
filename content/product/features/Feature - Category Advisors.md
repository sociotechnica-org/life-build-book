# Feature - Category Advisors

## WHAT: Definition

Domain-specialist AI agents, one per Life Category, providing specialized expertise in dedicated Strategy Studio rooms and in-context within projects. Each advisor brings domain-specific knowledge, language, and frameworks — Maya for health, Atlas for purpose, Brooks for finances, and so on across all eight categories.

## WHERE: Ecosystem

- Zone: [[Feature - Strategy Studio]] — Category Studios are rooms within Strategy Studio
- Conforms to: [[Standard - Life Categories]] — one advisor per default category
- Implements: [[Strategy - AI as Teammates]] — specialized expertise
- Implements: [[Principle - Guide When Helpful]] — available when relevant
- Implements: [[Standard - Knowledge Framework]] — domain-specific knowledge capture
- Dependencies:
  - [[Feature - Category Studios]] — dedicated rooms for each advisor
- Available in: [[Feature - Project Board]] — in-context consultation
- Available in: [[Feature - System Board]] — in-context consultation
- Instances:
  - [[Agent - Maya]] — Health & Well-Being
  - [[Agent - Atlas]] — Purpose & Spirituality
  - [[Agent - Brooks]] — Financial Resources
  - [[Agent - Grace]] — Relationships
  - [[Agent - Reed]] — Home & Environment
  - [[Agent - Finn]] — Community & Contributions
  - [[Agent - Indie]] — Leisure & Lifestyle
  - [[Agent - Sage]] — Personal Growth & Learning

## WHY: Rationale

- Strategy: [[Strategy - AI as Teammates]] — specialists complement generalists; domain expertise is the differentiator between a chatbot and a teammate
- Principle: [[Principle - Compound Capability]] — advisors learn director's domain-specific context over time
- Driver: Different life domains have different challenges, language, and resources. Generic advice fails because it lacks domain sensitivity. A health conversation requires different expertise than a financial one.
- Constraints: Advisors provide domain expertise, not directive advice. They never prescribe medical, financial, or legal decisions — they help directors think through their own.

## WHEN: Timeline

Core architecture. Individual advisors become more valuable as they accumulate domain-specific knowledge about each director's situation. Advisor coverage for custom categories is a deferred decision (see [[Standard - Life Categories]]).

## HOW: Implementation

### Behavior

**Dual availability:**

1. **Strategy Studio** — dedicated room for category-level strategic planning
2. **In-context** — subtle indicator on Project Board and System Board when relevant advisor available

**Conversation continuity:** History from in-project consultations logs to advisor's Studio thread. Unified record regardless of where conversation originated.

**Domain expertise:** Each advisor specializes in their category's typical concerns, language, resources, and frameworks.

**Customization note:** When directors rename or replace default categories, the associated advisor pauses until the system evolves to support custom category coverage.

### Examples

- A director working on a Health project opens the Project Board. Maya's indicator appears. They click to consult Maya about structuring a fitness routine — Maya draws on health-specific frameworks and the director's prior health conversations.
- A director enters the Purpose Studio in Strategy Studio. Atlas helps them plan a career transition strategy, referencing their stated values and previous purpose-related projects.

### Anti-Examples

- **Generic AI giving same advice regardless of life domain** — A director asks about managing a home renovation and gets the same generic project-management advice they'd get for a fitness goal. Category Advisors exist precisely because domain context changes everything about the advice.
- **Advisor making decisions for the director** — Brooks telling a director to invest in index funds instead of helping them think through their financial priorities. Advisors empower decisions, they don't make them.
