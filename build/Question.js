import KeyboardListener from "./KeyboardListener";
export default class Question {
    canvas = document.getElementById("canvas");
    ctx = this.canvas.getContext("2d");
    dflt = this.canvas.height;
    question;
    keyBoardListener;
    static ctx;
    static dflt;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.question = this.createQuestion("GmailQuestion");
    }
    getQuestion() {
        return this.question;
    }
    setQuestion(question) {
        this.question = question;
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.question.img, this.question.xPos, this.question.yPos);
    }
    createQuestion(name) {
        return {
            name: name,
            img: Question.loadNewImage("./assets/img/question3.png"),
            xPos: -1000,
            yPos: 200,
        };
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static drawUIRect(options) {
        const { XPos: XinR } = options;
        const { YPos: YinR } = options;
        const { width: widthR } = options;
        const { length: lengthR } = options;
        this.ctx.lineWidth = this.dflt / 135;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.rect(this.dflt / (1080 / XinR), this.dflt / (1080 / YinR), this.dflt / (1080 / widthR), this.dflt / (1080 / lengthR));
        this.ctx.fill();
        this.ctx.stroke();
    }
    static drawUICircle(options) {
        const { XPos: XinC } = options;
        const { YPos: YinC } = options;
        const { CusID: id } = options;
        this.ctx.lineWidth = this.dflt / 135;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.dflt / (1080 / XinC), this.dflt / (1080 / YinC), this.dflt / (1080 / 35), 0, 2 * Math.PI, false);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.fillStyle = "black";
        this.ctx.font = `${this.dflt / 18}px Arial`;
        this.ctx.fillText(id, this.dflt / (1080 / XinC) - this.dflt / 54, this.dflt / (1080 / YinC) + this.dflt / 54);
    }
    static drawFightUI() {
        this.drawUIRect({
            XPos: 0,
            YPos: 0,
            width: 1920,
            length: 1080,
        });
        this.drawUIRect({
            XPos: 30,
            YPos: 30,
            width: 400,
            length: 175,
        });
        this.drawUIRect({
            XPos: 30,
            YPos: 225,
            width: 400,
            length: 825,
        });
        this.drawUIRect({
            XPos: 600,
            YPos: 125,
            width: 375,
            length: 200,
        });
        this.drawUIRect({
            XPos: 1400,
            YPos: 775,
            width: 375,
            length: 200,
        });
        this.drawUICircle({
            XPos: 100,
            YPos: 300,
            CusID: "A",
        });
        this.drawUICircle({
            XPos: 100,
            YPos: 480,
            CusID: "B",
        });
        this.drawUICircle({
            XPos: 100,
            YPos: 660,
            CusID: "C",
        });
        this.drawUICircle({
            XPos: 100,
            YPos: 840,
            CusID: "D",
        });
    }
    processInput() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_E)) {
            this.question.xPos = 600;
            Question.drawUIRect({
                XPos: 0,
                YPos: 0,
                width: 1920,
                length: 1080,
            });
            Question.drawUIRect({
                XPos: 30,
                YPos: 30,
                width: 400,
                length: 175,
            });
            Question.drawUIRect({
                XPos: 30,
                YPos: 225,
                width: 400,
                length: 825,
            });
            Question.drawUIRect({
                XPos: 600,
                YPos: 125,
                width: 375,
                length: 200,
            });
            Question.drawUIRect({
                XPos: 1400,
                YPos: 775,
                width: 375,
                length: 200,
            });
            Question.drawUICircle({
                XPos: 100,
                YPos: 300,
                CusID: "A",
            });
            Question.drawUICircle({
                XPos: 100,
                YPos: 480,
                CusID: "B",
            });
            Question.drawUICircle({
                XPos: 100,
                YPos: 660,
                CusID: "C",
            });
            Question.drawUICircle({
                XPos: 100,
                YPos: 840,
                CusID: "D",
            });
            this.writeTextToCanvas("Je doet online een quiz die de toekomst voorspelt. Echter vraagt de quiz om de naam", 18, 960, 670);
            this.writeTextToCanvas("van je vader in te vullen en je geboortedatum. Wat doe je? ", 18, 860, 690);
            this.writeTextToCanvas("Ik vul de gegevens in en zie wat de toekomst brengt.", 16, 855, 730);
            this.writeTextToCanvas("Ik sluit de quiz en doe hier niet aan mee", 16, 810, 805);
        }
    }
}
//# sourceMappingURL=Question.js.map