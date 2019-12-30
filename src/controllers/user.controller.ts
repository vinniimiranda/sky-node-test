import { Request, Response, Router } from 'express'

import User from '../models/user.model'

class UserController {
  private router = Router();

  constructor () {
    this.routes()
  }

  public routes (): Router {
    this.router.get('/', this.index)
    return this.router
  }

  private async index (req: Request, res: Response): Promise<any> {
    const users = await User.find().select('-senha')

    res.status(200).json(users)
  }
}

export default new UserController()
