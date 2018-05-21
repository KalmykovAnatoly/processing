let x = 100
let y = 100
xspeed = 1
yspeed = 3.3

function setup(){
    createCanvas(innerWidth,innerHeight);
}

function draw() {
    background(60,152,158)

    x = x + xspeed
    y = y + yspeed

    if ((x > width)||(x<0)) {
        xspeed *= -1
    }
    if ((y > height)||(y<0)) {
        yspeed *= -1
    }

    stroke(244,205,165)
    fill(237,82,118)
    ellipse(x,y,16,16)
}