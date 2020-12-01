var ArcadeMachine, ArcadeImage;
var start;

function preload(){
ArcadeImage=loadImage("Arkade.png");
} 

function setup(){
  createCanvas(displayWidth, displayHeight);
  ArcadeMachine = createSprite(700, 400, 20, 20)
  start = createSprite(displayWidth/2-25, displayHeight/2-180, 150, 60);
  start.visible = false;
  ArcadeMachine.scale = 0.28;

}

function draw(){
  background(255,255,255);  
  ArcadeMachine.addImage("ArcadeImage",ArcadeImage);

  if (mousePressedOver(start)){
    options = new Options();
    options.display();

  }

  
  
  
  drawSprites();
}