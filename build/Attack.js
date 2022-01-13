export default class Attack {
    typeAttack;
    damage;
    constructor(typeAttack, damage) {
    }
    getTypeAttack() {
        return this.typeAttack;
    }
    setTypeAttack(typeAttack) {
        this.typeAttack = typeAttack;
    }
    getDamage() {
        return this.damage;
    }
    setDamage(damage) {
        this.damage = damage;
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Attack.js.map