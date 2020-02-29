class Game {
    constructor(){
        this.play = true
        this.gameOver = false
        this.score = 0
        this.scoreCounter = 0
        this.difficultyCounter = 0
        this.speed = 5

        this.trees = []
        this.treeFrequency = 20
        


    }
    playerHandler(){
        player.movement()
        player.drawBody()
        player.drawSkis()

        
        player.drawTrail()
        for (let t of player.trail){
            t[0][1] -= this.speed
            t[1][1] -= this.speed

            if(t[0][1] < -10){
                let i = player.trail.indexOf(t)
                player.trail.splice(i,1)
            }
            

        }
        
        this.collisionHandler()
        this.gameChecker()
    }
    treeHandler(){
        //make new trees when not enough
        if (this.trees.length < this.treeFrequency){
            let newX = Math.floor(Math.random()*600)
            let newY = Math.floor(Math.random()*1600) + 800
            let newTree = new Tree(newX,newY)
            this.trees.push(newTree)
        }
        if (this.play){
            for (let tree of this.trees){
                //move and draw trees
                tree.y -= this.speed
                tree.draw()
            }
            //delete trees when off screen
            for (let tree of this.trees){
                if(tree.y < -50){
                    let i = this.trees.indexOf(tree)
                    this.trees.splice(i,1)
                }
            }
        }
        
    }

    scoreHandler(){
        this.scoreCounter++
        
        if (this.scoreCounter > 20){
            this.scoreCounter = 0
            this.score++
            this.difficultyCounter++
        }
        document.querySelector('#gameScore').textContent = this.score    

        if(this.difficultyCounter > 10){
            this.treeFrequency += 2
            this.difficultyCounter = 0
        }





    }
    

    collisionHandler(){
        //check out of bounds collision
        if (player.y < 0 || player.y > 800){
            this.gameOver = true
        }
        if (player.x > 600 || player.x < 0){
            this.gameOver = true
        }
        //check tree and player collision
        for (let t of this.trees){
            if (player.y <= t.y + 4 && player.y > t.y - 14){
                if (player.x <= t.x + 8 && player.x >= t.x - 8){
                    this.gameOver = true
                    break
                }
            }
        }
        
    }

    gameChecker(){
        if (this.gameOver){
            this.play = false
            // this.score = 0
            this.scoreCounter = 0
            this.speed = 5
            this.trees = []
            player.x = 300
            player.y = 200
            player.angle = 0
            player.trail = []
            this.gameOver = false
        }
    }


    updateScreen(){
        ctx.fillStyle = 'white'
        ctx.fillRect(0,0,600,800)

        this.playerHandler()
        this.treeHandler()
        this.scoreHandler()
        


    }

}


let myGame = new Game
let player = new Player








