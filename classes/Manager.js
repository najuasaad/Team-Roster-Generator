/* 
* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

<div class="col-md-4">
<div class="card shadow p-2 mb-5 tile rounded" style="width: 18rem;">
<div class="card-body">
    <h4 class="card-title">${managers.manName}</h5>
    <h6 class="card-subtitle mb-2 text-muted pb-1"><i class="fas fa-mug-hot"></i> Manager</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${managers.manId}</li>
        <li class="list-group-item"><a href="#" class="card-link">Email: ${managers.manMail}</a></li>
        <li class="list-group-item">Office Number: ${managers.manOff}</a></li>
    </ul>
</div>
</div>
</div>)  

 */

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        //this.officeNumber = response.officeNumber
        return `<li class="list-group-item">Office Number: ${this.officeNumber}</li>`
    }
    getRole(){
        return `<h6 class = "card-subtitle mb-2 text-muted pb-1"><i class="fas fa-mug-hot"></i> Manager</h6>`
    }
}

module.exports = Manager;