const jwt = require('jsonwebtoken');
const jwtSecret = 'qwe987gfd';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token); 

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token' });
        }
    
        req.userId = decoded.appUserId;
        next();
    });
};

module.exports = verifyToken;
