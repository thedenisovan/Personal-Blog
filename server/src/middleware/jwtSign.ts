import jwt from 'jsonwebtoken';
import 'dotenv/config';
import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

export default async function jwtSign(req: Request, res: Response) {
  let user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user)
    return res
      .status(300)
      .json({ message: 'Could not extract user from request obj.' });

  jwt.sign(
    user,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: Error | null, token?: string) => {
      if (err || !token) {
        return res.status(500).json({ error: 'Token generation failed' });
      }

      res.json({ token });
    }
  );
}
