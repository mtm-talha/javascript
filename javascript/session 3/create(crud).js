// For adding into an array push operation is used
const users = [];

const newUser = {
  name: "John",
  age: 30,
};
users.push(newUser);

const newUsers = [
  { name: "Jane", age: 25 },
  { name: "Alice", age: 40 },
];
users.push(...newUsers);

console.log(users)