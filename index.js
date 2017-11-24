const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const colors = require('colors/safe');

// create express app
const app = express();

// define port the app should be run on
const port = process.env.port || 8000;

// configure app to use the bodyparser middleware to get data as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route method using the get http verb
app.get('/', (req, res) => {
  res.send('This is where it begins!!!');
})

// create server for the app
const server = http.createServer(app);
server.listen(port);

// log a message to the console to indicate the port the server is running on
console.log(colors.cyan(`The server is running on port ${port}`));
