const Manager = require("../classes/Manager");

describe("Manager", () => {
    describe("managerObject", () => {
        it("should return HTML string with new manager's office number", () => {
        const managerObject = new Manager("Najua", 1, "najuasaad@gmail.com", "314A")

        expect(managerObject.getOfficeNumber()).toEqual(`<li class="list-group-item">Office Number: 314A</li>`)
        })
    })
});