var ator,carro1,carro2,carro3,carro4,carro5,carro6,estrada
var 
imagemator,imagencaro1,imagencaro2,imagencaro3,imagencaro4,
imagencaro5,imagencaro6
var vida,count
function preload(){
  imagemator = loadImage('imagens/ator-1.png')
  
  imagemcarro1 = loadImage('imagens/carro-1.png')
  imagemcarro2 = loadImage('imagens/carro-2.png')
  imagemcarro3 = loadImage('imagens/carro-3.png')
  imagemcarro4 = loadImage('imagens/carro-1.png')
  imagemcarro5 = loadImage('imagens/carro-2.png')
  imagemcarro6 = loadImage('imagens/carro-3.png')
  
 estrada = loadImage('imagens/estrada.png')
}

function setup(){
  createCanvas(600,350)
  
  count=0
  vida=4
  
  carro1 = createSprite(550,50,20,20)
  carro1.addImage(imagemcarro1)
  carro1.scale=0.5
  
  carro2 = createSprite(550,100,20,20) 
    carro2.addImage(imagemcarro2)
  carro2.scale=0.5
  
  carro3 = createSprite(550,150,20,20) 
    carro3.addImage(imagemcarro3)
  carro3.scale=0.5
  
  carro4 = createSprite(550,200,20,20)
    carro4.addImage(imagemcarro4)
  carro4.scale=0.5
  
  carro5 = createSprite(550,250,20,20)
    carro5.addImage(imagemcarro5)
  carro5.scale=0.5
  
  carro6 = createSprite(550,300,20,20)
    carro6.addImage(imagemcarro6)
  carro6.scale=0.5
  
  
  ator = createSprite(300,335)
  ator.addImage(imagemator)
  ator.scale=0.2
  
  
  
}

function draw(){

  background(estrada)
  fill('red')
  text('vidas: '+vida,544,20)
   text('pontos: '+count,450,20)
  
  carro1.velocityX=-10
  carro2.velocityX=-11 
  carro3.velocityX=-12
  carro4.velocityX=-13
  carro5.velocityX=-14 
  carro6.velocityX=-15 
  
  if(carro1.x<0){
   carro1.x=600  
     
     }
  
  if(carro2.x<0){
   carro2.x=600  
     
     }  
    if(carro3.x<0){
   carro3.x=600  
     
     }
  
   if(carro4.x<0){
   carro4.x=600  
     
     }
  
  if(carro5.x<0){
   carro5.x=600  
     
     }  
    if(carro6.x<0){
   carro6.x=600  
     
     }
    if(ator.y<20){
   ator.y=335  
   ator.x=300
      
      count=count+1
     }
if(keyDown('up')){
   ator.y-=5
    
   }   
 if(keyDown('down')){
   ator.y-=-5
    
   } 
  
if(keyDown('left')){
   ator.x-=5
    
   }  
  
if(keyDown('right')){
   ator.x-=-5
    
   }  
  
 if(
 ator.isTouching(carro1)||
  ator.isTouching(carro2)|| 
  ator.isTouching(carro3)||
  ator.isTouching(carro4)||
  ator.isTouching(carro5)|| 
  ator.isTouching(carro6)
 ){
  ator.x= 300 
  ator.y= 335   
  vida=vida -1
   
   
   
   }
  if(vida<=0){
    carro1.remove()
    carro2.remove()
    carro3.remove()
    carro4.remove()
    carro5.remove()
    carro6.remove()
  
    ator.remove()
    textSize(50)
    text('GAME OVER',200,200)
 }
  
  
  
  drawSprites()
   
}