import { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

import User from '../models/user.model'

class SignUpController {
  private router = Router();

  constructor () {
    this.routes()
  }

  public routes (): Router {
    this.router.post('/', this.store)
    return this.router
  }

  private async store (req: Request, res: Response): Promise<any> {
    try {
      const { nome, email, senha, telefones } = req.body

      const userExists = await User.findOne({
        email
      })

      if (userExists) {
        return res.status(400).json({
          mensagem: 'E-mail já existente'
        })
      }

      const user = await User.create({
        nome,
        email,
        senha: await bcryptjs.hash(senha, 8),
        telefones,

        ultimo_login: new Date()
      })

      const token = jwt.sign({ user_id: user.id }, 'sky-node-ts', {
        expiresIn: '30m'
      })

      await User.updateOne({ _id: user.id }, { token })

      const userData = await User.findById(user.id).select('-senha')

      res.status(201).json(userData)
    } catch (error) {
      console.log(error)

      return res.status(500).json({ mensagem: 'Houve um erro' })
    }
  }
}

export default new SignUpController()
