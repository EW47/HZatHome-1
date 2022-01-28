const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dflt = canvas.height;
const body = document.body;
function drawUIRect(options) {
    const { XPos: XinR } = options;
    const { YPos: YinR } = options;
    const { width: widthR } = options;
    const { length: lengthR } = options;
    ctx.lineWidth = dflt / 135;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(dflt / (1080 / XinR), dflt / (1080 / YinR), dflt / (1080 / widthR), dflt / (1080 / lengthR));
    ctx.fill();
    ctx.stroke();
}
function drawUICircle(options) {
    const { XPos: XinC } = options;
    const { YPos: YinC } = options;
    const { CusID: id } = options;
    ctx.lineWidth = dflt / 135;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(dflt / (1080 / XinC), dflt / (1080 / YinC), dflt / (1080 / 35), 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = `${dflt / 18}px Arial`;
    ctx.fillText(id, dflt / (1080 / XinC) - dflt / 54, dflt / (1080 / YinC) + dflt / 54);
}
canvas.onclick = function (e) {
    let r = canvas.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;
    if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 260) && y < dflt / (1080 / 260) + dflt / 14.25) {
        alert("A");
    }
    else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 440) && y < dflt / (1080 / 440) + dflt / 14.25) {
        alert("B");
    }
    else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 620) && y < dflt / (1080 / 620) + dflt / 14.25) {
        alert("C");
    }
    else if (x > dflt / (1080 / 60) && x < dflt / (1080 / 60) + dflt / 14.25 &&
        y > dflt / (1080 / 800) && y < dflt / (1080 / 800) + dflt / 14.25) {
        alert("D");
    }
};
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
//# sourceMappingURL=Test.js.map