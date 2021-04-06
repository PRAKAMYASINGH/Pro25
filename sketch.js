// the constrained bodies of my game from the physics engine of Matter.js ...

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function setup() {

	//the setup function to create the engines, objects & canvas...

	createCanvas(1600, 700);
	rectMode(CENTER);

//creating the engines and adding it to the world...

	engine = Engine.create();
	world = engine.world;
	
	//creating the objects for the specific classes to display in the display function...
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
  // the display(); to display all our objects created...
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

}

// the function keyPressed is the control of my game...
function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  	}

}





