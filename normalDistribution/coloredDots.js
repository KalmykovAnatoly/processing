let width = 640;
let height = 640;

function setup() {
    createCanvas(width, height);
    background(252, 251, 176);
    colorMode(HSB, 255);
}

function draw() {
    let rg = randomGaussian();
    sd = 85;
    mean = width/2;
    let x = sd * rg + mean;
    noStroke();
    fill(x,255,255,30);
    ellipse(x, height/2, 16, 16);
}