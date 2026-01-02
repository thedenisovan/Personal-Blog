import express from 'express';

import hero from './routes/hero.js';
import about from './routes/about.js';
import login from './routes/login.js';
import signup from './routes/signup.js';

const app = express();

app.use('/', hero);
app.use('/about', about);
app.use('/login', login);
app.use('/signup', signup);

export default app;
