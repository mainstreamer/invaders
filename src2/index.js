import Unit from "./modules/unit.js"
import ScoreKeeper from "./modules/scorekeeper.js"
import {sound, make_xwing, make_tie_fighter, make_boom, make_stars, xwing_condition, explosion} from "./modules/helpers.js";
import Tie from "./modules/tie.js"
import Xwing from "./modules/xwing.js"
import Cannon from "./modules/cannon.js";

let fly = new sound('./src/sound/fly.wav');
let flyby = new sound('http://www.sa-matra.net/sounds/starwars/TIE-Fly6.wav');
let flyby2 = new sound('http://www.sa-matra.net/sounds/starwars/TIE-Fly7.wav');

let canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
export let ctx = canvas.getContext('2d');
export let scoreKeeper = new ScoreKeeper; 

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let direction = null;
ctx.font = "20px Arial";
make_stars(200);

let unit = new Tie(10);
unit.draw();
export let enemies = [
  new Xwing(10, 0, 0), 
  new Xwing(10, 350, 0), 
  new Xwing(10, 700, 0),
  new Xwing(10, 1050, 0),

  new Xwing(10, 150, 175), 
  new Xwing(10, 500, 175), 
  new Xwing(10, 850, 175),
  new Xwing(10, 1200, 175),

  new Xwing(10, 0, 350), 
  new Xwing(10, 350, 350), 
  new Xwing(10, 700, 350),
  new Xwing(10, 1050, 350),
]

enemies.forEach(function(element){
    element.draw();
})


let movement = function(unit){
     return function() {
        unit.move();    
    }    
}

let intervalMovement = null;

window.onkeydown = function(key) {
    switch (key.which) {
        // case 38 : unit.direction = 'up'; unit.move(); break;
        // case 40 : unit.direction = 'down'; unit.move(); break;
        case 37 : unit.direction = 'left'; if (!intervalMovement) {intervalMovement = setInterval(movement(unit),1)}; break;
        case 39 : unit.direction = 'right'; if (!intervalMovement) {intervalMovement = setInterval(movement(unit),1)}; break;
        case 32 : unit.shoot(); break; //space
        // case 27 : unit.shoot(); break; //esc
        // case 13 : unit.shoot(); break; //enter
        default :  break;
    }
}

window.onkeyup = function(key) {
    switch (key.which) {
        case 37 : unit.direction = 'left'; clearInterval(intervalMovement); intervalMovement = null; break;
        case 39 : unit.direction = 'right'; clearInterval(intervalMovement); intervalMovement = null; break;
        default :  break;
    }
}