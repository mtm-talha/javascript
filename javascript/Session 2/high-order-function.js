/*
A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. 
*/
function repeat(operation, num) {
    for (let i = 0; i < num; i++) {
      operation(i);
    }
  }
  
  function logNumber(num) {
    console.log(num);
  }
  
  repeat(logNumber, 5);
  