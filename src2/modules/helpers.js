import {ctx} from "../index.js";

let explosion = new sound('./src/sound/explosion6.wav');

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function make_xwing(x,y)
{
  let base_image = new Image();
  base_image.src = './src/img/xwing_128.png';
  base_image.onload = function(){ 
    ctx.drawImage(base_image, x, y);
  }
}

function make_tie_fighter(x,y)
{
  let base_image2 = new Image();
  base_image2.src = './src/img/tie_96.png';
  base_image2.onload = function(){ 
    ctx.drawImage(base_image2, x, y);
  }
}

function make_boom(x,y, func = null)
{
  //142x200
  let base_image3 = new Image();
  base_image3.src = './src/img/explosion.gif';
  base_image3.onload = function(){ 
      ctx.drawImage(base_image3, x, y);
      if (func) { 
        setTimeout(func,100);
      }
  }
}

function make_stars(number = 10)
{
    let numStars = number;
    for (var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * canvas.width);
        var y = Math.round(Math.random() * canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, 1, 1);
    }    
}

function xwing_condition(cannon, ship)
{
    ship.size = 200;

    return (cannon.y <= ship.y+40+ship.size-75 && (cannon.x >= ship.x-20 && cannon.x <= (ship.x + ship.size-15)));
}

export {sound, make_xwing, make_tie_fighter, make_boom, make_stars, xwing_condition, explosion}