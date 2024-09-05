const express = require('express');
const router = express.Router();

// Define routes for rendering EJS templates
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    res.render('project');
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

// Export the router to be used in app.js
module.exports = router;
