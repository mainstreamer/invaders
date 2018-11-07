import Unit from "./unit.js"
import {ctx} from "../index.js";
import {make_xwing} from "./helpers.js";

export default class Xwing extends Unit 
{
    constructor(health, x = 523, y = 73)
    {
        super(health);
        this.y = y;
        this.x = x;
        this.size = 96;
    }

    draw(x = this.x, y = this.y, x1 = this.size, y1 = this.size) 
    {
        make_xwing(x,y);
    }

    erase(x = this.x, y = this.y, x1 = this.size+38, y1 = this.size)
    {
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, x1, y1);
    }
}