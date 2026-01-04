import { Router } from 'express';
import { prisma } from '../../lib/prisma.js';

const home = Router();

home.get('/', async (req, res) => {
  res.json({
    greeting: 'home page',
  });
});

export default home;
