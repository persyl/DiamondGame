import Marker from './marker';

class City extends Marker {
    constructor(name, isHomeMarker) {
        let size;
        if (isHomeMarker) {
            size = 60;
            super(size, size, 0, name, "#A1D490", "#D4A190");
        } else {
            size = 40;
            super(size, size, 0, name, "white", "red");
        }
        this.size = size;
    }

    draw(ctx, xPos, yPos, xPosText) {
        if (xPosText === undefined) xPosText = xPos;
        Marker.drawOneMarker(ctx, this, xPos, yPos);
        ctx.font = "11px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(this.markerName, xPosText, (yPos + this.size / 2));
    }
}

export default City;
