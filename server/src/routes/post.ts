import { Router } from 'express';
import { getPostData } from '../middleware/postData.js';
import newComment from '../middleware/newComment.js';
import verifyToken from '../middleware/verifyToken.js';
import deleteComment from '../middleware/deleteComment.js';
import updateReaction from '../middleware/updateReaction.js';

const post = Router();

post.get('/:postId', getPostData);
post.post('/:postId', newComment);

post.put('/:postId', updateReaction);
post.delete('/:postId/comments/:commentId', verifyToken, deleteComment);

export default post;
