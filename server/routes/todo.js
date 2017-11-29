import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => res.status(200).json({ message: 'todos returned' }));
// .post()
// .put()
// .delete();

export default router;
