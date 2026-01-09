import type { NextFunction, Request, Response } from 'express';

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1]; // Get token from array

    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
