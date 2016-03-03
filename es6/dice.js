class Dice {
    draw(ctx, xPos, yPos) {
        ctx.font = "bold 38px Arial";
        ctx.fillStyle = 'white';
        const randomNumber = Math.floor((Math.random() * 6) + 1);
        ctx.fillText(randomNumber, xPos, yPos);
    }
}

export default Dice;
