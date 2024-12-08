const jwt = require('jsonwebtoken');

const adminName = process.env.ADMIN_NAME;
const jwtSecret = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        if (user.name !== adminName) return res.sendStatus(403);
        next();
    });
}

module.exports = authenticateToken;