class PalmTree {
    draw(ctx, xPos, yPos, wantedWidth) {
        const palmTreeOriginWidth = 600;
        const palmTreeOriginHeight = 828;
        const ratio = palmTreeOriginWidth / wantedWidth;
        const calcHeight = palmTreeOriginHeight / ratio;
        const palmTreeImg = new Image();
        palmTreeImg.src = './images/palm-tree.png';
        palmTreeImg.onload = () => {
            ctx.drawImage(palmTreeImg, xPos, yPos, wantedWidth, calcHeight);
        }
    }
}
export default PalmTree;
