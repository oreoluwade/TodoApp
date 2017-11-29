import express from 'express';
import { userControllers } from '../controllers';

const router = express.Router();

router.route('/')
  .get(userControllers.getUsers);
// .post()
// .delete();

router.route('/:id')
  .put(userControllers.updateUserDetails);


router.route('/create')
  .post(userControllers.createUser);

export default router;
