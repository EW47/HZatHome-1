import KeyboardListener from "./KeyboardListener.js";

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

  public static writeTextToCanvas(
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
  public static drawUIRect(
    XPos: number,
    YPos: number,
    width: number,
    length: number
  ): void {
    this.ctx.lineWidth = this.dflt / 135;
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.rect(
      this.dflt / (1080 / XPos),
      this.dflt / (1080 / YPos),
      this.dflt / (1080 / width),
      this.dflt / (1080 / length)
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
  public static drawUICircle(XPos: number, YPos: number, CusID: string): void {
    this.ctx.lineWidth = this.dflt / 135;
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(
      this.dflt / (1080 / XPos),
      this.dflt / (1080 / YPos),
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
      CusID,
      this.dflt / (1080 / XPos) - this.dflt / 54,
      this.dflt / (1080 / YPos) + this.dflt / 54
    );
  }

  public static drawFightUI(): void {
    // Background
    this.drawUIRect(0, 0, 1920, 1080);

    // Question Box
    this.drawUIRect(30, 30, 400, 175);

    // Anwser Box
    this.drawUIRect(30, 225, 400, 825);

    // Player Rectangle
    this.drawUIRect(600, 125, 375, 200);

    // Enemy Rectangle
    this.drawUIRect(1400, 775, 375, 200);

    // Anwser A Bubble
    this.drawUICircle(100, 300, "A");

    // Anwser B Bubble
    this.drawUICircle(100, 480, "B");

    // Anwser C Bubble
    this.drawUICircle(100, 660, "C");

    // Anwser D Bubble
    this.drawUICircle(100, 840, "D");

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
