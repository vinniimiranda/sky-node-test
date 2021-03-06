import jwt from 'jsonwebtoken'

import User from '../models/user.model'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ mensagem: 'Não autorizado' })
  }

  const [, token] = authHeader.split(' ')

  try {
    jwt.verify(token, 'sky-node-ts', async (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ mensagem: 'Sessão inválida' })
      }
      const user = await User.findById(decoded.user_id)

      if (!user) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
      }

      // @ts-ignore
      if (token !== user.token) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
      }

      return next()
    })
  } catch (err) {
    return res.status(401).json({ mensagem: 'Sessão inválida' })
  }
}
