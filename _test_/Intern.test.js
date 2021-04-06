const Intern = require("../classes/Intern");

describe("Intern", () => {
    describe("internObject", () => {
        it("should return ", () => {
        const internObject = new Intern("Najua", 1, "najuasaad@gmail.com", "U of M Coding Bootcamp")

        expect(internObject.getSchool()).toEqual(`<li class="list-group-item">School: U of M Coding Bootcamp</a></li>`)
        })
    })
});