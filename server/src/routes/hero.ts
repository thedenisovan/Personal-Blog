import { Router } from 'express';

const hero = Router();

hero.get('/', (req, res) => {
  res.json({
    greeting: 'this is hero page!',
  });
});

export default hero;
