const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with employee's name, id, email, and role", () => {
            const employee = new Employee("Michael", 1, "mbahl1670@gmail.com", "employee");

            expect(employee.name).toEqual("Michael");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("mbahl1670@gmail.com");
            expect(employee.role).toEqual("employee");
        });
    });
});