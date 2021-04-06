const Manager = require("./classes//Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const inquirer = require('inquirer');

const fs = require('fs')

const initQuestions = [
    {
        type: 'input',
        message: 'Who is the Team Manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber',
    },
]
const navList = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'navOption',
        choices: ['Add an engineer', 'Add an intern', 'Build my roster']
    },
]
const engineerQuestions = [
    {
        type: 'input',
        message: 'Who are we creating an employee card for?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their Github username?',
        name: 'github',
    },
]
const internQuestions = [
    {
        type: 'input',
        message: 'Who are we creating an employee card for?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of their school?',
        name: 'school',
    },
]

let managers
let engineers = []
let interns = [] //returns empty string if none

let cardArray = []

const createManager = () => {
    let name = managers.getName()
    let id = managers.getId()
    let email = managers.getEmail()
    let office = managers.getOfficeNumber()
    let role = managers.getRole()
    //take all info and put into html here?
    let manCard = `<div class="col-md-4">
    <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
    <div class="card-body">
        ${name}
        ${role}
        <ul class="list-group list-group-flush">
            ${id}
            ${email}
            ${office}
        </ul>
    </div>
    </div>
    </div>`
    cardArray.push(manCard)
}

const createEngineers = () => { 
    engineers.forEach(engineer => {
        let name = engineer.getName()
        let id = engineer.getId()
        let email = engineer.getEmail()
        let github = engineer.getGithub()
        let role = engineer.getRole()   
        let engCard = `<div class="col-md-4">
        <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
        <div class="card-body">
            ${name}
            ${role}
            <ul class="list-group list-group-flush">
                ${id}
                ${email}
                ${github}
            </ul>
        </div>
        </div>
        </div>` 
        cardArray.push(engCard)
    })
}

const createIntern = () => {
    interns.forEach(intern => {
        let name = intern.getName()
        let id = intern.getId()
        let email = intern.getEmail()
        let school = intern.getSchool()
        let role = intern.getRole()    
        let intCard = `<div class="col-md-4">
        <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
        <div class="card-body">
            ${name}
            ${role}
            <ul class="list-group list-group-flush">
                ${id}
                ${email}
                ${school}
            </ul>
        </div>
        </div>
        </div>`
        cardArray.push(intCard)
    })
}

const createCards = () => {
    createManager();
    createEngineers();
    createIntern();
    return cardArray.join("")
}

const askManager = () => {
    inquirer.prompt(initQuestions)
    .then(afterManager)
}
const afterManager = (response) => {
    const {name, id, email, officeNumber} = response
    let managerPush = new Manager(name, id, email, officeNumber)
    managers = managerPush
    console.log(managers.getName())
    nextStep();
}
const askEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then(afterEngineer)
}
const afterEngineer = (response) => {
    const {name, id, email, github} = response
    let engineerPush = new Engineer(name, id, email, github)
    engineers.push(engineerPush)
    nextStep();
}
const askIntern = () => {
    inquirer.prompt(internQuestions)
    .then(afterIntern)
}
const afterIntern = (response) => {
    const {name, id, email, school} = response
    let internPush = new Intern(name, id, email, school)
    interns.push(internPush)
    nextStep();
}
//forEach loop to create one array with html arrayHtml
//filwrite that arrayHtml
const nextStep = () => {
    inquirer.prompt(navList)
    .then (function(response){
        if (response.navOption === 'Add an engineer') {
            askEngineer();
        } else if (response.navOption === 'Add an intern' ) {
            askIntern();
        } else {
            makeFile();
        }
    })
}

const createHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <!-- add font awesome in and find icons for different jobs -->
        <script src="https://kit.fontawesome.com/a5e1c610e2.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
        <section class="jumbotron text-center bg-warning"> 
            <div class="container">
            <h1 class="jumbotron-heading">My Team</h1>
            </div>
        </section>
            <div class = "container">
            <div class="row">
            ${createCards()}
            </div>
            </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

const createStyle = () => {
    return `a {
        color: #a08300
    }
    
    body {
        background-color: #fffbf0
    }`
}

const makeFile = () => {
    fs.writeFile("./dist/index.html", createHtml(), (err) => err ? console.log(err) : console.log('Page created'))
    fs.writeFile("./dist/style.css", createStyle(), (err) => err ? console.log(err) : console.log('Page created'))
}

const init = () => {
    askManager();
}

init();




/* 

makemanager()
loop to make the engineers push every one in loop
"" interns

cardarray = []
const finalarray= []

SEPARATE TEMPLATE FOR THE CARDS
<div class="col-md-4">
                    <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
                        <div class="card-body">
                            <h4 class="card-title"> PERSON'S NAME </h5>
                            <h6 class="card-subtitle mb-2 text-muted pb-1"> <i class="fas fa-user-graduate"></i> PERSON'S TITLE (Manager, Engineer, Intern) </h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"> ID </li>
                                <li class="list-group-item"><a href="#" class="card-link"> EMAIL </a></li>
                                <li class="list-group-item"> OFFICE NUMBER or <a href="#" class="card-link"> GITHUB/SCHOOL </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
.push card arrray

*/