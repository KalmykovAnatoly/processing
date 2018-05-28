class vectorWalker{

    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2,2), random(-2,2));
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    step() {
        this.position.add(this.velocity);
    }

    checkEdges() {

        if (this.position.x > width) {
            this.velocity.x *= -1;
        }
        else if (this.position.x < 0) {
            this.velocity.x *= -1;
        }

        if (this.position.y > height) {
            this.velocity.y *= -1;
        }
        else if (this.position.y < 0) {
            this.velocity.y *= -1;
        }
    }
}