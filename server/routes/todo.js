import express from 'express';
import { todoControllers } from '../controllers';
import authentication from '../middlewares';

const router = express.Router();

router.route('/')
  .get(authentication.validateUser, todoControllers.fetchAllTodos);

router.route('/:id')
  .all(authentication.validateUser)
  .get(todoControllers.fetchOneTodo)
  .put(todoControllers.updateTodoDetails)
  .delete(todoControllers.deleteTodo);

router.route('/add-new')
  .post(authentication.validateUser, todoControllers.addNewTodo);


export default router;
