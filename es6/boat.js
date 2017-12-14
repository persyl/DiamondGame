class Boat {
  draw(ctx, xPos, yPos, wantedWidth) {
        const boatOriginWidth = 1000;
        const boatOriginHeight = 896;
        const ratio = boatOriginWidth / wantedWidth;
        const calcHeight = boatOriginHeight / ratio;
        const boatImg = new Image();
        boatImg.src = './images/boat.png';
        boatImg.onload = () => {
            ctx.drawImage(boatImg, xPos, yPos, wantedWidth, calcHeight);
        }
    }
}
export default Boat;