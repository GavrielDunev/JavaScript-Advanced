class Point {
    static distance(firstPoint, secondPoint) {
        return Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2 );
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));