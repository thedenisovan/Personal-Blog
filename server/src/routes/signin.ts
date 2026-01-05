import type { Request, Response } from 'express';
import { Router } from 'express';
import signinValidator from '../validators/signin.validator.js';
import validatorResult from '../validators/validatorResult.js';

const login = Router();

login.post(
  '/',
  signinValidator,
  validatorResult,
  (req: Request, res: Response) => {
    res.json({
      greeting: 'this is signin page!',
    });
  }
);

export default login;
