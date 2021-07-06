class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 5, 
			frictionAir: 0.5
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png", "superhero2.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		
		World.add(world, this.body);
		// this.debug = true;

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			// fill(255,0,255)
			// this.body.shapeColor("black")
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
