## MASTER UAT REGRESSION SAFETY NET

| Test ID | Component | Human User Flow Description | Status | Associated Script Path |
| --- | --- | --- | --- | --- |
| REG-001 | Bird Physics | Bird falls under gravity, tap provides upward impulse, rotation tilts on flap and descent | [PASS] | `./scripts/regression/test_bird_physics.py` |
| REG-002 | Pipe System | Pipes generate at right edge, scroll left at consistent speed, despawn after passing left edge | [PASS] | `./scripts/regression/test_pipe_scroll.py` |
| REG-003 | Scoring | Score increments by 1 per pipe pair passed, displayed during gameplay | [PASS] | `./scripts/regression/test_scoring.py` |
| REG-004 | High Score | Score persists via localStorage across page refreshes and app relaunches | [PASS] | `./scripts/regression/test_high_score.py` |
| REG-005 | Touch Controls | Single tap anywhere triggers flap, handles rapid successive taps, mouse click also works | [PASS] | `./scripts/regression/test_touch_controls.py` |
| REG-006 | State Machine | Clean transitions: START → PLAYING → GAME_OVER → START with proper resets | [PASS] | `./scripts/regression/test_state_machine.py` |
| REG-007 | Mobile Viewport | Canvas fills screen on iPhone Safari, no scrollbars, touch registers | [PASS] | `./scripts/regression/test_viewport.py` |
