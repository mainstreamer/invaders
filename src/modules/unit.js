import Cannon from "./cannon.js";

export default class Unit {
        constructor(app) 
        {
            this.app = app;
            this.ctx = app.ctx;
            this.health = 10;
            this.size = 48;
            this.x = 550;
            this.y = 550;
            this.step = 5;
            this.flyby = this.app.makeSound('http://www.sa-matra.net/sounds/starwars/XWing-Fly1.wav');
            this.flybyAlt = this.app.makeSound('http://www.sa-matra.net/sounds/starwars/XWing-Fly2.wav');
            this.shot = this.app.makeSound('http://www.sa-matra.net/sounds/starwars/ATST-ChinGuns.wav');
            // this.fly2 = new sound('./src/sound/fly.wav');
            // this.flyby2 = new sound('http://www.sa-matra.net/sounds/starwars/TIE-Fly6.wav');
            // this.flyby3 = new sound('http://www.sa-matra.net/sounds/starwars/TIE-Fly7.wav');
        }

        getX() 
        {
            return this.x;
        }

        draw(x = this.x, y = this.y, x1 = this.size, y1 = this.size, erase = null) 
        {
            this.app.ctx.fillRect(x,y,x1,y1);            
        }

        erase(x = this.x, y = this.y, x1 = this.size, y1 = this.size)
        {            
            this.app.ctx.fillStyle = "black";
            this.app.ctx.fillRect(x,y,x1,y1);        
        }

        move()
        {
            if (this.y < 0) {
                this.erase();
                clearInterval(this.interval);
                this.direction = '';
            } else {
                this.erase();
                switch (this.direction) {
                    case  'left' : this.x-=this.step; break;
                    case  'right' : this.x+=this.step; break;
                    case  'down' : this.y+=this.step; break;
                    case  'up' : this.y-=this.step; break;
                    default : break;
                }

                this.draw();    

                //SOUNDS                
                if (this.direction === 'left' | this.direction === 'down') {

                    this.flybyAlt.play();
                } else if(this.direction === 'right' | this.direction === 'left') {
                    this.flyby.play();
                }
                //END SOUNDS
            }
        }

        shoot()
        {
            this.shot.play();
            let i = new Cannon(this.app);
            i.direction = 'up';
            i.x = this.x;
            i.y = this.y+12;
            i.interval = setInterval( function(){ i.move()}, 1);

        }
    }