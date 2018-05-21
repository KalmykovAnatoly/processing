class mouseWalker {

    constructor(stepSize, chance) {
        this.stepSize = stepSize;
        this.chance = chance;
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        point(this.x, this.y)
    }

    step() {
        let xDirection;
        let yDirection;
        let sign;
        let chance = random(1,100);
        if (chance<this.chance){
            sign = (mouseX-this.x)<0 ? -1 : 1;
            xDirection = random(0,1) * sign
        }
        else{
            xDirection = random(-1,1)
        }
        chance = random(1,100);
        if (chance<this.chance){
            sign = (mouseY-this.y)<0 ? -1 : 1;
            yDirection = random(0,1) * sign
        }
        else{
            yDirection = random(-1,1)
        }
        this.x += xDirection*this.stepSize;
        this.y += yDirection*this.stepSize;
    }
}