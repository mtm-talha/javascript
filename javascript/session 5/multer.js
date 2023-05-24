/*
Multer is a popular middleware for handling multipart/form-data in Node.js, commonly used for file uploads. 
It simplifies the process of handling file uploads and provides easy access to the uploaded files.
*/

// Set Up Multer Middleware
const express = require('express');
const multer = require('multer');

const app = express();

// Configure Multer middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination directory for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename for the uploaded file
  }
});

const upload = multer({ storage });


