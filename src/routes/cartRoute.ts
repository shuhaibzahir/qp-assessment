import express from 'express';
import { Request, Response } from 'express';
import { addToCart, getCart } from '../controllers/cart';

const route = express.Router();

route.route("/")
  .post((req: Request, res: Response) => addToCart(req, res))
  .get((req: Request, res: Response) => getCart(req, res));

export default route;
