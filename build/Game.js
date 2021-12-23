import KeyboardListener from './KeyboardListener.js';
export default class Game {
    canvas;
    ctx;
    keyBoardListener;
    player;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyBoardListener = new KeyboardListener();
        this.player = this.createPlayer('Me');
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
    }
    createPlayer(name) {
        return {
            name: name,
            img: Game.loadNewImage('./assets/img/player.png'),
            xPos: 270,
            yPos: 450,
            speed: 4,
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
}
//# sourceMappingURL=Game.js.map