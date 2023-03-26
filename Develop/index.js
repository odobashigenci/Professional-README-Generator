

// Packages. 
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Questions array.
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What will your project title be?'
},
{
    type: 'input',
    name: 'description',
    message: 'What will your project description be?'

},
{
    type: 'input',
    name: 'table of contents',
    message: 'What will the content of your project be?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps for the installation of this app?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions for this app?'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you choose for this app?',
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
    message: 'How to test this project.'
},
{
    type: 'input',
    name: 'questions',
    message: 'Questions and issues.'  
},
{
    type: 'input',
    name: 'repository',
    message: 'Your GitHub username:'  
},
{
    type: 'input',
    name: 'email',
    message: 'Your e-mail address:'  
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
