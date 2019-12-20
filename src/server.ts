import express from 'express';

class AppServer {
  server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.excpetionHandling();
  }


  private middlewares() {
    this.server.use(express.json());
  }

  excpetionHandling() {
    this.server.use((err, req, res, next) => {
      return res.status(err.status).json({
        mensagem: "mensagem de erro"
        });
    });
  }
}
export default new AppServer().server;
