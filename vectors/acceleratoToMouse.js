class acceleratoToMouse {

    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.acceleration = createVector();
    }

    display() {
        smooth();
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    step() {
        var mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.acceleration.normalize();
        this.acceleration.mult(0.05);
        this.velocity.add(this.acceleration);
        this.velocity.limit(12);
        this.position.add(this.velocity);
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
}