import models from '../models';

const { User } = models;

export default {
  createUser: (req, res) => {
    const userPayload = req.body;
    const { username, email, password } = userPayload;
    User.create({ username, password, email })
      .then(user => res.status(201).send({ user, message: 'User successfully created!!!' }))
      .catch(error => res.status(400).send({ error, message: 'User already exists' }));
  },
  fetchAllUsers: (req, res) => {
    User.findAll()
      .then(users => res.status(200).send({ users, message: 'Here are the users you requested' }))
      .catch(err => res.status(400).send({ err, message: 'An error occured!' }));
  },
  updateUserDetails: (req, res) => {
    const userPayload = req.body;
    User.findById(req.params.id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: 'No such user exists yet!' });
        }
        user.update(userPayload)
          .then((updatedUser) => {
            res.status(200).send({ updatedUser, message: 'Update Successful!' });
          })
          .catch(err => res.status(501).send({ err, message: 'Update not Successful!' }));
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  deleteUser: (req, res) => {
    User.destroy({
      where: { id: req.params.id },
    })
      .then((user) => {
        if (user === 1) {
          return res.status(200).send({ message: 'User Removed' });
        }
        return res.status(404).send({ message: 'No such user! What is dead may never die.' });
      });
  },
};

