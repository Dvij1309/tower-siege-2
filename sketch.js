const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var slingShot;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block12;
var block13;
var block14;
var block15;
var block16;

var base1;
var ball;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  block1 = new Block(200, 190, 40, 60);
  block2 = new Block(220, 190, 40, 60);
  block3 = new Block(240, 190, 40, 60);
  block4 = new Block(260, 190, 40, 60);
  block5 = new Block(280, 190, 40, 60);
  block6 = new Block(300, 190, 40, 60);
  block7 = new Block(320, 190, 40, 60);
  block8 = new Block(220, 160, 40, 60);
  block9 = new Block(240, 160, 40, 60);
  block10 = new Block(260, 160, 40, 60);
  block11 = new Block(280, 160, 40, 60);
  block12 = new Block(300, 160, 40, 60);
  block13 = new Block(240, 130, 40, 60);
  block14 = new Block(260, 130, 40, 60);
  block15 = new Block(280, 130, 40, 60);
  block16 = new Block(260, 100, 40, 60);

  base1 = new Base(260, 210, 340, 20);

  ball = new Ball(150,200,35,35);
  slingShot = new SlingShot(ball.body, { x: 150, y: 200 })

}

function draw() {
  background(255, 255, 255);
  drawSprites();
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  base1.display();
  slingShot.display();
  ball.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {
  Slingshot.release();

}

function keyPressed() {
  if (keyCode === 32) {
      slingshot.attach(ball.body);

  }
}
