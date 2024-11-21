// service index 
// src/services/users.js
const User = require("../models/users");

let users = [
  new User(1, "Alice", "alice@example.com"),
  new User(2, "Bob", "bob@example.com"),
];

class UserService {
  static getAllUsers() {
    return users;
  }

  static getUserById(id) {
    return users.find((user) => user.id === parseInt(id));
  }

  static createUser(name, email) {
    const newUser = new User(users.length + 1, name, email);
    users.push(newUser);
    return newUser;
  }

  static updateUser(id, name, email) {
    const user = this.getUserById(id);
    if (user) {
      user.name = name;
      user.email = email;
    }
    return user;
  }

  static deleteUser(id) {
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}

module.exports = UserService;