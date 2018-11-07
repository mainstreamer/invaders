import Unit from "./unit.js"

export default class Xwing extends Unit 
{
    constructor(app, x = 523, y = 73)
    {
        super(app);
        this.app = app;
        this.y = y;
        this.x = x;
        this.health = 10;
        this.size = 96;
    }

    draw(x = this.x, y = this.y, x1 = this.size, y1 = this.size) 
    {
        this.app.make_xwing(x,y);
    }

    erase(x = this.x, y = this.y, x1 = this.size+38, y1 = this.size)
    {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(x, y, x1, y1);
    }
}