const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snowbg 
var snowfalls = [];
function preload() {
  bg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function draw() {
  background(bg);
  
  if(frameCount % 60 === 0){
    snowfalls = (new Snowfall(random(width/2-100,width/2+100),10,10))
  } 
  for (var i = 0; i< snowfalls.length; i++) {
    snowfalls[i].display();   
  }  
  drawSprites();
}