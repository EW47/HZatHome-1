export default class Monster {

    private type: string;

    private health: number;

    private attack: number;

    private image: HTMLImageElement;

    public constructor(type: string, health: number, attack: number) {

        this.createGmailEnemy('Gmail');
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
     * Method to create a enemy object
     *
     * @param name - name of the enemy
     * @returns enemy- enemy object
     */
   public createGmailEnemy(name: string): any {
    return {
      name: name,
      img: Monster.loadNewImage('./assets/img/20220113_095925_50.png'),
      xPos: 650,
      yPos: 0,
    };
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
