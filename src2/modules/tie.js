import Unit from "./unit.js"
import {make_tie_fighter} from "./helpers.js";

export default class Tie extends Unit 
{
    constructor(health)
    {
        super(health);
        this.size = 96;
        this.step = 1;
        this.y = 700;
    }

    draw(x = this.x, y = this.y, x1 = this.size, y1 = this.size)
    {
        make_tie_fighter(x,y);
    }
}