// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import generateMarkdown from "./utils/generateMarkdown.js"
// import fs
// TODO: Create an array of questions for user input



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name:"title",
        message: "What is the title of your project?",
        // vaidate: vaildInput,
    },
//Question for the project description
    {
        type:"input",
        name: "description",
        message:"Please enter a description of your project "
    },

    {
        type:"input",
        name: "installation",
        message:"Please enter a explanation how to install the software, or commands for the program "
    },
    {
        type:"input",
        name: "usage",
        message:" What is the purpose of this program?"
    },
    {
        type:"input",
        name: "contributing",
        message:"Please describe any contributors."
    },
    {
        type:"input",
        name: "test",
        message:"How would you like to run the test?"
    },
    {
        type:"list",
        name: "question",
        message:"Please choose a license.",
        choices: ['MIT', 'MS-PL','LGPL','NCSA']
    },
    {
        type:"input",
        name: "Github",
        message:"What is your GitHub username?",      
    },
    {
        type:"input",
        name: "email",
        message:"Please enter your email address.",
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // using fs, generate readme using fileName parameter and data   
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((answers)=> {
       const readme = generateMarkdown(answers) 
    console.log(readme)
    // call writeToFile
    }) 

}



// Function call to initialize app
init();
