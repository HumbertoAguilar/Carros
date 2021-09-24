const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var fondoImg,fondo 
var player1,player1Img
var player2,player2Img
var gameState="intro"
var edges
var barrera1,barrera1img
var barrera12
var barrera2,barrera2img
var score1=0
var score2=0
var win1Img, win1; 
var win2Img,win2


function preload(){
  fondoImg=loadImage("pista.jpeg")
  player1Img=loadImage("carro1.png")
  player2Img=loadImage("carro2.png")
  win1Img=loadImage("Player-1-Win.png")
  win2Img=loadImage("Player-2-Win.png")
  barrera1img=loadImage("Barda.png")

}

function setup() {

background("black")
edges=createEdgeSprites();
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
fondo= createSprite(330,200)
fondo.addImage("calle",fondoImg)
fondo.scale=2
fondo.visible=false
//player1=new Carro(240,300,80,80)


//player2=new Carros(400,300,90,90)

player1=createSprite(250,300)

player1.addImage("jugador1",player1Img)
player1.scale=0.3
player2=createSprite(420,300)
player2.addImage("jugador2",player2Img)
player2.scale=0.35
barrera1=createSprite(660,290,20,800)
barrera1.addImage("barda",barrera1img)
barrera12=createSprite(660,40,20,800)
barrera12.addImage("barda",barrera1img)
barrera2=createSprite(15,290,20,400)
barrera2.addImage("barda",barrera1img)
barrera3=createSprite(15,40,20,400)
barrera3.addImage("barda",barrera1img)
win1=createSprite(370,200);
win1.addImage("win",win1Img)
win2=createSprite(370,200)
win2.addImage("win2",win2Img)
win1.visible=false
 win2.visible=false
//sound=loadSound("RF.mp3")
 
}

function draw() {
 
 
  if(gameState==="intro"){
background("black")
textSize(35)
fill("white")
    text("Jugador 1: a Izq. - d Der.",170,150)
    text("Jugador 2: Flecha Izq - Flecha Der.",170,200)
    text("Evita chocar con las barreras",170,250)
    text("Presionar espacio para empezar",170,300)
    if(keyCode===32){
      gameState="play"
    }
  }
  
  if(gameState==="play"){
    background("white")
    win1.visible=false
    win2.visible=false

 //sound.play();
    if(player2.isTouching(barrera1)){
      score1=score1+1
    }
    if(player1.isTouching(barrera2)){
      score2=score2+1
    }
    if(score1===50){
      gameState="over"
      win1.visible=true
      
    }
    if(score2===50){
      gameState="over"
      win2.visible=true
     
    }
 
    fondo.visible=true
    fondo.velocityY=40
    
    if(fondo.y>400){
     fondo.y=fondo.height/2
    }
    if(keyCode===97){
      player1.velocityX=-5
    }
    if(keyCode===100){
      player1.velocityX=7
    }
   
    if(keyCode===LEFT_ARROW){
      player2.velocityX=-7
    }
    if(keyCode===RIGHT_ARROW){
      player2.velocityX=7

    }
    if(player1.isTouching(barrera1)){
      player1.x=-7
    }
    drawSprites();
   
    fill("white")
      textSize(25)
      text("Puntuación 1 : "+score1,60,20)
      text("Puntuación 2 :"+score2,400,20)
   player1.bounce(player2)
   player2.bounceOff(barrera1)
   player2.bounceOff(barrera2)
   player1.bounceOff(barrera2)
   player1.bounceOff(barrera1)
  
   

 
  }

if(gameState==="over"){

fill("white")
textSize(28)
text("Presionar espacio para reiniciar",150,300)
if(keyCode===32){
  gameState="play"
  win1.visible=false
  win2.visible=false
  score1=0
  score2=0
  player1=createSprite(250,300)

player1.addImage("jugador1",player1Img)
player1.scale=0.3
player2=createSprite(420,300)
player2.addImage("jugador2",player2Img)
player2.scale=0.35
}
}




  



 
 




  
}
