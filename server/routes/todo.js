import express from 'express';
import { todoControllers } from '../controllers';

const router = express.Router();

router.route('/')
  .get(todoControllers.fetchAllTodos);

router.route('/:id')
  .get(todoControllers.fetchOneTodo)
  .put(todoControllers.updateTodoDetails)
  .delete(todoControllers.deleteTodo);

router.route('/add-new')
  .post(todoControllers.addNewTodo);


export default router;
