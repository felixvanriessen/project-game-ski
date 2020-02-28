class Game {
    constructor(){
        this.gameOver = false
        this.speed = 5
        this.trees = []
        this.treeFrequency = 20

    }
    treeHandler(){
        //make new trees when not enough
        if (this.trees.length < this.treeFrequency){
            let newX = Math.floor(Math.random()*600)
            let newY = Math.floor(Math.random()*1600) + 800
            let newTree = new Tree(newX,newY)
            this.trees.push(newTree)
        }

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

let myGame = new Game









