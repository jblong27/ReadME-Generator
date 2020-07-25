var inquirer = require("inquirer");
const fs = require("fs");

const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
        {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
        },
        {
        type: "input",
        message: "What is your project Title?",
        name: "title"
        },
        {
        type: "input",
        message: "What is your project description?",
        name: "description"
        },
        {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
        },
        {
        type: "input",
        message: "How will the project be used?",
        name: "usage"
        },
        {
        type: "input",
        message: "Who are the contributors?",
        name: "contribution"
        },
        {
        type: "input",
        message: "What are the tests?",
        name: "testing"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "questions",
        default: "Enter your email address here."
        },
];

function promptUser() {
        return inquirer.prompt(questions)
};

async function init() {
  try {
      const answers = await promptUser();  
      const readMe = await generateMarkdown(answers);
      fs.writeFile('ReadMe.md', readMe, function(err, result) {
        if(err) console.log('error', err);
      });
      console.log("Successfully wrote to ReadMe.md");
  } catch(err) {
      console.log(err);
  }
}

init();
