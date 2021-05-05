class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop();

        console.log(this.body.speed);
        if (this.body.speed < 3) {
        } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            rect(this.body.position.x, this.body.position.y, 40, 60);
            pop();
        }
    }
}
