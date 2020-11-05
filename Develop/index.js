const inquirer = require('inquirer')
const fs = require ('fs')

// array of questions for user
const questions = [

];

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",    
    },
    {
        type: "input",
        message: "Description of the project?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install this program?",
        name: "installation",
    },
    {
        type: "input",
        message: "How to use this program?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license do you want?",
        name: "license",
        choices: ["this", "that", "theother"]
    },
    {
        type: "input",
        message: "Who is contributing to the project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests",
        name: "tests",
    },
    {
        type: "input",
        message: "Questions",
        name: "questions",
    },
    
]).then(answers => {
    var data = `
    # ${answers.title}

    # Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description
        
    ${answers.description}

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## License

    ${answers.license}

    ## Contributing

    ${answers.contributing}

    ## Tests

    ${answers.tests}

    ## Questions

    ${answers.questions}
    `

fs.writeFile("new.md", data, function(err){
    if(err){
        return err
    }
    console.log('Success')
})
})

// var data = answers;

// fs.writeFile("READMEE.md", data, function(err){
//     if(err){
//         return err
//     }
//     console.log('Success')
// })

// function to write README file
function writeToFile(file, data, ) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
