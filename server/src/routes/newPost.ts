import { Router } from 'express';
import verifyToken from '../middleware/verifyToken.js';
import newBlogPost from '../middleware/newBlogPost.js';

const newPost = Router();

newPost.post('/', verifyToken, newBlogPost);

export default newPost;
