const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
// var boxInSketchJS

function preload() {
  bg = loadImage("background.jpg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(100,300,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 180, 70, 70);
  box3 = new Box(600, 180+80, 70, 70);
  box4 = new Box(600, 180+80+80, 70, 70);
  box5 = new Box(600, 100+80+80+80+80, 70, 70);
  box6 = new Box(600, 100+80+80+80+80+80, 70, 70);
  
  box12 = new Box(900, 100, 70, 70);
  box22 = new Box(900, 100, 70, 70);
  box32 = new Box(900, 100, 70, 70);
  box42 = new Box(900, 100, 70, 70);
  box52 = new Box(900, 100, 70, 70);

  box13 = new Box(750, 100, 70, 70);
  box23 = new Box(750, 100, 70, 70)
  box33 = new Box(750, 100, 70, 70)
  box43 = new Box(750, 100, 70, 70)

}

function draw() {
  
  Engine.update(engine);
  
  
  canvas.width = window.innerWidth; canvas.height = innerHeight;
background(bg);ground.display();
  hero.display();
  rope.display();
  monster.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box12.display();
  box22.display();
  box32.display();
  box42.display();
  box52.display();

  box13.display();
  box23.display();
  box33.display();
  box43.display();
  hero.debug = true;

  // hero.mouseDragged();
    // console.log(hero.body.position);
    // if(hero.body.position === rope.position){
    //   console.log("YES, IT'S TRUE");
    // }
    console.log(Rope.length);

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}
