// TODO: Include packages needed for this application
const fs = require("fs");
import inquirer from "inquirer";
const path = require("path");
// const generateMarkdown = require("./utils/generateMarkdown.js")
import generateMarkdown from "./utils/generateMarkdown.js";
// import fs

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  //Question for the project description
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project ",
  },

  {
    type: "input",
    name: "description",
    message: "Please enter a explanation how to install the software, or commands for the program ",
  },

  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project ",
    choices: ["Mit", "Apache 2.0", "Boost 1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },

  {
    type: "input",
    name: "require",
    message: "List any project dependencies here",
  }

  {
    type: "input",
    name: "features",
    message: "List some cool features about this project here.",
  },

  {
    type: "input",
    name: "usage",
    message: "State the languages or technologies associated with this project",
  },

  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username",
  },

  {
    type: "input",
    name: "test",
    message: "Please walkthrough of required tests if applicable",
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName),data);
  // using fs, generate readme using fileName parameter and data
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Creating a Professional README.md Fie...");
    const readme = generateMarkdown(answers);
    writeToFile("./", generateMarkdown(answers))
    console.log(readme);
    // call writeToFile
  });
}

// Function call to initialize app
init();
