const inquirer = require("inquirer");
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// array to hold the team data
const teamInfo = [];

// prompt function to get the manager's info
const promptManager = () => {

    console.log(`
    =================
     Add the Manager
    =================
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
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
    ])
    .then (managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);

        teamInfo.push(manager);
    });
};

// prompt function to get employee information
const promptEmployees = () => {

    console.log(`
    =================
     Add an Employee
    =================
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                }
            }
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "id",
            message: "What it the employee's ID?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID!");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Pleaes enter the employee's email!");
                }
            }
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the Engineer's gitHub username?",
            when: (answers) => answers.role === "Engineer",  // this question is only asked if the role is Engineer
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's gitHub username!");
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the Intern's school?",
            when: (answers) => answers.role === "Intern", // this question is only asked if the role is Intern
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the Intern's school!");
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployee", // confirm status so we know when we are done adding employees
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, confirmAddEmployee, ...roleQuestion} = employeeData;
        let employee;

        // Create an Engineer Object if 
        if (role === "Engineer") {
            employee = new Engineer(name, id, email, roleQuestion);
        }

        if (role === "Intern") {
            employee = new Intern(name, id, email, roleQuestion);
        }

        teamInfo.push(employee);

        if (confirmAddEmployee) {
            return promptEmployees(teamInfo);
        } else {
            return teamInfo;
        }
    });
};

const printDat = () => {
    // console.log(teamInfo);
    console.log(teamInfo[1].getGitHub());
};

promptManager()
    .then (promptEmployees)
    .then (printDat) // what we are going to do with the data
    .catch((err => {
        console.log(err);
    }));