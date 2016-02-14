import Marker from './marker';

class PacMan {

    constructor(doc) {
        this.doc = doc;
        this.diRed = '#a7100c';
        this.canvas = [{
            'element': {},
            'id': 'gameCanvas',
            'width': 800,
            'height': 300,
            'fillStyle': '#212121'
        }, {
            'element': {},
            'id': 'gameCanvas2',
            'width': 800,
            'height': 300,
        }];
    }

    init() {
        this.initGameBoard();

        this.fillCanvas(this.canvas[0].element.getContext('2d'));
        this.drawOneMarker(this.canvas[0].element.getContext('2d'), new Marker(100, 100, 'greentest', "rgb(51, 190, 0)"), 20, 20);
        this.drawLogo(this.canvas[0].element.getContext('2d'));
        //Test moving item over canvas
        var demoX = 0;
        this.drawOneMarker(this.canvas[1].element.getContext('2d'), new Marker(90, 120, 'demo', "rgb(51, 190, 0)"), demoX, 50);
        setInterval(() => {
            demoX++;
            this.clearCanvas(1);
            this.drawOneMarker(this.canvas[1].element.getContext('2d'), new Marker(90, 120, 'demo', "rgb(51, 190, 0)"), demoX, 50);
            if(demoX>=this.canvas[1].width) demoX = 0;
        }, 10);
    }

    initGameBoard() {
        const body = this.doc.querySelector('body');
        const pageContainer = this.doc.createElement('div');
        const h1Element = this.doc.createElement('h1');
        h1Element.innerText = this;
        // const h1Text = this.doc.createTextNode(DiPacMan);
        // h1Element.appendChild(h1Text);
        pageContainer.appendChild(h1Element);

        const pElement = this.doc.createElement('p');
        pElement.innerHTML = 'Game initialized!';
        pageContainer.appendChild(pElement);

        this.addAllCanvas(pageContainer);
        this.doc.body.appendChild(pageContainer);
    }

    addAllCanvas(container) {
        this.canvas.forEach((elmt, idx, array) => {
            elmt.element = this.doc.createElement('canvas');
            elmt.element.setAttribute('id', elmt.id);
            //Do not set width/height on canvas with CSS! Will affect drawing!
            elmt.element.setAttribute('width', elmt.width);
            elmt.element.setAttribute('height', elmt.height);
            container.appendChild(elmt.element);
        });
    }

    clearCanvas(id) {
        var ctx = this.canvas[id].element.getContext('2d');
        ctx.clearRect(0, 0, this.canvas[id].width, this.canvas[id].height);
    }

    fillCanvas(ctx) {
        // Color whole canvas
        ctx.fillStyle = 'black';
        ctx.rect(0, 0, this.canvas[0].width, this.canvas[0].height);
        ctx.fill();
    }

    drawOneMarker(ctx, marker, xPos, yPos) {
        // Draw an individual marker.
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = this.diRed;
        ctx.fillStyle = marker.fillStyle;
        ctx.rect(xPos, yPos, marker.x, marker.y);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }


    drawLogo(ctx) {
        const diLogoMarker = new Marker(740, 60, 'dilogo', this.diRed, 50);
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'white';
        ctx.fillStyle = diLogoMarker.fillStyle;
        ctx.arc(diLogoMarker.x, diLogoMarker.y, diLogoMarker.radius, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        const logoImg = new Image();
        logoImg.src = './images/dilogo.png';
        logoImg.onload = () => {
            ctx.drawImage(logoImg, diLogoMarker.x - 50, diLogoMarker.y - 46, 95, 90);
        }
    }

    toString() {
        return 'Pac Man!';
    }
}

export default PacMan;
