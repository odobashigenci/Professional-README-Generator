

// Packages. 
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Questions array.
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What will the repository title be?'
},
{
    type: 'input',
    name: 'description',
    message: 'What will the project description be?'

},
{
    type: 'input',
    name: 'table of contents',
    message: 'What will the content of the project be?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps for the installation?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What are the usage isnstructions?'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you choose?',
    choices: ['MIT License', 'The Unlicense', 'GNU License', 'Apache License'] 
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can the users contribute in this project?'
},
{
    type: 'input',
    name: 'testing',
    message: 'Provide a test of this project?'
},
{
    type: 'input',
    name: 'questions',
    message: 'Do you have any questions?'  
},
{
    type: 'input',
    name: 'repository',
    message: 'Please provide your github repository name.'  
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your e-mail.'  
}
];
=======
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Include packages needed for this application
// inquirer installed

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What will the repository title be?'
},
{
    type: 'input',
    name: 'description',
    message: 'What will the project description be?'

},
{
    type: 'input',
    name: 'table of contents',
    message: 'What will the content of the project be?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps for the installation?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What are the usage isnstructions?'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you choose?',
    choices: ['MIT License', 'The Unlicense', 'GNU License', 'Apache License'] 
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can the users contribute in this project?'
},
{
    type: 'input',
    name: 'testing',
    message: 'Provide a test of this project?'
},
{
    type: 'input',
    name: 'questions',
    message: 'Do you have any questions?'  
},
{
    type: 'input',
    name: 'repository',
    message: 'Please provide your github repository name.'  
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your e-mail.'  
}
];

// TODO: Create a function to write README file
function writeToFile( data) {
    const stringData = generateMarkdown(data)
    fs.writeFile('README.md', stringData, (err) => {
        if (err){
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile(data)
    })
}


// Writing a README file.
function writeToFile( data) {
    const stringData = generateMarkdown(data)
    fs.writeFile('README.md', stringData, (err) => {
        if (err){
            console.log(err)
        }
    })
}

// Intitializing the app.
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile(data)
    })
}

// Calling the funcition.
init();
