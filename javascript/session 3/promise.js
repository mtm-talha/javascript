/*
Promises are a built-in feature that provide a way to handle asynchronous operations in JavaScript.
*/
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'John', age: 30 };
        resolve(data);
      }, 2000);
    });
  }
  

  fetchData()
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  