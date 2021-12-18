const Employee = require("../../lib/Employee");

Employee.forEach(employee => {
    if (employee instanceof Engineer) {  // of if employee.github, ef employee.school, employee.officeNumber
        html += `
        <div>
            <h2>${employee.firstname}
        `
    }
})


//sort 
// add class variable  to employees
const employees = [];
const sortedEmployees = [];

let managerSearch = true, engineerSearch =false, insternSeach = false;
 for ... {
     if (employees[i].officeNumber && !employees[i].seen && managersearch) {
         employees[i.seen] = true;
         sortedEmployees.push(employees[i]);
     }

     if (employees[i].github && !employees[i].seen && engineerSearch) {
        employees[i.seen] = true;
        sortedEmployees.push(employees[i]);
    }

    if (employees[i].school && !employees[i].seen && internsearch) {
        employees[i.seen] = true;
        sortedEmployees.push(employees[i]);
    }

     if (employees.length !== sortedEmployees.length && i == employees.length -1 ) {
        if (managerSearch) {
            managerSearch = false;
            engeinersearch true;
        }
        
        if (engineerSerach) {
            enginersearch = false
            internsearch = true; 
        }
        
        i = 0;
    }
 }


// path 
// https://nodejs.org/api/path.html


const path = require('path');
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
fs.writeFile(path.join (ui/contenxt.index.html + ))
fs.writeFile(path.join (__dirname, '/index.html'), html, (err) => {

    if
    else
})



(async () => {
    try {
        const value = await promise;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
});

inquirer.prompt ()


(async () => {
    const ans = await inquirer.prompt({
        type: "input",
        name: "value",
        message: "What is your name"
    });
    console.log(ans.value);
})();