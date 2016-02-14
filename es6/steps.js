import Marker from './marker';

class Steps {
    constructor() {
        this.config = [{
            'related': [],
            'x': 220,
            'y': 60
        }, {
            'related': [0],
            'x': 170,
            'y': 60
        }, {
            'related': [1],
            'x': 140,
            'y': 100
        }, {
            'related': [2],
            'x': 110,
            'y': 140
        }, {
            'related': [3],
            'x': 80,
            'y': 180
        }, {
            'related': [4],
            'x': 60,
            'y': 240
        }, {
            'related': [5],
            'x': 60,
            'y': 290
        }, {
            'related': [6],
            'x': 80,
            'y': 340
        }, {
            'related': [7],
            'x': 130,
            'y': 370
        }, {
            'related': [8],
            'x': 180,
            'y': 370
        }, {
            'related': [],
            'x': 240,
            'y': 100
        }];
    }

    draw(ctx){
      this.config.forEach((obj, idx, all) => {
            var stepMarker = new Marker(0, 0, 12, 'stepMarker', "white", "#dddddd");
            Marker.drawOneMarker(ctx, stepMarker, obj.x, obj.y);
            obj.related.forEach((relVal, relIdx, relAll) => {
                ctx.beginPath();
                ctx.moveTo(this.config[relVal].x, this.config[relVal].y);
                ctx.lineTo(obj.x, obj.y);
                ctx.strokeStyle = '#D4A190';
                ctx.stroke();
            });
        });
    }
}

export default new Steps();
