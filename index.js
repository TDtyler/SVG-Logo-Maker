const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require ('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'enter max of 3 characters for logo',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose a shape',
        choices: ['Square', 'Circle', 'Triangle' ],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex)',
    },
];

inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch (shape) {
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
    }

    let x = 150, y = 120;
    if (shape === 'Triangle') {
        y = 135;
    } else if (shape === 'Square') {
        y = 145;
    }

    const finalSvg = `<svg xmlns "http://www.w3.org/2000/svg" width="300" height="200">
        ${svgElement}
        <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
        </svg>`;

        fs.writeFileSync('logo.svg', finalSvg);

        console.log('Generated logo.svg');
});