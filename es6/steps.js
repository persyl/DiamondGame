import Marker from './marker';
import Step from './step';

class Steps {
    constructor() {
        this.relations = [
            [1, 2],
            [2, 3],
            [3, 4],
            [3, 14],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
            [9, 10],
            [11, 12],
            [12, 13],
            [13, 14],
            [14, 15],
            [15, 6],
            [16, 15],
            [17, 16],
            [17, 13],
            [18, 17],
            [19, 18],
            [20, 19],
            [20, 11],
            [21, 20],
            [22, 21],
            [22, 19],
            [23, 22],
            [24, 23],
            [25, 17],
            [25, 24],
            [26, 25],
            [26, 16],
            [27, 21],
            [28, 27],
        ];
        this.steps = [
            new Step(1, 200, 80),
            new Step(2, 150, 90),
            new Step(3, 140, 130),
            new Step(4, 80, 140),
            new Step(5, 60, 190),
            new Step(6, 60, 240),
            new Step(7, 60, 290),
            new Step(8, 80, 340),
            new Step(9, 130, 370),
            new Step(10, 180, 370),
            new Step(11, 240, 100),
            new Step(12, 200, 140),
            new Step(13, 240, 180),
            new Step(14, 160, 190),
            new Step(15, 150, 240),
            new Step(16, 180, 290),
            new Step(17, 260, 240),
            new Step(18, 320, 220),
            new Step(19, 340, 160),
            new Step(20, 300, 100),
            new Step(21, 400, 110),
            new Step(22, 400, 160),
            new Step(23, 440, 210),
            new Step(24, 380, 240),
            new Step(25, 320, 290),
            new Step(26, 260, 340),
            new Step(27, 480, 130),
            new Step(28, 530, 160),
        ];
    }

    draw(ctx) {
        this.steps.forEach((obj, idx, all) => {
            var stepMarker = new Marker(0, 0, 12, 'stepMarker', "white", "#dddddd");
            Marker.drawOneMarker(ctx, stepMarker, obj.x, obj.y);
            ctx.font = "11px Arial";
            ctx.fillStyle = 'red';
            const idLength = obj.id.toString().length;
            ctx.fillText(obj.id, obj.x - (3 * idLength), obj.y + 3);
            const objRelated = this.getRelations(obj.id);
            objRelated.forEach((relId, relIdx, relAll) => {
                ctx.beginPath();
                ctx.moveTo(this.steps[(relId - 1)].x, this.steps[(relId - 1)].y);
                ctx.lineTo(obj.x, obj.y);
                ctx.strokeStyle = '#D4A190';
                ctx.stroke();
            });
        });
    }

    getRelations(stepId) {
        let stepRelations = [];
        this.relations.forEach((relObjArray, relIdx, relAll) => {
            if (relObjArray.includes(stepId)) {
                relObjArray.forEach((id, idx, arr) => {
                    if (id !== stepId) {
                        stepRelations.push(id);
                    }
                });
            }
        });
        return stepRelations;
    }
}

export default new Steps();
