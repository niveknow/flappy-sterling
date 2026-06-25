class Bird {
    constructor() {
        this.img = new Image();
        this.img.src = 'assets/bird_avatar.png';
        this.imgLoaded = false;
        this.img.onload = () => { this.imgLoaded = true; };
        this.reset();
        this.GRAVITY = 0.4;
        this.FLAP_VELOCITY = -7;
        this.size = 15;
        this.imgSize = 30;
    }
    reset() {
        this.x = 80;
        this.y = 284;
        this.vy = 0;
        this.rotation = 0;
    }
    flap() {
        this.vy = this.FLAP_VELOCITY;
        this.rotation = -0.3;
    }
    update() {
        this.vy += this.GRAVITY;
        this.y += this.vy;
        this.rotation += 0.05;
        if (this.rotation > 0.5) this.rotation = 0.5;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        if (this.imgLoaded) {
            ctx.drawImage(this.img, -this.imgSize / 2, -this.imgSize / 2, this.imgSize, this.imgSize);
        } else {
            ctx.fillStyle = '#ffcc00';
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(5, -5, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(7, -5, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}
