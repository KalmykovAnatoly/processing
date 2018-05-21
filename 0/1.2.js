let position
let velocity

function setup() {
    createCanvas(640, 640);
    position = createVector(100, 100)
    velocity = createVector(3, 5)
}

function draw() {
    background(60, 152, 158)

    position.add(velocity)

    if ((position.x > width) || (position.x < 0)) {
        velocity.x *= -1
    }
    if ((position.y > height) || (position.y < 0)) {
        velocity.y *= -1
    }

    stroke(244, 205, 165)
    fill(237, 82, 118)
    ellipse(position.x, position.y, 16, 16)

    textSize(12);
    fill(0,0,0)
    text("x: "+position.x+" y: "+position.y,0, height)
}