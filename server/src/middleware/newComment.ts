import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function newComment(req: Request, res: Response) {
  const { authorName, content } = req.body;
  const { postId } = req.params;

  try {
    await prisma.comment.create({
      data: {
        content,
        authorName,
        postId: +postId!,
      },
    });
  } catch {
    res.status(500).json({
      message: 'server error',
    });
  }

  res.status(200).json({
    message: 'posted new comment',
  });
}
