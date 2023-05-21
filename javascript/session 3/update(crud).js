const users= [
    { name: "John",age: 30,},
    { name: "Jane", age: 25 },
    { name: "Alice", age: 40 },
]

// Update a user's age based on the index
users[0].age = 35;
console.log(users[0])

// Update a user's name using the find method
const userToUpdate = users.find((user) => user.name === "Alice");
if (userToUpdate) {
  userToUpdate.name = "Alexa";
}
console.log(userToUpdate)
