

document.addEventListener('keydown', function(event){
    if (event.key == 'ArrowLeft'){
        if (player.angle > -70){
            player.angle -= 5
        }
        
    } 
    if (event.key == 'ArrowRight'){
        if (player.angle < 70){
            player.angle += 5
        }
    }
})

document.querySelector('#newGame-btn').addEventListener('click', function(){
    if (myGame.play){
        myGame.gameOver = true
    }
    myGame.score = 0
    myGame.play = true
})

