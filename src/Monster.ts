export default abstract class Monster {

    private type: string;

    private health: number;

    private attack: number;

    private image: HTMLImageElement;

    public constructor(type: string, health: number, attack: number) {

    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getHealth(): number {
        return this.health;
    }

    public setHealth(health: number): void {
        this.health = health;
    }

    public getAttack(): number {
        return this.attack;
    }

    public setAttack(attack: number): void {
        this.attack = attack;
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }

    protected setImage(image: HTMLImageElement): void {
        this.image = image;
    }

    /**
   * Method to create a monster object
   *
   * @param name - name of the monster
   * @returns monster - monster object
   */
   public createMonster(name: string): any {
    return {
      name: name,
      img: Monster.loadNewImage('./assets/img/PhishingMonster.png'),
      xPos: 270,
      yPos: 450,
      speed: 4,
    };
  }

  /**
   * Abstract method to move item
   */
  public abstract move(): void;

  /**
   * Abstract method to determine if item is out of canvas
   *
   * @param canvasWidth width of the canvas
   * @param canvasHeight height of the canvas
   */
  public abstract outOfCanvas(canvasWidth: number, canvasHeight: number): void;

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   * @param source The address or URL of the a media resource that is to be loaded
   * @returns an HTMLImageElement with the source as its src attribute
   */
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
