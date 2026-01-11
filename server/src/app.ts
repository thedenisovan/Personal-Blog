import express from 'express';
import cors from 'cors';
import {
  home,
  about,
  signin,
  signup,
  category,
  post,
} from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for forms

app.use('/', home);
app.use('/about', about);
app.use('/signin', signin);
app.use('/signup', signup);
app.use('/category', category);
app.use('/post', post);

app.get('{*splat}', (req, res) => {
  res.sendStatus(404);
});

export default app;
