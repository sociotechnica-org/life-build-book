# Standard - Smoke Signal Thresholds

## WHAT: Definition

The specification for trigger conditions, visual treatments, and dismissal rules for the four smoke signal types. This standard defines when signals appear and how they look; System - Smoke Signals implements detection and surfacing.

## WHERE: Ecosystem

- Implemented by: [[System - Smoke Signals]] — detection mechanism
- Applied to: [[Hex Grid - Hex Tile]]
- Monitored by: [[Agent - Mesa]] — can explain any signal
- Implements: [[Principle - Visibility Creates Agency]] — directors see problems early
- Implements: [[Principle - Guide When Helpful]] — helpful signals, not nagging alerts

## WHY: Rationale

- Principle: [[Principle - Visibility Creates Agency]] — directors see problems early
- Principle: [[Principle - Guide When Helpful]] — helpful signals, not nagging alerts
- Driver: Directors need awareness without bombardment. Smoke Signals make problems visible without demanding immediate action.

## WHEN: Timeline

Core specification. Thresholds refined based on director feedback.

## HOW: Specification

### Health Warning Signal (Systems)

| Threshold | Visual |
|-----------|--------|
| Yellow | Cycle completion < 80% over past 2 weeks |
| Red | Cycle completion < 50% OR 3+ consecutive misses |

**Treatment:** Tile background tint (yellow or red). Clears automatically when health improves.

**Dismissal:** Director can snooze for 1 week. Signal returns if condition persists.

### Staleness Signal (Projects)

| Threshold | Trigger |
|-----------|---------|
| Default active | No activity for 3 weeks |
| Default paused | No activity for 6 weeks |

**Treatment:** Dust/fade overlay effect. Progressively more pronounced with time.

**Dismissal:** Director can acknowledge ("still relevant") or archive.

### Due Date Signal (Projects/Tasks)

| Threshold | Visual |
|-----------|--------|
| Appears | Deadline within 7 days (configurable) |
| Intensifies | As deadline approaches |

**Treatment:** Calendar icon with date. Color intensifies yellow → orange → red.

**Interaction:** Click opens relevant Project Board or task detail.

### Pattern Concern Signal

| Trigger | Examples |
|---------|----------|
| Conan identifies statistically significant pattern | Project paused 3+ times, estimated vs. actual consistently off, same week slippage repeating |

**Treatment:** Subtle pulse animation. Less urgent than other signals.

**Interaction:** Click or Mesa query explains the pattern detected.

### Visibility Rules (All Signals)

- Signals visible at Working View and closer
- Horizon View shows aggregate (cluster has signals)
- Signals don't block interaction
- No sounds, no badges, no push notifications
- Directors see signals when they look at Life Map
