const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
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
      name: 'guideline',
      message: 'Please enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'test-instru',
        message: 'Please enter test instructions.',
      },
      // {
      //   type: 'input',
      //   name: 'license',
      //   message: 'Please choose what licenses are included.',
      // },
      {
        type: 'input',
        name: 'usage-info',
        message: 'Please enter usage information',
      },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'What is your email address?',
    },
  ]);
};

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">The ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3> <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub Username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
