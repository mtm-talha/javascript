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

// To save a record in your database using Sequelize, you can use the save method
user.save()
  .then(() => {
    console.log('User saved successfully.');
  })
  .catch(err => {
    console.error('Error saving user:', err);
  });

// To update records in your database using Sequelize, you can use the update method
User.update(
  { name: 'John Doe', age: 30 },
  {
    where: {
      id: 1
    }
  }
)
  .then(rowsUpdated => {
    console.log('Rows updated:', rowsUpdated);
  })
  .catch(err => {
    console.error('Error updating user:', err);
  });

// To delete records from your database using Sequelize, you can use the destroy method
User.destroy({
  where: {
    id: 1
  }
})
  .then(() => {
    console.log('User deleted successfully.');
  })
  .catch(err => {
    console.error('Error deleting user:', err);
  });





