import { Router } from 'express';

const login = Router();

login.get('/', (req, res) => {
  res.json({
    greeting: 'this is login page!',
  });
});

export default login;
