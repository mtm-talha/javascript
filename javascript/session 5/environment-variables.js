/*
Environment variables are variables that are part of the operating system's environment. 
They hold values that can be accessed by various processes running on the system, including applications and scripts.
Environment variables are commonly used to store configuration settings or sensitive information that should not be hard-coded in code files.
*/

$env:VARIABLE_NAME = "value"  //Setting Environment Variables
const variableValue = process.env.VARIABLE_NAME; // Accessing environment variables in Node.js
const dbConnectionString = process.env.DB_CONNECTION_STRING; //Usage in Applications:
