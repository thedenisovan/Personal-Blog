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

  // Deletes string from start and end of token
  const token = bearerHeader.split(' ')[1]?.slice(1, -1);

  console.log(token);

  jwt.verify(token!, process.env.ACCESS_TOKEN_SECRET!, (err, token) => {
    if (err) return res.sendStatus(403);
    req.token = token as { role: string };
    next();
  });
}
