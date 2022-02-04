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
    drawUIRect(XPos, YPos, width, length) {
        this.ctx.lineWidth = this.dflt / 135;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.rect(this.dflt / (1080 / XPos), this.dflt / (1080 / YPos), this.dflt / (1080 / width), this.dflt / (1080 / length));
        this.ctx.fill();
        this.ctx.stroke();
    }
    drawUICircle(XPos, YPos, CusID) {
        this.ctx.lineWidth = this.dflt / 135;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.dflt / (1080 / XPos), this.dflt / (1080 / YPos), this.dflt / (1080 / 35), 0, 2 * Math.PI, false);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.fillStyle = "black";
        this.ctx.font = `${this.dflt / 18}px Arial`;
        this.ctx.fillText(CusID, this.dflt / (1080 / XPos) - this.dflt / 54, this.dflt / (1080 / YPos) + this.dflt / 54);
    }
    drawFightUI() {
        this.drawUIRect(0, 0, 1920, 1080);
        this.drawUIRect(30, 30, 400, 175);
        this.drawUIRect(30, 225, 400, 825);
        this.drawUIRect(600, 125, 375, 200);
        this.drawUIRect(1400, 775, 375, 200);
        this.drawUICircle(100, 300, "A");
        this.drawUICircle(100, 480, "B");
        this.drawUICircle(100, 660, "C");
        this.drawUICircle(100, 840, "D");
        this.writeTextToCanvas("Je doet online een quiz die de toekomst voorspelt. Echter vraagt de quiz om de naam", 18, 960, 670);
        this.writeTextToCanvas("van je vader in te vullen en je geboortedatum. Wat doe je? ", 18, 860, 690);
        this.writeTextToCanvas("Ik vul de gegevens in en zie wat de toekomst brengt.", 16, 855, 730);
        this.writeTextToCanvas("Ik sluit de quiz en doe hier niet aan mee", 16, 810, 805);
    }
}
//# sourceMappingURL=Question.js.map