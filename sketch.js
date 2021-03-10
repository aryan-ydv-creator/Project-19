var STAND = 0;
var PLAY = 1;
var OVER = 0;
var gameState = STAND;
var boy, boyimg,boyrun;
var boy2;
var back;
var startbtn,restartbtn,gameover;
var startbtnimg,restartbtnimg,gameoverimg;
var title;
var bg1,bg2;
var obs1,obs2;
var obsGroup;

function preload(){
back = loadImage("bg.jpg");
boyimg = loadImage("stand.png")
boyrun = loadAnimation("Run1.png","Run2.png","Run3.png","Run5.png","Run6.png")
startbtnimg = loadImage("start.png")
obs1 = loadImage("obstacle1.png")
obs2 = loadImage("obstacle2.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(width/2-150,height/2,windowWidth,windowWidth);
  bg1.addImage(back);
  bg1.scale = 4.5
  bg2 = createSprite(width,height/2,windowWidth,windowWidth);
  bg2.addImage(back);
  bg2.scale = 4.5

  boy = createSprite(80,height-250, 50, 50);
  boy.addImage(boyimg)
  boy.scale = 0.5;
  boy.visible = true;
  
  boy2 = createSprite(90,height-245, 50, 50);
  boy2.addAnimation("run",boyrun)
  boy2.scale = 0.5;
  boy2.visible = false;


  startbtn = createSprite(width/2,height/2,50,20)
  startbtn.addImage(startbtnimg);
  startbtn.scale =0.09

  obsGroup = new Group();
}

function draw() {
  background(1);
  if(touches.length>0 || mousePressedOver(startbtn)) { 
    touches = [];
    gameState = PLAY;
  }
  if(gameState===PLAY){
    startbtn.visible = false;
    boy.addAnimation(boyrun)
    boy2.visible = true;
    boy.visible = false;
    bg1.velocityX = -3 
    bg2.velocityX = -3 
    if (bg1.x < 0){
      bg1.x = width/2-150;
    }
    if (bg2.x < width/2+150){
      bg2.x = width;
       
    }
    obstacle();
if(boy.isTouching(obsGroup)){
  gameState= OVER
}
  } else if(gameState===OVER){

  }
  

  drawSprites();

}

function obstacle(){
  if(World.frameCount%167 === 0){
var obs = createSprite(width-20,height-170,20,60)

rand = Math.round(random(1,4));
switch(rand){
  case 1 : obs.addImage(obs1);
  break;
  case 2 : obs.addImage(obs2);
  break
  case 3 : obs.addImage(obs1);
  break;
  case 4: obs.addImage(obs1);
  break;

  default: break;
}

obs.scale = 0.3;
obs.velocityX = -3;
obs.lifetime = width/3;
  }

  obsGroup.add(obs);
}