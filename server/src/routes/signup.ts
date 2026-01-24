import { Router } from 'express';
import signupValidator from '../validators/signup.validator.js';
import validatorResult from '../validators/validatorResult.js';
import signupUser from '../middleware/signupUser.js';

const signup = Router();

signup.post('/', signupValidator, validatorResult, signupUser);

export default signup;
