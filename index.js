const inquirer = require('inquirer');
const fs = require('fs');
const htmlgen = require('./utils/htmlgen');


/* <!-- project notes:

       upon open:
        PROMPT INIT
                Team manager's name,
                employee id
                email
                office #
        OPTION (list)
                add engineer
                add intern
                finish building team
        option PROMPT ENGINEER
                Name
                employee id
                email
                github link
                RETURN TO OPTION LIST
        option PROMPT INTERN
                Name
                employee id
                email
                school
                RETURN TO OPTION LIST
        option BUILD
                creates HTML page


        write up questions

        write questions prompts as classes
--> */

const initQuestions = [
    {
        type: 'input',
        message: 'Who is the Team Manager?',
        name: 'manName',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'manID',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'manMail',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'manOff',
    },
]
const navList = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'navOption',
        options: ['Add an engineer', 'Add an intern', 'Build my roster']
    },
]
const engineerQuestions = [
    {
        type: 'input',
        message: 'Who are we creating an employee card for?',
        name: 'engName',
    },
    {
        type: 'input',
        message: 'What is their employee number?',
        name: 'engNum',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'engMail',
    },
    {
        type: 'input',
        message: 'What is their Github username?',
        name: 'engGit',
    },
]
const internQuestions = [
    {
        type: 'input',
        message: 'Who are we creating an employee card for?',
        name: 'intName',
    },
    {
        type: 'input',
        message: 'What is their employee number?',
        name: 'intNum',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'intMail',
    },
    {
        type: 'input',
        message: 'What is the name of their school?',
        name: 'intUni',
    },
]

let managers = []
let engineers = []
let interns = []

let finalArray = []

//ask questions 
//flow of the question answer
const askManager = () => {
    inquirer.prompt(initQuestions)
    .then(afterManager(response))
}
const afterManager = (response) => {
    const {manName, manId, manMail, manOff} = response
    let managerPush = new Manager(manName, manId, manMail, manOff)
    managers.push(managerPush)
    nextStep();
}
const askEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then(afterEngineer(response))
}
const afterEngineer = (response) => {
    const {engName, engId, engMail, engGit} = response
    let engineerPush = new Manager(engName, engId, engMail, engGit)
    engineers.push(engineerPush)
    nextStep();
}
const askIntern = () => {
    inquirer.prompt(internQuestions)
    .then(afterIntern(response))
}
const afterIntern = (response) => {
    const {intName, intId, intMail, intUni} = response
    let internPush = new Intern(intName, intId, intMail, intUni)
    interns.push(internPush)
    nextStep();
}
//forEach loop to create one array with html arrayHtml
//filwrite that arrayHtml
const nextStep = () => {
    inquirer.prompt(navList)
    .then (function(response){
        if (response.options === 'Add an engineer') {
            askEngineer();
        } else if (response.options === 'Add an intern' ) {
            askIntern();
        } else {
            //turn arrays into objects
            //formatted for classes and subclasses
            //generateHtml(manager, engineer, intern)
        }
    })
}

//at this point we have all the questions asked and stored in arrays
//write functions that run two of the arrays through loops to create each html section

// const addManager = (managers) => {
//     htmlarray.pop(`<div class="col-md-4">
//     <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
//         <div class="card-body">
//             <h4 class="card-title">${managers.manName}</h5>
//             <h6 class="card-subtitle mb-2 text-muted pb-1"><i class="fas fa-mug-hot"></i> Manager</h6>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${managers.manId}</li>
//                 <li class="list-group-item"><a href="#" class="card-link">Email: ${managers.manMail}</a></li>
//                 <li class="list-group-item">Office Number: ${managers.manOff}</a></li>
//             </ul>
//         </div>
//     </div>
// </div>`)
// }

interns.forEach(intern => )

const managersEl = managers.map(???managers => new Order(item));

managersEl.forEach(order => restaurant.takeOrder(order));

const orders = items.map(item => new Order(item));

orders.forEach(order => restaurant.takeOrder(order));



const init = () => {
    askManager();

    .then(function() {
    //let fileWrite = htmlgen.generateHTML(finalArray)
    console.log(manager)
    })
}

init();








class Card {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
}

class Manager extends Card {
    constructor(office){
        super(name, id, email)
    }
}

class Engineer extends Card {
    constructor(gituser){
        super(name, id, email)
    }
}

class Intern extends Card {
    constructor(school){
        super(name, id, email)
    }
}
