class Snowfall {
  constructor(x,y,r) {
    var options = {
     'restitution' : 1,
     'density': 0.5,
     'friction' : 0.3 
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("snow4.webp");
     World.add(world,this.body);
   }
   display(){
     var pos =  this.body.position  
     var angle = this.body.angle
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     noStroke();
     fill(0);
     pop();
   }
  }