import {ctx} from "../index.js";

export default class ScoreKeeper {
	constructor(){
	  this.score = 0;
	}

	increment() {
		this.score+=1;
		ctx.fillStyle = "black";
    	ctx.fillRect(0, 0, 30, 40);
    	ctx.fillStyle = "white";
    	ctx.fillText(this.score, 5, 30);  
	}
}