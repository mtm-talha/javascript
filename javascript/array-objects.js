/*
Arrays can also store objects as their elements. 
This allows you to create an array of objects, where each element represents an object with multiple properties.
*/ 
const students = [
    { name: 'John', age: 20 },
    { name: 'Sarah', age: 22 },
    { name: 'David', age: 19 }
  ];
  console.log(students[0].name);    
  console.log(students[1]['age']);