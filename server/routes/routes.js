const NextController = require('../controllers/next');
const AuthenticationController = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
  session: false,
});
const requireSignin = passport.authenticate('local', {
  session: false,
});

const wrapWithAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = (server, app) => {
  /** Auth */
  server.post(
    '/signin',
    requireSignin,
    AuthenticationController.signin,
  );
  server.post('/signup', AuthenticationController.signup);

  server.get('*', (req, res, next) => {
    const handle = app.getRequestHandler();
    return handle(req, res);
  });
};
