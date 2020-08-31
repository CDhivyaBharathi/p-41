const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var canvas;
var bruce, thunder, droplets;
var drops = [];
var thunder;
var ground;
var light;


function preload(){
    thunder = loadImage("thunder.png");
}

function setup(){
    canvas = createCanvas(400,700);
    engine = Engine.create();
  world = engine.world;
    
    bruce = new Umberlla(400,500,50);
    ground = createSprite(200,700,400,20);
    ground.visible = false;
    //light.addImage("thunder",thunder);
    //light.visible = false;
    //bruce.collide(ground);
    


}

function draw(){
    background(0);
    if(frameCount%2===0){
      drops.push(new Particle(random(0,400), 3,3));
      
    }
    for (var j = 0; j < drops.length; j++) {
   
      drops[j].display();
    }

    if(frameCount%11 === 0){
        thunder.visible = true;
    }
    bruce.display();
    
    Engine.update(engine);
     
    
    drawSprites();
}   

