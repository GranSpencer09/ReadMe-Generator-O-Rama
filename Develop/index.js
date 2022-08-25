// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//const { writeFile } = require("fs").promises;

function askQues() {
  inquirer
    .prompt([
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
    ])
    .then((answers) => {
      fs.writeFile(
        "New-ReadMe.md",
        `## ${answers.title}

      ## Description
      ${answers.description}

      ## Table of Contents
      - Installation
      - Usage
      - Credits
      - Licenses

      ## Installation
      ${answers.installation}

      ## Usage
      ${answers.usage}

      ## Credits
      ${answers.credits}

      ## License
      ${answers.licenses}

      ## Badges
      ${answers.badges}

      ## Features
      ${answers.features}

      ## How to Contribute
      ${answers.contribute}

      ## Tests
      ${answers.tests}
      
      ## Contact
    ${answers.contact}`
      );
    });
}

// Function call to initialize app
askQues();
