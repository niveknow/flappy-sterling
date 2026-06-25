class PipeManager {
    constructor() {
        this.PIPE_WIDTH = 50;
        this.PIPE_GAP = 140;
        this.PIPE_SPACING = 200;
        this.SCROLL_SPEED = 2;
        this.pipes = [];
    }
    reset() {
        this.pipes = [];
    }
    update(canvasHeight, birdX, birdY, birdRadius, onScore) {
        if (this.pipes.length === 0 || this.pipes[this.pipes.length - 1].x < 320 - this.PIPE_SPACING) {
            const topHeight = Math.random() * (canvasHeight - 150 - this.PIPE_GAP) + 50;
            this.pipes.push({ x: 320, topHeight: topHeight, scored: false });
        }
        for (let i = this.pipes.length - 1; i >= 0; i--) {
            const p = this.pipes[i];
            p.x -= this.SCROLL_SPEED;
            if (p.x + this.PIPE_WIDTH < 0) this.pipes.splice(i, 1);
            if (!p.scored && p.x + this.PIPE_WIDTH < birdX - birdRadius) {
                p.scored = true;
                onScore();
            }
            if (birdX + birdRadius > p.x && birdX - birdRadius < p.x + this.PIPE_WIDTH) {
                if (birdY - birdRadius < p.topHeight || birdY + birdRadius > p.topHeight + this.PIPE_GAP) {
                    return true; // Collision
                }
            }
        }
        return false;
    }
    draw(ctx, canvasHeight) {
        ctx.fillStyle = '#73bf2e';
        ctx.strokeStyle = '#558b2f';
        ctx.lineWidth = 2;
        for (const p of this.pipes) {
            ctx.fillRect(p.x, 0, this.PIPE_WIDTH, p.topHeight);
            ctx.strokeRect(p.x, 0, this.PIPE_WIDTH, p.topHeight);
            ctx.fillRect(p.x - 5, p.topHeight - 20, this.PIPE_WIDTH + 10, 20);
            ctx.strokeRect(p.x - 5, p.topHeight - 20, this.PIPE_WIDTH + 10, 20);
            ctx.fillRect(p.x, p.topHeight + this.PIPE_GAP, this.PIPE_WIDTH, canvasHeight - (p.topHeight + this.PIPE_GAP));
            ctx.strokeRect(p.x, p.topHeight + this.PIPE_GAP, this.PIPE_WIDTH, canvasHeight - (p.topHeight + this.PIPE_GAP));
            ctx.fillRect(p.x - 5, p.topHeight + this.PIPE_GAP, this.PIPE_WIDTH + 10, 20);
            ctx.strokeRect(p.x - 5, p.topHeight + this.PIPE_GAP, this.PIPE_WIDTH + 10, 20);
        }
    }
}
