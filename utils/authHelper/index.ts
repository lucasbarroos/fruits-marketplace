import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

export const generatePasswordHash = async (password: string) => bcrypt.hash(password, 10);

export const generateToken = (params: any) => jwt.sign({ params }, `${process.env.SECRET_KEY}`, {
  expiresIn: 86400,
});
