    //Custom Marker object
    class Marker {

      constructor(x, y, type, fillStyle, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.prevX = -1;
        this.prevY = -1;
        this.fillStyle = fillStyle;
        this.type = type;
      }

      toString() {
        return "Custom Marker object";
      }
    }
export default Marker;