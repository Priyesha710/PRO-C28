class Stone{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(userWorld,this.body);
        this.image = loadImage("images/stone.png");
    }
    display(){
        push ();
        image(this.image,this.body.position.x,this.body.position.y,20,20);
        pop ();
    }
}