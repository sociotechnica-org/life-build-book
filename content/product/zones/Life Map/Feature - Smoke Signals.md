# Feature - Smoke Signals

## WHAT: Definition

The ambient notification system that alerts directors to items needing attention without interrupting flow — visual indicators on the Life Map that signal system health issues, approaching deadlines, stalled projects, or pattern concerns. Smoke Signals inform without demanding.

## WHERE: Ecosystem

- Zone: [[Feature - Life Map]] — signals visible on grid
- Implements: [[Principle - Visibility Creates Agency]] — awareness without interruption
- Implements: [[Principle - Guide When Helpful]] — signals, not alarms
- Sources: [[Feature - System]] (health), [[Feature - Project]] (staleness), [[System - Priority Queue Architecture]] (due dates)
- Displayed on: [[Hex Grid - Hex Tile]] — visual treatment
- Monitored by: [[Agent - Mesa]] — can explain signals

## WHY: Rationale

- Principle: [[Principle - Visibility Creates Agency]] — directors should see problems early
- Principle: [[Principle - Guide When Helpful]] — helpful signals, not nagging alerts
- Driver: Directors need to know when something needs attention without being bombarded with notifications. Smoke Signals are visible but not intrusive.

## WHEN: Timeline

Supporting feature. Smoke Signal sensitivity refined based on director preferences and feedback.

## HOW: Implementation

**Signal types:**

| Signal          | Source                          | Visual               |
| --------------- | ------------------------------- | -------------------- |
| Health warning  | System health declining         | Yellow/red tile tint |
| Staleness       | Project untouched for threshold | Dust/fade effect     |
| Due date        | Approaching deadline            | Calendar indicator   |
| Pattern concern | Repeated slippage               | Subtle pulse         |

**Visibility rules:**

- Signals visible at Working View and closer
- Horizon View shows aggregate (cluster has signals)
- Signals don't block interaction
- Directors can dismiss or snooze

**Agent awareness:**

- Mesa can explain any signal
- "That yellow tint means your workout system has missed three cycles"
- Agents may reference signals in conversations

**Not notifications:**

- Smoke Signals are visual states, not push alerts
- No sounds, no badges, no interruptions
- Directors see them when they look at Life Map
