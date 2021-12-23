export default class Game {
 
    private canvas: HTMLCanvasElement;
    
    private ctx: CanvasRenderingContext2D;

      /**
   * Initialize the Game class
   *
   * @param canvasId id of the canvas
   */
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
  }

}