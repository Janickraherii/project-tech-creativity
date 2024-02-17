// server/src/server.js

const express = require('express');
const app = express();
const port = 3001; // Choisissez un port approprié

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur !');
});

// Ecouter le port
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
