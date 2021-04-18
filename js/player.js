export class Player {
    constructor(canvas) {
        this.height = 10;
        this.width = 10;
        this.x = 0;
        this.y = canvas.height / 2 - this.height / 2;
        this.color = '#bada55';
        this.minSpeed = 0.1;
        this.speed = 0.1;
        this.maxSpeed = 5;
        this.canvas = canvas;
    }

    update(move) {
        if (move &&
            this.x >= 0 &&
            this.x + this.width < this.canvas.width) {
            this.x += this.speed;
            if (this.speed < this.maxSpeed) {
                this.speed += 0.1;
            }

        } else if (this.speed > this.minSpeed) {

            this.x += this.speed;
            this.speed -= 0.1;

        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}