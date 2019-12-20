import { Router, Request, Response } from 'express';

class Routes {
    router: Router;
    constructor() {
      this.router = Router();
      this.router.get('/', (req: Request, res: Response) =>
        res.status(200).json({
          root: 'Api root routes !!!'
        })
      );
    }
  }
  
  export default new Routes().router;
  