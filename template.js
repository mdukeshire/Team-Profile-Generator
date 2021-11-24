const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')


function template(member) {
    console.log(member);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid" style="background-color: darkred; color: white; text-align: center;">
            <div class="container">
                <h1 class="display-4">My team</h1>
            </div>
        </div>
    
        <div class="container"></div>
    
        <div class="row">
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${member[0].getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug mr-2"></i>${member[0].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member[0].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member[0].getEmail()}">${member[0].getEmail()}
                            </a></li>
                        <li class="list-group-item">Office number: ${member[0].getOfficeNumber()}"</li>
                    </ul>
                </div>
            </div>
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${member[1].getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${member[1].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member[1].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member[1].getEmail()}">${member[1].getEmail()}
                            </a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${member[1].getGithub()}"
                                target="_blank" rel="">${member[1].getGithub()}</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${member[2].getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-graduate mr-2"></i>${member[2].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member[2].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member[2].getEmail()}">${member[2].getEmail()}
                            </a></li>
                        <li class="list-group-item">School: ${member[2].getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </body>
    
    </html>`


}

module.exports = template;