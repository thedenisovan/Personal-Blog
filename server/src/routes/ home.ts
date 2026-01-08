import { Router } from 'express';

const home = Router();

home.get('/', async (req, res) => {
  res.json({
    greeting: 'home page',
  });
});

export default home;
