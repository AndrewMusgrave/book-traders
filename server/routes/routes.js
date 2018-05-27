const NextController = require('../controllers/next');

const wrapWithAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = (server, app) => {
  server.get('*', (req, res, next) => {
    const handle = app.getRequestHandler();
    return handle(req, res);
  });
};
