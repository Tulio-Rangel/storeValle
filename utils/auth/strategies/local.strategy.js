const { Strategy } = require('passport-local');

const AuthService = require('./../../../services/auth.service');
const service = new AuthService();

const LocalStrategy = new Strategy({
  usernameField: 'email', //el campo por defecto de passport es username, de esta forma lo cambiamos para que sea email
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await service.getUser(email, password);
    done(null, user);
  } catch (error) {
    done(error, false);
  }

});

module.exports = LocalStrategy;
