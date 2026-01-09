import { Router } from 'express';
import { getPostData } from '../middleware/postData';
import newComment from '../middleware/newComment';
import verifyToken from '../middleware/verifyToken';
import { prisma } from '../../lib/prisma';

const post = Router();

post.get('/:postId', getPostData);
post.post('/:postId', newComment);

post.delete('/:postId/comments/:commentId', verifyToken, async (req, res) => {
  const { postId, commentId } = req.params;

  if (!req.token || req.token.role !== 'ADMIN') {
    return res.sendStatus(401);
  }

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: Number(commentId) },
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.postId !== Number(postId)) {
      return res
        .status(400)
        .json({ message: 'Comment does not belong to this post' });
    }

    await prisma.comment.delete({
      where: { id: Number(commentId) },
    });

    res.json({ message: 'Comment deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default post;
