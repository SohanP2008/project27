
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;
  //Create the Bodies Here.
	bobObject1 = new Bob(230, 580, 70)
	bobObject2 = new Bob(300, 580, 70)
	bobObject3 = new Bob(370, 580, 70)
	bobObject4 = new Bob(440, 580, 70)
	bobObject5 = new Bob(510, 580, 70)

	roofObject = new Roof(375, 70, 500, 30)

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2-55, 0)
  rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2+10, 0)
  rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2+70, 0)
  rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2+140, 0)
  rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2+210, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  fill("black")
  text(mouseX+","+mouseY, mouseX, mouseY)
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  /*var roofpos = this.roof.position; 
        push() 
        translate(roofpos.x, roofpos.y); 
        rectMode(CENTER)
        strokeWeight(3); 
        fill("white") 
        rect(0,0,500, 30); 
		pop()
    */
  roofObject.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-125, y: 125})
  }
}


