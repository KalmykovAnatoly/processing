class fourWalker{


    constructor(stepSize){
        this.stepSize = stepSize
        this.x = width/2;
        this.y = height/2;
    }

    display(){
        stroke(0);
        point(this.x, this.y)
    }
    step(){
        let choice = int(random(4));
        if (choice == 0){
            this.x+=this.stepSize;
        }
        else if (choice==1){
            this.x-=this.stepSize;
        }
        else if (choice==2){
            this.y+=this.stepSize;
        }
        else{
            this.y-=this.stepSize;
        }
    }
}