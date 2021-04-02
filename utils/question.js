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

