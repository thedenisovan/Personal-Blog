import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

// If post found return it's data based of its id given in params value.
async function getPostData(req: Request, res: Response) {
  const postId = parseInt(req.params.postId!, 10);
  if (isNaN(postId))
    return res.status(400).json({ message: 'Invalid post ID.' });

  try {
    const post = await prisma.post.findUnique({
      where: {
        AND: {
          published: true,
        },
        id: postId,
      },
    });

    if (!post) return res.status(404).json({ message: 'Post not found.' });

    const comments = await prisma.comment.findMany({
      where: { postId },
    });

    return res.json({ post, comments });
  } catch {
    res.sendStatus(500);
  }
}

async function getAllPublishedPosts(req: Request, res: Response) {
  try {
    const publishedPost = await prisma.post.findMany({
      where: {
        published: true,
      },
    });

    if (!publishedPost) return res.status(200).json({ message: 'No posts.' });
  } catch {
    res.sendStatus(500);
  }
}

export { getPostData, getAllPublishedPosts };
