class levyWalker {

    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }

    step() {
        let xDirection;
        let yDirection;
        let chanceToJump = random(1);
        if (chanceToJump < 0.01) {
            xDirection = random(-100, 100)
            yDirection = random(-100, 100)
        } else {
            xDirection = random(-1, 1)
            yDirection = random(-1, 1)
        }
        this.x += xDirection;
        this.y += yDirection;
    }
}