const express = require('express');
const router = express.Router();

// Route de test
router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

// Autres routes
// Par exemple, vous pouvez ajouter d'autres routes ici

module.exports = router;
