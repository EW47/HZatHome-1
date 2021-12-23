import KeyListener from './KeyListener.js';
import GameLoop from './GameLoop.js';
export default class Game {
    canvas;
    ctx;
    engine;
    keyboard;
    player;
    countdownToCoinSpawn;
    playerState;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyboard = new KeyListener();
        this.playerState = 'moving';
        this.player = {
            img: Game.loadNewImage('./assets/img/player.png'),
            xPos: 680,
            yPos: 950,
        };
        this.engine = new GameLoop(this);
        this.engine.start();
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.playerState = 'hyperjump';
            this.player.yPos = 50;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.playerState === 'hyperjump') {
            this.playerState = 'moving';
            this.player.yPos = this.canvas.height - 260;
        }
    }
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);
    }
    update(elapsed) {
        this.movePlayer();
    }
    movePlayer() {
        if (this.playerState === 'moving') {
            if (this.player.xPos + this.player.img.width >= this.canvas.width || this.player.xPos < 0) {
                this.player.xVel = -this.player.xVel;
            }
            this.player.xPos += this.player.xVel;
        }
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map