import Marker from './marker';
import Step from './step';

class Steps {
    constructor() {
        this.config = [
            new Step(1, 200, 80, []),
            new Step(2, 150, 90, [1]),
            new Step(3, 140, 130, [2]),
            new Step(4, 80, 140, [3]),
            new Step(5, 60, 190, [4]),
            new Step(6, 60, 240, [5]),
            new Step(7, 60, 290, [6]),
            new Step(8, 80, 340, [7]),
            new Step(9, 130, 370, [8]),
            new Step(10, 180, 370, [9]),
            new Step(11, 240, 100, []),
            new Step(12, 200, 140, [11]),
            new Step(13, 240, 180, [12]),
            new Step(14, 160, 190, [13]),
            new Step(15, 150, 240, [14, 6]),
            new Step(16, 180, 290, [15]),
            new Step(17, 260, 240, [16, 13]),
            new Step(18, 320, 220, [17]),
            new Step(19, 340, 160, [18]),
        ];
    }

    draw(ctx) {
        this.config.forEach((obj, idx, all) => {
            var stepMarker = new Marker(0, 0, 12, 'stepMarker', "white", "#dddddd");
            Marker.drawOneMarker(ctx, stepMarker, obj.x, obj.y);
            ctx.font = "11px Arial";
            ctx.fillStyle = 'red';
            const idLength = obj.id.toString().length;
            ctx.fillText(obj.id, obj.x - (3 * idLength), obj.y + 3);

            obj.related.forEach((relId, relIdx, relAll) => {
                var relObjects = this.config.filter((relObj) => {
                    return relObj.id === relId
                });
                if (relObjects.length > 0) {
                    ctx.beginPath();
                    //TODO: relObjects is an array but should be only one as there should not be more than 1 with ID of relId
                    ctx.moveTo(relObjects[0].x, relObjects[0].y);
                    ctx.lineTo(obj.x, obj.y);
                    ctx.strokeStyle = '#D4A190';
                    ctx.stroke();
                }
            });
        });
    }
}

export default new Steps();
