const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
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
        message: 'Enter text color (keyword or hex)'
    },
    {
        type: 'in'
    }
]