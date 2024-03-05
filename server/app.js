'use strict';
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

// Middleware pour parser les données JSON dans les requêtes POST
app.use(express.json());

// Route pour créer un nouvel utilisateur
app.post('/createUser', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    console.log('Nouvel utilisateur créé :', newUser);
    res.status(201).json({ message: 'Utilisateur créé avec succès !', user: newUser });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
  }
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
