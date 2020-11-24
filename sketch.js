const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  //Ground
  ground = new Ground(750, 550, 400, 20);

  //Blocks
  block1 = new Box(500, 300, 80, 80);

  //Polygon
  polygon = new Polygon(400, 300, 50, 50);

  //SlingShot
  sling1 = new slingShot(polygon.body, {x: 200, y: 250});
}

function draw() {
  background(200); 
  Engine.update(engine); 

  ground.display();
  block1.display();
  sling1.display();
  polygon.display();
}