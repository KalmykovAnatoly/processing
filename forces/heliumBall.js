class heliumBall {

    constructor() {
        this.mass = 1;
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0,-1);
    }

    display() {
        smooth();
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    step(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(2);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
        }
        if (this.position.y > height) {
            this.velocity.y *= -1;
        } else if (this.position.y < 0) {
            this.velocity.y *= -1;
        }
    }

    applyForce(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
}