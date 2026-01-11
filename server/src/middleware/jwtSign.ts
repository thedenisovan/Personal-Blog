import jwt from 'jsonwebtoken';
import 'dotenv/config';
import type { Request, Response } from 'express';

export default function jwtSign(req: Request, res: Response) {
  // req.user is assigned in sign in validator
  let user = req.user;

  if (!user)
    return res
      .status(300)
      .json({ message: 'Could not extract user from request obj.' });

  jwt.sign(
    user,
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: '30m' },
    (err: Error | null, token?: string) => {
      if (err || !token) {
        return res.status(500).json({ error: 'Token generation failed' });
      }

      res.json({ token });
    }
  );
}
