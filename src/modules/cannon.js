import Unit from "./unit.js"

export default class Cannon extends Unit
{
    constructor(app) {
        super(app);
        this.explosion = this.app.makeSound('./src/sound/explosion6.wav');
        this.app = app;
        this.health = 10
        this.size = 5;
        this.x = 500;
        this.y = 500;
        this.step = 3;
        this.flyby = this.flybyAlt = '';
    }

    draw(x = this.x+46, y = this.y-5, x1 = this.size, y1 = this.size) {
        this.app.ctx.fillStyle = "white";
        this.app.ctx.fillRect(x,y,x1,y1);
    }
    erase(x = this.x+46, y = this.y-5, x1 = this.size, y1 = this.size){

        this.app.ctx.fillStyle = "black";
        this.app.ctx.fillRect(x, y, x1, y1);

    }
    move(){
        let flag = 0;
        for (let i =0; i<this.app.enemies.length; i++) {

            if (this.app.xwing_condition(this, this.app.enemies[i])){

                flag = 1;
                this.erase();
                clearInterval(this.interval);
                this.explosion.play();            

                let f = (cannon, ship) => {
                    return () => {
                        this.app.ctx.fillStyle = "black";
                        this.app.ctx.fillRect(cannon.x,cannon.y-150, ship.size-20, ship.size);
                        setTimeout(ship.erase(), 100);
                        setTimeout(()=>this.app.enemies.splice(i, 1), 100);
                        this.app.increment();
                    }    
                }
                
                this.app.make_boom(this.x, this.y-150, f(this, this.app.enemies[i]));
                this.direction = '';
            }
        }

        if (flag === 0) {
            this.erase();
            switch (this.direction) {
                case  'left' : this.x-=this.step; break;
                case  'right' : this.x+=this.step; break;
                case  'down' : this.y+=this.step; break;
                case  'up' : this.y-=this.step; break;
                default : break;
            }
       
            this.draw();    
        }
            
    }
}