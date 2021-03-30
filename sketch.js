function preload(){
  soldierimg = loadAnimation("images/final/soldier1.png", "images/final/soldier2.png", "images/final/soldier3.png",
   "images/final/soldier4.png", "images/final/soldier5.png", "images/final/soldier6.png");

   tile1 = loadImage("images/final/tile001 (1).png");
   tile2 = loadImage("images/final/tile002 (1).png")
   tile3 = loadImage("images/final/tile004.png")
   tile4 = loadImage("images/final/tile005.png")
   tile5 = loadImage("images/final/tile006.png")
   tile6 = loadImage("images/final/tile008.png")
   tile7 = loadImage("images/final/tile009.png")
   tile8 = loadImage("images/final/tile010.png")

   treeimg = loadImage("images/stones/stones.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  soldier = createSprite(400, 200, 50, 50);
  soldier.addAnimation("soldier", soldierimg);
  soldier.scale = 0.7;
  
  

  ground = createSprite(windowWidth/2,390,windowWidth,10)
}

function draw() {
  background(255,255,255);  
 
  soldier.velocityY = soldier.velocityY + 0.5;
  soldier.collide(ground);
  soldier.debug = true
  soldier.setCollider("rectangle", 0, 0, 200,420)

  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 100 === 0){
    obstacle = createSprite(windowWidth+50, height/2 +20)
    var rand = Math.round(random(1,8))
   
    switch(rand){
      case 1: obstacle.addImage(tile1)
      break;
      case 2: obstacle.addImage(tile2)
      break;
      case 3: obstacle.addImage(tile3)
      break;
      case 4: obstacle.addImage(tile4)
      break;
      case 5: obstacle.addImage(tile5)
      break;
      case 6: obstacle.addImage(tile6)
      break;
      case 7: obstacle.addImage(tile7)
      break;
      case 8: obstacle.addImage(tile8)
      break;
    }
    obstacle.velocityX = -6;
  }

  if(frameCount % 200 === 0 ){
    tree = createSprite(windowWidth+100, height/2+20);
    tree.addImage(treeimg);
    tree.velocityX = -4
  }
}


