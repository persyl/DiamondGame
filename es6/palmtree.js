class PalmTree {
    draw(ctx, xPos, yPos) {
        const palmTreeImg = new Image();
        palmTreeImg.src = './images/palm-tree.png';
        palmTreeImg.width = '50';
        palmTreeImg.height = '50';
        palmTreeImg.onload = () => {
            ctx.drawImage(palmTreeImg, xPos, yPos);
        }
    }
}
export default PalmTree;
