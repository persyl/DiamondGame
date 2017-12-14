    //Custom Marker object
    class Marker {

        constructor(x, y, radius, name, strokeStyle, fillStyle) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.prevX = -1;
            this.prevY = -1;
            this.strokeStyle = strokeStyle;
            this.fillStyle = fillStyle;
            this.markerName = name;
        }

        static drawOneMarker(ctx, marker, xPos, yPos) {
            // Draw an individual marker.
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = marker.strokeStyle;
            ctx.fillStyle = marker.fillStyle;
            if (marker.radius > 0) {
                ctx.arc(xPos, yPos, marker.radius, 0, 2 * Math.PI, false);
            } else {
                ctx.rect(xPos, yPos, marker.x, marker.y);
            }
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }

        toString() {
            return `This is a marker with name ${this.markerName}`;
        }
    }
    export default Marker;
