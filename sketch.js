
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  //Crie um grupo para greenBalloon (balão verde)
 //Crie um grupo para blueBalloon (balão azul)
 //Crie um grupo para pinkBalloon (balão rosa)
  
  arrowGroup= new Group();
 
  
}

function draw() {
 background(0);
 if(gameState === PLAY){

  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();

    gameState=END; 


}
 
  if (gameState === END) {
  bow.destroy();
  scene.velocityX = 0;
}

 
  if (arrowGroup,isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }


  if (arrowGroup,isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }


  if (arrowGroup,isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }


  if (arrowGroup,isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
//Crie a função isTouching() 
//Use função destroyEach() para destruir o grupo greenBalloon (balão verde)
//Use função destroyEach() para destruir arrowGroup (grupo de flecha).
//Aumente a pontuação em 3.



//Crie a função isTouching() 
//Use função destroyEach() para destruir o grupo blueBalloon (balão azul)
//Use função destroyEach() para destruir arrowGroup.
//Aumente a pontuação em 2.


//Crie a função isTouching()
//Use função destroyEach() para destruir o grupo pinkBalloon (balão rosa)
//Use função destroyEach() para destruir arrowGroup.
//Aumente a pontuação em 1.

 }
  
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
 //Adicione o grupo
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  //Adicione o grupo
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
 //Adicione o grupo
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
