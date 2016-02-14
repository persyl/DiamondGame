class Africa {

    draw(ctx, xPos, yPos) {
        const africaImg = new Image();
        africaImg.src = './images/africa.png';
        africaImg.onload = () => {
            ctx.drawImage(africaImg, xPos, yPos);
        }
    }
}

export default Africa;