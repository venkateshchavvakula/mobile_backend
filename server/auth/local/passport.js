var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'mobilenumber',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(mobilenumber, password, done) {

      console.log(mobilenumber)
      User.findOne({
        mobilenumber: mobilenumber
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'This mobilenumber is not registered.' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        }
        return done(null, user);
      });
    }
  ));
};