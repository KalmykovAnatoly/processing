let randomCounts = []
let total = 300

function setup() {
    createCanvas(640, 640);
    for (let i = 0; i < total; i++) {
        randomCounts[i] = 0
    }
}

function draw() {
    background(255);
    let rg = int(randomGaussian() * 100);
    randomCounts[rg]++;
    stroke(0);
    fill(175);
    let w = 2;
    for (let i = 0; i < total; i++) {
        rect(i * w, 0, w, randomCounts[i] * 10)
    }
}