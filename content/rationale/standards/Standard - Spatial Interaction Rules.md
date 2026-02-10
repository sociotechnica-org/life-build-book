# Standard - Spatial Interaction Rules

## WHAT: Definition

The specification for director agency over hex grid spatial organization: directors place their own projects, the system never auto-organizes, rearrangement is low-friction, and spatial clustering carries director-assigned meaning that the AI team observes but does not impose.

## WHERE: Ecosystem

- Conforming structures: [[Structure - Hex Grid]] — core spatial interaction surface
- Conforming zones: [[Zone - Life Map]] — spatial organization at map level
- Conforming systems: [[System - Clustering]] — cluster meaning from director placement
- Implements: [[Principle - Bidirectional Loop]] — makes director spatial agency testable

## WHY: Rationale

- Principle: [[Principle - Bidirectional Loop]] — external representation and internal understanding strengthen through iteration
- Driver: Without this spec, systems default to auto-organizing for efficiency, destroying the cognitive value of director-driven placement and breaking the bidirectional loop.

## WHEN: Timeline

Core specification. Interaction patterns defined during Vision Capture.

## HOW: Specification

### Director Agency Rules

| Rule | Requirement |
|------|-------------|
| Placement | Directors place their own projects. System does not assign locations. |
| Rearrangement | Drag-and-drop. No confirmation dialogs for moves. |
| Clustering | Adjacent hexes carry director-assigned meaning. System observes but doesn't impose. |
| Persistence | Spatial arrangement persists exactly as director left it. |

### Interaction Requirements

| Interaction | Spec |
|-------------|------|
| Place a project | Single drag-and-drop action |
| Move a project | Grab and place — no multi-step process |
| Suggested locations | Prohibited — no auto-place |
| "Optimize layout" | Prohibited — no system rearrangement |

### AI Observation Rules

| Permission | Rule |
|------------|------|
| Notice patterns | Allowed — "I see you've placed all family projects together" |
| Ask about placement | Allowed — curiosity, not correction |
| Move projects | **Only with explicit director request** |
| Reorganize layout | **Never without permission** |
| Learn from placement | Allowed — observations feed understanding of director's mental model |

## Anti-Examples

- **System auto-organizing hex grid by category** — destroys the bidirectional loop. Placement reveals how the director thinks about their life. Auto-organization imposes system logic where director cognition should drive.
- **Confirmation dialog when moving a project to a new hex** — friction kills the flywheel. The loop depends on frequent, easy moves. Every dialog between "grab" and "place" discourages iteration.
- **"Optimize layout" feature that rearranges projects for visual balance** — treats spatial arrangement as filing rather than thinking. The grid is an extension of the director's mind, not a filing system to be optimized.
