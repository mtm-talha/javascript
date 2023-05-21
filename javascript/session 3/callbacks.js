/*
Callbacks in JavaScript are functions that are passed as arguments to other functions and are intended to be executed at a later time or after an asynchronous operation completes.
Callbacks are a fundamental concept in JavaScript for handling asynchronous code and enabling non-blocking behavior.
*/
function fetchData(callback) {
    setTimeout(() => {
      const data = { name: 'Ali', age: 22, occupation: 'developer' };
      callback(null, data); 
    }, 2000);
  }
  
  function processResult(error, result) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Fetched data:', result);
    }
  }
  
  fetchData(processResult);
  