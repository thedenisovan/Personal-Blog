import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader === 'undefined') return res.sendStatus(401);

  // Split Bearer and token
  const token = bearerHeader.split(' ')[1];

  jwt.verify(token!, process.env.ACCESS_TOKEN_SECRET!, (err, token) => {
    if (err) {
      console.error(err.message);
      return res.sendStatus(403);
    }
    req.token = token as { role: string };
    next();
  });
}
