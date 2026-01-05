import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

// gets single post based on it's id
export default async function getPostData(req: Request, res: Response) {
  const post = await prisma.post.findUnique({
    where: {
      id: +req.params.postId!,
    },
  });

  const comments = await prisma.comment.findMany({
    where: {
      postId: +req.params.postId!,
    },
  });

  if (post) {
    return res.json({ post, comments });
  }

  res.json({
    message: 'no posts found',
  });
}
