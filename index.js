const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const template = require('./template')
const inquirer = require('inquirer');
const fs = require('fs');
const list = [];
const id = [];

inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter email?',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Enter office number?',
        },
        
    ])
    .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        list.push(manager);
        id.push(answers.managerId)
        menu();
    });

function menu() {
    inquirer
        .prompt([
            {
                name: 'team',
                type: 'list',
                choices: ['Engineer', 'Intern', 'Done'],
                message: 'Add a team member?',
            },
        
        ])
        .then(userchoice => {
            console.log(userchoice);
            switch (userchoice.team) {
                case 'Engineer':
                    engineerInquire();
                    break;
                case 'Intern':
                    internInquire();
                default:
                    generateTeam(list);
            }

        })
}

function engineerInquire() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter employee name?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter employee id?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter employee email?',
            },
            {
                name: 'github',
                type: 'input',
                message: 'Enter employee GitHub?',
            },
        ])
        .then((answers) => {
            console.log(answers)
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            list.push(engineer);
            id.push(answers.engineerId);
            menu();
        })
    }

function internInquire() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter employee name?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter employee id?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter employee email?',
            },
            {
                name: 'school',
                type: 'input',
                message: 'Enter school employee attended?',
            },
        ])
        .then((answers) => {
            console.log(answers)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            list.push(intern);
            id.push(answers.internId);
            menu();
        })
}

function generateTeam(team) {
    console.log(team);
    const template = template(team);
    fs.writeFile('template.html', template, 'utf-8', (err) => err ?
        console.log(err) :
        console.log('Successful'))
}                    