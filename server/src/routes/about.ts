import { Router } from 'express';

const about = Router();

about.get('/', (req, res) => {
  res.json({
    greeting: 'this is about page!',
  });
});

export default about;
