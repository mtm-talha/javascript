const users= [
    { name: "John",age: 30,},
    { name: "Jane", age: 25 },
    { name: "Alice", age: 40 },
]
const userNames = users.map((user) => user.name);  // Read and map over all users to retrieve their names
console.log(userNames)

const filteredUsers = users.filter((user) => user.age > 30); // Filter users based on a condition 
console.log(filteredUsers)

const foundUser = users.find((user) => user.name === "John"); // Find a user by a specific property 
console.log(foundUser)

const isAnyUserAbove40 = users.some((user) => user.age > 40); // Check if any user satisfies a condition 
console.log(isAnyUserAbove40)

