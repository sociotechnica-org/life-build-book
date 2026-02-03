# Principle - Familiarity Over Function

## WHAT: The Principle

Directors classify work by how it feels to them, not by objective criteria — the director's relationship to the work is the only classification that matters.

## WHERE: Ecosystem

- Type: Design Principle
- Serves: [[Need - Autonomy]] — director's classification is final
- Advances: [[Strategy - Superior Process]], [[Strategy - AI as Teammates]]
- Governs: [[Feature - Project - Purpose Assignment]], [[System - Priority Score Calculation]], [[Feature - Sorting Room]], [[Feature - Work at Hand]]
- Agents: [[Agent - Cameron]] (priority recommendations), [[Agent - Marvin]] (purpose capture during creation)
- Decisions: [[Decision - Subjective Purpose Classification]]
- Related: [[Principle - Earn Don't Interrogate]] — both respect director sovereignty

## WHY: Belief

The same garage cleanout is Bronze for one person and Gold for another. A director who's been avoiding it for two years, for whom completing it would change how they feel in their home — that's Gold. For someone who tidies routinely, the same task is Bronze. The objective characteristics of the work (duration, complexity, domain) tell you nothing about what it means to this director.

This emerged from early design discussions: should purpose assignment use objective criteria or subjective criteria? The decision was clear: subjective. Objective classification would require the system to know things it can't know — the director's history with this task, their emotional relationship to it, what completing it would mean for them.

Purpose is captured during Stage 2 of project creation with a single question: "What is this time investment for?" The director chooses based on their relationship to the work. Agents may notice patterns ("you tend to classify home projects as Gold — that's interesting") and may ask curious questions, but never correct or suggest reclassification.

The one exception: if a classification seems like an error rather than a choice ("you marked 'buy groceries' as Gold — did you mean to do that?"), agents can ask once, gently.

## HOW: Application

Design purpose assignment as a subjective question about meaning, not an objective assessment of task characteristics. Priority scores should suggest, never mandate — the director always overrides.

**Test:** Does this design assume it knows better than the director what their work means to them?

## Tensions

- With objective priority math — resolution: the score is a suggestion, the director always has final say
- With pattern recognition — agents can observe unusual classifications but never override director judgment
