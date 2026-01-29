import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

// If post found return it's data based of its id given in params value.
async function getPostData(req: Request, res: Response) {
  const postId = parseInt(req.params.postId!, 10);
  // postId should be number
  if (isNaN(postId))
    return res.status(400).json({ message: 'Invalid post ID.' });

  try {
    const publishedPost = await prisma.post.findUnique({
      where: {
        published: true,
        id: postId,
      },
    });

    const likes = await prisma.likes.findMany({ where: { postId: postId } });

    const comments = await prisma.comment.findMany({
      where: { postId },
    });

    if (!publishedPost || !comments)
      return res
        .status(404)
        .json({ message: 'Could not fetch posts or comments.' });
    else {
      try {
        const categoryName = await prisma.category.findUnique({
          where: { id: publishedPost.categoryId },
          select: { name: true },
        });
        const dateString = new Date(publishedPost.createdAt).toDateString();

        // Clone published posts and add additional values to it
        const results = {
          ...publishedPost,
          comments,
          categoryName,
          dateString,
          likes,
        };

        return res.json({ results });
      } catch {}
    }
  } catch {
    res.sendStatus(500);
  }
}

async function getAllPublishedPosts(
  req: Request,
  res: Response,
  flag: boolean = true,
) {
  try {
    const publishedPost = await prisma.post.findMany({
      where: {
        published: true,
      },
    });
    const allPosts = await prisma.post.findMany();

    // If flag is true return only published posts else return all posts
    let returnedPosts = flag ? publishedPost : allPosts;

    if (!publishedPost.length) {
      return res.status(200).json({ message: 'No posts.' });
    } else {
      try {
        // Clones published posts and adds category name,
        // author username and date in string format
        const results = await Promise.all(
          returnedPosts.map(async (post) => ({
            ...post,

            count: await prisma.user.count(),

            categoryName: await prisma.category.findUnique({
              where: { id: post.categoryId },
              select: { name: true },
            }),

            dateString: new Date(post.createdAt).toDateString(),
          })),
        );

        return res.status(200).json({ results });
      } catch {
        return res.sendStatus(500);
      }
    }
  } catch {
    return res.sendStatus(500);
  }
}

export { getPostData, getAllPublishedPosts };
