


class Canvas {

    draw() {

        this.circle();
        this.line();
        this.box();
    }

    circle() {
        console.log('Drawing a circle at ...');
    }
    line() {
        console.log('Drawing a line at ...');
    }
    box() {
        console.log('Drawing a box at ...');
    }
}

const canvas = new Canvas();

canvas.draw();
