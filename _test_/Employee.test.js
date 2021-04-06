const Employee = require("../classes/Employee");

describe("Employee", () => {
    describe("employeeObject", () => {
        it("should return HTML string with new employee's name", () => {
        const employeeObject = new Employee("Najua", 1, "najuasaad@gmail.com")

        expect(employeeObject.getName()).toEqual(`<h4 class="card-title">Najua</h4>`)
        })
    })
    describe("employeeObject", () => {
        it("should return HTML string with new employee's number", () => {
        const employeeObject = new Employee("Najua", 1, "najuasaad@gmail.com")

        expect(employeeObject.getId()).toEqual(`<li class="list-group-item">ID: 1</li>`)
        })
    })
    describe("employeeObject", () => {
        it("should return HTML string with new employee's email", () => {
        const employeeObject = new Employee("Najua", 1, "najuasaad@gmail.com")

        expect(employeeObject.getEmail()).toEqual(`<li class="list-group-item"><a href="mailto: najuasaad@gmail.com" class="card-link">Email</a></li>`)
        })
    })
})