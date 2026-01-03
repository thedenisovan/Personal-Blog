import { Router } from 'express';

const category = Router();

category.get(`/:category`, (req, res) => {
  if (req.params.category !== 'test') {
    res.json({
      message: 'not found',
    });
  } else {
    res.json({
      message: 'test',
    });
  }
});

export default category;
