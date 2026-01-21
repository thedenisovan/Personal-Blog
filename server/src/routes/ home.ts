import { Router } from 'express';
import { getAllPublishedPosts } from '../middleware/postData.js';
import verifyToken from '../middleware/verifyToken.js';

const home = Router();

home.get('/', getAllPublishedPosts);
home.post('/', verifyToken);

export default home;
