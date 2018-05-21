let b

function setup() {
    createCanvas(640, 640);
    b = new ball;
}

function draw() {
    background(60, 152, 158)

    b.update();
    b.display();

    textSize(12);
    fill(0,0,0)
    text("x: "+b.position.x+" y: "+b.position.y,0, height)
}