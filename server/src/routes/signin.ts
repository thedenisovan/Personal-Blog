import { Request, Response } from 'express';
import { Router } from 'express';
import signinResult from '../validators/signin.validator';
import validatorMiddleware from '../middleware/signinResult';

const login = Router();

login.get(
  '/',
  signinResult,
  validatorMiddleware,
  (req: Request, res: Response) => {
    res.json({
      greeting: 'this is login page!',
    });
  }
);

export default login;
