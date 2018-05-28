let down = false;
let up = false;

function setup() {
    createCanvas(640, 640);
    h = new heliumBall();
}

function draw() {
    if (down){
        let wind = createVector(0.01, 0);
        h.applyForce(wind);
    }
    let gravity = createVector(0, -1);
    h.applyForce(gravity);
    h.checkEdges();
    h.step();
    h.display();
}

function press(e) {
    var event = window.event ? window.event : e;
    down = true;
    up = false;
}
function release(e) {
    var event = window.event ? window.event : e;
    up = true;
    down = false;
}

document.onmousedown = press;
document.onmouseup = release;