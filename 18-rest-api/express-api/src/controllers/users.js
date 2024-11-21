// users controller 
// src/controllers/users.js
const UserService = require("../services/users");

class UserController {
  static getAllUsers(req, res) {
    const users = UserService.getAllUsers();
    res.status(200).json(users);
  }

  static getUserById(req, res) {
    const user = UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  }

  static createUser(req, res) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Faltan datos del usuario" });
    }
    const newUser = UserService.createUser(name, email);
    res.status(201).json(newUser);
  }

  static updateUser(req, res) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Faltan datos del usuario" });
    }
    const user = UserService.updateUser(req.params.id, name, email);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  }

  static deleteUser(req, res) {
    const success = UserService.deleteUser(req.params.id);
    if (!success) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(204).send();
  }
}

module.exports = UserController;