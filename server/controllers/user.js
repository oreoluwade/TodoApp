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
  getUsers: (req, res) => {
    User.findAll()
      .then(users => res.status(200).send({ users, message: 'Here are the users you requested' }))
      .catch(err => res.status(400).send({ err, message: 'An error occured!' }));
  },
};

