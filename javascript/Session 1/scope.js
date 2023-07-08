/*
Two main types of scopes
- Local Scope (function scope): accessed within a specific block
*/
function greet() {
    const message = 'Hello'; 
    return message
  }
  console.log(greet()) 
  

/*
- Global Scope (global scope): accessed throughout the code
*/ 
const name = 'John'; 

function greet() {
  return 'Hello, ' + name; 
}

console.log(greet())