const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateCards = require('./src/generateHTML');
const { isRequired, isEmail } = require('./src/validate');

const newHTMLFilePath = path.join(__dirname, './dist/team.html');

const profiles = [];

const managerProfile = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your name',
      validate: isRequired,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter your employee id',
      validate: isRequired,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      validate: isEmail,
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'please enter your office number',
      validate: isRequired,
    },
  ];
  const answers = await inquirer.prompt(questions);
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  // .then((data) => {
  //   const manager = new Manager(
  //     data.name,
  //     data.id,
  //     data.email,
  //     data.officeNumber
  //   );
  profiles.push(manager);
  addEmployee();
  // });
};

const engineerProfile = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your name',
      validate: isRequired,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter your employee id',
      validate: isRequired,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      validate: isEmail,
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'please enter your gitHub username',
      validate: isRequired,
    },
  ];
  const answers = await inquirer.prompt(questions);
  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.gitHub
  );
  // .then((data) => {
  //   const manager = new Manager(
  //     data.name,
  //     data.id,
  //     data.email,
  //     data.officeNumber
  //   );
  profiles.push(engineer);
  addEmployee();
};

const internProfile = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your name',
      validate: isRequired,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter your employee id',
      validate: isRequired,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      validate: isEmail,
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the name of the school you graduated from',
      validate: isRequired,
    },
  ];
  const answers = await inquirer.prompt(questions);
  const intern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );
  profiles.push(intern);
  addEmployee();
};

const addEmployee = async () => {
  const question = [
    {
      type: 'list',
      name: 'addNewEmployee',
      message: 'would you like to add another employee',
      choices: ['Engineer', 'Intern', 'Done'],
    },
  ];
  const answer = await inquirer.prompt(question);
  if (answer.addNewEmployee === 'Engineer') {
    engineerProfile();
  } else if (answer.addNewEmployee === 'Intern') {
    internProfile();
  } else {
    buildHTML();
  }
};

function buildHTML() {
  fs.writeFileSync(newHTMLFilePath, generateCards(profiles), 'utf-8');
}

managerProfile();
//   engineerProfile();
//   internProfile();

// generateProfiles();
