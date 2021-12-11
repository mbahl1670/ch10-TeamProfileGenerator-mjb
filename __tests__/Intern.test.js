const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with an Intern's name, id, email, school and role", () => {
            const intern = new Intern("Michael", 43, "mbahl1670@gmail.com", "NDSU", "Intern");

            expect(intern.name).toEqual("Michael");
            expect(intern.id).toEqual(43);
            expect(intern.email).toEqual("mbahl1670@gmail.com");
            expect(intern.school).toEqual("NDSU");
            expect(intern.role).toEqual("Intern");
        });
    });

    describe("getSchool", () => {
        it("should return the Intern's school", () => {
            const intern = new Intern("Michael", 43, "mbahl1670@gmail.com", "NDSU", "Intern");
            const internSchool = intern.getSchool();
            const expectedSchool = "NDSU";
            
            expect(internSchool).toBe(expectedSchool);
        });
    });

    describe("getRole", () => {
        it("should return the role of Intern", () => {
            const intern = new Intern("Michael", 43, "mbahl1670@gmail.com", "NDSU", "Intern");
            const internRole = intern.getRole();
            const expectedRole = "Intern";

            expect(internRole).toBe(expectedRole);
        });
    });
});