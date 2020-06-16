class Land {
    constructor(x,y,width,height) {
        var land_opt ={
            restitution : 0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, land_opt);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display() {
        translate(this.body.position.x, this.body.position.y);
    }
}