import { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/user.model'

class SignInController {
  private router = Router();

  constructor () {
    this.routes()
  }

  public routes (): Router {
    this.router.post('/', this.signIn)
    return this.router
  }

  private async signIn (req: Request, res: Response): Promise<any> {
    const { email, senha } = req.body

    const user = await User.findOne({
      email
    })

    if (!user) {
      return res.status(401).json({
        mensagem: 'Usuário e/ou senha inválidos'
      })
    }
    // @ts-ignore
    const validPassword = await bcrypt.compare(senha, user.senha)

    if (!validPassword) {
      return res.status(401).json({
        mensagem: 'Usuário e/ou senha inválidos'
      })
    }

    const token = jwt.sign({ user_id: user._id }, 'sky-node-ts', {
      expiresIn: 30000
    })

    await User.updateOne({
      _id: user.id
    }, {
      token,
      ultimo_login: new Date(),
      data_atualizacao: new Date()
    })

    const userData = await User.findById(user.id).select('-senha')

    res.status(200).json(userData)
  }
}

export default new SignInController()
