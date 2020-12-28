var moving_Rect,fixed_Rect;
var game_Object1,game_Object2,game_Object3;




function setup() {
  createCanvas(1200,800);
  moving_Rect= createSprite(400,200,80,50);
  moving_Rect.shapeColor="green";

  fixed_Rect=createSprite(800,200,50,80);
  fixed_Rect.shapeColor="green";
  
  game_Object1=createSprite(200,600,50,50);
  game_Object1.shapeColor="yellow";

  game_Object2=createSprite(400,600,50,50);
  game_Object2.shapeColor="pink";

  game_Object3=createSprite(600,600,50,50);
  game_Object3.shapeColor=color(150,150,1);
}

function draw() {
  background(0);  
if(isTouching(moving_Rect,game_Object2)){
  moving_Rect.shapeColor="red";
  game_Object2.shapeColor="red";
}
else{
  moving_Rect.shapeColor="green";
  game_Object2.shapeColor="pink";
}
  moving_Rect.x=World.mouseX;
  moving_Rect.y=World.mouseY;
  drawSprites();
}


function isTouching(b1,b2){
  if (b1.x-b2.x<b1.width/2+b2.width/2&&
      b2.x-b1.x<b2.width/2+b1.width/2&&
      b1.y-b2.y<b1.height/2+b2.height/2&&
      b2.y-b1.y<b2.height/2+b1.height/2){
    return true;

      }
  else{
    return false;
  }    
   
}