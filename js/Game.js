class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var A=await database.ref('playerCount').once("value")
      if (A.exists()){playerCount=A.val();player.getCount();}
      form = new Form()
      form.display();
    }
  }
      play(){
        form.hide()
        text("GAME STARTS",120,100)
        Player.player1()
        if(allplayers!==undefined){
          var car=130
          for(var plr in allplayers){
            if(plr==="player"+player.index)
            fill("brown")
            else
            fill("black")
            car+=20
            text(allplayers[plr].name+";"+allplayers[plr].distance,120,car)
          }
        }
          if(keyDown("space")&&player.index!==null){player.distance+=50;player.update()}
      }
}
