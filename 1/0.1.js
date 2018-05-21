function setup() {
    createCanvas(640, 640);
    w = new eightWalker(2);
}

function draw() {
    w.step();
    w.display();
}