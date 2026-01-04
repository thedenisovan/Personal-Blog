import { Router } from 'express';

const signup = Router();

signup.get('/', (req, res) => {
  res.json({
    greeting: 'this is signup page!',
  });
});

signup.post('/', (req, res) => {});

export default signup;
