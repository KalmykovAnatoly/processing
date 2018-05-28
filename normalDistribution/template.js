function setup() {
    createCanvas(640, 640);
    w = new monteCarloWalker();
}

function draw() {
    w.step();
    w.display();
}