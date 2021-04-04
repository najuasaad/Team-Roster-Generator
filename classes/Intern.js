/* 
* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`
 */

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getSchool(){
        //this.school = response.school
        return `<li class="list-group-item">School: ${this.school}</a></li>`
    }
    getRole(){
        return `<h6 class = "card-subtitle mb-2 text-muted pb-1"><i class="fas fa-user-graduate"></i> Intern</h6>`
    }
}

module.exports = Intern;

