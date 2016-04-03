class Dice {
    draw(ctx, xPos, yPos) {
        const wantedWidth = 50;
        const diceOriginWidth = 350;
        const diceOriginHeight = 400;
        const ratio = diceOriginWidth / wantedWidth;
        const calcHeight = diceOriginHeight / ratio;
        ctx.font = "bold 38px Arial";
        ctx.fillStyle = 'white';
        const randomNumber = Math.floor((Math.random() * 6) + 1);
        const randomXPositioning = Math.floor((Math.random() * 20) + 1);
        const randomYPositioning = Math.floor((Math.random() * 20) + 1);
        const diceImg = new Image();
        diceImg.src = `./images/${randomNumber}.png`;
        diceImg.onload = () => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(diceImg, xPos+randomXPositioning, yPos+randomYPositioning, wantedWidth, calcHeight);
        }
    }
}

export default Dice;
