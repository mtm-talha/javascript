/* For complex applications, you need to organize your business logic into separate modules or services
to keep the codebase modular and maintainable. Each module can encapsulate related functionality and
expose methods to be used by route handlers or controllers. 
This helps in managing and testing business logic independently.
*/

exports.getUserById = (userId) => {
    // Perform business logic related to retrieving user information
    // Return user data
  };
  

  const userService = require('./UserService');
  exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const user = userService.getUserById(userId);
    // Send user data back to the client
  };
  