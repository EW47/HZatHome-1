interface RectangleOptions {
  XPos: number;
  YPos: number;
  length: number;
  width: number;
}

interface CircleOptions {
  XPos: number;
  YPos: number;
  CusID: string;
}

export default class UI {

    private readonly canvase = <HTMLCanvasElement>document.getElementById("canvas");
    private readonly ctxe = this.canvase.getContext("2d");
    private readonly dflt: number = this.canvase.height;

    /**
     * Creates a rectangle for the ui
     *
     * @param options options for the rectangle
     * @returns A drawn rectangle
     */
    public drawUIRect(options : RectangleOptions) {
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
    
    /**
     * Creates a circle for the ui
     *
     * @param options options for the circle
     * @returns A drawn circle
     */
    public drawUICircle(options : CircleOptions) {
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
    this.ctxe.font = `${this.dflt/18}px Arial`;
    this.ctxe.fillText(id, this.dflt / (1080 / XinC) - (this.dflt / 54), this.dflt / (1080 / YinC) + (this.dflt / 54));

    const body = document.body;
    const div = document.createElement('div');
    div.setAttribute('id', id)
    div.style.position = 'absolute'
    div.style.width = `${this.dflt / 14.25}px`;
    div.style.height = `${this.dflt / 14.25}px`;
    div.style.left = `${this.dflt / (1080 / XinC) - (this.dflt / 54)}px`;
    div.style.top = `${this.dflt / (1080 / YinC)  - (this.dflt / 54)}px`;
    body.append(div);
    }
    
    // // Deze werkt alleen op een aspect ratio van 16:9
    
    // // Background
    // drawUIRect({
    //   XPos: 0,
    //   YPos: 0,
    //   width: 1920,
    //   length: 1080,
    // });
    
    // // Question Box
    // drawUIRect({
    //   XPos: 30,
    //   YPos: 30,
    //   width: 400,
    //   length: 175,
    // });
    
    // // Anwser Box
    // drawUIRect({
    //   XPos: 30,
    //   YPos: 225,
    //   width: 400,
    //   length: 825,
    // });
    
    // // Player Rectangle
    // drawUIRect({
    //   XPos: 600,
    //   YPos: 125,
    //   width: 375,
    //   length: 200,
    // });
    
    // // Enemy Rectangle
    // drawUIRect({
    //   XPos: 1400,
    //   YPos: 775,
    //   width: 375,
    //   length: 200,
    // });
    
    // // Anwser A Bubble
    // drawUICircle({
    //   XPos: 100,
    //   YPos: 300,
    //   CusID: 'A'
    // });
    
    // // Anwser B Bubble
    // drawUICircle({
    //   XPos: 100,
    //   YPos: 480,
    //   CusID: 'B'
    // });
    
    // // Anwser C Bubble
    // drawUICircle({
    //   XPos: 100,
    //   YPos: 660,
    //   CusID: 'C'
    // });
    
    // // Anwser D Bubble
    // drawUICircle({
    //   XPos: 100,
    //   YPos: 840,
    //   CusID: 'D'
    // });
    
    // // ctxe.clearRect(0, 0, canvase.width, dflt);
}