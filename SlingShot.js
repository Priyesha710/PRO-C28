class SlingShot {
    constructor(bodyAInput, pointBInput) {
        var options = {
            bodyA: bodyAInput,
            pointB: pointBInput,
            stiffness: 0.2,
            length: 20

        }
        this.pointB = pointBInput;

        this.constraint = Matter.Constraint.create(options);
        World.add(userWorld, this.constraint);

    }
    detach() {
        this.constraint.bodyA = null;
    }
    attach(bodyInput) {
        this.constraint.bodyA = bodyInput;
    }
    display() {
         if (this.constraint.bodyA) {
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;

            line(pointA.x -4 , pointA.y, pointB.x - 4, pointB.y);
            line(pointA.x , pointA.y, pointB.x , pointB.y - 3);
        
         }
    }
}