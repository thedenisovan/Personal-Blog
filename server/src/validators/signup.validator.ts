import { body } from 'express-validator';
import { prisma } from '../../lib/prisma.js';

const signupValidator = [
  body('username')
    .trim()
    .isLength({ min: 4, max: 10 })
    .withMessage('Username must be 4-10 characters long.')
    .isAlphanumeric()
    .withMessage('Username must contain only alpha numeric characters.')
    .custom(async (value) => {
      const user = await prisma.user.findUnique({ where: { username: value } });
      if (user) throw new Error('Username already in use.');
    }),
  body('password')
    .trim()
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,60}$/)
    .withMessage('Password must be 6+ chars with uppercase and number.'),
  body('passwordConfirmation')
    .trim()
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords did not match.');
      }
    }),
];

export default signupValidator;
