var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var pista
var car1,car2
var allPlayers
var cars=[]
var resetButton

function preload() {
 backgroundImage = loadImage("assets/background.jpeg");
 pista=loadImage("assets/track2.jpg")
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.update(1)
  }

  if(gameState==1){
   game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
