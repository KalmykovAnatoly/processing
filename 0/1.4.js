function setup() {
    createCanvas(640, 640);
}

function draw() {
    background(60, 152, 158)

    let mouse = createVector(mouseX, mouseY)
    let center = createVector(width/2, height/2)
    mouse.sub(center);
    mouse.normalize();
    mouse.mult(50);

    translate(width/2,height/2);
    strokeWeight(2);
    stroke(255);
    line(0,0,mouse.x,mouse.y);
}