/*
It has following components
1. Call Stack: Whenever a function is called, it is pushed onto the call stack, and when it completes, it is popped off the stack.
2. Web APIs: These are provided by the browser or the JavaScript runtime environment, and they include functions like setTimeout, setInterval, XMLHttpRequest, and more.
They allow JavaScript to interact with the browser environment and perform asynchronous tasks.
3. Task Queue:Whenever an asynchronous task completes, it is placed in the task queue. 
This queue holds the callbacks or events to be executed after the completion of an asynchronous operation.
4.Event Loop: It constantly checks if the call stack is empty. 
If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution.
*/
console.log("Start");

setTimeout(function () {
  console.log("Timeout function executed");
}, 2000);

console.log("End");
