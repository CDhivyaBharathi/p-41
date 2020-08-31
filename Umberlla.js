class Umberlla{
    constructor(x,y,r){
        

        
        this.body = Bodies.circle(x, y, r); 
        this.x = x;
        this.y = y;
        this.r = r;   
        this.image = loadImage("batman.png");   
        World.add(world, this.body);
    }

   
        
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,400,500);
        pop();
    }
}