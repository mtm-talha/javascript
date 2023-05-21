// 1. Import Sequelize and create a connection
const { Sequelize } = require('sequelize');

// 2. Test the database connection
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Replace with your database dialect
  // Additional options, if required
});

sequelize
.authenticate()
.then(() => {
  console.log('Database connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
});

// 3. Define a model:
const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    // Additional model options, if required
  }
);

// 4. Synchronize the model with the database
(async () => {
    try {
      await sequelize.sync();
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Failed to synchronize database:', error);
    }
  })();

// 5. Perform Operations
(async () => {
       // Create a new user
    const newUser = await User.create({ name: 'John Doe', age: 30 });
  
      // Read users
    const users = await User.findAll();
});
