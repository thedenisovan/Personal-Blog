import { Router } from 'express';
import signupValidator from '../validators/signup.validator';
import signupResult from '../middleware/signupResult';
import type { Request, Response } from 'express';
import signupUser from '../middleware/signupUser';

const signup = Router();

signup.post(
  '/',
  signupValidator,
  signupResult,
  signupUser,
  (req: Request, res: Response) => {
    res.json({
      greeting: 'this is signup page!',
    });
  }
);

signup.post('/', (req, res) => {});

export default signup;
