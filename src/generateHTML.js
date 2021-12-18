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
                    <h3>${managerInfo.name}</h3>
                    <h4>${managerInfo.role}</h4>
                </div>
    
                <ul class="list-group list-group-flush my-4 border">
                    <li class="list-group-item bg-white">Id:  ${managerInfo.id}</p>
                    <li class="list-group-item bg-white">Email: <a href="${managerInfo.email}">${managerInfo.email}</a></p>
                    <li class="list-group-item bg-white">Office number: ${managerInfo.officeNumber}</p>
                </ul>
            </div>
    `;
    });

    return `${managerHTML.join("")}`;
};

const generateEngineers = engineerInfo  => {

};

const generateInterns = internInfo => {

};

const generateHTML = teamData => {
    

    const empEngineers = teamData.filter(employee => {
        if (employee.role === "Engineer") {
            return true;
        } else {
            return false;
        }
    });

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