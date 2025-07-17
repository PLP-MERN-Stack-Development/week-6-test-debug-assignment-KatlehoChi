import express from 'express';
import Post from '../models/Post.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, async (req, res) => {
  try {
    const post = new Post({ ...req.body, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  const query = category ? { category } : {};
  const posts = await Post.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).send();
  res.json(post);
});

router.put('/:id', verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).send();
  if (post.author.toString() !== req.user.id) return res.status(403).send();

  Object.assign(post, req.body);
  await post.save();
  res.json(post);
});

router.delete('/:id', verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).send();
  if (post.author.toString() !== req.user.id) return res.status(403).send();

  await post.deleteOne();
  res.status(200).send();
});

export default router;