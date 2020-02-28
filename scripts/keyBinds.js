

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