import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function updateReaction(req: Request, res: Response) {
  const { likedBy } = req.body;
  const { postId } = req.params;

  try {
    const likes = await prisma.likes.findMany({
      where: { postId: Number(postId), likedById: likedBy },
    });

    const result = likes.find((like) => likedBy === like.likedById);

    // If user has not liked this post 'press like button'
    // by creating new like row
    if (typeof result === 'undefined') {
      await prisma.likes.create({
        data: { likedById: likedBy, postId: Number(postId) },
      });

      res.status(200).json({ message: 'liked' });

      // If post have been liked by user and he sends req unlike post
    } else {
      await prisma.likes.deleteMany({
        where: { postId: Number(postId), likedById: likedBy },
      });

      res.status(200).json({ message: 'like deleted' });
    }
  } catch {
    res.json(404);
  }
}
