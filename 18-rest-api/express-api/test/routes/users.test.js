// users route test 
// test/routes/users.test.js
const request = require("supertest");
const app = require("../../src/app");

describe("User Routes", () => {
  it("GET /users should return all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  it("GET /users/:id should return a user by ID", async () => {
    const res = await request(app).get("/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Alice");
  });

  it("POST /users should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Charlie", email: "charlie@example.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Charlie");
  });

  it("PUT /users/:id should update an existing user", async () => {
    const res = await request(app)
      .put("/users/1")
      .send({ name: "Alice Updated", email: "alice.updated@example.com" });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Alice Updated");
  });

  it("DELETE /users/:id should delete a user", async () => {
    const res = await request(app).delete("/users/1");
    expect(res.statusCode).toBe(204);
  });
});