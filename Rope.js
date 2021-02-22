class Rope{
    constructor(bodyA, bodyB,xOffset){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:xOffset,y:0}
           
        }
        this.rope=Constraint.create(option);
        this.xOffset=xOffset;
        World.add(world,this.rope);
    }

    display(){
        var pointA= this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        stroke("white");
        line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y);
      
    }
};