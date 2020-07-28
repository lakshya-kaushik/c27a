const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,chain;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    chain = new Chain(bird.body,log6.body)

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
  ground.display();
    chain.display();
}
