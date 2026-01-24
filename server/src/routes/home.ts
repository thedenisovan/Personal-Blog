import { Router } from 'express';
import { getAllPublishedPosts } from '../middleware/postData.js';
import verifyToken from '../middleware/verifyToken.js';
import updateReaction from '../middleware/updateReaction.js';

const home = Router();

home.get('/', getAllPublishedPosts);
home.post('/', verifyToken);

home.put('/', updateReaction);

export default home;
