const users = [];

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};