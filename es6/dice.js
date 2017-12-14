import DiceDot from './dicedot';
let animation = null; //Can not be used as a class variable, dont know why?!
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
            ctx.drawImage(diceImg, xPos + randomXPositioning, yPos + randomYPositioning, wantedWidth, calcHeight);
        }
    }

    throwDice() {
        clearInterval(animation);
        const wrapperId = 'diceWrapper';
        const existingDiceWrapper = document.querySelector(`#${wrapperId}`);
        if (existingDiceWrapper) {
            document.body.removeChild(existingDiceWrapper);
        }

        const dotPositions = [
            [new DiceDot(50, 50)],
            [new DiceDot(15, 15), new DiceDot(85, 85)],
            [new DiceDot(15, 15), new DiceDot(50, 50), new DiceDot(85, 85)],
            [new DiceDot(15, 15), new DiceDot(85, 15), new DiceDot(15, 85), new DiceDot(85, 85)],
            [new DiceDot(15, 15), new DiceDot(85, 15), new DiceDot(50, 50), new DiceDot(15, 85), new DiceDot(85, 85)],
            [new DiceDot(15, 15), new DiceDot(50, 15), new DiceDot(85, 15), new DiceDot(15, 85), new DiceDot(50, 85), new DiceDot(85, 85)]
        ];
        const randomNumber = Math.floor((Math.random() * 6) + 1);
        const diceNumberDots = dotPositions[(randomNumber - 1)];
        let circles = '';
        diceNumberDots.forEach((dot) => {
            circles += `<circle r="8" cx="${dot.cx}" cy="${dot.cy}" stroke="black" fill="#333333"></circle>`
        });
        const svgDice = `<svg width="100" height="100" viewBox="0 0 100 100" class="svg-dice">
                            ${circles}
                         </svg>`;
        const diceWrapper = document.createElement('div');
        diceWrapper.id = wrapperId;
        diceWrapper.innerHTML = svgDice;

        // const svgDice = document.createElement('svg');
        // svgDice.setAttribute('width', '100');
        // svgDice.setAttribute('height', '100');
        // svgDice.setAttribute('viewBox', '0 0 100 100'); //NOT POSSIBLE! will rewrite viewBox to viewbox?!
        // svgDice.classList.add('svg-dice');
        // const dot = document.createElement('circle');
        // dot.setAttribute('r', '5');
        // dot.setAttribute('cx', '10');
        // dot.setAttribute('cy', '40');
        // dot.setAttribute('stroke', 'black');
        // dot.setAttribute('fill', 'black');
        // svgDice.appendChild(dot);

        document.body.appendChild(diceWrapper);
        this.animate();
    }

    animate() {
        clearInterval(animation);
        animation = setInterval(() => {
            const diceElement = document.querySelector('.svg-dice');
            diceElement.classList.toggle('svg-dice--large');
        }, 1500);
    }
}

export default Dice;
