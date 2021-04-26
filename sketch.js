const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100
var drops = []
var boyIm;
var thund,thund2,thund3,thun4;
var thunderCreatedFrame;

function preload(){
    boyIm = loadImage("walking_8.png")
    thund = loadImage("1.png")
    thund2 = loadImage("2.png")
    thund3 = loadImage("2.png")
    thund4 = loadImage("3.png")
}

function setup(){
    createCanvas(400,600)
    engine = Engine.create();
    world = engine.world;
    for(var i=0;i < maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
    umbrella = new Umbrella(200,400,100,20)
    rand = Math.round(random(1,4));
    
}

function draw(){
    background("blue")
    Engine.update(engine)
    for (var i=0;i<drops.length;i++){
        drops[i].display();
        drops[i].update();
    }
    if(frameCount%60===0){
        thunderCreatedFrame = frameCount
         thunder = createSprite(random(10,370),random(10,30),10,100);
         switch(rand){
             case 1: thunder.addImage(thund);
             break;
             case 2 :thunder.addImage(thund2);
             break;
             case 3 :thunder.addImage(thund3);
             break; 
             case 4 :thunder.addImage(thund4);
             break;
             default:break;
         }
         thunder.scale = random(0.3,0.6)
     }
     if(thunderCreatedFrame+20===frameCount&&thunder){
         thunder.destroy()
     }
    umbrella.display()
    image(boyIm,50,350,300,300)
    drawSprites()
}   

