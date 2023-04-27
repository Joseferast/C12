var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200,10,10);
  path.addImage(pathImg);
  path.scale=1.2;

 boy = createSprite(200,350,10,10);
 boy.addAnimation("Running",boyImg);
 boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(-5,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}

function draw() {
  background("darkgrey");
  path.velocityY = 8;
  
  // mover o menino com o mouse usando mouseX
 boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  
  //código para redefinir o fundo
  if(path.y > 350 ){
    path.y = height/2;
  }
  if(boy.x > 300) {
    boy.x = 300;
  }
  if (boy.x < 100) {
    boy.x = 100;
  }
  
  drawSprites();
}
