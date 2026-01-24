import { Router } from 'express';
import { getPostData } from '../middleware/postData';
import newComment from '../middleware/newComment';
import verifyToken from '../middleware/verifyToken';
import deleteComment from '../middleware/deleteComment';
import updateReaction from '../middleware/updateReaction';

const post = Router();

post.get('/:postId', getPostData);
post.post('/:postId', newComment);

post.put('/:postId', updateReaction);
post.delete('/:postId/comments/:commentId', verifyToken, deleteComment);

export default post;
