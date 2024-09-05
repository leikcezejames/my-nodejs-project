const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index'); // Import routes

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for the views (EJS files)
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory (for CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in index.js
app.use('/', indexRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
