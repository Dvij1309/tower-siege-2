class Ball {
    constructor(x, y, radius) {
       var options = {
          isStatic: true
       }
       this.body = Bodies.circle(x, y, radius, options);
       this.radius = radius;
       World.add(world, this.body);
 
    }
    display() {
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       strokeWeight(4);
       stroke("pink");
       fill("white");
       circle(x,y,this.radius,this.radius)
       pop();
 
    }
 
 }