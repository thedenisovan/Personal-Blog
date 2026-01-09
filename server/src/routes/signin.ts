import { Router } from 'express';
import signinValidator from '../validators/signin.validator.js';
import validatorResult from '../validators/validatorResult.js';
import jwtSign from '../middleware/jwtSign.js';

const login = Router();

login.post('/', signinValidator, validatorResult, jwtSign);

export default login;
