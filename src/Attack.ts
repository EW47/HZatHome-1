export default abstract class Attack {

    private typeAttack: string;

    private damage: number;

    public constructor(typeAttack: string, damage: number) {

    }

    public getTypeAttack(): string {
        return this.typeAttack;
    }

    public setTypeAttack(typeAttack: string): void {
        this.typeAttack = typeAttack;
    }

    public getDamage(): number {
        return this.damage;
    }

    public setDamage(damage: number): void {
        this.damage = damage;
    }


    /**
     * Method which will be used to deal damage
     */
    public abstract inflictDamage(): void;

    /**
     * Depending on which answer you choose, each value will be different damage wise
     */
    public abstract typeOfAttacks(): void;

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
