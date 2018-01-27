const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('./models/user');

// set up passport configs
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, function(accessToken, BrefreshToken, profile, done) {
    User.findOne({'fbid': profile.id }, function(err, user) {
        if (err) return done(err);

        if (!user) {
            var profilePictureUrl = profile.photos[0].value;
            // Hack alert!!! Removing the last 6 characters ('?sz=50') from profilePictureUrl to get full-size image
            profilePictureUrl = profilePictureUrl.substring(0, profilePictureUrl.length - 6)
            user = new User({
            name            : profile.displayName,
            fbid            : profile.id,
            profilePicture  : profilePictureUrl
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
