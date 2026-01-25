import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function deleteComment(req: Request, res: Response) {
  const { postId, commentId } = req.params;

  if (!req.token || req.token.role !== 'ADMIN') {
    return res.status(401).json({ message: 'Only admin can delete comments.' });
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
}
