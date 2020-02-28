class Player {
    constructor(){
        this.x = 300
        this.y = 300
        this.angle = 0 // * (Math.PI / 180)
        this.angleRad = this.angle * (Math.PI / 180)
        this.skis =[]
    }

    drawBody(){
        ctx.strokeStyle = 'blue'
        
        ctx.beginPath()
        //legs
        ctx.moveTo(this.x-2,this.y+10)
        ctx.lineTo(this.x,this.y)
        ctx.lineTo(this.x+2, this.y+10)
        //body
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(this.x,this.y-8)
        ctx.lineTo(this.x-2, this.y+2)
        ctx.moveTo(this.x,this.y-8)
        ctx.lineTo(this.x+2,this.y+2)
        //head
        ctx.moveTo(this.x,this.y-8)
        ctx.lineTo(this.x-2, this.y-9)
        ctx.lineTo(this.x-2,this.y-13)
        ctx.lineTo(this.x+2, this.y-13)
        ctx.lineTo(this.x+2,this.y-9)
        ctx.lineTo(this.x,this.y-8)
        ctx.stroke()
    }
    drawSkis(){
        ctx.strokeStyle='black'
        this.angleRad = this.angle * (Math.PI / 180)
        let skiLx = this.x-2 + (8 * Math.sin(this.angleRad))
        let skiLy = this.y+10 + (8 * Math.cos(this.angleRad))
        let skiRx = this.x+2 + (8 * Math.sin(this.angleRad))
        let skiRy = this.y+10 + (8 * Math.cos(this.angleRad))

        ctx.beginPath()
        ctx.moveTo(this.x-2,this.y+10)
        ctx.lineTo(skiLx, skiLy)

        ctx.moveTo(this.x+2,this.y+10)
        ctx.lineTo(skiRx, skiRy)

        ctx.stroke()

    }
    moveHorizontal(){
        this.x += (this.angle / 10)
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


