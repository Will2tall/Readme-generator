// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./utils/generateMarkdown.js')
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
            message: 'How do you install your project? Provide a step-by-step description',
            validate: installationEl => {
                if (installationEl) {
                    return true;
                } else
                console.log('Please complete installation process');
                return false;
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:',
            validate: usageEl => {
                if (usageEl) {
                    return true;
                } else
                console.log('Please provide examples/instructions');
                return false;
            }
        },
        {
            type: 'confirm',
            name: 'credits',
            message: 'Did you have any collaborators? Third-party assets? Tutorials? Additional Creators?',
            default: true
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Please list Github username/link/website that you would like to credit',
            when: ({credits}) => {
                if (credits) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license link to attach to your README.md:',
            choices: ['MIT(short and simple)', 'GNU(General public license v3)', 'Apache v2.0']
        },
        {
            type: 'input',
            name: 'features',
            message: '(Optional) If your project has a lot of features, list them here: (if NA, just leave blank)'
        },
        {
            type: 'input',
            name: 'contributing',
            message: '(Optional) List any contributing guidlines here (if NA, just leave blank)'
        },
        {
            type: 'input',
            name: 'tests',
            message: '(Optional) List any tests and how to run them here (if NA, just leave blank)'
        },
        {
            type: 'confirm',
            name: 'tableContents',
            message: 'Do you want your README.md to have a table of contents?',
            default: false
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
