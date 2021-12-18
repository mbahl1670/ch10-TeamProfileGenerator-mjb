const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = managerInfo => {
    const empManager = managerInfo.filter(employee => {
        if (employee.role === "Manager") {
            return true;
        } else {
            return false;
        }
    });

    const managerHTML = empManager.map(managerInfo => {
        return `
            <div class="card shadow-lg col-3 bg-light">
                <div class="card-header text-white bg-primary mt-4">
                    <h3>${managerInfo.getName()}</h3>
                    <h4>${managerInfo.getRole()}</h4>
                </div>
    
                <ul class="list-group list-group-flush my-4 border">
                    <li class="list-group-item bg-white">Id:  ${managerInfo.getID()}</p>
                    <li class="list-group-item bg-white">Email: <a href="mailto:${managerInfo.getEmail()}">${managerInfo.email}</a></p>
                    <li class="list-group-item bg-white">Office number: ${managerInfo.getOfficeNumber()}</p>
                </ul>
            </div>
    `;
    });

    return `${managerHTML.join("")}`;
};

const generateEngineers = engineerInfo  => {
    const empEngineers = engineerInfo.filter(employee => {
        if (employee.role === "Engineer") {
            return true;
        } else {
            return false;
        }
    });

    const engineerHTML = empEngineers.map(engineerInfo => {
        return `
            <div class="card shadow-lg col-3 bg-light">
                <div class="card-header text-white bg-primary mt-4">
                    <h3>${engineerInfo.getName()}</h3>
                    <h4>${engineerInfo.getRole()}</h4>
                </div>
    
                <ul class="list-group list-group-flush my-4 border">
                    <li class="list-group-item bg-white">Id:  ${engineerInfo.getID()}</p>
                    <li class="list-group-item bg-white">Email: <a href="mailto:${engineerInfo.getEmail()}">${engineerInfo.getEmail()}</a></p>
                    <li class="list-group-item bg-white">GitHub: <a href="https://github.com/${engineerInfo.getGitHub()}">${engineerInfo.getGitHub()}</a></p>
                </ul>
            </div>
    `;
    });

    return `${engineerHTML.join("")}`;
};

const generateInterns = internInfo => {

};

const generateHTML = teamData => {
    

    

    const empInterns = teamData.filter(employee => {
        if (employee.role === "Intern") {
            return true;
        } else {
            return false;
        }
    });

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    
    <header class="jumbotron text-center text-white bg-danger">
        <h1>My Team</h1>
    </header>
    
    <main class="container">
        <div class="row justify-content-center">
            ${generateManager(teamData)}
            ${generateEngineers(teamData)}
        </div>
    </main>
        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>`
};

module.exports = generateHTML;