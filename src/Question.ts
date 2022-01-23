import KeyboardListener from "./KeyboardListener";

export default class Question {

    private canvas: HTMLCanvasElement;

    private ctx: CanvasRenderingContext2D;

    private question: any;

    private keyBoardListener: KeyboardListener;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.question = this.createQuestion('GmailQuestion');
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
        // Get the canvas rendering context
        const ctx = this.canvas.getContext('2d');

        // Clear the entire canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //Draw Question
        this.ctx.drawImage(this.question.img, this.question.xPos, this.question.yPos);
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
            img: Question.loadNewImage('./assets/img/question3.png'),
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
        alignment: CanvasTextAlign = 'center',
        color: string = 'black',
      ): void {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
      }
    
      /**
       * Creates a rectangle for the UI
       *
       * @param xCoordinate - Horizontal coordinate in pixels
       * @param yCoordinate - Vertical coordinate in pixels
       * @param width - Width of rectangle
       * @param length - Length of rectangle
       * @param alignment - Where to align the text
       */
      public drawUIRect(
        xCoordinate: number,
        yCoordinate: number,
        width: number,
        length: number,
        alignment: CanvasTextAlign = 'center',
        color: string = 'black',
      ): void {
        this.ctx.lineWidth = 8;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "black";
        this.ctx.textAlign = alignment;
        this.ctx.beginPath();
        this.ctx.rect(1080 / xCoordinate, 1080 / yCoordinate, 1080 / width, 1080 / length);
        this.ctx.fill();
        this.ctx.stroke();
      }
    
      /**
       * Creates a circle used in the the UI
       *
       * @param xCoordinate - Horizontal coordinate in pixels
       * @param yCoordinate - Vertical coordinate in pixels
       * @param CircleID - Id of circle
       */
      public drawUICircle(
        xCoordinate: number,
        yCoordinate: number,
        CircleID: string,
      ): void {
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

    public processInput(): void {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_E)) {
        this.question.xPos = 600;
    
          //Draw Rectangle
          this.drawUIRect(1.8, 1.7, 1.5, 5);
    
          //Draw Circle
          this.drawUICircle(1.26, 1.1, '');
          this.drawUICircle(1.26, 1, '');
    
          //Questione
          this.writeTextToCanvas('Je doet online een quiz die de toekomst voorspelt. Echter vraagt de quiz om de naam', 18, 960, 670);
          this.writeTextToCanvas('van je vader in te  vullen en je geboortedatum. Wat doe je? ', 18, 860, 690);
    
          //Answer A
          this.writeTextToCanvas('Ik vul de gegevens in en zie wat de toekomst brengt.', 16, 855, 730);
    
          //Answer B
          this.writeTextToCanvas('Ik sluit de quiz en doe hier niet aan mee', 16, 810, 805);
        }
      }
}
