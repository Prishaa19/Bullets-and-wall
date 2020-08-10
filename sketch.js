var car , wall;
var speed , weight , thickness;
var damage;

function setup() {
  createCanvas(1500,800);
  bullet = createSprite(800, 200,25, 15);
  bullet.velocityX = -5;
  
 wall = createSprite(100,200,50,height/2);

speed = random(223,331);
 weight = random (30,52);
 thickness = random (30,52);

}

function draw() {
  background(255,255,255);  
  
 

if(isTouching(bullet,wall)){
  //console.log("isTouching")
  bullet.velocityX = 0;
  damage = Math.round(0.5 * weight * speed * speed/(thickness *thickness *thickness));
  console.log(damage)
}
  if(damage > 10){
    bullet.shapeColor = ("red");
    //console.log("inside > 10");
  }

  if( damage < 10){
    bullet.shapeColor = ("green");
    //console.log("inside");
  }

  
       drawSprites();
  } 
  
  function isTouching(bullet,wall){
    if((bullet.x-bullet.x < wall.width/2 + bullet.width/2) &&
    (bullet.x-wall.x < wall.width/2 + bullet.width/2) &&
    (wall.y-bullet.y < wall.height/2+bullet.height/2)&&
    (bullet.y-wall.y < bullet.height/2+wall.height/2))
  {
    return true;
  }
    else{
     return false; 
     }
  }