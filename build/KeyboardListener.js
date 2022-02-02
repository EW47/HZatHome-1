export default class KeyboardListener {
    static KEY_SPACE = 32;
    static KEY_LEFT = 37;
    static KEY_UP = 38;
    static KEY_RIGHT = 39;
    static KEY_DOWN = 40;
    static KEY_R = 82;
    static KEY_E = 69;
    static KEY_A = 65;
    static KEY_B = 66;
    static KEY_F = 70;
    static KEY_C = 67;
    static KEY_1 = 49;
    static KEY_2 = 50;
    keyCodeStates;
    constructor() {
        this.keyCodeStates = new Array();
        window.addEventListener("keydown", this.keyDown);
        window.addEventListener("keyup", this.keyUp);
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] === true;
    }
    isKeyUp(keyCode) {
        return this.keyCodeStates[keyCode] === false;
    }
    keyDown = (ev) => {
        this.keyCodeStates[ev.keyCode] = true;
    };
    keyUp = (ev) => {
        this.keyCodeStates[ev.keyCode] = false;
    };
}
//# sourceMappingURL=KeyboardListener.js.map