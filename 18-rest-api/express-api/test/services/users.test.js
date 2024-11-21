// test/services/users.test.js
const UserService = require("../../src/services/users");

describe("UserService", () => {
    it("should return all users", () => {
        const users = UserService.getAllUsers();
        expect(users.length).toBe(2);
    });

    it("should return a user by ID", () => {
        const user = UserService.getUserById(1);
        expect(user).toBeDefined();
        expect(user.name).toBe("Alice");
    });

    it("should create a new user", () => {
        const newUser = UserService.createUser("Charlie", "charlie@example.com");
        expect(newUser).toBeDefined();
        expect(newUser.name).toBe("Charlie");
    });

    it("should update an existing user", () => {
        const updatedUser = UserService.updateUser(1, "Alice Updated", "alice.updated@example.com");
        expect(updatedUser).toBeDefined();
        expect(updatedUser.name).toBe("Alice Updated");
    });

    it("should delete a user", () => {
        const success = UserService.deleteUser(1);
        expect(success).toBe(true);
    });
});