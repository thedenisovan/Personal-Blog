import { Router } from 'express';
import { getAllPublishedPosts } from '../middleware/postData.js';
import verifyToken from '../middleware/verifyToken.js';
import togglePublishedPost from '../middleware/togglePublishedPost';

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
home.put('/', verifyToken, togglePublishedPost);

export default home;
