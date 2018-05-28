class monteCarloWalker {

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
        let x1 = random(1);
        let x2 = random(1);
        if (x1<x2){
            this.x += random(-x1,x1);
            this.y += random(-x1,x1);
        }
    }
}