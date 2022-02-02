import KeyboardListener from "./KeyboardListener.js";
import Question from "./Question.js";
export default class Game {
    canvas;
    ctx;
    keyBoardListener;
    player;
    enemy;
    question;
    howtoplay;
    incorrectAnswer;
    correctAnswer;
    startScreen;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.keyBoardListener = new KeyboardListener();
        this.player = this.createPlayer("Me");
        this.enemy = this.createGmailEnemy("Gmail");
        this.howtoplay = this.createHowToPlay("howToPlay");
        this.incorrectAnswer = this.createIncorrectAnswer("incorrectAnswer");
        this.correctAnswer = this.createCorrectAnswer("correctAnswer");
        this.startScreen = this.createStartScreen("startScreen");
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
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);
        this.ctx.drawImage(this.enemy.img, this.enemy.xPos, this.enemy.yPos);
        this.ctx.drawImage(this.howtoplay.img, this.howtoplay.xPos, this.howtoplay.yPos);
        this.ctx.drawImage(this.startScreen.img, this.startScreen.xPos, this.startScreen.yPos);
    }
    createPlayer(name) {
        return {
            name: name,
            img: Game.loadNewImage("./assets/img/character.png"),
            xPos: 850,
            yPos: 550,
            speed: 5,
        };
    }
    createGmailEnemy(name) {
        return {
            name: name,
            img: Game.loadNewImage("./assets/img/monster.png"),
            xPos: 650,
            yPos: 0,
        };
    }
    createHowToPlay(name) {
        return {
            name: name,
            img: Game.loadNewImage("./assets/img/howtoplay.png"),
            xPos: 1650,
            yPos: 80,
        };
    }
    createIncorrectAnswer(name) {
        return {
            name: name,
            img: Game.loadNewImage("./assets/img/incorrectAnswer.png"),
            xPos: 600,
            yPos: 650,
        };
    }
    createCorrectAnswer(name) {
        return {
            name: name,
            img: Game.loadNewImage("./assets/img/correctAnswer.png"),
            xPos: 600,
            yPos: 650,
        };
    }
    createStartScreen(name) {
        return {
            name: name,
            img: Game.loadNewImage("./assets/img/finalstartscreen1920.jpg"),
            xPos: 0,
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
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    processInput() {
        if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_E)) {
            Question.drawFightUI();
        }
        if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_SPACE)) {
            this.startScreen.xPos = -3000;
            if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_A)) {
                this.writeTextToCanvas("Health: 90", 36, 1750, 50);
                this.ctx.drawImage(this.incorrectAnswer.img, this.incorrectAnswer.xPos, this.incorrectAnswer.yPos);
            }
            else {
                this.writeTextToCanvas("Health: 100", 36, 1750, 50);
            }
            if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_B)) {
                this.writeTextToCanvas("Score: 10", 36, 120, 50);
                this.ctx.drawImage(this.correctAnswer.img, this.correctAnswer.xPos, this.correctAnswer.yPos);
            }
            else {
                this.writeTextToCanvas("Score: 0", 36, 120, 50);
            }
        }
    }
}
//# sourceMappingURL=Game.js.map