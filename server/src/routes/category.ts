import { Router } from 'express';
import getPostsByCategory from '../middleware/allPostsInCategory.js';

const category = Router();

category.get(`/:categoryId`, getPostsByCategory);

export default category;
