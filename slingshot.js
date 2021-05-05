class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 100
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
        this.pointB = pointB
    }

    display() {
        if (this.slingShot.bodyA) {
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    release() {
         
        this.slingShot.bodyA = null;
    }

}