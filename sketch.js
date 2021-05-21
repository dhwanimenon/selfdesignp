const Engine=Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies

var mask, sanitizer;
var covid1, covid2,man;

function setup(){
    var canvas = createCanvas(900,900);
    engine= Engine.create()
    world= engine.world;
    covid1=new Box()
    covid2=new Box2()
    sanitizer=new sanitizer()
    mask= new mask()


    
   
}

function draw(){
    background(0);
covid1.display();
covid2.display();
mask.display();
sanitizer.display();







   drawSprites()
}