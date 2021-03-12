const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var gameengine, gameworld
var box1, box2, ground1,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird1,bgpic,platform,clog,chain

function preload(){
  bgpic = loadImage("bg.png")
}
function setup() {
  createCanvas(1200,400);
  gameengine = Engine.create();
  gameworld = gameengine.world;
  ground1 = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170)

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,250,70,70)
  box4 = new Box(920,250,70,70)
  box5 = new Box(810,160,70,70)
  pig1 = new Pig(810,350)
  pig2 = new Pig(810,220)
  log1 = new Log(810,260,300,PI/2)
  log2 = new Log(810,180,300,PI/2)
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)
  clog = new Log(230,180,80,PI/2)
  bird1 = new Bird(200,50)
  // chain = new Chain(bird1.body,clog.body)
  sling = new Slingshot(bird1.body,{x:200,y:50})
  console.log(box1)
}

function draw() {
  background(bgpic);  
  Engine.update(gameengine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground1.display();
  pig1.display();
  pig2.display();
  log2.display();
  log1.display();
  log3.display();
  log4.display();
  bird1.display();
  platform.display(); 
  // chain.display();
  sling.display()

}

function mouseDragged(){
  Matter.Body.setPosition(bird1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling.fly()
}