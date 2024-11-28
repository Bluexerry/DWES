import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Cargar las variables de entorno
dotenv.config();

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('JWT_SECRET is not defined');
}

const payload = {
  message: await bcrypt.hash("I know your secret", 10),
  role: "admin"
};

const token = jwt.sign(payload, secret);
console.log(token);