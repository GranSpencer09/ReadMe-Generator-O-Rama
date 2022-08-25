// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const { writeFile } = require("fs").promises;

function askQues() {
  // TODO: Create an array of questions for user input
  const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators, if any.",
      name: "credits",
    },
    {
      type: "checkbox",
      message:
        "Licenses? lets other developers know what they can and cannot do with your project",
      choices: ["license1", "license2", "license3", "license4", "license5"],
      name: "licenses",
    },
    {
      type: "checkbox",
      message: "Badges?",
      choices: ["badge1", "badge2", "badge3", "badge4", "badge5"],
      name: "badges",
    },
    {
      type: "input",
      message: "List the features of your project.",
      name: "features",
    },
    {
      type: "input",
      message: "How can others contribute?",
      name: "contribute",
    },
    {
      type: "input",
      message: "What tests could others run on your project.",
      name: "tests",
    },
    {
      type: "input",
      message: "If people have questions, how can they contact you.",
      name: "contact",
    },
  ];
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    "New-ReadMe.md",
    `## ${response.title}

      ## Description
      ${response.description}

      ## Table of Contents
      - Installation
      - Usage
      - Credits
      - Licenses

      ## Installation
      ${response.installation}

      ## Usage
      ${response.usage}

      ## Credits
      ${response.credits}

      ## License
      ${response.licenses}

      ## Badges
      ${response.badges}

      ## Features
      ${response.features}

      ## How to Contribute
      ${response.contribute}

      ## Tests
      ${response.tests}
      
      ## Contact
    ${response.contact}`
  );
}

// TODO: Create a function to initialize app
function init() {
  askQues()
    .then((answers) => {
      const readmeContent = writeFile(answers);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
