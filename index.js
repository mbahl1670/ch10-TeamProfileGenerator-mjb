const inquirer = require("inquirer");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID number!")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter theh manager's email address!")
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!")
                }
            }
        }
    ]);
};

promptManager()
    .then (managerInfo => {
        console.log(managerInfo);
    });