import KeyboardListener from './KeyboardListener.js';
export default class Player {
    healthImage;
    health;
    image;
    speed;
    xPosition;
    yPosition;
    name;
    keyBoardListener;
    score;
    constructor(name) {
        this.createPlayer('me');
        this.changeCharacter('choose the character');
        this.keyBoardListener = new KeyboardListener();
    }
    getHealthImage() {
        return this.healthImage;
    }
    setHealthImage(healthImage) {
        this.healthImage = healthImage;
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.health = health;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getxPosition() {
        return this.xPosition;
    }
    setxPosition(xPosition) {
        this.xPosition = xPosition;
    }
    getyPosition() {
        return this.yPosition;
    }
    setyPosition(yPosition) {
        this.yPosition = yPosition;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    move() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this.setxPosition(this.getxPosition() - this.getSpeed());
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this.setxPosition(this.getxPosition() + this.getSpeed());
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this.setyPosition(this.getyPosition() - this.getSpeed());
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this.setyPosition(this.getyPosition() + this.getSpeed());
        }
    }
    createPlayer(name) {
        return {
            name: name,
            image: Player.loadNewImage('./assets/img/player1.png'),
            xPosition: 270,
            yPosition: 450,
            speed: 4,
        };
    }
    changeCharacter(name) {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_1)) {
            return {
                name: name,
                image: Player.loadNewImage('./assets/img/Charter1.png'),
                xPosition: 270,
                yPosition: 450,
                speed: 4,
            };
        }
        else if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_2)) {
            return {
                name: name,
                image: Player.loadNewImage('./assets/img/Charter2.png'),
                xPosition: 270,
                yPosition: 450,
                speed: 4,
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
//# sourceMappingURL=Player.js.map