import express from 'express';
import { userControllers } from '../controllers';

const router = express.Router();

router.route('/')
  .get(userControllers.getUsers);
// .post()
// .put()
// .delete();

router.route('/create')
  .post(userControllers.createUser);

export default router;
