// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for adding a new user
router.post('/api/users', userController.createUser); // Reference the function from userController module

module.exports = router;
