import express from 'express'
import jwt from 'jwt-simple'
import User from '../models/user'

class Authentication {
    static tokenForUser(user) {
        if (process.env.SECRET) {
            const jwtParams = {
                sub: user.id,
                iat: new Date().getTime()
            }
            return jwt.encode(jwtParams, process.env.SECRET)
        }
    }

    async signup(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        const { email, password } = req.body

        // Validate email and password
        if (!email || !password) {
            res.status(422).send({ error: 'You must provide email or password.' })
        } else {
            // See if a user with the given email exists
            User.findOne({ email }, (err, existingUser) => {
                if (err) {
                    return next(err)
                }

                // If a user with email does exist, return an error
                if (existingUser) {
                    return res.status(422).send({ error: 'Your email address has been already existing.' })
                }

                // If a user with email does NOT exist, create and save user record
                const user = new User({ email, password })
                user.save(err => {
                    if (err) {
                        return next(err)
                    }

                    // Respond to request indicating the user was created.
                    res.json({ authToken: Authentication.tokenForUser(user) })
                })
            })
        }
    }

    async signin(req: express.Request, res: express.Response): Promise<void> {
        res.json({ authToken: Authentication.tokenForUser(req.user) })
    }
}

export default new Authentication()
