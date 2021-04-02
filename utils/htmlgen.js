const { addListener } = require("node:process")

let htmlarray = []

const addManager = (data) => {
    htmlarray.pop(`<div class="col-md-4">
    <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title">${data.manName}</h5>
            <h6 class="card-subtitle mb-2 text-muted pb-1"><i class="fas fa-mug-hot"></i> Manager</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.manId}</li>
                <li class="list-group-item"><a href="#" class="card-link">Email: ${data.manMail}</a></li>
                <li class="list-group-item">Office Number: ${data.manOff}</a></li>
            </ul>
        </div>
    </div>
</div>`)
}

const addEngineer = (data) => {
    htmlarray.pop(`<div class="col-md-4">
    <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title">${data.engName}</h5>
            <h6 class="card-subtitle mb-2 text-muted pb-1"><i class="fas fa-laptop-code"></i> Engineer</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.engId}</li>
                <li class="list-group-item"><a href="" class="card-link">Email: ${data.engMail}</a></li>
                <li class="list-group-item"><a href="https://github.com/${data.enggit}" class="card-link">Github</a></li>
            </ul>
        </div>
    </div>
</div>`)
}


/* INTERN (`<div class="col-md-4">
    <div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title">${data.intName}</h5>
            <h6 class="card-subtitle mb-2 text-muted pb-1"><i class="fas fa-user-graduate"></i> Intern</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.intId}</li>
                <li class="list-group-item"><a href="" class="card-link">Email: ${data.intMail}</a></li>
                <li class="list-group-item">School: ${data.intUni}</li>
            </ul>
        </div>
    </div>
</div>`) */

/* 
const generateHtml = (htmlarray) = > {

} */

module.exports = addManager; 