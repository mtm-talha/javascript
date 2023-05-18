/* 
Closures allow functions to retain access to variables from the outer scope, even after the outer function has finished executing. 
*/
function outerFunction() {
    var outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure(); 
  