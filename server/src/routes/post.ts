import { Router } from 'express';
import { getPostData } from '../middleware/postData';
import newComment from '../middleware/newComment';
import verifyToken from '../middleware/verifyToken';
import deleteComment from '../middleware/deleteComment';

const post = Router();

post.get('/:postId', getPostData);
post.post('/:postId', newComment);

post.delete('/:postId/comments/:commentId', verifyToken, deleteComment);

export default post;
