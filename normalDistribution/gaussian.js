let width = 640;
let height = 640;

function setup() {
    createCanvas(width, height);
    background(252, 251, 176)
}

function draw() {
    let rg = randomGaussian();
    sd = 60;
    mean = width/2;
    let x = sd * rg + mean;
    noStroke();
    fill(0, 10);
    ellipse(x, height/2, 16, 16);
}