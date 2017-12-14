class User {
    constructor(color){
      this.color = color;
    }

    draw(ctx, xPos, yPos) {
        const wantedWidth = 50;
        const userOriginWidth = 340;
        const userOriginHeight = 340;
        const ratio = userOriginWidth / wantedWidth;
        const calcHeight = userOriginHeight / ratio;
        ctx.font = "bold 38px Arial";
        ctx.fillStyle = 'white';
        const userImg = new Image();
        userImg.src = `./images/${this.color}.png`;
        userImg.onload = () => {
            ctx.drawImage(userImg, xPos, yPos, wantedWidth, calcHeight);
        }
    }
}

export default User;