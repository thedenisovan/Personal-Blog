import { Router } from 'express';
import { getAllPublishedPosts } from '../middleware/postData.js';

const home = Router();

home.get('/', getAllPublishedPosts);

export default home;
