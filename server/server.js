const express = require('express');
const routes = require('./routes'); // Importez vos routes depuis le fichier routes.js

const app = express();
const port = 3000;

app.use(express.json());

// Montez les routes sur le chemin désiré
app.use('/', routes);

app.listen(port, () => {
  console.log(`Serveur Express.js démarré sur le port ${port}`);
});
