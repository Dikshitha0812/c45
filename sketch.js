var block1, block2, block3, block4, block5, block6, block7, block8, block9, exit, ground;
var blockimg1;
var jake, bob, bobimg, jakeimg, bobwalkingimg, jakewalkingimg, bobjumpimg, jakejumpimg;

function preload() {
  blockimg1 = loadImage("block3.png");
  bg = loadImage("lab2.png")
  exitimg = loadImage("exit.png")
  groundimg = loadImage("ground.png")
  bobimg = loadImage("1.png")
  jakeimg = loadImage("2.png")
  bobwalkimg = loadAnimation("1walk1.png", "1walk2.png")
  jakewalkingimg = loadAnimation("2walk1.png", "2walk2.png", "2walk3.png")
  bobjumpimg = loadImage("1jump.png")
  jakejumpimg = loadImage("2jump.png")


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  block1 = createSprite(80, 300, 150, 10);
  block1.addImage(blockimg1);
  block1.velocityY = -4;
  block1.scale = 0.2;

  block2 = createSprite(200, 400, 150, 10);
  block2.addImage(blockimg1);
  block2.scale = 0.2;
  block2.velocityY = 2

  block3 = createSprite(400, 120, 150, 10);
  block3.addImage(blockimg1);
  block3.scale = 0.2;
  block3.velocityX = 3;

  block4 = createSprite(400, 320, 150, 10);
  block4.addImage(blockimg1);
  block4.scale = 0.2;
  block4.velocityX = 3;

  block5 = createSprite(600, 220, 150, 10);
  block5.addImage(blockimg1);
  block5.velocityX = 2;
  block5.scale = 0.2;

  block6 = createSprite(800, 320, 150, 10);
  block6.addImage(blockimg1);
  block6.scale = 0.2;
  block6.velocityX = 2

  block7 = createSprite(800, 120, 150, 10);
  block7.addImage(blockimg1);
  block7.scale = 0.2;
  block7.velocityX = -2

  block8 = createSprite(1000, 400, 150, 10);
  block8.addImage(blockimg1);
  block8.scale = 0.2;
  block8.velocityY = 2

  block9 = createSprite(1000, 40, 150, 10);
  block9.addImage(blockimg1);
  block9.scale = 0.2;
  block9.velocityY = -2

  exit = createSprite(1194, 221, 50, 50);
  exit.addImage(exitimg);
  exit.scale = 0.2;

  ground = createSprite(600, 594, 50, 50);
  ground.addImage(groundimg)
  ground1 = createSprite(960, 594, 50, 50);
  ground1.addImage(groundimg)
  ground = createSprite(246, 594, 50, 50);
  ground.addImage(groundimg);

  bob = createSprite(80, 100, 150, 10);
  bob.addImage(bobimg)
  bob.scale = 0.7

  jake = createSprite(200, 100, 150, 10)
  jake.addImage(jakeimg)
  jake.scale = 0.5



}


function draw() {
  background(bg);
  //ground.shapeColour=colour(54, 234, 51); 
  text(mouseX + "," + mouseY, mouseX, mouseY);
  if (block5.x < 500) {
    block5.velocityX = 2;
  } else if (block5.x > 700) {
    block5.velocityX = -2
  }
  if (block1.y < 200) {
    block1.velocityY = 2;
  } else if (block1.y > 350) {
    block1.velocityY = -2
  }
  if (block2.y < 250) {
    block2.velocityY = 2;
  } else if (block2.y > 400) {
    block2.velocityY = -2
  }
  if (block3.x < 300) {
    block3.velocityX = 2;
  } else if (block3.x > 500) {
    block3.velocityX = -2
  }

  if (block4.x < 320) {
    block4.velocityX = 2;
  } else if (block4.x > 520) {
    block4.velocityX = -2
  }

  if (block6.x < 720) {
    block6.velocityX = 2;
  } else if (block6.x > 920) {
    block6.velocityX = -2
  }

  if (block7.x < 720) {
    block7.velocityX = 2;
  } else if (block7.x > 920) {
    block7.velocityX = -2
  }

  if (block8.y < 300) {
    block8.velocityY = 2;
  } else if (block8.y > 500) {
    block8.velocityY = -2
  }

  if (block9.y < 20) {
    block9.velocityY = 2;
  } else if (block9.y > 82) {
    block9.velocityY = -2
  }

  bob.velocityY = bob.velocityY + 0.3;
  bob.collide(block1);
  bob.collide(block2);
  bob.collide(block3);
  bob.collide(block4);
  bob.collide(block5);
  bob.collide(block6);
  bob.collide(block7);
  bob.collide(block8);
  bob.collide(block9);



  jake.velocityY = jake.velocityY + 0.5;
  jake.collide(block2);
  jake.collide(block1);
  jake.collide(block3);
  jake.collide(block4);
  jake.collide(block5);
  jake.collide(block6);
  jake.collide(block7);
  jake.collide(block8);
  jake.collide(block9);

  if (keyDown("space") && (bob.isTouching(block1) || bob.isTouching(block2))) {
    bob.velocityY = -3
    bob.velocityX = 3
    bob.addImage(bobjumpimg)
  }
  else { bob.addImage(bobimg) }





  drawSprites();
}
