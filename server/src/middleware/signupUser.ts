import { prisma } from '../../lib/prisma.js';
import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

export default async function signupUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password } = req.body;

  try {
    await prisma.user.create({
      data: {
        username,
        password: await bcrypt.hash(password, 10),
      },
    });

    next();
  } catch {
    res.status(500).json({
      message: 'server error',
    });
  }
}
