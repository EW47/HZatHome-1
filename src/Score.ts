export default class Score {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private score: number;

  private scoreBoard: Score[];

  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    this.scoreBoard = [];
    this.createScore(0);
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // when there are elements in the scoring items array
    if (this.scoreBoard.length !== 0) {
      // draw each scoring item
      this.scoreBoard.forEach((scoringItem) => {
        scoringItem.draw();
      });

      // write the current score
      this.writeTextToCanvas(
        `Score is: ${this.score}`,
        this.canvas.width / 2,
        40
      );
    }
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param fontSize - Font size in pixels
   * @param color - The color of the text
   * @param alignment - Where to align the text
   */
  private writeTextToCanvas(
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    fontSize: number = 20
  ): void {
    const ctx = this.canvas.getContext("2d");
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Method to create the Score
   *
   * @returns score - score object
   */
  public createScore(score: number): any {
    return {
      number: this.score,
    };
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(score: any): void {
    this.score = score;
  }
}
