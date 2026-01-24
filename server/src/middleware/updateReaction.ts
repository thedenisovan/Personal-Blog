import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function updateReaction(req: Request, res: Response) {
  const { authorId } = req.body;
  const { postId } = req.params;

  try {
    const likes = await prisma.likes.findMany({
      where: { postId: Number(postId), likedById: authorId },
    });

    const result = likes.find((like) => authorId === like.likedById);

    // If user has not liked this post 'press like button'
    // by creating new like row
    if (typeof result === 'undefined') {
      await prisma.likes.create({
        data: { likedById: authorId, postId: Number(postId) },
      });

      res.status(200).json({ message: 'liked' });
    } else {
      await prisma.likes.deleteMany({
        where: { postId: Number(postId), likedById: authorId },
      });

      res.status(200).json({ message: 'like deleted' });
    }
  } catch {
    res.json(404);
  }
}
