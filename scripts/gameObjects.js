class Player {
    constructor(){
        this.x = 300
        this.y = 200
        this.angle = 0 
        this.angleRad = this.angle * (Math.PI / 180)
        this.trail=[]
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
        //define ski angle
        this.angleRad = this.angle * (Math.PI / 180)
        let skiLx = this.x-2 + (8 * Math.sin(this.angleRad))
        let skiLy = this.y+10 + (8 * Math.cos(this.angleRad))
        let skiRx = this.x+2 + (8 * Math.sin(this.angleRad))
        let skiRy = this.y+10 + (8 * Math.cos(this.angleRad))

        //define and add positions to trail array
        let trailPos = [[skiLx, skiLy],[skiRx,skiRy]]
        this.trail.push(trailPos)

        //draw skis
        ctx.strokeStyle='black'
        ctx.beginPath()

        ctx.moveTo(this.x-2,this.y+10)
        ctx.lineTo(skiLx, skiLy)

        ctx.moveTo(this.x+2,this.y+10)
        ctx.lineTo(skiRx, skiRy)

        ctx.stroke()

    }
    movement(){
        //change horizontal speed with angle
        if (this.angle > 35 || this.angle < -35){
            this.x += (this.angle / 15)
        } else if(this.angle > 20 || this.angle < -20) {
            this.x += (this.angle / 12)
        } else {
            this.x += (this.angle / 10)
        }
        
        
        //change vertical speed with ski angle
        if (this.angle > 40 || this.angle < -40){
            this.y -= 1.75
        }
        if (this.angle > 35 || this.angle < -35){
            this.y -= 1.5
        }
        if (this.angle > 30 || this.angle < -30){
            this.y -= 1.25
        }
        if (this.angle > 25 || this.angle < -25){
            this.y --
        }
        if (this.angle < 10 || this.angle > -10){
            this.y += 0.25
        }
        if (this.angle < 5 || this.angle > -5){
            this.y += 0.75
        }


    }
    drawTrail(){
        ctx.strokeStyle = '#b3b3b3'
        ctx.beginPath()
        for (let t of this.trail){
            ctx.lineTo(t[0][0], t[0][1])
        }
        ctx.stroke()
        ctx.beginPath()
        for (let t of this.trail){
            ctx.lineTo(t[1][0], t[1][1])
        }
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


