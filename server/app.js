'use strict';
require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
const app = express();

// import routes
const { createUser } = require('../server/controllers/userController');
const { login } = require ('../server/controllers/authController');

const userRouter = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// middleware
app.use(cors());
app.use(express.json());


// Creation route
app.use('/users', userRouter);
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

app.use('/api/login', authRoutes);
app.post('/api/login', login);
// function authenticateSession(req, res, next) {
//   // Vérifie si l'utilisateur est authentifié en vérifiant la présence d'une propriété user dans l'objet req
//   if (!req.user) {
//     return res.status(401).json({ message: "Non authentifié. Veuillez vous connecter." });
//   }
//   next(); // Passe à l'étape suivante dans le middleware
// }

// // Route GET pour vérifier l'authentification de l'utilisateur
// app.get('/api/auth', authenticateSession, (req, res) => {
//   // Si l'authentification est réussie, renvoie un message approprié
//   res.status(200).json({ message: 'Authentification réussie.' });
// });

app.get('/test', (req, res) => {

  res.send('Hello World!');
});



const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;