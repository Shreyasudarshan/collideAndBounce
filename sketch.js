
var movrect, fixedrect,r3,r4,r5;
var ob1,ob2;
function setup() {

  createCanvas(800,400);
  movrect=createSprite(400, 200, 50, 10);
  movrect.shapeColor="pink";

  fixedrect=createSprite(100,100,50,50);
  fixedrect.shapeColor="pink";
  fixedrect.velocityX=3;

  r3=createSprite(200,100,50,10);
  r3.shapeColor="pink";
  r3.velocityX=3;

  r4=createSprite(300,100,50,10);
  r4.shapeColor="pink";
  r4.velocityX=-2;
  r5=createSprite(400,100,50,10);
  r5.shapeColor="pink";
  r5.velocityX=-3;
}

function draw() {
  background("blue");  
  //console.log(fixedrect.width/2-movrect.width/2);

  movrect.x=mouseX;
  movrect.y=mouseY;
  isTouching(movrect,fixedrect);
  isTouching(movrect,r3);
  isTouching(movrect,r4);
  isTouching(movrect,r5);

  bounceOff(fixedrect,r4);
  bounceOff(r3,r5);
  bounceOff(r3,r4);
  drawSprites();
} 
