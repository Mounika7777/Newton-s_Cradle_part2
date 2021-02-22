
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var Constraint= Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;

function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(300,300);
	bobObject2= new Bob(350,300);
	bobObject3= new Bob(400,300);
	bobObject4= new Bob(450,300);
	bobObject5= new Bob(500,300);
	roof= new Roof(600,height,1200,20);
	rope1= new Rope(bobObject1.body,roof.body,-100);
	rope2= new Rope(bobObject2.body,roof.body,-50);

	rope3= new Rope(bobObject3.body,roof.body,0);

	rope4= new Rope(bobObject4.body,roof.body,50);

	rope5= new Rope(bobObject5.body,roof.body,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:50});
	}
}

