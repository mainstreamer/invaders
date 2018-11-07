import Unit from "./unit.js"

export default class Tie extends Unit 
{
    constructor(app)
    {
        super(app);
        this.app = app;
        this.size = 96;
        this.step = 1;
        this.y = 700;
    }

    draw(x = this.x, y = this.y, x1 = this.size, y1 = this.size)
    {
        this.app.make_tie_fighter(x,y);
    }
}