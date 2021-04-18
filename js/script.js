import {Player} from '/momentum/js/player.js';

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let move = false;


document.addEventListener('mousedown', ()=> {
    move = true;
})

document.addEventListener('mouseup', ()=> {
    move = false; 
})

const player = new Player(canvas);

function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(move);
    player.draw(ctx);
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);