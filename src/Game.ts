import KeyboardListener from './KeyboardListener.js';

export default class Game {
  // Necessary canvas attributes
  private readonly canvas: HTMLCanvasElement;

  private readonly ctx: CanvasRenderingContext2D;

  // KeyboardListener so the player can move
  private keyBoardListener: KeyboardListener;

  // Player
  private player: any;

  //Enemy
  private enemy: any;

  //Question
  private question: any;

  /**
   * Initialize the game
   *
   * @param canvas - The canvas element that the game
   * should be rendered upon
   */
  public constructor(canvas: HTMLCanvasElement) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.keyBoardListener = new KeyboardListener();

    this.player = this.createPlayer('Me');
    this.enemy = this.createGmailEnemy('Gmail');
    this.question = this.createQuestion('GmailQuestion');

    // Start the game cycle
    this.loop();
  }

  /**
     * Method for the Game Loop
     */
  public loop = (): void => {

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

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Get the canvas rendering context
    const ctx = this.canvas.getContext('2d');
    // Clear the entire canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw Player
    this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);

    //Draw Enemy
    this.ctx.drawImage(this.enemy.img, this.enemy.xPos, this.enemy.yPos);

    //Draw Question
    this.ctx.drawImage(this.question.img, this.question.xPos, this.question.yPos);

    //Score
    this.writeTextToCanvas('Score: 0', 36, 120, 50);

    //Health
    this.writeTextToCanvas('Health: 100', 36, 1750, 50);
  }

  /**
   * Method to create a player object
   *
   * @param name - name of the player
   * @returns player - player object
   */
  public createPlayer(name: string): any {
    return {
      name: name,
      img: Game.loadNewImage('./assets/img/character.png'),
      xPos: 600,
      yPos: 450,
      speed: 4,
    };
  }

  /**
     * Method to create a enemy object
     *
     * @param name - name of the enemy
     * @returns enemy- enemy object
     */
  public createGmailEnemy(name: string): any {
    return {
      name: name,
      img: Game.loadNewImage('./assets/img/monster.png'),
      xPos: 650,
      yPos: 0,
    };
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
      img: Game.loadNewImage('./assets/img/question3.png'),
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

  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
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

      // //Draw Rectangle
      // this.drawUIRect(1.8, 1.7, 1.5, 5);

      // //Draw Circle
      // this.drawUICircle(1.26, 1.1, '');
      // this.drawUICircle(1.26, 1, '');

      // //Questione
      // this.writeTextToCanvas('Je doet online een quiz die de toekomst voorspelt. Echter vraagt de quiz om de naam', 18, 960, 670);
      // this.writeTextToCanvas('van je vader in te  vullen en je geboortedatum. Wat doe je? ', 18, 860, 690);

      // //Answer A
      // this.writeTextToCanvas('Ik vul de gegevens in en zie wat de toekomst brengt.', 16, 855, 730);

      // //Answer B
      // this.writeTextToCanvas('Ik sluit de quiz en doe hier niet aan mee', 16, 810, 805);
    }
  }
}
