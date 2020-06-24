import express from 'express'
import passport from 'passport'
import Authentication from './controllers/authentication'
import './services/passport'

const router = express.Router()
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

router.get(
    '/page',
    requireAuth,
    async (req: express.Request, res: express.Response): Promise<void> => {
        res.send('This is Logged In page.')
    }
)

router.post('/signup', Authentication.signup)
router.post('/signin', requireSignin, Authentication.signin)

router.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        res.send(['water bottle', 'phone', 'paper'])
    }
)

export default router
