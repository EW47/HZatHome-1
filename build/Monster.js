import KeyboardListener from "./KeyboardListener";
export default class Monster {
    type;
    health;
    attack;
    image;
    keyBoardListener;
    constructor(type, health, attack) {
        this.createGmailEnemy("Gmail");
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
            img: Monster.loadNewImage("./assets/img/GmailMonster.png"),
            xPos: 650,
            yPos: 0,
        };
    }
    changeMonster(name) {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_F)) {
            return {
                name: name,
                image: Monster.loadNewImage("./assets/img/FacebookMonster.png"),
                xPos: 650,
                yPos: 0,
            };
        }
        else if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_C)) {
            return {
                name: name,
                image: Monster.loadNewImage("./assets/img/ChromeMonster.png"),
                xPos: 650,
                yPos: 0,
            };
        }
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