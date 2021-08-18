// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of the readme.md file and/or your project (required).',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else 
                console.log('Please enter a title for your file');
                return false;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.  "What it does? Why you built it? How it works?" are just some examples to start your description. (required)',
            validate: descriptionEl => {
                if (descriptionEl) {
                    return true;
                } else
                console.log('Please describe your project as best you can');
                return false;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project? Provide a step-by-step description'
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
