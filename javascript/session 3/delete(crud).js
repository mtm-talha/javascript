let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Alice", age: 40 },
];
  
users = users.filter((user) => user.age >= 30); // Delete a user based on a condition 
console.log(users)

const indexToDelete = 1; // Delete a user by index using splice
users.splice(indexToDelete, 1);
console.log(users);
