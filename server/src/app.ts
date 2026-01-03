import express from 'express';
import { hero, about, login, signup, category } from './routes/index.js';

const app = express();

app.use('/', hero);
app.use('/about', about);
app.use('/login', login);
app.use('/signup', signup);
app.use('/category', category);

app.get('{*splat}', (req, res) => {
  res.sendStatus(404);
});

export default app;
