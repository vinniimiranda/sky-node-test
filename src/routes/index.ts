import { Router, Request, Response } from 'express'

import authtenticationMiddleware from '../middlewares/authentication'

import SignUp from '../controllers/signup.controller'
import SignIn from '../controllers/signin.controller'
import User from '../controllers/user.controller'

class Routes {
    router: Router;
    constructor () {
      this.router = Router()
      this.router.get('/', (req: Request, res: Response) =>
        res.status(200).json({
          root: 'Api root routes !!!'
        })
      )
      this.router.use('/signup', SignUp.routes())
      this.router.use('/signin', SignIn.routes())
      this.router.use('/users', authtenticationMiddleware, User.routes())
    }
}

export default new Routes().router
