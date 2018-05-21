function setup() {
    createCanvas(640, 640);
    w = new mouseWalker(4,10);
}

function draw() {
    w.step();
    w.display();
}