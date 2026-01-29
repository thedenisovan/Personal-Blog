import { prisma } from '../../lib/prisma.js';
import type { Request, Response } from 'express';

export default async function newBlogPost(req: Request, res: Response) {
  const {
    authorId,
    title,
    categoryId,
    categoryName,
    content,
    description,
    published,
  } = req.body;

  let newCategory;

  try {
    if (categoryName) {
      newCategory = await prisma.category.create({
        data: { name: categoryName },
      });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        authorId,
        content,
        description,
        published,
        categoryId: newCategory!.id ? newCategory!.id : categoryId,
      },
    });

    res.status(200).json({ newPost });
  } catch (error) {
    const message = `Error occur durning fetching post or category data from db: 
    ${error instanceof Error ? error.message : String(error)}`;

    res.status(404).json({ message });
  }
}
