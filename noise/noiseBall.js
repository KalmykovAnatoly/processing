class noiseBall{

    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.x=0;
        this.tX=0;
        this.tY=10000;
    }

    display() {
        stroke(0);
        // point(this.x, this.y)
        ellipse(this.x, this.y, 16, 16)
    }

    step() {
        let step = noise(this.tX)/100;
        this.x = noise(this.tX)*1000;
        this.y = noise(this.tY)*1000;

        this.tX+=step;
        this.tY+=step;
    }
}