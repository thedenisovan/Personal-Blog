import { prisma } from '../../lib/prisma.js';
import type { Request, Response } from 'express';

export default async function newBlogPost(req: Request, res: Response) {
  const { authorId, title, categoryId, categoryName, content, description } =
    req.body;

  let newCategory;
  let id;

  // If user entered new category name that means he will post in
  // new category so use it's id
  try {
    if (categoryName !== '') {
      newCategory = await prisma.category.create({
        data: { name: categoryName },
      });

      id = newCategory.id;

      // Else if user enters id post in existing category
    } else {
      id = categoryId;
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        authorId,
        content,
        description,
        categoryId: id,
      },
    });

    return res.status(200).json({ newPost });
  } catch (error) {
    const message = `Error occur durning fetching post or category data from db: 
    ${error instanceof Error ? error.message : String(error)}`;

    return res.status(404).json({ message });
  }
}
