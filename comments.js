// Create web server
// Create a new web server using Express.js
const express = require('express');
const app = express();

// Create a new web server using Express.js
app.get('/comments', (req, res) => {
    res.send('You are on the comments page');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server
// Run the server using the command node comments.js in the terminal. The server will start on http://localhost:3000 and display the message "You are on the comments page" when you visit the URL in a web browser.
