// Supongamos que tienes una lista de usuarios en memoria para este ejemplo
let users = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Carlos' },
  { id: 3, name: 'Maria' },
];

/**
 * Obtiene todos los usuarios.
 */
exports.getUsers = (req, res) => {
  res.json(users);
};