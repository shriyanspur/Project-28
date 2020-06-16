const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var bin1, bin2, bin3;
var dustBinImg;
var land;
var backImg;
var sling;
//var keyCode = 0;

function preload() {
  backImg = loadImage("back.jpg");
  
  dustBinImg = loadImage("Bin.png");
}

function setup() {
  createCanvas(1340,500);
    
  engine = Engine.create();
  world = engine.world;
  
  land = new Land(750,470,2000,20);
  ball = new Ball(140,250,50,50);

  var bin_opt = {
    isStatic: true,
    restitution: 0.1
  }

  bin1 = Bodies.rectangle(860, 420, 10, 70, bin_opt);
  World.add(world,bin1);

  bin2 = Bodies.rectangle(890, 450, 90, 10, bin_opt);
  World.add(world,bin2);
  
  bin3 = Bodies.rectangle(950, 420, 10, 60, bin_opt);
  World.add(world,bin3);

  sling = new SlingShot(ball.body, {x: 160, y: 200}, -500, 0);
}

function draw() {
  background(backImg);
  Engine.update(engine);

  image(dustBinImg, 881, 390, 100, 80);

  
  sling.display();
  ball.display();
  land.display();
}

/*function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.position, {x:37, y:-37});
  }
}*/

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  sling.fly();   
}
