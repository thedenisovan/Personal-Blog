import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

// If post found return it's data based of its id given in params value.
async function getPostData(req: Request, res: Response) {
  const postId = parseInt(req.params.postId!, 10);
  // postId should be number
  if (isNaN(postId))
    return res.status(400).json({ message: 'Invalid post ID.' });

  try {
    const post = await prisma.post.findUnique({
      where: {
        published: true,
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

    if (!publishedPost.length) {
      return res.status(200).json({ message: 'No posts.' });
    } else {
      try {
        // Clones published posts and adds category name async
        const results = await Promise.all(
          publishedPost.map(async (post) => ({
            ...post,

            categoryName: await prisma.category.findUnique({
              where: { id: post.categoryId },
              select: { name: true },
            }),

            authorUsername: await prisma.user.findUnique({
              where: { id: post.authorId },
              select: { username: true },
            }),

            dateString: new Date(post.createdAt).toDateString(),
          })),
        );

        return res.status(200).json({ results });
      } catch {
        res.sendStatus(500);
      }
    }
  } catch {
    res.sendStatus(500);
  }
}

export { getPostData, getAllPublishedPosts };
