class Form{

constructor(){
    this.input = createInput("name")
    this.button= createButton("PLAY")
    this. greeting=createElement("h3")
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}

display(){

var title=createElement("h2")
title.html("CarRace")
title.position(displayWidth/2-50,0)

this.input.position(displayWidth/2-100,150)

this.button.position(displayWidth/2-25,180)

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("WAZ UP"+ player.name + "Waiting for people to bounce in")
    this.greeting. position(displayWidth/2-125,200)
})
}







}