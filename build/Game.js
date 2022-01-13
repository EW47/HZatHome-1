import KeyboardListener from './KeyboardListener.js';
export default class Game {
    canvas;
    ctx;
    keyBoardListener;
    player;
    enemy;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyBoardListener = new KeyboardListener();
        this.player = this.createPlayer('Me');
        this.enemy = this.createGmailEnemy('Gmail');
        this.loop();
    }
    loop = () => {
        this.render();
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this.player.xPos -= this.player.speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this.player.xPos += this.player.speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this.player.yPos -= this.player.speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this.player.yPos += this.player.speed;
        }
        requestAnimationFrame(this.loop);
    };
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);
        this.ctx.drawImage(this.enemy.img, this.enemy.xPos, this.enemy.yPos);
        this.writeTextToCanvas('Score: 0', 36, 120, 50);
        this.writeTextToCanvas('Health: 100', 36, 1750, 50);
    }
    createPlayer(name) {
        return {
            name: name,
            img: Game.loadNewImage('./assets/img/BackgroundEraser1642075722472_50.png'),
            xPos: 270,
            yPos: 450,
            speed: 4,
        };
    }
    createGmailEnemy(name) {
        return {
            name: name,
            img: Game.loadNewImage('./assets/img/20220113_095925_50.png'),
            xPos: 650,
            yPos: 0,
        };
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Game.js.map