const inquirer = require("inquirer");
const fs = require("fs");
//choices: ["Apache", "Boost", "BSD"],
function makeLicense(choice) {
  switch (choice) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
  }
}

function makeLicenseLink(choice) {
  if (choice === "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

function makeLicenseHeader(choice) {
  if (choice === "None") {
    return "";
  } else {
    return "## License";
  }
}

const generateREADME = (answers) =>
  `# ${answers.title}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${makeLicenseLink(answers.license)}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

${makeLicenseHeader(answers.license)}

${makeLicense(answers.license)}

## Features
${answers.features}

## How to Contribute
${answers.contribute}

## Tests
${answers.tests}

## Contact
Reach me at my email: [${answers.contact}](mailto:${answers.contact})
View my GitHub: [${answers.github}](https://github.com/${answers.github})`;

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
      type: "list",
      message:
        "License? lets other developers know what they can and cannot do with your project",
      choices: ["Apache", "Boost", "BSD", "None"],
      name: "license",
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
      message: "Enter your email.",
      name: "contact",
    },
    {
      type: "input",
      message: "What is your GitHub username.",
      name: "github",
    },
  ])
  .then((answers) => {
    const readPageContent = generateREADME(answers);

    fs.writeFile("ReadMe.md", readPageContent, (err) =>
      err ? console.log(err) : console.log("Created ReadMe.md")
    );
  });
