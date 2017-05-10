'use strict';
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;



export class authController{

    static token(req, res, next){
       passport.use(new BearerStrategy(function(token, done) {
            User.findOne({ token: token }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
            });
        }));
    }


    static login(req, res, next){
        passport.authenticate('local', function(err, user, info) {
            if (err) { 
                return next(err); 
            }
            if (!user) { 
                return res.redirect('/login'); 
            }
            req.logIn(user, function(err) {
                if (err) { 
                    return next(err); 
                }
                return res.redirect('/me/');
            });
        })(req, res, next);
    }
    static me(req, res, next){
        passport.authenticate('local', function(err, user, info) {
            if (err) { 
                return next(err); 
            }
            if (!user) { 
                return res.status(401); 
            }
            return res.status(200).json(user);
        })(req, res, next);
    }
}