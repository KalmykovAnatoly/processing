class gaussianWalker {

    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }

    step() {
        let gr = Math.abs(randomGaussian())*3;
        let xDirection = random(-1,1)
        let yDirection = random(-1,1)
        this.x += xDirection*gr;
        this.y += yDirection*gr;
    }
}