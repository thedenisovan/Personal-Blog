import express from 'express';
import { home, about, login, signup, category } from './routes/routes.js';

const app = express();

app.use('/', home);
app.use('/about', about);
app.use('/login', login);
app.use('/signup', signup);
app.use('/category', category);

app.get('{*splat}', (req, res) => {
  res.sendStatus(404);
});

export default app;
