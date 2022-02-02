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

import KeyboardListener from "./KeyboardListener";

export default class Question {
  private canvas = <HTMLCanvasElement>document.getElementById("canvas");
  private ctx = this.canvas.getContext("2d");
  private dflt: number = this.canvas.height;

  private question: any;

  private keyBoardListener: KeyboardListener;
  static ctx: any;
  static dflt: number;

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.question = this.createQuestion("GmailQuestion");
  }

  public getQuestion(): any {
    return this.question;
  }

  public setQuestion(question: any): void {
    this.question = question;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the entire canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw Question
    this.ctx.drawImage(
      this.question.img,
      this.question.xPos,
      this.question.yPos
    );
  }

  /**
   * Method to create a question object
   *
   * @param name - name of the enemy
   * @returns question- question object
   */
  public createQuestion(name: string): any {
    return {
      name: name,
      img: Question.loadNewImage("./assets/img/question3.png"),
      xPos: -1000,
      yPos: 200,
    };
  }

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = "center",
    color: string = "black"
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Creates a rectangle for the UI
   *
   * @param XPos - Horizontal coordinate in pixels
   * @param YPos - Vertical coordinate in pixels
   * @param width - Width of rectangle
   * @param length - Length of rectangle
   */
  public static drawUIRect(options: RectangleOptions) {
    const { XPos: XinR } = options;
    const { YPos: YinR } = options;
    const { width: widthR } = options;
    const { length: lengthR } = options;

    this.ctx.lineWidth = this.dflt / 135;
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.rect(
      this.dflt / (1080 / XinR),
      this.dflt / (1080 / YinR),
      this.dflt / (1080 / widthR),
      this.dflt / (1080 / lengthR)
    );
    this.ctx.fill();
    this.ctx.stroke();
  }

  /**
   * Creates a circle used in the the UI
   *
   * @param XPos - Horizontal coordinate in pixels
   * @param YPos - Vertical coordinate in pixels
   * @param CusID - Id of circle
   */
  public static drawUICircle(options: CircleOptions) {
    const { XPos: XinC } = options;
    const { YPos: YinC } = options;
    const { CusID: id } = options;

    this.ctx.lineWidth = this.dflt / 135;
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(
      this.dflt / (1080 / XinC),
      this.dflt / (1080 / YinC),
      this.dflt / (1080 / 35),
      0,
      2 * Math.PI,
      false
    );
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.font = `${this.dflt / 18}px Arial`;
    this.ctx.fillText(
      id,
      this.dflt / (1080 / XinC) - this.dflt / 54,
      this.dflt / (1080 / YinC) + this.dflt / 54
    );
  }

  public static drawFightUI() {
    // Background
    this.drawUIRect({
      XPos: 0,
      YPos: 0,
      width: 1920,
      length: 1080,
    });

    // Question Box
    this.drawUIRect({
      XPos: 30,
      YPos: 30,
      width: 400,
      length: 175,
    });

    // Anwser Box
    this.drawUIRect({
      XPos: 30,
      YPos: 225,
      width: 400,
      length: 825,
    });

    // Player Rectangle
    this.drawUIRect({
      XPos: 600,
      YPos: 125,
      width: 375,
      length: 200,
    });

    // Enemy Rectangle
    this.drawUIRect({
      XPos: 1400,
      YPos: 775,
      width: 375,
      length: 200,
    });

    // Anwser A Bubble
    this.drawUICircle({
      XPos: 100,
      YPos: 300,
      CusID: "A",
    });

    // Anwser B Bubble
    this.drawUICircle({
      XPos: 100,
      YPos: 480,
      CusID: "B",
    });

    // Anwser C Bubble
    this.drawUICircle({
      XPos: 100,
      YPos: 660,
      CusID: "C",
    });

    // Anwser D Bubble
    this.drawUICircle({
      XPos: 100,
      YPos: 840,
      CusID: "D",
    });
  }

  public processInput(): void {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_E)) {
      this.question.xPos = 600;

      // Background
      Question.drawUIRect({
        XPos: 0,
        YPos: 0,
        width: 1920,
        length: 1080,
      });

      // Question Box
      Question.drawUIRect({
        XPos: 30,
        YPos: 30,
        width: 400,
        length: 175,
      });

      // Anwser Box
      Question.drawUIRect({
        XPos: 30,
        YPos: 225,
        width: 400,
        length: 825,
      });

      // Player Rectangle
      Question.drawUIRect({
        XPos: 600,
        YPos: 125,
        width: 375,
        length: 200,
      });

      // Enemy Rectangle
      Question.drawUIRect({
        XPos: 1400,
        YPos: 775,
        width: 375,
        length: 200,
      });

      // Anwser A Bubble
      Question.drawUICircle({
        XPos: 100,
        YPos: 300,
        CusID: "A",
      });

      // Anwser B Bubble
      Question.drawUICircle({
        XPos: 100,
        YPos: 480,
        CusID: "B",
      });

      // Anwser C Bubble
      Question.drawUICircle({
        XPos: 100,
        YPos: 660,
        CusID: "C",
      });

      // Anwser D Bubble
      Question.drawUICircle({
        XPos: 100,
        YPos: 840,
        CusID: "D",
      });

      //Questione
      this.writeTextToCanvas(
        "Je doet online een quiz die de toekomst voorspelt. Echter vraagt de quiz om de naam",
        18,
        960,
        670
      );
      this.writeTextToCanvas(
        "van je vader in te vullen en je geboortedatum. Wat doe je? ",
        18,
        860,
        690
      );

      //Answer A
      this.writeTextToCanvas(
        "Ik vul de gegevens in en zie wat de toekomst brengt.",
        16,
        855,
        730
      );

      //Answer B
      this.writeTextToCanvas(
        "Ik sluit de quiz en doe hier niet aan mee",
        16,
        810,
        805
      );
    }
  }
}
