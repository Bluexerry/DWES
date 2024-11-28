import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const secretMessage = "I know your secret";

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], config.jwtSecret);
        
        bcrypt.compare(secretMessage, decoded.message, (err, result) => {
            if (err) {
                console.error('Error comparing bcrypt hash:', err);
                return res.status(500).json({ message: 'Internal server error.' });
            }

            if (!result) {
                return res.status(401).json({ message: 'Invalid token.' });
            }

            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Error verifying JWT:', error);
        return res.status(400).json({ message: 'Invalid token.' });
    }
};