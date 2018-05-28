class acceleratedVectorWalker{

    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2,2), random(-2,2));
        this.limit = 20;
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    step() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.limit);
        this.position.add(this.velocity);
    }

    checkEdges() {

        if (this.position.x > width) {
            this.velocity.x *= -1;
            this.acceleration.x *= -1;
        }
        else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.acceleration.x *= -1;
        }

        if (this.position.y > height) {
            this.velocity.y *= -1;
            this.acceleration.y *= -1;
        }
        else if (this.position.y < 0) {
            this.velocity.y *= -1;
            this.acceleration.y *= -1;
        }
    }
    breakSpeed(){
        this.acceleration.x = 1;
        this.acceleration.y = 1;
    }
    upSpeed(){
        this.acceleration.x *= 2;
        this.acceleration.y *= 2;
    }
}