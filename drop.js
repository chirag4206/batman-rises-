class Drop{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,2,2, options);
        this.width = 2;
        this.height = 2;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white")
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
      update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
          }
      }
}