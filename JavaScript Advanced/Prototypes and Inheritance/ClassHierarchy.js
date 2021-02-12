function classes() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }
        get area() {}

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return (this.radius ** 2) * Math.PI;
        }

        changeUnits(unit) {
            if (this.units == 'cm' && unit == 'm') {
                this.radius /= 100;
            } else if (this.units == 'cm' && unit == 'mm') {
                this.radius *= 10;
            } else if (this.units == 'm' && unit == 'cm') {
                this.radius *= 100;
            } else if (this.units == 'm' && unit == 'mm') {
                this.radius *= 1000;
            } else if (this.units == 'mm' && unit == 'm') {
                this.radius /= 1000; 
            } else if (this.units == 'mm' && unit == 'cm') {
                this.radius /= 10;
            }
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor (width, height, unit) {
            super();
            this.width = width;
            this.height = height;
            this.changeUnits(unit);
        }

        get area() {
            return this.width * this.height;
        }

        changeUnits(unit) {
            if (this.units == 'cm' && unit == 'm') {
                this.width /= 100;
                this.height /= 100;
            } else if (this.units == 'cm' && unit == 'mm') {
                this.width *= 10;
                this.height *= 10;
            } else if (this.units == 'm' && unit == 'cm') {
                this.width *= 100;
                this.height *= 100;
            } else if (this.units == 'm' && unit == 'mm') {
                this.width *= 1000;
                this.height *= 1000;
            } else if (this.units == 'mm' && unit == 'm') {
                this.width /= 1000; 
                this.height /= 1000; 
            } else if (this.units == 'mm' && unit == 'cm') {
                this.width /= 10;
                this.height /= 10;
            }
            this.units = unit;
        }

        toString() {
           return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}