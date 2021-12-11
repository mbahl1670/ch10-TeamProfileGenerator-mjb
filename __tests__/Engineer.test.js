const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with an Engineer's name, id, email, gitHub username and role", () => {
            const engineer = new Engineer("Michael", 3, "mbahl1670@gmail.com", "mbahl1670");

            expect(engineer.name).toEqual("Michael");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("mbahl1670@gmail.com");
            expect(engineer.gitHub).toEqual("mbahl1670");
            expect(engineer.role).toEqual("Engineer");
        });
    });

    describe("getGitHub", () => {
        it("should return the Engineer's gitHub username", () => {
            const engineer = new Engineer("Michael", 3, "mbahl1670@gmail.com", "mbahl1670");
            const engineerGitHub = engineer.getGitHub();
            const expectedGitHub = "mbahl1670";

            expect(engineerGitHub).toBe(expectedGitHub);
        });
    });

    describe("getRole", () => {
        it("should reutrn the role of Engineer", () => {
            const engineer = new Engineer("Michael", 3, "mbahl1670@gmail.com", "mbahl1670");
            const engineerRole = engineer.getRole();
            const expectedRole = "Engineer";

            expect(engineerRole).toBe(expectedRole);
        });
    });
});