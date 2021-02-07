class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color[0].toUpperCase() + color.slice(1);
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());