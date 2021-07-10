class Point {
    constructor(x, y) {
        this.x = x,
            this.y = y;
    }
    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
}
let point = new Point(10);
point.draw(); // output: (X: 10, Y: undefined)
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
