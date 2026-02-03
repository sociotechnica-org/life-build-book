# System - Actions

## WHAT: Definition

The three operations available for planted systems: Hibernate (pause temporarily), Upgrade (spawn improvement project), and Uproot (end deliberately). Actions give directors control over their infrastructure lifecycle.

## WHERE: Ecosystem

- Parent: [[Feature - System]]
- Available in: [[Feature - System Board]] — action buttons in system interface
- Upgrade spawns: [[Feature - Project]] — Silver project for improvement
- Uproot moves to: [[Feature - Archives]] — full history preserved
- Affects: [[Feature - Smoke Signals]] — hibernating systems don't trigger missed-cycle signals

## WHY: Rationale

- Strategy: [[Strategy - Superior Process]] — infrastructure needs lifecycle management
- Principle: [[Principle - Plans Are Hypotheses]] — systems can be adjusted as life changes
- Driver: Systems are long-lived but not permanent. Directors need ways to pause, improve, or end them.

## WHEN: Timeline

Core to system entity. Actions available from System Board for any planted system.

## HOW: Implementation

**Hibernate** — Pause temporarily

- Use case: "I'm traveling for a month — pause hot tub maintenance"
- Configuration preserved, no outputs generated
- Can reactivate anytime
- Different from Uproot: director expects to return

**Upgrade** — Improve the system

- Use case: "Oil changes are too frequent — research and optimize"
- Spawns a Silver project to improve the system
- System continues running during upgrade work
- Completed upgrade modifies system's pattern/configuration

**Uproot** — End deliberately

- Use case: "Sold the car — don't need car maintenance anymore"
- Full history preserved in Archives
- System removed from Life Map
- Permanent action (can create new system later if needed)
