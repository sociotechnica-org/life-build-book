# System - Processing Layer

## WHAT: Definition

The deterministic computation engine that transforms raw director data into State Summaries that agents consume. Handles calibration factors, smoke signal detection, and pattern computation — agents focus on conversation and nuance, not math.

## WHERE: Ecosystem

- Zone: Backend — invisible to directors
- Implements: [[System - Knowledge Framework]] — processes knowledge into summaries
- Implements: [[Feature - Smoke Signals]] — detects signal conditions
- Feeds: All agents — they receive summaries, not raw data
- Related: [[System - Service Levels]] — processing enables service quality

## WHY: Rationale

- Strategy: [[Strategy - AI as Teammates]] — agents need processed intelligence
- Driver: Separation of concerns. Deterministic logic (calibration math, pattern detection) shouldn't consume agent context windows. Agents add judgment and conversation quality.
- Decision: State Summaries ~250 tokens. Compact enough for agent context, rich enough for personalized service.

## WHEN: Timeline

Infrastructure layer. Enables agent specialization — agents do what agents do best (conversation, judgment) while processing layer handles computation.

## HOW: Implementation

**Processing Layer computes:**

- Calibration factors (estimation accuracy over time)
- Smoke signal conditions (pattern thresholds)
- State Summaries (compressed director state)

**State Summary contents (~250 tokens):**

- Current capacity state
- Active smoke signals
- Key patterns detected
- Recent changes

**Agent consumption:**

- Agents receive State Summary at conversation start
- Summaries inform recommendations without requiring agents to compute
- Agents add interpretation, empathy, and judgment
