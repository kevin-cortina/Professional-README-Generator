const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description for the project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'testInstru',
        message: 'Please enter test instructions.',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose what licenses are included.',
        choices: ['Community', 'MIT License', 'GNU GPLv3'],
      },
      {
        type: 'input',
        name: 'features',
        message: 'What key features are there for this project?',
      },
      {
        type: 'input',
        name: 'usageIinfo',
        message: 'Please enter usage information',
      },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'What is your linkedin URL?',
    },
  ]);
};
const generateMD = ({title, description, installation, usageInfo, testInstru, license, contribution, email, github, linkedin, features,}) => 
`
 
  [![${license} License](https://img.shields.io/badge/license-${license}-blue.svg)](http://www.gnu.org/licenses/${license}-3.0)

  # ${title}
  
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [Tests](#test)
  - [Questions](#questions)
 
  ## Installation
  ${installation}
 
  
  ## Usage
  ${usageInfo}

  
  ## Contributing
  ${contribution}

  
  ## License
  ${license}
  

  ## Features
  ${features}
  
  ## Tests
  ${testInstru}
 
  
  ## Questions
  If you have any questions feel free to contact me via email ${email}, Github ${github}, ${linkedin}.
  `

const init = () => 
  promptUser ()
    .then((answers) => {

//badge variables for license
var Mit = '[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)';
var GPL = '[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)';
var AGPL = '[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)'

//targeting answers.license and choices 
var answersChoice = answers.license;
if (answersChoice == 'MIT') {
    // console.log(Mit);
  } else if (answersChoice == 'Community') {
    // console.log(AGPL);
  } else if (answersChoice == 'GPLv3') {
    // console.log(GPL);
  }

// Generating the README.md
fs.writeFileSync('README.md', generateMD(answers), (err) => 
err ? console.error(err) : console.log('Successfully wrote to index.html'));
});


<<<<<<< HEAD
init();
=======
init();
>>>>>>> ccfc83c (added code to repo)
