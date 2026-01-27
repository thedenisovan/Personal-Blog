import { Router } from 'express';
import { getAllPublishedPosts } from '../middleware/postData.js';
import verifyToken from '../middleware/verifyToken.js';

const home = Router();

home.get('/', (req, res, next) => {
  // If request includes all parameter return all posts included unpublished ones
  if (req.query.posts === 'all') {
    return getAllPublishedPosts(req, res, false);
    // Else return only published posts
  } else {
    return getAllPublishedPosts(req, res);
  }
});
home.post('/', verifyToken);

export default home;
