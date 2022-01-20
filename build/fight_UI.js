export default class UI {
    canvase = document.getElementById("canvas");
    ctxe = this.canvase.getContext("2d");
    dflt = this.canvase.height;
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
        this.ctxe.fillText(id, this.dflt / (1080 / XinC) - (this.dflt / 54), this.dflt / (1080 / YinC) + (this.dflt / 54));
        const body = document.body;
        const div = document.createElement('div');
        div.setAttribute('id', id);
        div.style.position = 'absolute';
        div.style.width = `${this.dflt / 14.25}px`;
        div.style.height = `${this.dflt / 14.25}px`;
        div.style.left = `${this.dflt / (1080 / XinC) - (this.dflt / 54)}px`;
        div.style.top = `${this.dflt / (1080 / YinC) - (this.dflt / 54)}px`;
        body.append(div);
    }
}
//# sourceMappingURL=fight_UI.js.map