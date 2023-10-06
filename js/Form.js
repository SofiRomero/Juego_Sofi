class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("assets/title.png", "titulo del juego");
    this.greeting = createElement("h2");
  }

setElementPosition(){
  this.input.position(width/2-150,height/2)
  this.playButton.position(width/2-130,height/2+70)
  this.titleImg.position(width/3-100,100)
  this.greeting.position(width/2-350,height/2-100)
}

setElementsStyle(){
  this.input.class("customInput")
  this.playButton.class("customButton")
  this.titleImg.class("gameTitle")
  this.greeting.class("greeting")
}

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  buttonPressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var mensaje=`Hola${this.input.value()}</br>espera a que alguien más se una`
      this.greeting.html(mensaje)
      playerCount+=1
      player.name=this.input.value();
      player.index=playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    })
  }

  display(){
    this.setElementPosition()
    this.setElementsStyle()
    this.buttonPressed()

  }
  

}
