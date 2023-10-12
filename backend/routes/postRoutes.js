const express = require('express');
const authenticationToken = require('../middlewares/authMiddleware');
const {
  getAllPosts,
  createPost,
  getPostImage,
  updatedPosts,
} = require('../controllers/postController');
const router = express.Router();

router.get('/',getAllPosts);
router.post('/', authenticationToken, createPost);
router.get('/image/:id', getPostImage);
router.put('/:id', authenticationToken, updatedPosts);
module.exports = router;
