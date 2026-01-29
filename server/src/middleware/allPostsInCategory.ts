import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function getPostsByCategory(req: Request, res: Response) {
  const categoryId = Number(req.params.categoryId!);
  if (isNaN(categoryId))
    return res.status(400).json({ message: 'Invalid category ID' });

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const posts = await prisma.post.findMany({
      where: {
        published: true,
        categoryId: category.id,
      },
    });

    res.json({ posts });
  } catch {
    return res.sendStatus(500);
  }
}
