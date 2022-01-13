export default class Monster {
    type;
    health;
    attack;
    image;
    constructor(type, health, attack) {
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
    createPlayer(name) {
        return {
            name: name,
            img: Monster.loadNewImage('./assets/img/PhishingMonster.png'),
            xPos: 270,
            yPos: 450,
            speed: 4,
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