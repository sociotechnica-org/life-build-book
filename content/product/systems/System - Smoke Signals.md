# System - Smoke Signals

## WHAT: Definition

The ambient notification mechanism that surfaces items needing attention through visual indicators on the Life Map — tile tints, effects, and subtle animations that inform without interrupting. Smoke Signals are visual states, not push alerts.

## WHERE: Ecosystem

- Zone: [[Feature - Life Map]] — signals visible on grid
- Displayed on: [[Hex Grid - Hex Tile]] — visual treatments applied to tiles
- Sources: [[Primitive - System]] (health data), [[Primitive - Project]] (staleness data), [[System - Priority Queue Architecture]] (due dates)
- Monitored by: [[Agent - Mesa]] — can explain any signal
- Implements: [[Standard - Smoke Signal Thresholds]] — threshold and treatment specifications

## WHY: Rationale

- Strategy: [[Strategy - Spatial Visibility]] — ambient signals leverage spatial awareness
- Principle: [[Principle - Visibility Creates Agency]] — directors see problems early
- Principle: [[Principle - Guide When Helpful]] — helpful signals, not nagging alerts
- Driver: Directors need awareness without bombardment. Smoke Signals make problems visible without demanding immediate action.

## WHEN: Timeline

Core system. Signal types and thresholds refined based on director feedback.

## HOW: Implementation

**Visibility rules:**
- Signals visible at Working View and closer
- Horizon View shows aggregate (cluster has signals)
- Signals don't block interaction
- Directors can dismiss or snooze individual signals

**Agent awareness:**
- Mesa can explain any signal on request
- Agents may reference signals in conversations
- "That yellow tint means your workout system has missed three cycles"

**Design principle:**
- No sounds, no badges, no push notifications
- Directors see signals when they look at Life Map
- Ambient, not interruptive
