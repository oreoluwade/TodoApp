import jwt from 'jsonwebtoken';
import models from '../models';


const { User } = models;

const secretOrPrivateKey = process.env.SECRET || 'passkey';

export default {
  validateUser: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: 'No token provided!' });
    }
    jwt.verify(token, secretOrPrivateKey, (error, decoded) => {
      if (error) {
        res.status(401).send({ message: 'No response!' });
      }
      req.decoded = decoded;
      next();
    });
  },
  validateAdmin: (req, res, next) => {
    User.findById(req.decoded.id)
      .then((user) => {
        if (user.id === 1) {
          next();
        } else {
          res.status(403).send({ message: 'User unauthorized' });
        }
      })
      .catch((err) => {
        res.send(501).send({ err, message: 'Validation failed. Try again!' });
      });
  },
};
