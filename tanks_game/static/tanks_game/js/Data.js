function Data(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.setCords = function(x, y, angle){
        this.x = x;
        this.y = y;
        this.angle = angle;
    };
    this.getCords = function () {
        return [this.x, this.y]
    }
    
}