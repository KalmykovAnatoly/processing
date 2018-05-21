class downLeftWalker {

    constructor(stepSize, xChance, yChance) {
        this.stepSize = stepSize;
        this.xChance = xChance;
        this.yChance = yChance;
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
        let chance = random(1,100);
        if (chance<this.xChance){
            xDirection = random(0,1)
        }
        else{
            xDirection = random(-1,0)
        }
        chance = random(1,100);
        if (chance<this.yChance){
            yDirection = random(0,1)
        }
        else{
            yDirection = random(-1,0)
        }
        this.x += xDirection*this.stepSize;
        this.y += yDirection*this.stepSize;
    }
}