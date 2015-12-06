import Marker from './marker';

class PacMan {

  constructor(doc) {
    this.doc = doc;
    this.diRed = '#a7100c';
    this.canvas = {
      'id': 'gameCanvas',
      'width': 800,
      'height': 300,
      'fillStyle': '#212121'
    };
  }

  init() {
    const body = this.doc.querySelector('body');
    const divElement = this.doc.createElement('div');
    const h1Element = this.doc.createElement('h1');
    h1Element.innerText = this;
    // const h1Text = this.doc.createTextNode(DiPacMan);
    // h1Element.appendChild(h1Text);
    divElement.appendChild(h1Element);


    const pElement = this.doc.createElement('p');
    pElement.innerHTML = 'Game initialized!';
    divElement.appendChild(pElement);

    const canvasElement = this.doc.createElement('canvas');
    this.ctx = canvasElement.getContext('2d');
    canvasElement.setAttribute('id', this.canvas.id);

    //Do not set width/height on canvas with CSS! Will affect drawing!
    canvasElement.setAttribute('width', this.canvas.width);
    canvasElement.setAttribute('height', this.canvas.height);
    divElement.appendChild(canvasElement);

    this.doc.body.appendChild(divElement);

    this.fillCanvas();
    this.drawOneMarker(new Marker(50, 50, 'greentest', "rgb(51, 190, 0)"));
    this.drawLogo();
  }

  fillCanvas() {
    // Color whole canvas
    this.ctx.fillStyle = 'black';
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  drawOneMarker(marker) {
    // Draw an individual marker.
    this.ctx.beginPath();
    this.ctx.lineWidth = '1';
    this.ctx.strokeStyle = this.diRed;
    this.ctx.fillStyle = marker.fillStyle;
    this.ctx.rect(20, 20, marker.x, marker.y);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
  }


  drawLogo() {
    const diLogoMarker = new Marker(700, 60, 'dilogo', this.diRed)

    this.ctx.beginPath();
    this.ctx.lineWidth = '3';
    this.ctx.strokeStyle = 'white';
    this.ctx.fillStyle = diLogoMarker.fillStyle;
    const radius = 50;
    this.ctx.arc(diLogoMarker.x, diLogoMarker.y, radius, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

    const logoImg = new Image();
    logoImg.src = './images/dilogo.png';
    logoImg.onload = () => {
      this.ctx.drawImage(logoImg, diLogoMarker.x - 50, diLogoMarker.y - 46, 95, 90);
    }
  }

  toString() {
    return 'Pac Man!';
  }
}

export default PacMan;
