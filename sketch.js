var database
var gameState=0
var playerCount
var allPlayers
var distance=0
var player,form,game
var cars,car1,car2,car3,car4


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-100);
game=new Game()
game.getState()
game.start()
  
}

function draw(){
  background("white");
  
    if(playerCount===4){
      game.update(1)
      
    }
    if(gameState===1){
      game.play()
    }
}

