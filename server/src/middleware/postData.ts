import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function getPostData(req: Request, res: Response) {
  const postId = parseInt(req.params.postId!, 10);
  if (isNaN(postId))
    return res.status(400).json({ message: 'Invalid post ID' });

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comments = await prisma.comment.findMany({
      where: { postId },
    });

    return res.json({ post, comments });
  } catch {
    res.sendStatus(500);
  }
}
