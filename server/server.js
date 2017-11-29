import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import colors from 'colors/safe';
import morgan from 'morgan';
import { user, todo } from './routes';

// create express app
const app = express();

// define port the app should be run on
const port = process.env.port || 8000;

// configure app to use the bodyparser middleware to get data as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure app to log requests when they are made
app.use(morgan('tiny'));

// define a route method using the get http verb
app.get('/', (req, res) => {
  res.send('This is where it begins!!!');
});

app.use('/user', user);
app.use('/todo', todo);

// create server for the app
const server = http.createServer(app);
server.listen(port);

// log a message to the console to indicate the port the server is running on
/* eslint-disable no-console */
console.log(colors.cyan(`The server is running on port ${port}`));

export default app;

