import express from 'express';
import { userControllers } from '../controllers';
import authentication from '../middlewares';

const router = express.Router();

router.route('/')
  .get(authentication.validateUser, userControllers.fetchAllUsers);

router.route('/:id')
  .all(authentication.validateUser)
  .get(userControllers.fetchOneUser)
  .put(authentication.validateAdmin, userControllers.updateUserDetails)
  .delete(authentication.validateAdmin, userControllers.deleteUser);


router.route('/create')
  .post(userControllers.createUser);

router.route('/login')
  .post(userControllers.loginUser);

export default router;
