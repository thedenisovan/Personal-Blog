import { Router } from 'express';
import signinValidator from '../validators/signin.validator.js';
import validatorResult from '../validators/validatorResult.js';
import jwtSign from '../middleware/jwtSign.js';
import verifyToken from '../middleware/verifyToken.js';

const login = Router();

login.get('/', verifyToken, (req, res) => {
  res.json({
    token: req.token!.role,
  });
});
login.post('/', signinValidator, validatorResult, jwtSign);

export default login;
