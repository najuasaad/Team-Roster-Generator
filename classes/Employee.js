/* 
SUPER class
 */

class Employee {
    constructor (name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    getName(){
        return `<h4 class="card-title">${this.name}</h4>`
    }
    getId(){
        //this.id = employee.id
        return `<li class="list-group-item">ID: ${this.id}</li>`
    }
    getEmail(){
        //this.email = employee.email
        return `<li class="list-group-item"><a href="mailto: ${this.email}" class="card-link">Email</a></li>`
    }
    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;