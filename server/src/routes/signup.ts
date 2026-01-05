import { Router } from 'express';
import signupValidator from '../validators/signup.validator.js';
import validatorResult from '../validators/validatorResult.js';
import type { Request, Response } from 'express';
import signupUser from '../middleware/signupUser.js';

const signup = Router();

signup.post(
  '/',
  signupValidator,
  validatorResult,
  signupUser,
  (req: Request, res: Response) => {
    res.json({
      greeting: 'this is signup page!',
    });
  }
);

signup.post('/', (req, res) => {});

export default signup;
