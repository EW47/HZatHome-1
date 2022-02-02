import KeyboardListener from "./KeyboardListener.js";

export default class Player {
  private healthImage: any;

  private health: object;

  private image: any;

  private speed: number;

  private xPosition: number;

  private yPosition: number;

  private name: string;

  private keyBoardListener: KeyboardListener;

  private score: object;

  public constructor(name: string) {
    this.createPlayer("me");
    this.changeCharacter("choose the character");
    this.keyBoardListener = new KeyboardListener();
  }

  public getHealthImage(): any {
    return this.healthImage;
  }

  public setHealthImage(healthImage: any): void {
    this.healthImage = healthImage;
  }

  public getHealth(): object {
    return this.health;
  }

  public setHealth(health: object): void {
    this.health = health;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public setSpeed(speed: number): void {
    this.speed = speed;
  }

  public getxPosition(): number {
    return this.xPosition;
  }

  public setxPosition(xPosition: number): void {
    this.xPosition = xPosition;
  }

  public getyPosition(): number {
    return this.yPosition;
  }

  public setyPosition(yPosition: number): void {
    this.yPosition = yPosition;
  }

  public getImage(): any {
    return this.image;
  }

  public setImage(image: any): void {
    this.image = image;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Method to move the player on the canvas
   */
  public move(): void {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
      this.setxPosition(this.getxPosition() - this.getSpeed());
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
      this.setxPosition(this.getxPosition() + this.getSpeed());
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
      this.setyPosition(this.getyPosition() - this.getSpeed());
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
      this.setyPosition(this.getyPosition() + this.getSpeed());
    }
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
      image: Player.loadNewImage("./assets/img/player1.png"),
      xPosition: 270,
      yPosition: 450,
      speed: 4,
    };
  }

  /**
   * Method to change the main Character you'd like to play as
   *
   * @param name - name of the player
   * @returns player - player object
   */
  public changeCharacter(name: string): any {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_1)) {
      return {
        name: name,
        image: Player.loadNewImage("./assets/img/Charter1.png"),
        xPosition: 270,
        yPosition: 450,
        speed: 4,
      };
    } else if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_2)) {
      return {
        name: name,
        image: Player.loadNewImage("./assets/img/Charter2.png"),
        xPosition: 270,
        yPosition: 450,
        speed: 4,
      };
    }
  }

  protected static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Generates a random integer number between min and max
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.randomInteger()` instead of `this.randomInteger()`.
   *
   * @param min - minimal time
   * @param max - maximal time
   * @returns a random integer number between min and max
   */
  protected static randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
