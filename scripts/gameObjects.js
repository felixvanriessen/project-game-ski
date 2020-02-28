class Player {
    constructor(){
        this.x = 300
        this.y = 300
        this.angle = 0 * (Math.PI / 180)
    }

    draw(){
        ctx.strokeStyle = 'black'
        
        ctx.beginPath()
        ctx.moveTo(this.x,this.y)
        ctx.lineTo()




        ctx.stroke()

    }



}


class Tree {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    draw(){
        //trunk
        ctx.fillStyle = 'brown'
        ctx.fillRect(this.x-2,this.y-16,4,16)

        //leaves
        ctx.strokeStyle = '#005912'
        ctx.beginPath()
        ctx.moveTo(this.x,this.y-10)
        ctx.lineTo(this.x-12,this.y-10)
        ctx.lineTo(this.x-6,this.y-20)
        ctx.lineTo(this.x-10,this.y-20)

        ctx.lineTo(this.x,this.y-40)//top of the tree

        ctx.lineTo(this.x+10,this.y-20)
        ctx.lineTo(this.x+6,this.y-20)
        ctx.lineTo(this.x+12,this.y-10)
        ctx.lineTo(this.x,this.y-10)
        ctx.fillStyle = 'green'
        ctx.fill()
        ctx.stroke()

    }
}


