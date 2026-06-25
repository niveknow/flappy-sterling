class ScoreManager {
    constructor() {
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('flappy-sterling-highscore') || '0');
    }
    increment() {
        this.score++;
    }
    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('flappy-sterling-highscore', this.highScore.toString());
        }
    }
    draw(ctx, canvasWidth) {
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'center';
        ctx.strokeText(this.score.toString(), canvasWidth / 2, 50);
        ctx.fillText(this.score.toString(), canvasWidth / 2, 50);
    }
    drawGameOver(ctx, canvasWidth, canvasHeight) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Arial';
        ctx.fillText("Game Over", canvasWidth / 2, canvasHeight / 2 - 40);
        ctx.fillText("Score: " + this.score, canvasWidth / 2, canvasHeight / 2);
        ctx.fillText("Best: " + this.highScore, canvasWidth / 2, canvasHeight / 2 + 40);
        ctx.fillText("Tap to Restart", canvasWidth / 2, canvasHeight / 2 + 80);
    }
    reset() {
        this.score = 0;
    }
}
