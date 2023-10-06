class Game {
  constructor() {
    this.resetButton=createButton("")
    this.resetTitle=createElement("h2")
    this.tablaTitle=createElement("h2")
    this.leader1=createElement("h2")
    this.leader2=createElement("h2")
  }

  getState(){
    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function(data){gameState=data.val()})
  }

  update(state){
    database.ref("/").update({gameState:state})
}

  start() {
    player = new Player();
    playerCount=player.getCount();

    form = new Form();
    form.display();

    car1=createSprite(100,height/2-50)
    car2=createSprite(100,height/2+100)

cars=[car1,car2]
  }

handleElements(){
  form.hide()
  form.titleImg.position(width/2,80) 
  form.titleImg.class("gameTitleAfterEffect")
  this.resetTittle.html("reinicia el Juego")
  this.resetTitle.class("resetText")
  this.resetTitle.position(width/2+200,40)
  this.resetButton.class("resetButton")
  this.resetButton.position(width/2+130,100)
  this.tablaTitle.html("posiciones")
  this.tablaTitle.class("resetText")
  this.tablaTitle.position(width/3-60,40)
  this.leader1.class("resetText")
  this.leader1.position(width/3-50,80)
  this.leader2.class("resetText")
  this.leader2.position(width/3-50,130)
}

  play(){
    this.handleElements()
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
      image(pista,-width*1,0,width*6,height)
      this.showRank()
      var index=0;
      for(var plr in allPlayers){
        index=index+1;
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
cars [index-1].position.x=x

        cars[index - 1].position.y = y;
        if(index==player.index){
          fill("blue")
          ellipse(x,y,100,100)
          camera.position.x=cars[index-1].position.x
          camera.position.y=cars[index-1].position.y
        }
      }


      this.handlePayerControls();


      drawSprites()
    }
  }

  showRank(){
    var leader1, leader2
    var players=Object.values(allPlayers)
    if(players[0].rank==0&&players[1]==0||players[0].rank==1){
      leader1=players[0].rank+"&emsp;"+players[0].name+"&emsp;"+players[0].score
      leader2=players[1].rank+"&emsp;"+players[1].name+"&emsp;"+players[1].score
    }
    if(players[1].rank==1){
      leader1=players[1].rank+"&emsp;"+players[1].name+"&emsp;"+players[1].score
      leader2=players[0].rank+"&emsp;"+players[0].name+"&emsp;"+players[0].score
    }
  }

  handlePayerControls(){
    if(keyIsDown(RIGHT_ARROW)){
      player.positionX+=10
      player.update()
    }
  }
}
