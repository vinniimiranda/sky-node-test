import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'

class AppServer {
  server: express.Application;

  constructor () {
    this.server = express()
    this.database()
    this.middlewares()
    this.routes()
    this.excpetionHandling()
  }

  private routes (): void {
    this.server.use(routes)
  }

  private middlewares (): void {
    this.server.use(express.json())
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/sky-node-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  excpetionHandling (): void {
    this.server.use((err, req, res, next) => res.status(err.status).json({
      mensagem: 'mensagem de erro'
    }))
  }
}
export default new AppServer().server
