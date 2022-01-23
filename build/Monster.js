export default class Monster {
    type;
    health;
    attack;
    image;
    constructor(type, health, attack) {
        this.createGmailEnemy('Gmail');
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.health = health;
    }
    getAttack() {
        return this.attack;
    }
    setAttack(attack) {
        this.attack = attack;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    createGmailEnemy(name) {
        return {
            name: name,
            img: Monster.loadNewImage('./assets/img/20220113_095925_50.png'),
            xPos: 650,
            yPos: 0,
        };
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Monster.js.map