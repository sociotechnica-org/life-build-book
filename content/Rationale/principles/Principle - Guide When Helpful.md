# Principle - Guide When Helpful

## WHAT: The Principle

All capabilities are always available to find — active guidance follows the director's demonstrated experience, not a predetermined education schedule.

## WHERE: Ecosystem

- Type: Design Principle
- Serves: [[Need - Autonomy]] — all capabilities available, no forced education
- Serves: [[Need - Relatedness]] — guidance feels like colleague help
- Advances: [[Strategy - AI as Teammates]]
- Governs: Feature discoverability, [[Feature - Workspace Navigation]], [[Agent - Mesa]] (routing behavior)
- Rooms: [[Feature - Council Chamber]], [[Feature - Drafting Room]], [[Feature - Sorting Room]], [[Feature - Roster Room]]
- Related: [[Principle - First 72 Hours]] — first 72 hours need more active guidance than steady state
- Related: [[Principle - Earn Don't Interrogate]] — guidance method matters as much as timing

## WHY: Belief

The tension this principle resolves: "pain drives readiness" (original framing) could imply withholding capabilities. The correct framing: capabilities are always available, always self-explanatory, but active guidance follows demonstrated need.

This is the difference between a library (everything available, organized, discoverable) and a tutor (teaching what's relevant now). LifeBuild is both — a library you can browse freely, plus a tutor who notices when you're struggling and offers relevant help.

Every feature needs two explanations: a "browse mode" explanation (what is this, why does it exist, what problem does it solve) and an "active guidance" trigger (what situation causes the system to recommend this capability). The browse explanation is always accessible. The active guidance fires only when behavior suggests the director would benefit.

The design pattern is NOT progressive disclosure (hiding complexity until the user "levels up"). It IS progressive guidance (all complexity is accessible, but the system's active help follows the director's journey). Don't interrupt a thriving director to educate them about features they haven't needed.

## HOW: Application

Design every feature with both discoverability (findable when browsing) and guidance triggers (surfaced when relevant). When the director hits a wall a capability would solve, bring it forward. Don't interrupt success to promote unused features.

**Test:** Is this capability discoverable? And separately: are we highlighting it because the director needs it now, or because we want them to know it exists?

## Tensions

- With [[Principle - First 72 Hours]] — first 72 hours require more proactive guidance to establish quick wins
- With feature promotion — marketing wants visibility; this principle demands relevance-based surfacing
