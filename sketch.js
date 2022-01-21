var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairy,fairyImg;
var sound, fairysound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	//carga aquí la animación del hada
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairysound = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	fairysound.play();

	//crea el sprite del hada, y agrega la animación para el hada

	fairy = createSprite(400,500);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.2;
	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;
   
	var options = {
		
		isStatic: true, 
	}
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    
}


function draw() {
  background(bgImg);
  
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
if(star.y > 470 && starBody.position.y > 470){
 Matter.Body.setStatic(starBody,true,);
}

  drawSprites();
  keyPressed();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyCode === LEFT_ARROW){
     fairy.velocityX=-5;
	 fairy.addAnimation("fairy", fairyImg);
	}
	if(keyCode === RIGHT_ARROW){
    fairy.velocityX=5;
	fairy.addAnimation("fairy",fairyImg);
	}
	
}
