require('isomorphic-fetch');
require('dotenv').config();

const path = require('path');
const express = require('express');
const next = require('next');
const morgan = require('morgan');

const router = require('./routes/routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();

const { NODE_ENV } = process.env;

app.prepare().then(() => {
  const isDevelopment = NODE_ENV !== 'production';
  const server = express();

  server.use(morgan('dev'));

  router(server, app);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
