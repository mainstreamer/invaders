import Cannon from "./modules/cannon.js"
import Unit from "./modules/unit.js"
import Tie from "./modules/tie.js"
import Xwing from "./modules/xwing.js"

class App {
  constructor() {
    // INIT
    const left = 37;
    const right = 39;
    const space = 32;
    this.canvas = document.getElementById('canvas');
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.direction = null;
    this.ctx.font = "20px Arial";
    this.make_stars(200);    
    this.unit = new Tie(this);
    this.unit.draw();
    this.score = 0;
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, 5, 30);  

    this.enemies = [
      new Xwing(this, 0, 0), 
      new Xwing(this, 350, 0), 
      new Xwing(this, 700, 0),
      new Xwing(this, 1050, 0),

      new Xwing(this, 150, 175), 
      new Xwing(this, 500, 175), 
      new Xwing(this, 850, 175),
      new Xwing(this, 1200, 175),

      new Xwing(this, 0, 350), 
      new Xwing(this, 350, 350), 
      new Xwing(this, 700, 350),
      new Xwing(this, 1050, 350),
    ]

    this.enemies.forEach(function(element){
        element.draw();
    })

    this.intervalMovement = null;
    
    window.onkeydown = (key) => {
        switch (key.which) {
            // case 38 : unit.direction = 'up'; unit.move(); break;
            // case 40 : unit.direction = 'down'; unit.move(); break;
            case left  : if (!this.intervalMovement) {this.intervalMovement = setInterval(this.movement(this.unit, 'left'),1)}; break;
            case right : if (!this.intervalMovement) {this.intervalMovement = setInterval(this.movement(this.unit, 'right'),1)}; break;
            case space : this.unit.shoot(); break; //space
            // case 27 : unit.shoot(); break; //esc
            // case 13 : unit.shoot(); break; //enter
            default :  break;
        }
    }

    window.onkeyup = (key) => {
        switch (key.which) {
            case left  : clearInterval(this.intervalMovement); this.intervalMovement = null; break;
            case right : clearInterval(this.intervalMovement); this.intervalMovement = null; break;
            default :  break;
        }
    }
  }
   makeSound = src => {
    let sound = document.createElement("audio");
    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);

    return sound;      
  }
  
  increment = () => {
      this.score+=1;
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, 30, 40);
      this.ctx.fillStyle = "white";
      this.ctx.fillText(this.score, 5, 30);  
  }

  movement = (unit, direction = null) => () => {unit.direction = direction; unit.move()} 

  make_xwing = (x,y) => {
    let base_image = new Image();
    base_image.src = './src/img/xwing_128.png';
    base_image.onload = () => { 
      this.ctx.drawImage(base_image, x, y);
    }
  }

  make_tie_fighter = (x,y) => {
    let base_image2 = new Image();
    base_image2.src = './src/img/tie_96.png';
    base_image2.onload = () => { 
      this.ctx.drawImage(base_image2, x, y);
    }
  }

  make_boom = (x,y, func = null) => {
    //142x200
    let base_image3 = new Image();
    base_image3.src = './src/img/explosion.gif';
    base_image3.onload = () => { 
      this.ctx.drawImage(base_image3, x, y);
      if (func) { 
        setTimeout(func,100);
      }
    }
  }

  make_stars = (number = 10) => {
      let numStars = number;
      for (let i = 0; i < numStars; i++) {
          let x = Math.round(Math.random() * this.canvas.width);
          let y = Math.round(Math.random() * this.canvas.height);
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(x, y, 1, 1);
      }    
  }

  xwing_condition = (cannon, ship) => {
      ship.size = 200;

      return (cannon.y <= ship.y+40+ship.size-75 && (cannon.x >= ship.x-20 && cannon.x <= (ship.x + ship.size-15)));
  }
}

new App();