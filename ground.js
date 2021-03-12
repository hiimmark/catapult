
class Ground{
    constructor(x,y,width,height){
        var goptions={
            isStatic: true
          }
          this.body = Bodies.rectangle(x,y,width,height,goptions);
          this.width = width;
          this.height = height;
          World.add(gameworld,this.body);
        
    }
    display(){
        var pos=this.body.position;
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}