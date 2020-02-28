const canvas = document.querySelector('#gameCanvas')
const ctx = canvas.getContext('2d')

let cWidth = 600
let cHeight = 800
canvas.width = cWidth
canvas.height = cHeight




setInterval(function(){
    ctx.fillStyle='white'
    ctx.fillRect(0,0,600,800)
    myGame.treeHandler()
},50)








