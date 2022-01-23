import KeyboardListener from './KeyboardListener.js';
import Monster from './Monster.js';
import Player from './Player.js';
export default class Game {
    canvas;
    ctx;
    keyBoardListener;
    Player;
    Monster;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyBoardListener = new KeyboardListener();
        this.Player = new Player('Me');
        this.Monster = new Monster('Gmail', 100, 20);
        this.loop();
    }
    loop = () => {
        this.render();
        requestAnimationFrame(this.loop);
    };
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.Player.img, this.Player.xPos, this.Player.yPos);
        this.ctx.drawImage(this.Monster.img, this.Monster.xPos, this.Monster.yPos);
        this.drawUIRect(1.8, 1.7, 1.5, 5);
        this.drawUICircle(1.26, 1.1, '');
        this.drawUICircle(1.26, 1, '');
        this.writeTextToCanvas('Je doet online een quiz die de toekomst voorspelt. Echter vraagt de quiz om de naam', 18, 960, 670);
        this.writeTextToCanvas('van je vader in te  vullen en je geboortedatum. Wat doe je? ', 18, 860, 690);
        this.writeTextToCanvas('Ik vul de gegevens in en zie wat de toekomst brengt.', 16, 855, 730);
        this.writeTextToCanvas('Ik sluit de quiz en doe hier niet aan mee', 16, 810, 805);
        this.writeTextToCanvas('Score: 0', 36, 120, 50);
        this.writeTextToCanvas('Health: 100', 36, 1750, 50);
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
}
//# sourceMappingURL=Game.js.map