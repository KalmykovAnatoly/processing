class PVector{

    constructor(x_,y_){
        this.x = x_;
        this.y = y_;
    }

    add(vector){
        this.x += vector.x;
        this.y += vector.y;
    }
}