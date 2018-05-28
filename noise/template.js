let xoff = 0;
let yoff = 0;
let bright;

function setup() {
    createCanvas(350, 350);
    pixelDensity(1);
}

function draw() {
    loadPixels();
    for (let x=0; x<width; x+=1){
        yoff+=0.01;
        xoff=0;
        for (let y=0; y<height;y+=1){
            let index = (x+y*width)*4;
            bright = noise(xoff,yoff)*255;
            pixels[index+0]=bright ;
            pixels[index+1]=bright;
            pixels[index+2]=bright;
            pixels[index+3]=255 ;
            xoff+=0.01;
        }
    }
    updatePixels();
}