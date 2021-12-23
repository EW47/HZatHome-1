import KeyboardListener from './KeyboardListener.js';

export default class Game {
  // Necessary canvas attributes
  private readonly canvas: HTMLCanvasElement;

  private readonly ctx: CanvasRenderingContext2D;

  // KeyboardListener so the player can move
  private keyBoardListener: KeyboardListener;

  // Player
  private player: any; // TODO switch to correct type

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
    // draw player
    this.ctx.drawImage(this.player.img, this.player.xPos, this.player.yPos);
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
      img: Game.loadNewImage('./assets/img/player.png'),
      xPos: 680,
      yPos: 950,
      speed: 4,
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
}
