const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
    describe("engineerObject", () => {
        it("should return an HTML string with new engineer's github link", () => {
        const engineerObject = new Engineer("Najua", 1, "najuasaad@gmail.com", "najuasaad")

        expect(engineerObject.getGithub()).toEqual(`<li class="list-group-item"><a href="https://github.com/najuasaad">Github</a></li>`)
        })
    })
});