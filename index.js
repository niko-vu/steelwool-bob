const inquirer = require('inquirer');
// const schema = require('');
// const seeds = require('');

// (async () => {
//     try {
//         const answers = await getAnswers();
//     } catch (err) {
//         console.error(err.message)
//     }
// });

function ask() {
    return inquirer.prompt([
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
            ]
        }
    ])
    .then(answers => {
        if (answers.options === 'Quit') {
            console.log('You have quit.');
        } else if (answers.options === 'View all employees') {
            
        }
    })
}

ask();

// Original inquirer prompting function??
// function init() {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'options',
//                 message: 'What would you like to do?',
//
//             },
//         ])
// }



