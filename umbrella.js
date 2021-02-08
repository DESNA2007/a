class Umbrella{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image1 = loadImage("walking_1.png");
      
        World.add(world, this.body);
    }
 
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image1, pos.x, pos.y+70,300,300);
      
      }
}