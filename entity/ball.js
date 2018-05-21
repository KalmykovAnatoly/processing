class ball{
    constructor(){
        this.position = new createVector(100, 100)
        this.velocity = new createVector(3, 5)
    }

    update(){
        this.position.add(this.velocity);
        if ((this.position.x > width) || (this.position.x < 0)) {
            this.velocity.x *= -1
        }
        if ((this.position.y > height) || (this.position.y < 0)) {
            this.velocity.y *= -1
        }
    }
    display(){
        stroke(244, 205, 165)
        fill(237, 82, 118)
        ellipse(this.position.x, this.position.y, 48, 48)
    }
}