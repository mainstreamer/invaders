import Unit from "./unit.js"
import {ctx, scoreKeeper} from "../index.js";
import {enemies} from "../index.js";
import {sound, make_xwing, make_tie_fighter, make_boom, make_stars, xwing_condition, explosion } from "./helpers.js";

export default class Cannon extends Unit
{
    constructor(health) {
        super();
        this.health = health;
        this.size = 5;
        this.x = 500;
        this.y = 500;
        this.step = 3;
        this.flyby = this.flybyAlt = '';
    }
    draw(x = this.x+46, y = this.y-5, x1 = this.size, y1 = this.size) {
        ctx.fillStyle = "white";
        ctx.fillRect(x,y,x1,y1);
    }
    erase(x = this.x+46, y = this.y-5, x1 = this.size, y1 = this.size){

        ctx.fillStyle = "black";
        ctx.fillRect(x, y, x1, y1);

    }
    move(){
        let flag = 0;
        for (let i =0; i<enemies.length; i++) {

            if (xwing_condition(this, enemies[i])){

                flag = 1;
                this.erase();
                clearInterval(this.interval);
                explosion.play();            

                let f = function(cannon, ship){

                    return function() {
                        ctx.fillStyle = "black";
                        ctx.fillRect(cannon.x,cannon.y-150, ship.size-20, ship.size);
                        setTimeout(ship.erase(), 100);
                        setTimeout(()=>enemies.splice(i, 1), 100);
                        scoreKeeper.increment();    
                    }    
                }
                
                make_boom(this.x, this.y-150, f(this, enemies[i]));
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