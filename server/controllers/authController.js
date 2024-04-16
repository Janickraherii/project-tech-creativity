const db = require('../util/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    db.user.findUnique({
        where: {
            email: req.body.email
        }
    }).then(user => {

        if (!user) {
            return res.status(401).json({ error: 'User not found' })
        }


        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign(
                        { userId: user.id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            }).catch(error => res.status(500).json({ error }));
    })
}


module.exports = { 
    login, 
};