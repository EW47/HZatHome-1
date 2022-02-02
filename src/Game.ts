import KeyboardListener from "./KeyboardListener.js";
import Question from "./Question.js";

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

  //HowToPlay
  private howtoplay: any;

  //IncorrectAnswer
  private incorrectAnswer: any;

  //CorrectAnswer
  private correctAnswer: any;

  //StartScreen
  private startScreen: any;

  /**
   * Initialize the game
   *
   * @param canvas - The canvas element that the game
   * should be rendered upon
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.keyBoardListener = new KeyboardListener();

    this.player = this.createPlayer("Me");
    this.enemy = this.createGmailEnemy("Gmail");
    this.howtoplay = this.createHowToPlay("howToPlay");
    this.incorrectAnswer = this.createIncorrectAnswer("incorrectAnswer");
    this.correctAnswer = this.createCorrectAnswer("correctAnswer");
    this.startScreen = this.createStartScreen("startScreen");

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
    // Clear the entire canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw Player
    this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);

    //Draw Enemy
    this.ctx.drawImage(this.enemy.img, this.enemy.xPos, this.enemy.yPos);

    //Draw HowToPlay
    this.ctx.drawImage(
      this.howtoplay.img,
      this.howtoplay.xPos,
      this.howtoplay.yPos
    );

    //Draw StartScreen
    this.ctx.drawImage(
      this.startScreen.img,
      this.startScreen.xPos,
      this.startScreen.yPos
    );
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
      img: Game.loadNewImage("./assets/img/character.png"),
      xPos: 850,
      yPos: 550,
      speed: 5,
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
      img: Game.loadNewImage("./assets/img/monster.png"),
      xPos: 650,
      yPos: 0,
    };
  }

  /**
   * Method to create a HowToPlay object
   *
   * @param name - name of the howtoplay
   * @returns howtoplay- howtoplay object
   */
  public createHowToPlay(name: string): any {
    return {
      name: name,
      img: Game.loadNewImage("./assets/img/howtoplay.png"),
      xPos: 1650,
      yPos: 80,
    };
  }

  /**
   * Method to create a GoodAnswer object
   *
   * @param name - name of the GoodAnswer
   * @returns howtoplay- GoodAnswer object
   */
  public createIncorrectAnswer(name: string): any {
    return {
      name: name,
      img: Game.loadNewImage("./assets/img/incorrectAnswer.png"),
      xPos: 600,
      yPos: 650,
    };
  }

  /**
   * Method to create a GoodAnswer object
   *
   * @param name - name of the GoodAnswer
   * @returns howtoplay- GoodAnswer object
   */
  public createCorrectAnswer(name: string): any {
    return {
      name: name,
      img: Game.loadNewImage("./assets/img/correctAnswer.png"),
      xPos: 600,
      yPos: 650,
    };
  }

  /**
   * Method to create a startScreen object
   *
   * @param name - name of the startScreen
   * @returns howtoplay- startScreen object
   */
  public createStartScreen(name: string): any {
    return {
      name: name,
      img: Game.loadNewImage("./assets/img/finalstartscreen1920.jpg"),
      xPos: 0,
      yPos: 0,
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
    alignment: CanvasTextAlign = "center",
    color: string = "black"
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Process inputs for different actions
   */
  public processInput(): void {
    //Draws the fight ui when 'E' has been pressed and moves the background and characters off screen.
    if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_E)) {
      // this.ctx.drawImage(
      //   this.enemy.img,
      //   this.enemy.xPos = 0,
      //   this.enemy.yPos = 0
      // );
      Question.drawFightUI();
    }

    //Shows main game screen when 'Space' has been pressed and moves the startscreen off screen.
    //Health and Score Ifs have been put in here so that you can't see your score and health on the intro screen.
    if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_SPACE)) {
      this.startScreen.xPos = -3000;

      //Deducts Health when 'A' has been pressed. Otherwise show default Health. Also draws the incorrectAnswer image.
      if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_A)) {
        this.writeTextToCanvas("Health: 90", 36, 1750, 50);
        this.ctx.drawImage(
          this.incorrectAnswer.img,
          this.incorrectAnswer.xPos,
          this.incorrectAnswer.yPos
        );
      } else {
        this.writeTextToCanvas("Health: 100", 36, 1750, 50);
      }

      //Adds 10 to Score when 'B' has been pressed. Otherwise show default Score. Also draws the correctAnswer image.
      if (this.keyBoardListener.isKeyUp(KeyboardListener.KEY_B)) {
        this.writeTextToCanvas("Score: 10", 36, 120, 50);
        this.ctx.drawImage(
          this.correctAnswer.img,
          this.correctAnswer.xPos,
          this.correctAnswer.yPos
        );
      } else {
        this.writeTextToCanvas("Score: 0", 36, 120, 50);
      }
    }
  }
}
