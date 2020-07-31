
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


class Canvas {

    draw(shape) {
        switch(shape) {
            case 'circle':
                this.circle();
                break;
            case 'line':
                this.line();
                break;
            case 'box':
                this.box();
                break;
            default:
                break;
        }
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

readline.question('enter a shap circle, box or line: ', shape => {
    canvas.draw(shape);
    readline.close();
  });


