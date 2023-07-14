const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: [
                    'View all employees',
                    'Add employee',
                    'Update an employee role',
                    'View all roles',
                    'Add a role',
                    'Add a department',
                    'Quit'
                ],
            },
        ])
}

// Function call to initialize app
init();