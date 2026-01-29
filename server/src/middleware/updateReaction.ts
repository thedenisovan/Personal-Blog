import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function updateReaction(req: Request, res: Response) {
  const { likedBy } = req.body;
  const { postId } = req.params;

  try {
    const like = await prisma.likes.findFirst({
      where: { postId: Number(postId), likedById: likedBy },
    });

    // If user has not liked this post 'press like button'
    // by creating new like row
    if (like === null) {
      await prisma.likes.create({
        data: { likedById: likedBy, postId: Number(postId) },
      });

      return res.status(200).json({ message: 'liked' });
      // If post have been liked by user and he sends req unlike post
    } else {
      await prisma.likes.deleteMany({
        where: { postId: Number(postId), likedById: likedBy },
      });

      return res.status(200).json({ message: 'like deleted' });
    }
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
