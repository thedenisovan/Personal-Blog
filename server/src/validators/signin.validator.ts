import { prisma } from '../../lib/prisma.js';
import { body } from 'express-validator';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const signinValidator = [
  body('username').custom(async (value, { req }) => {
    if (!value) throw new Error('Username field must not be empty.');

    const user = await prisma.user.findUnique({ where: { username: value } });

    if (!user) throw new Error('No user with given username exists.');

    req.user = user;
  }),
  body('password').custom(async (value, { req }) => {
    const user = req.user;
    if (!user) return;

    if (user.id !== 2) {
      const passMatch = await bcrypt.compare(value, user.password);

      if (!passMatch) throw new Error('Incorrect password');
    } else if (value !== process.env['MY_PASSWORD'])
      throw new Error('Incorrect password');
  }),
];

export default signinValidator;
