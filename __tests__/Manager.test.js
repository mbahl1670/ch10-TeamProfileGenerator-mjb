const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a manager's name, id, email, officeNumber and role", () => {
            const manager = new Manager("Michael", 1, "mbahl1670@gmail.com", 10820);

            expect(manager.name).toEqual("Michael");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("mbahl1670@gmail.com");
            expect(manager.officeNumber).toEqual(10820);
            expect(manager.role).toEqual("Manager");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the manager's office number", () => {
            const manager = new Manager("Michael", 1, "mbahl1670@gmail.com", 10820);
            const managerOfficeNumber = manager.getOfficeNumber();
            const expectedOfficeNumber = 10820;

            expect(managerOfficeNumber).toBe(expectedOfficeNumber);
        });
    });

    describe("getRole", () => {
        it("should return the role Manager", () => {
            const manager = new Manager("Michael", 1, "mbahl1670@gmail.com", 10820);
            const managerRole = manager.getRole();
            const expectedRole = "Manager";

            expect(managerRole).toBe(expectedRole);
        });
    });
});