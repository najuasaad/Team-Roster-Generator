/* 
* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'
 */

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        //this.github = response.github
        return `<li class="list-group-item"><a href="https://github.com/${this.github}">Github</a></li>`
    }
    getRole(){
        return `<h6 class = "card-subtitle mb-2 text-muted pb-1"><i class="fas fa-laptop-code"></i> Engineer</h6>`
    }
}

module.exports = Engineer;