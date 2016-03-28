import City from './city';
import Africa from './africa';
import PalmTree from './palmtree';
import Boat from './boat';
import steps from './steps';
import Dice from './dice';

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
        }, {
            'element': {},
            'id': 'diceCanvas',
            'width': 830,
            'height': 894,
        }];
    }

    init() {
        this.initGameBoard();
        const ctx = this.canvas[1].element.getContext('2d');
        const tanger = new City('TANGER', true);
        tanger.draw(ctx, 170, 5, 175);

        const canaria = new City('CANARIA', true);
        canaria.draw(ctx, 0, 60, 5);

        const marrakech = new City('Marrakech');
        marrakech.draw(ctx, 70, 130, 65);

        const kairo = new City('KAIRO', true);
        kairo.draw(ctx, 560, 80, 572);

        const tunis = new City('Tunis');
        tunis.draw(ctx, 300, 40, 305);

        steps.draw(ctx);

        const ctx2 = this.canvas[2].element.getContext('2d');
        const dice = new Dice();
        dice.draw(ctx2, 750, 490);
    }

    initGameBoard() {
        const body = this.doc.querySelector('body');
        const pageContainer = this.doc.createElement('div');
        const h1Element = this.doc.createElement('h1');
        h1Element.innerText = this;
        pageContainer.appendChild(h1Element);
        this.addAllCanvas(pageContainer);

        this.doc.body.appendChild(pageContainer);
        const africa = new Africa();
        const ctx = this.canvas[0].element.getContext('2d');
        africa.draw(ctx, 0, 0);

        this.addPalmTrees(ctx);
        this.addBoats(ctx);
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

    addPalmTrees(ctx) {
        var palmTree = new PalmTree();
        palmTree.draw(ctx, 80, 60, 50);
        palmTree.draw(ctx, 350, 0, 70);
        palmTree.draw(ctx, 400, 230, 50);
        palmTree.draw(ctx, 100, 260, 50);
        palmTree.draw(ctx, 570, 530, 70);
        palmTree.draw(ctx, 775, 660, 30);
        palmTree.draw(ctx, 460, 690, 30);
        palmTree.draw(ctx, 490, 710, 30);
        palmTree.draw(ctx, 520, 710, 30);
        palmTree.draw(ctx, 550, 710, 30);
        palmTree.draw(ctx, 700, 430, 30);
        palmTree.draw(ctx, 730, 400, 30);
        palmTree.draw(ctx, 760, 360, 30);
        palmTree.draw(ctx, 780, 320, 30);
    }

    addBoats(ctx) {
        var boat = new Boat();
        boat.draw(ctx, 60, 5, 60);
        boat.draw(ctx, 695, 565, 80);
        boat.draw(ctx, 140, 500, 120);
    }

    clearCanvas(id) {
        const ctx = this.canvas[id].element.getContext('2d');
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
