import { body } from 'express-validator';
import { prisma } from '../../lib/prisma.js';

const signupValidator = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username must not be empty')
    .isLength({ min: 4, max: 10 })
    .withMessage('Username must be 4-10 characters long.')
    .isAlphanumeric()
    .withMessage('Username must contain only alpha numeric characters.')
    .custom(async (value) => {
      const user = await prisma.user.findUnique({
        where: {
          username: value,
        },
      });
      if (user) throw new Error('Username already in use.');
    }),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password must not be empty')
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/)
    .withMessage('Password must be 6+ chars with uppercase and number.'),
  body('passwordConfirmation')
    .trim()
    .notEmpty()
    .withMessage('Password confirmation must not be empty')
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords did not match.');
      }
    }),
];

export default signupValidator;
