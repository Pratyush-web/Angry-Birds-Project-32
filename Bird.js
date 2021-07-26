class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x > 5 && this.body.position.x > 200)
    {
    var position = [this.body.position.x, this.body.position.y];
    this.path.push(position);
    console.log(this.path);
    }
    //this.path = [[200, 20], [205, 19], [220, 18]];
    for(var i = 0; i < this.path.length; i++)
    image(this.smokeImg, this.path[i][0], this.path[i][1]);
    
  }
}
