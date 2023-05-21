/*
ORM libraries like Sequelize provide an abstraction layer that allows you to 
interact with databases using JavaScript objects and methods. 
*/
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "mysql",
  host: "localhost",
});

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Creating a new user
User.create({ name: "John Doe", age: 30 });

// Retrieving users
User.findAll().then((users) => {
  console.log(users);
});
