
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: "Enter your Github username: ",
            validate: usernameInput => {
                if(usernameInput){
                    return true;
                } else {
                    console.log('Please provide a Github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'title',
            message: 'What is your project title? (Required) ',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please provide a name for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project (Required),  use the following questions as guide \
            - What was your motivation? \
            - Why did you build this specific project? \
            - What problem does it solve? \
            - What did you learn? ',

            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please provide a description for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please provide the installation instructions ',
            validate: instalationInput => {
                if(instalationInput){
                    return true;
                } else {
                    console.log('Please provide the installation instructions')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage Information',
            message: 'Please provide the usage information ',
            validate: usageInput => {
                if(usageInput){
                    return true;
                } else {
                    console.log('Please provide the usage information')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Choose your licence',
            message: 'Please the requiere licence ',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Apache', 'Mozilla', 'unlicensed'],
            validate: licenceInput => {
                if(licenceInput){
                    return true;
                } else {
                    console.log('Please provide the installation instructions')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'Please enter test instructions ',
            validate: testInput => {
                if(testInput){
                    return true;
                } else {
                    console.log('Please provide the installation instructions')
                    return false;
                }
            }
        } 
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.error(err): console.log('Checked'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions()
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    }))
};

// Function call to initialize app
init();
