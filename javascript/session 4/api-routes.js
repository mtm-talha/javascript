/*
Routes define the endpoints or URLs that clients can access to interact with your API.
In Express, routes are defined using HTTP methods such as GET, POST, PUT, DELETE, etc., along with the corresponding URL path.
Routes are responsible for parsing request parameters, invoking the appropriate controller methods, and sending back the response.
*/
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
