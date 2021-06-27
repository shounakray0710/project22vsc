const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1
var bob2
var bob3
var bob4
var bob5
var rope1
var rope2
var rope3
var rope4
var rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bob_options = {
		isStatic:false,
		restitution:1,
		friction:0,
		density:1	
	  }

	var roof_options={
		isStatic:true			
	}

	bob1 = Bodies.circle(320,380,20,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(360,380,20,bob_options);
  World.add(world,bob2);

  bob3 = Bodies.circle(400,380,20,bob_options);
  World.add(world,bob3);

  bob4 = Bodies.circle(440,380,20,bob_options);
  World.add(world,bob4);

  bob5 = Bodies.circle(480,380,20,bob_options);
  World.add(world,bob5);

	roof = Bodies.rectangle(400,100,230,50,roof_options);
    World.add(world,roof);

	rope1 = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:bob1,
		length:200,
		stiffness:0.1
	  });

	World.add(world,rope1);
	
	rope2 = Matter.Constraint.create({
		pointA:{x:360,y:100},
	  bodyB:bob2,
	  pointB:{x:0,y:0},
	  length:200,
	  stiffness:0.1
	});

  World.add(world,rope2);

  rope3 = Matter.Constraint.create({
	bodyA:roof,
	bodyB:bob3,
	pointB:{x:0,y:0},
	length:200,
	stiffness:0.1
  });

World.add(world,rope3);

rope4 = Matter.Constraint.create({
	pointA:{x:440,y:100},
  bodyB:bob4,
  pointB:{x:0,y:0},
  length:200,
  stiffness:0.1
});

World.add(world,rope4);

rope5 = Matter.Constraint.create({
	pointA:{x:480,y:100},
	bodyB:bob5,
	pointB:{x:0,y:0},
	length:200,
	stiffness:0.1
  });

World.add(world,rope5);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);
  

  push();
  strokeWeight(2);
  stroke("yellow");
  line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);
  pop();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:-50,y:-45});   
    }
}