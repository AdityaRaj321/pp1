const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform,platform1;
var hexa, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,375,1200,20);
    platform = new Ground(650, 280, 250, 20);
    platform1 = new Ground(1000, 200, 200, 20);

    b1 = new Box(700,320,70,70);
    b2 = new Box(920,320,70,70);
    b3 = new Box(700,240,70,70);
    b4 = new Box(920,240,70,70);
    b5 = new Box(810,160,70,70);
    b6 = new Box(700,320,70,70);
    b7 = new Box(920,320,70,70);
    b8 = new Box(700,240,70,70);
    b9 = new Box(920,240,70,70);
    b10 = new Box(810,160,70,70);
    b11 = new Box(700,320,70,70);
    b12 = new Box(920,320,70,70);
    b13 = new Box(700,240,70,70);
    b14 = new Box(920,240,70,70);
    b15 = new Box(810,160,70,70);
    b16 = new Box(700,320,70,70);
    b17 = new Box(920,320,70,70);
    b18 = new Box(700,240,70,70);
    b19 = new Box(920,240,70,70);
    b20 = new Box(810,160,70,70);
    b21 = new Box(810,160,70,70);
    

    hexa = new Hexa(200,50);

    
    slingshot = new SlingShot(hexa.body,{x:200, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    b1.display();
    b2.display();
    ground.display();
   

    b3.display();
    b4.display();
   

    b5.display();
    

    hexa.display();
    platform.display();
    platform1.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

