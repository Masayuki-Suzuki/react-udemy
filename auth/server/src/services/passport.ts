import dotenv from 'dotenv'
import passport from 'passport'
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user'

dotenv.config()

const localOptions = {
    usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    // Verify this email and password, call done with the user
    // if it's the correct email and password
    // otherwise, call done with false
    User.findOne({ email }, (err, user) => {
        if (err) {
            return done(err)
        }
        if (!user) {
            return done(null, false)
        }

        // Compare password - is `password` equal to user.password?
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err)
            }
            if (!isMatch) {
                return done(null, false)
            }
            return done(null, user)
        })
    })
})

// Setup options for JWT Strategy
const jwtOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.SECRET
}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that other
    // otherwise, call 'done' without a user object
    User.findById(payload.sub, (err, user) => {
        if (err) {
            return done(err, false)
        }
        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
})

// Tell passport to use this strategy
passport.use(localLogin)
passport.use(jwtLogin)
