// server/routes/sampleRoute.js

const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/sample', (req, res) => {
    res.send('Ceci est une route d\'exemple');
});

module.exports = router;
