import KeyboardListener from "./KeyboardListener";

export default class Monster {
  private type: string;

  private health: number;

  private attack: number;

  private image: HTMLImageElement;

  private keyBoardListener: KeyboardListener;

  public constructor(type: string, health: number, attack: number) {
    this.createGmailEnemy("Gmail");
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
      img: Monster.loadNewImage("./assets/img/GmailMonster.png"),
      xPos: 650,
      yPos: 0,
    };
  }

  /**
   * Method to change the Monster you're fighting against
   *
   * @param name - name of the Monster
   * @returns monster - monster object
   */
  public changeMonster(name: string): any {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_F)) {
      return {
        name: name,
        image: Monster.loadNewImage("./assets/img/FacebookMonster.png"),
        xPos: 650,
        yPos: 0,
      };
    } else if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_C)) {
      return {
        name: name,
        image: Monster.loadNewImage("./assets/img/ChromeMonster.png"),
        xPos: 650,
        yPos: 0,
      };
    }
  }

  public lowerHealth(dmg: number): any {
    this.health = this.health - dmg
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
