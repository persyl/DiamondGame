import City from './city';
import Africa from './africa';
import PalmTree from './palmtree';
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

        this.addPalmTrees();
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

    addPalmTrees() {
        var palmTree = new PalmTree();
        palmTree.draw(this.canvas[0].element.getContext('2d'), 80, 60, 50);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 350, 0, 70);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 400, 230, 50);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 100, 260, 50);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 570, 530, 70);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 775, 660, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 460, 690, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 490, 710, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 520, 710, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 550, 710, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 700, 430, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 730, 400, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 760, 360, 30);
        palmTree.draw(this.canvas[0].element.getContext('2d'), 780, 320, 30);
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
