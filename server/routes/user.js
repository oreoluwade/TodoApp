import express from 'express';
import { userControllers } from '../controllers';

const router = express.Router();

router.route('/')
  .get(userControllers.fetchAllUsers);

router.route('/:id')
  .get(userControllers.fetchOneUser)
  .put(userControllers.updateUserDetails)
  .delete(userControllers.deleteUser);


router.route('/create')
  .post(userControllers.createUser);

export default router;
