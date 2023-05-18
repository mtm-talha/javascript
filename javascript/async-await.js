/*
asyncFunction uses the await keyword to pause execution and wait for a specified amount of time using the delay function.
The delay function returns a Promise that resolves after the specified milliseconds.
*/
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncFunction = async () => {
  console.log("Before delay");
  await delay(2000);
  console.log("After delay");
  return "Done";
};

asyncFunction().then(result => {
  console.log(result);
});
