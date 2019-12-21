import express from 'express'
import routes from './routes'

class AppServer {
  server: express.Application;

  constructor () {
    this.server = express()
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

  excpetionHandling (): void {
    this.server.use((err, req, res, next) => res.status(err.status).json({
      mensagem: 'mensagem de erro'
    }))
  }
}
export default new AppServer().server
