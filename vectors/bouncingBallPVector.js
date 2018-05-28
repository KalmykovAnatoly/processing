let position = new PVector(100,100);
let speed = new PVector(1,3.3);

function setup(){
    createCanvas(200, 200);
    smooth();
    background(255);
}

function draw() {
    background(255);

    position.add(speed);

    if ((position.x>width)||(position.x<0)){
        speed.x*=-1;
    }
    if ((position.y>height)||(position.y<0)){
        speed.y*=-1;
    }

    stroke(0);
    fill(175);
    ellipse(position.x,position.y,16,16);
}