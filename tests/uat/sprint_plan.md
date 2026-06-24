# UAT Sprint Plan: Flappy Sterling (HTML5 Web)

## ACTIVE SPRINT FOCUS: MVP Core Engine — Browser Playable

### Sprint Objective
Deliver a fully playable Flappy Bird clone in the browser, playable on iPhone Safari via touch controls.

---

## Core Requirements

### REQ-01: Bird Physics & Gravity Loop
- Bird subject to constant downward gravity acceleration
- Tap/click applies instantaneous upward velocity impulse (flap)
- Bird rotation pitches down on descent, tilts up on flap
- Collision with canvas top or bottom = game over

### REQ-02: Scrolling Obstacle Pipes
- Pipes generate at regular intervals scrolling right to left
- Each pair has a vertical gap of consistent size
- Pipe speed consistent and balanced for mobile play
- Pipes despawn cleanly after passing left edge

### REQ-03: Scoring System
- Score 1 point per pipe pair successfully passed
- Score displayed prominently during gameplay
- High score persisted across sessions via localStorage

### REQ-04: Mobile Touch Controls
- Tap anywhere on screen triggers flap
- Zero perceptible latency
- Handles rapid successive taps without buffering issues
- Dual input: touch + mouse click

### REQ-05: Game State Management
- START screen with title + "Tap to Start" prompt + bobbing bird
- PLAYING state with live physics and scoring
- GAME_OVER state displaying final score, high score, "Tap to Restart"
- Smooth transitions between all states

### REQ-06: Visual Polish
- Minimalist 2D art — pipes: green tops with dark green trim
- Background: gradient sky blue
- Ground strip at bottom of canvas
- Bird: simple circle with eye (procedural, no sprites)
- FPS counter or smooth frame pacing

### REQ-07: Audio (Stretch)
- Procedural Web Audio API sounds for flap, score, collision
- No external audio files needed

---

## Technical Stack
- **Runtime:** HTML5 Canvas + Vanilla JS
- **Loop:** requestAnimationFrame with delta-time framing
- **Controls:** pointerdown (touch + mouse unified), keyboard Spacebar
- **Persistence:** localStorage
- **Audio:** Web Audio API (procedural)

---

## Implementation Sequence

| Phase | Task | Component |
|-------|------|-----------|
| 1 | HTML shell + canvas sizing + responsive viewport | index.html |
| 2 | Game loop + state machine + delta-time | game.js |
| 3 | Bird physics: gravity, flap, rotation | bird.js |
| 4 | Pipe generation + scrolling + despawning | pipes.js |
| 5 | Collision detection (bird+pipes, bird+bounds) | game.js |
| 6 | Score tracking + high score persistence | score.js |
| 7 | Procedural audio effects (stretch) | audio.js |
| 8 | Polish: ground strip, gradient sky, visual tuning | game.js |
| 9 | Mobile testing: viewport, touch latency, sizing | QA |

---

## Test Cases

### TEST-001 — Bird Gravity & Flap
- **Requirement:** REQ-01
- **Steps:** Game starts → observe bird falling → tap → observe upward impulse → rapid taps
- **Expected:** Falls under gravity. Each tap = upward impulse. Rapid taps = rapid ascents.

### TEST-002 — Pipe Generation
- **Requirement:** REQ-02
- **Steps:** Play game → observe pipes spawning from right → scrolling left → despawning
- **Expected:** Regular intervals, consistent gap, clean despawn.

### TEST-003 — Scoring
- **Requirement:** REQ-03
- **Steps:** Navigate bird through pipe gap → observe score
- **Expected:** +1 per pipe pair. Score visible during play.

### TEST-004 — High Score Persistence
- **Requirement:** REQ-03
- **Steps:** Play → game over with score → refresh page → check high score
- **Expected:** High score persists in localStorage across refreshes.

### TEST-005 — Touch Controls
- **Requirement:** REQ-04
- **Steps:** Tap start → tap during play → rapid taps → click with mouse
- **Expected:** All inputs trigger flaps instantly. No missed taps.

### TEST-006 — Game State Transitions
- **Requirement:** REQ-05
- **Steps:** Load → START screen → tap → PLAYING → crash → GAME_OVER → tap → restart
- **Expected:** Clean START→PLAYING→GAME_OVER→START loop.

### TEST-007 — Mobile Viewport
- **Requirement:** REQ-04, REQ-06
- **Steps:** Open on iPhone Safari → canvas fills screen → tap registers
- **Expected:** Responsive canvas, no scrollbars, touch works.

---

## Status Key
- [PENDING] Not yet tested
- [PASS] Behaviour validated
- [FAIL] Behaviour broken — defect manifest generated
- [BLOCKED] Cannot test — environmental issue

---

*Initialized: 2026-06-24 | Phase: MVP Core Engine (HTML5 Web)*
