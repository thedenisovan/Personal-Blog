import { Router } from 'express';
import verifyToken from '../middleware/verifyToken';
import newBlogPost from '../middleware/newBlogPost';

const newPost = Router();

newPost.post('/', verifyToken, newBlogPost);

export default newPost;
