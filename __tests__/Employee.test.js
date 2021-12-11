const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with employee's name, id, email, and role", () => {
            const employee = new Employee("Michael", 1, "mbahl1670@gmail.com");

            expect(employee.name).toEqual("Michael");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("mbahl1670@gmail.com");
            expect(employee.role).toEqual("Employee");
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const employee = new Employee("Michael", 1, "mbahl1670@gmail.com");
            const employeeName = employee.getName();
            const expectedName = "Michael";
            
            expect(employeeName).toBe(expectedName);
        });
    });

    describe("getID", () => {
        it("should return the ID of the employee", () => {
            const employee = new Employee("Michael", 1, "mbahl1670@gmail.com");
            const employeeID = employee.getID();
            const expectedID = 1;

            expect(employeeID).toBe(expectedID);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const employee = new Employee("Michael", 1, "mbahl1670@gmail.com");
            const employeeEmail = employee.getEmail();
            const expectedEmail = "mbahl1670@gmail.com";
            
            expect(employeeEmail).toBe(expectedEmail);
        });
    });

    describe("getRole", () => {
        it("should return employee's role", () => {
            const employee = new Employee("Michael", 1, "mbahl1670@gmail.com");
            const employeeRole = employee.getRole();
            const expectedRole = "Employee";

            expect(employeeRole).toBe(expectedRole);
        });
    });
});