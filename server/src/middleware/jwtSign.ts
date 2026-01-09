import { prisma } from '../../lib/prisma.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import type { Request, Response } from 'express';

export default async function jwtSign(req: Request, res: Response) {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  jwt.sign(
    { user },
    process.env.SECRET as string,
    (err: Error | null, token?: string) => {
      if (err || !token) {
        return res.status(500).json({ error: 'Token generation failed' });
      }

      res.json({ token });
    }
  );
}
