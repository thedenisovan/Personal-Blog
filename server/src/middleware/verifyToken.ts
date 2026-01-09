import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import type { Role } from '../../generated/prisma/enums';

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader === 'undefined') return res.sendStatus(401);

  const token = bearerHeader.split(' ')[1];

  jwt.verify(token!, process.env.ACCESS_TOKEN_SECRET!, (err, token) => {
    if (err) return res.sendStatus(403);
    req.token = token as { role: string };

    next();
  });
}
