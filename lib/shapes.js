class Shape {
    constructor() {
        this.color = '';
        this.text = '';
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" style="fill:${this.color}${this.text}">`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color}${this.text}">`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points=\"150,50 50, 150 250, 150\" style=\"fill:${this.color}${this.text}\">`;
    }
}

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle,
};