const canvas = document.querySelector('#gameCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 800

setInterval(function(){
    if (myGame.play){
        myGame.updateScreen()
        document.querySelector('#newGame-btn').textContent = 'PAUSE'
    } else if (!myGame.play){
        document.querySelector('#newGame-btn').textContent = 'RESTART'

    }
},30)








