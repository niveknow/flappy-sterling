const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const audio = new AudioManager();
const bird = new Bird();
const pipes = new PipeManager();
const score = new ScoreManager();

const STATE = { START: 0, PLAYING: 1, GAME_OVER: 2 };
let currentState = STATE.START;
let frameCount = 0;

function resetGame() {
    bird.reset();
    pipes.reset();
    score.reset();
    currentState = STATE.START;
}

function update(dt) {
    if (currentState === STATE.PLAYING) {
        bird.update();
        if (pipes.update(canvas.height, bird.x, bird.y, bird.size, () => {
            score.increment();
            audio.playScore();
        }) || bird.y + bird.size > canvas.height - 80 || bird.y - bird.size < 0) {
            audio.playHit();
            score.saveHighScore();
            currentState = STATE.GAME_OVER;
        }
    } else if (currentState === STATE.START) {
        bird.y = 284 + Math.sin(frameCount * 0.1) * 10;
    }
}

function draw() {
    // Sky
    let grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#4dc9f6');
    grad.addColorStop(1, '#87ceeb');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(0, canvas.height - 80, canvas.width, 80);
    ctx.fillStyle = '#73bf2e';
    ctx.fillRect(0, canvas.height - 80, canvas.width, 10);

    if (currentState === STATE.START) {
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Flappy Sterling", canvas.width / 2, 200);
        ctx.font = '20px Arial';
        ctx.fillText("Tap to Start", canvas.width / 2, 240);
        bird.draw(ctx);
    } else if (currentState === STATE.PLAYING) {
        pipes.draw(ctx, canvas.height);
        bird.draw(ctx);
        score.draw(ctx, canvas.width);
    } else {
        pipes.draw(ctx, canvas.height);
        bird.draw(ctx);
        score.drawGameOver(ctx, canvas.width, canvas.height);
    }
}

function gameLoop() {
    update();
    draw();
    frameCount++;
    requestAnimationFrame(gameLoop);
}

canvas.addEventListener('pointerdown', () => {
    audio.init();
    if (currentState === STATE.START) currentState = STATE.PLAYING;
    else if (currentState === STATE.GAME_OVER) resetGame();
    if (currentState === STATE.PLAYING) bird.flap(), audio.playFlap();
});

gameLoop();
