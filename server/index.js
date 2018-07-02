require('isomorphic-fetch');
require('dotenv').config();

const path = require('path');
const express = require('express');
const next = require('next');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();

const { NODE_ENV } = process.env;

mongoose.promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URL ||
      'mongodb://localhost/books',
  )
  .catch(err => console.log(err));

app.prepare().then(() => {
  const isDevelopment = NODE_ENV !== 'production';
  const server = express();

  server.use(morgan('dev'));
  server.use(bodyParser.json({ type: '*/*' }));

  router(server, app);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
