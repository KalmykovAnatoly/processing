class eightWalker {

    constructor(stepSize) {
        this.stepSize = stepSize;
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }

    step() {
        let xDirection = random(-1,1)
        let yDirection = random(-1,1)
        this.x += xDirection*this.stepSize;
        this.y += yDirection*this.stepSize;
    }
}