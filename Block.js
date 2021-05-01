class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 225;
    }
    display(){

     push();
      var position = this.body.position;
     translate(this.body.position.x,this.body.position.y);
     rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.r*2,this.r*2);
   pop();
    }
}