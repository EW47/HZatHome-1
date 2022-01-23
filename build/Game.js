import KeyboardListener from './KeyboardListener.js';
export default class Game {
    canvas;
    ctx;
    keyBoardListener;
    player;
    enemy;
    question;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyBoardListener = new KeyboardListener();
        this.player = this.createPlayer('Me');
        this.enemy = this.createGmailEnemy('Gmail');
        this.question = this.createQuestion('GmailQuestion');
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
        this.processInput();
        requestAnimationFrame(this.loop);
    };
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);
        this.ctx.drawImage(this.enemy.img, this.enemy.xPos, this.enemy.yPos);
        this.ctx.drawImage(this.question.img, this.question.xPos, this.question.yPos);
        this.writeTextToCanvas('Score: 0', 36, 120, 50);
        this.writeTextToCanvas('Health: 100', 36, 1750, 50);
    }
    createPlayer(name) {
        return {
            name: name,
            img: Game.loadNewImage('./assets/img/character.png'),
            xPos: 600,
            yPos: 450,
            speed: 4,
        };
    }
    createGmailEnemy(name) {
        return {
            name: name,
            img: Game.loadNewImage('./assets/img/monster.png'),
            xPos: 650,
            yPos: 0,
        };
    }
    createQuestion(name) {
        return {
            name: name,
            img: Game.loadNewImage('./assets/img/question3.png'),
            xPos: -1000,
            yPos: 200,
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
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'black') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    drawUIRect(xCoordinate, yCoordinate, width, length, alignment = 'center', color = 'black') {
        this.ctx.lineWidth = 8;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.textAlign = alignment;
        this.ctx.beginPath();
        this.ctx.rect(1080 / xCoordinate, 1080 / yCoordinate, 1080 / width, 1080 / length);
        this.ctx.fill();
        this.ctx.stroke();
    }
    drawUICircle(xCoordinate, yCoordinate, CircleID) {
        this.ctx.lineWidth = 8;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(800 / xCoordinate, 800 / yCoordinate, 800 / 35, 0, 2 * Math.PI, false);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.fillStyle = "black";
        this.ctx.font = `px Arial`;
        this.ctx.fillText(CircleID, 1080 / xCoordinate, 1080 / 54, 1080 / yCoordinate + (1080 / 54));
    }
    processInput() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_E)) {
            this.question.xPos = 600;
        }
    }
}
//# sourceMappingURL=Game.js.map