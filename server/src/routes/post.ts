import { Router } from 'express';
import { getPostData } from '../middleware/postData';
import newComment from '../middleware/newComment';

const post = Router();

post.get('/:postId', getPostData);
post.post('/:postId', newComment);

export default post;
