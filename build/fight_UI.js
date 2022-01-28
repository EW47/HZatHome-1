function drawWholeUI() {
    drawUIRect({
        XPos: 0,
        YPos: 0,
        width: 1920,
        length: 1080,
    });
    drawUIRect({
        XPos: 30,
        YPos: 30,
        width: 400,
        length: 175,
    });
    drawUIRect({
        XPos: 30,
        YPos: 225,
        width: 400,
        length: 825,
    });
    drawUIRect({
        XPos: 600,
        YPos: 125,
        width: 375,
        length: 200,
    });
    drawUIRect({
        XPos: 1400,
        YPos: 775,
        width: 375,
        length: 200,
    });
    drawUICircle({
        XPos: 100,
        YPos: 300,
        CusID: "A",
    });
    drawUICircle({
        XPos: 100,
        YPos: 480,
        CusID: "B",
    });
    drawUICircle({
        XPos: 100,
        YPos: 660,
        CusID: "C",
    });
    drawUICircle({
        XPos: 100,
        YPos: 840,
        CusID: "D",
    });
}
canvas.onclick = function (e) {
    let r = canvas.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    if (x > dflt / (1080 / 60) &&
        x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 260) &&
        y < dflt / (1080 / 260) + dflt / 14.25) {
        alert("A");
    }
    else if (x > dflt / (1080 / 60) &&
        x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 440) &&
        y < dflt / (1080 / 440) + dflt / 14.25) {
        alert("B");
    }
    else if (x > dflt / (1080 / 60) &&
        x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 620) &&
        y < dflt / (1080 / 620) + dflt / 14.25) {
        alert("C");
    }
    else if (x > dflt / (1080 / 60) &&
        x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 800) &&
        y < dflt / (1080 / 800) + dflt / 14.25) {
        alert("D");
    }
};
export default class UI {
    canvas = (document.getElementById("canvas"));
    ctxe = this.canvas.getContext("2d");
    dflt = this.canvas.height;
    body = document.body;
    drawUIRect(options) {
        const { XPos: XinR } = options;
        const { YPos: YinR } = options;
        const { width: widthR } = options;
        const { length: lengthR } = options;
        this.ctxe.lineWidth = this.dflt / 135;
        this.ctxe.fillStyle = "white";
        this.ctxe.strokeStyle = "black";
        this.ctxe.beginPath();
        this.ctxe.rect(this.dflt / (1080 / XinR), this.dflt / (1080 / YinR), this.dflt / (1080 / widthR), this.dflt / (1080 / lengthR));
        this.ctxe.fill();
        this.ctxe.stroke();
    }
    drawUICircle(options) {
        const { XPos: XinC } = options;
        const { YPos: YinC } = options;
        const { CusID: id } = options;
        this.ctxe.lineWidth = this.dflt / 135;
        this.ctxe.fillStyle = "white";
        this.ctxe.strokeStyle = "black";
        this.ctxe.beginPath();
        this.ctxe.arc(this.dflt / (1080 / XinC), this.dflt / (1080 / YinC), this.dflt / (1080 / 35), 0, 2 * Math.PI, false);
        this.ctxe.stroke();
        this.ctxe.fill();
        this.ctxe.fillStyle = "black";
        this.ctxe.font = `${this.dflt / 18}px Arial`;
        this.ctxe.fillText(id, this.dflt / (1080 / XinC) - this.dflt / 54, this.dflt / (1080 / YinC) + this.dflt / 54);
    }
}
//# sourceMappingURL=fight_UI.js.map