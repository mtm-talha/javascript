/**
Controllers receive requests from the routes, perform necessary operations, and prepare the response.
Controllers are responsible for validating input, invoking the appropriate service methods, and processing the data.
They act as the middle layer between routes and services.
*/
const userService = require('../services/userService');

exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  const createdUser = userService.createUser(newUser);
  res.status(201).json(createdUser);
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  const user = userService.getUserById(userId);
  res.json(user);
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const user = userService.updateUser(userId, updatedUser);
  res.json(user);
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  userService.deleteUser(userId);
  res.sendStatus(204);
};
