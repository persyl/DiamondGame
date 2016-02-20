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
            [16, 10],
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
            [29, 28],
            [30, 29],
            [31, 30],
            [32, 31],
            [33, 32],
            [33, 38],
            [34, 33],
            [34, 30],
            [35, 34],
            [36, 35],
            [36, 26],
            [37, 36],
            [38, 37],
            [39, 38],
            [40, 39],
            [40, 32],
            [41, 36],
            [42, 41],
            [43, 42],
            [44, 43],
            [45, 44],
            [46, 45],
            [46, 40],
            [47, 46],
            [48, 47],
            [49, 48],
            [50, 49],
            [51, 50],
            [51, 41],
            [52, 51],
            [53, 52],
            [54, 53],
            [55, 54],
            [55, 47],
            [57, 56],
            [58, 57],
            [59, 58],
            [61, 60],
            [62, 61],
            [62, 53],
            [63, 62],
            [64, 63],
            [65, 64],
            [66, 65],
            [67, 66],
            [67, 60],
            [68, 67],
            [69, 68],
            [70, 69],
            [70, 67],

        ];
        this.steps = [
            new Step(1, 200, 80),
            new Step(2, 150, 90),
            new Step(3, 140, 130),
            new Step(4, 120, 180),
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
            new Step(29, 590, 210),
            new Step(30, 480, 260),
            new Step(31, 630, 270),
            new Step(32, 680, 300),
            new Step(33, 580, 340),
            new Step(34, 500, 320),
            new Step(35, 410, 320),
            new Step(36, 340, 380),
            new Step(37, 470, 380),
            new Step(38, 540, 390),
            new Step(39, 640, 390),
            new Step(40, 740, 360),
            new Step(41, 340, 440),
            new Step(42, 400, 450),
            new Step(43, 460, 460),
            new Step(44, 540, 450),
            new Step(45, 600, 460),
            new Step(46, 680, 460),
            new Step(47, 640, 520),
            new Step(48, 580, 510),
            new Step(49, 520, 560),
            new Step(50, 460, 520),
            new Step(51, 400, 540),
            new Step(52, 400, 600),
            new Step(53, 460, 620),
            new Step(54, 540, 620),
            new Step(55, 670, 650),
            new Step(56, 800, 640),
            new Step(57, 760, 680),
            new Step(58, 770, 730),
            new Step(59, 740, 770),
            new Step(60, 610, 740),
            new Step(61, 570, 680),
            new Step(62, 500, 680),
            new Step(63, 440, 670),
            new Step(64, 370, 680),
            new Step(65, 400, 730),
            new Step(66, 460, 750),
            new Step(67, 520, 790),
            new Step(68, 440, 810),
            new Step(69, 445, 865),
            new Step(70, 520, 840),
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
