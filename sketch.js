
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roof1,ground,rope,rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(380,300,250,20);
	bobObject1 = new bob(300,500,40);
	bobObject2 = new bob(340,500,40);
	bobObject3 = new bob(380,500,40);
	bobObject4 = new bob(420,500,40);
	bobObject5 = new bob(460,500,40);
	rope = new chain(bobObject4.body,roof1.body,30,10);
  rope1 = new chain(bobObject5.body,roof1.body,70,10);
  rope2 = new chain(bobObject3.body,roof1.body,-10,10);
  rope3 = new chain(bobObject2.body,roof1.body,-50,10);
  rope4 = new chain(bobObject1.body,roof1.body,-90,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  rope4.display(); 
  rope3.display();
  rope1.display();
  rope2.display();
  rope.display();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

 function keyPressed(){
	 if (keyCode ===LEFT_ARROW)
	 { Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-40,y:-40} ); 
	 }

 }
