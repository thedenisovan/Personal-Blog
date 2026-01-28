import { prisma } from '../../lib/prisma.js';
import type { Request, Response } from 'express';

// Toggles between published and unpublished status of post in admin dashboard
export default async function togglePublishedPost(req: Request, res: Response) {
  const { postId, published } = req.body;

  if (!req.token || req.token.role !== 'ADMIN') {
    return res.status(401).json({ message: 'Only admin can toggle post.' });
  }

  try {
    await prisma.post.update({
      where: {
        id: Number(postId),
      },
      data: {
        published: !published,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    res.status(404).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}

export async function deletePost(req: Request, res: Response) {
  const { postId } = req.body;

  if (!req.token || req.token.role !== 'ADMIN') {
    return res.status(401).json({ message: 'Only admin can toggle post.' });
  }

  try {
    await prisma.post.delete({ where: { id: Number(postId) } });

    res.status(200).json({ message: 'post deleted' });
  } catch (error) {
    res.status(404).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}
