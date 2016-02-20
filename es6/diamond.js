import City from './city';
import Africa from './africa';
import steps from './steps';

class Diamond {

    constructor(doc) {
        this.doc = doc;
        // this.diRed = '#a7100c';
        this.canvas = [{
            'element': {},
            'id': 'gameCanvas',
            'width': 830,
            'height': 894,
            'fillStyle': '#eeeeee'
        }, {
            'element': {},
            'id': 'stepCanvas',
            'width': 830,
            'height': 894,
        }];
    }

    init() {
        this.initGameBoard();
        var ctx = this.canvas[1].element.getContext('2d');
        var tanger = new City('TANGER', true);
        tanger.draw(ctx, 170, 5, 175);

        var canaria = new City('CANARIA', true);
        canaria.draw(ctx, 0, 60, 5);

        var marrakech = new City('Marrakech');
        marrakech.draw(ctx, 70, 130, 65);

        var kairo = new City('KAIRO', true);
        kairo.draw(ctx, 560, 80, 572);

        var tunis = new City('Tunis');
        tunis.draw(ctx, 300, 40, 305);

        steps.draw(ctx);
    }

    initGameBoard() {
        const body = this.doc.querySelector('body');
        const pageContainer = this.doc.createElement('div');
        const h1Element = this.doc.createElement('h1');
        h1Element.innerText = this;
        pageContainer.appendChild(h1Element);
        this.addAllCanvas(pageContainer);

        this.doc.body.appendChild(pageContainer);
        var africa = new Africa();
        africa.draw(this.canvas[0].element.getContext('2d'), 0, 0);
    }

    addAllCanvas(container) {
        this.canvas.forEach((elmt, idx, array) => {
            elmt.element = this.doc.createElement('canvas');
            elmt.element.setAttribute('id', elmt.id);
            //Do not set width/height on canvas with CSS! Will affect drawing!
            elmt.element.setAttribute('width', elmt.width);
            elmt.element.setAttribute('height', elmt.height);
            container.appendChild(elmt.element);
            //this.fillCanvas(idx);
        });
    }

    clearCanvas(id) {
        var ctx = this.canvas[id].element.getContext('2d');
        ctx.clearRect(0, 0, this.canvas[id].width, this.canvas[id].height);
    }

    // fillCanvas(id) {
    //     var ctx = this.canvas[id].element.getContext('2d');
    //     ctx.fillStyle = this.canvas[id].fillStyle;
    //     ctx.rect(0, 0, this.canvas[id].width, this.canvas[id].height);
    //     ctx.fill();
    // }

    toString() {
        return 'Hunt for lost diamond!';
    }
}

export default Diamond;
