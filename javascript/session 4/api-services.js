/*
Services (or models) are responsible for handling data storage, retrieval, and manipulation. 
They encapsulate the interactions with the database or any other external data sources. 
Services are typically called by the controllers to perform CRUD (Create, Read, Update, Delete) operations on data.
They handle data validation, access control, and any other related operations.
*/
// userService.js
const User = require('../models/user');

exports.getAllUsers = () => {
  return User.find();
};

exports.createUser = (userData) => {
  const newUser = new User(userData);
  return newUser.save();
};

exports.getUserById = (userId) => {
  return User.findById(userId);
};

exports.updateUser = (userId, updatedUserData) => {
  return User.findByIdAndUpdate(userId, updatedUserData, { new: true });
};

exports.deleteUser = (userId) => {
  return User.findByIdAndDelete(userId);
};
