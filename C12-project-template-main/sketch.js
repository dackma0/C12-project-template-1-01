var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ('path.png')
boyImg = loadAnimation ('Runner-1.png', 'Runner-2.png')
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite (200, 0);
  path.addImg(pathImage);
  path.scale = 1.2
  path.velocityY= 3;

boy= createSprite (200, 300)
  boy.addAnimation('boy', boyImg)
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false


rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible= false

}

function draw() {
  background(0);

  
  boy.x = mouseX
  
  
 boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  
 
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
