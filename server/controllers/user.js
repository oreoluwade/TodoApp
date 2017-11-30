import jwt from 'jsonwebtoken';
import models from '../models';

const secretOrPrivateKey = process.env.SECRET || 'passkey';

const { User } = models;

export default {
  createUser: (req, res) => {
    const userPayload = req.body;
    const { username, email, password } = userPayload;
    User.create({ username, password, email })
      .then((user) => {
        if (!user) {
          return res.status(409).send({ message: 'User Already Exists!' });
        }
        const token = jwt.sign({ id: user.id, username: user.username }, secretOrPrivateKey);
        return res.status(201).send({ user, token, message: 'User successfully created!!!' });
      })
      .catch(error => res.status(400).send({ error, message: 'User creation failed!' }));
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
      })
      .catch((err) => {
        res.status(501).send({ err, message: 'Delete operation unsuccessful!' });
      });
  },
  fetchOneUser: (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ user, message: 'Sucessful!' });
      })
      .catch((err) => {
        res.status(501).send({ err, message: 'An error occured' });
      });
  },
  loginUser: (req, res) => {
    const { identifier, password } = req.body;
    User.find({
      where: {
        $or: [
          { email: identifier },
          { username: identifier },
        ],
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        if (!user.validPassword(password)) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({
          id: user.id,
          username: user.username,
        }, secretOrPrivateKey);
        return res.status(200).send({
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
          },
          token,
          message: 'Login Successful! Token expires in one day.',
        });
      });
  },
  logoutUser: (req, res) => {
    res.status(200).send({ message: 'User successfully logged out!' });
  },
};

