import KeyListener from './KeyListener.js';
import GameLoop from './GameLoop.js';

export default class Game {
  // Necessary canvas attributes
  private readonly canvas: HTMLCanvasElement;

  private readonly ctx: CanvasRenderingContext2D;

  private engine: GameLoop;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  // Player
  private player: any; // TODO switch to correct type

  private countdownToCoinSpawn: number;

  /**
   * State of the player.
   * Moving: player is moving on the bottom of the screen.
   * Hyperjump: player is jumping for a coin
   */
  private playerState: string;

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

    this.keyboard = new KeyListener();

    this.playerState = 'moving';

    // Create player
    this.player = {
      img: Game.loadNewImage('./assets/img/player.png'),
      xPos: 680,
      yPos: 950,
    };

    // Start the game cycle
    this.engine = new GameLoop(this);
    this.engine.start();
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    // Using the space bar to jump for a coin
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      this.playerState = 'hyperjump';
      this.player.yPos = 50;
    }

    // If de player wants to go down to the bottom of the screen press down arrow
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.playerState === 'hyperjump'
    ) {
      this.playerState = 'moving';
      this.player.yPos = this.canvas.height - 260;
    }
  }

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
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order)
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns `true` if the game should stop animation
   */
  public update(elapsed: number): void {
  this.movePlayer();
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   */
  private movePlayer() {
    // Player is automaticly moving from left to right
    if (this.playerState === 'moving') {
      if (
        this.player.xPos + this.player.img.width >= this.canvas.width || this.player.xPos < 0
      ) {
        this.player.xVel = -this.player.xVel;
      }
      this.player.xPos += this.player.xVel;
    }
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
    color: string = 'white',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
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
