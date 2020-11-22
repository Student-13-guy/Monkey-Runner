
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0,score=0;
var ground;
var foodGroup;
var obstacleGroup;
var jungle,jungleImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 jungleImage=loadImage("jungle1.png")
}



function setup() {
 createCanvas(400,400) 
  
   

   jungle=createSprite(200,200,400,400)
  jungle.addImage("jungle",jungleImage)
  jungle.scale=3.5;
  jungle.velocityX=-4;
  
  

  monkey=createSprite(80,315,10,10);
    monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
 
   foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("lightblue")
 
    if( ground.x<0)
  ground.x=  ground.width/2;
    ground.visible=false;
   if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
   
  
  if(keyDown("space") ){
    monkey.velocityY=-6;
    }
  monkey.velocityY=monkey.velocityY +0.8;
  monkey.collide (ground)
  obstacles();
  fruit();
  
 
  
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
  score = score+2
  
  }
  
  
   
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
    score = 0          }
  
  switch (score){
    case 10:monkey.scale=0.12;
           break;
   case 20:monkey.scale=0.14;
          break;
   case 30:monkey.scale=0.16;       
          break;
   case 40:monkey.scale=0.18;  
          break;
   case 50:monkey.scale=0.20;
          break;
          default:break;
  
  }
  drawSprites();
   
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:"+score,300,50) 
}

function obstacles(){
  if (frameCount%200===0){
  
  obstacle=createSprite(400,330,10,10)
    obstacle.addImage("obstacle",obstacleImage)
  obstacle.velocityX=-6;
  obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
}
}

function fruit(){
 if(frameCount%150===0){
  banana=createSprite(400,150,10,10);
   banana.addImage("banana",bananaImage)
   banana.velocityX=-4;
   banana.scale=0.1
   banana.y=random(100,200)
foodGroup.add(banana)
   
   
   
   
 } 
  
  
  
  
}


