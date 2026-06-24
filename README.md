# Flappy Sterling

A Flappy Bird clone built with HTML5 Canvas and JavaScript — playable in any modern web browser. Target: iPhone Safari via responsive touch controls.

## Prerelease Build

> **Hosted at:** `http://localhost:8082` (local dev server)
> **Status:** MVP in active development

## Tech Stack

- **Runtime:** HTML5 Canvas + Vanilla JavaScript (no frameworks)
- **Rendering:** 2D Canvas API at 60 FPS via `requestAnimationFrame`
- **Controls:** Touch (tap) + Mouse (click) — dual input binding
- **Audio:** Web Audio API (procedural sound effects, no external files)
- **Persistence:** `localStorage` for high score tracking

## Architecture

```
src/
├── index.html          # Shell page with canvas + meta tags
├── game.js             # Main game loop, state machine, orchestration
├── bird.js             # Bird entity — physics, flap, rotation
├── pipes.js            # Pipe pair generation, scrolling, despawning
├── score.js            # Score display, high score persistence
└── audio.js            # Procedural sound effects (flap, score, hit)
assets/
└── (all procedural — no external assets needed)
```

## Game States

| State | Behaviour |
|-------|-----------|
| **START** | Title screen. Bird bobs in centre. "Tap to Start" prompt. |
| **PLAYING** | Active physics loop. Bird falls under gravity. Tap to flap. Pipes scroll from right. Score increments on pipe pass. |
| **GAME_OVER** | Bird falls off screen. Score + high score displayed. "Tap to Restart" prompt. |

## Controls

- **Desktop:** Click or Spacebar
- **Mobile:** Tap anywhere on the canvas
- Latency: Sub-frame on `pointerdown` / `touchstart` events

## Development

```bash
# Serve locally
python3 -m http.server 8082 --directory src/

# Open in browser
open http://localhost:8082
```
