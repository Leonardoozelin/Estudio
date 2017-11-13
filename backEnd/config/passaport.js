var passport = require('passport');
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){

    var Strategy = new googleStrategy({
        clientID: '361013989923-gtb5b89rp140235b6ghgj43e5f7vrqgi.apps.googleusercontent.com',
        clientSecret: '0MtcJ2ayAcDnPG7G-yQ9RkxP',
        callbackURL: 'http://localhost:3000/auth/google/callback'
      },
      function(accessToken, refreshToken, profile, done) {

          passport.serializeUser(function(user, done) {
            done(null, user);
          });

          passport.deserializeUser(function(user, done) {
            done(null, user);
          });

         return done(null, profile);        
      }
    );

    passport.use(Strategy);
    
}