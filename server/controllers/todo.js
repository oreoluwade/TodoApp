import models from '../models';

const { Todo, User } = models;

export default {
  fetchAllTodos: (req, res) => {
    Todo.findAll({ include: [{ model: User }] })
      .then((todos) => {
        if (todos.length !== 0) {
          res.status(200).send({ todos, message: 'Sucessfully fetched all todos!' });
        }
        res.status(404).json({ message: 'No Todos Found' });
      })
      .catch((err) => {
        res.status(501).send({ err, message: 'An error occured!' });
      });
  },
  fetchOneTodo: (req, res) => {
    Todo.findById(req.params.id)
      .then((todo) => {
        if (!todo) {
          res.status(404).send({ message: 'No such Todo exists!' });
        }
        res.status(201).send({ todo, message: 'Successful!' });
      })
      .catch((err) => {
        res.status(501).send({ err, message: 'Unsuccessful! Try again.' });
      });
  },
  addNewTodo: (req, res) => {
    const todoPayload = req.body;
    const {
      userId,
      title,
      description,
      completed,
    } = todoPayload;
    User.find({ where: { id: userId } })
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: 'Nonexistent user! ' });
        }
        Todo.create({
          userId,
          title,
          description,
          completed,
        })
          .then((todo) => {
            res.status(200).send({ todo, message: 'Successfully created Todo!' });
          })
          .catch((err) => {
            res.status(501).send({ err, message: 'Unknown error. Try again!' });
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  deleteTodo: (req, res) => {
    Todo.destroy({ where: { id: req.params.id } })
      .then((todo) => {
        if (todo === 1) {
          return res.status(201).send({ message: 'Successfully deleted Todo!' });
        }
        return res.status(404).send({ message: 'You can\'t delete what doesn\'t exist' });
      })
      .catch((err) => {
        res.status(501).send({ err, message: 'Delete operation unsuccessful!' });
      });
  },
  updateTodoDetails: (req, res) => {
    const todoPayload = req.body;
    Todo.findById(req.params.id)
      .then((todo) => {
        if (!todo) {
          res.status(404).send({ message: 'That Todo does not exist!' });
        }
        todo.update(todoPayload)
          .then((updatedTodo) => {
            res.status(201).send({ updatedTodo, message: 'Update successful!' });
          })
          .catch((err) => {
            res.status(501).send({ err, message: 'Update operation failed!' });
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};
