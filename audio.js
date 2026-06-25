class AudioManager {
    constructor() {
        this.ctx = null;
    }
    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    playTone(freq, type, duration) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration / 1000);
        osc.start();
        osc.stop(this.ctx.currentTime + duration / 1000);
    }
    playFlap() { this.playTone(400, 'sine', 80); }
    playScore() { this.playTone(800, 'sine', 100); }
    playHit() { this.playTone(150, 'sawtooth', 150); }
}
