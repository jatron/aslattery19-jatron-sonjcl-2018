const passport = require('passport');
const fbp = require('passport-facebook');

const User = require('./models/user');

// set up passport configs
passport.use(new fbp.Strategy({
  clientID: '142634889753380',
  clientSecret: '2a28316f82f64ff29357deb65675b1d1',
  callbackURL: '/auth/facebook/callback'
}, function(accessToken, BrefreshToken, profile, done) {
  User.findOne({'fbid': profile.id }, function(err, user) {
    if (err) return done(err);

    if (!user) {
      user = new User({
        name: profile.displayName,
        fbid: profile.id
      });

      user.save(function(err) {
        if (err) console.log(err);

        return done(err, user);
      });
    } else {
      return done(err, user);
    }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;
