'use strict';
require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

const app = express();


const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

// Use the cors middleware
app.use(cors());
app.use(express.json());

// Import the createUser function from userController.js
const { createUser } = require('../server/controllers/userController');

// Route for creating a new user
app.post('/api/users', createUser);
app.get('/api/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await prisma.user.findMany();
    // Send the list of users in response
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users.' });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
