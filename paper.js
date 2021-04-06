class paper
{
	constructor(x,y,rad) {
	
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
        }		
		this.x=x;
		this.y=y;
		this.r=rad
		this.body=Bodies.circle(this.x, this.y, this.rad/2, options)
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display() {
					
			var paperposition=this.body.position;		

			push()
			translate(paperposition.x, paperpos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.width,this.height);
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.rad, this.rad);
			pop()
			
	}

}