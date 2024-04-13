import express from "express";
import {
  getAllGrocery,
  deleteGrocery,
  updateGrocery,
  getGroceryById,
  createGrocery,
} from "../controllers/grocery";
import { checkIsAdmin } from "../middlewares/auth";

const route = express.Router();

route.route("/")
  .get(getAllGrocery)
  .post(checkIsAdmin, (req, res) => createGrocery(req, res));

route.route("/:id")
  .get(checkIsAdmin, (req, res) => getGroceryById(req, res))
  .put(checkIsAdmin, (req, res) => updateGrocery(req, res))
  .delete(checkIsAdmin, (req, res) => deleteGrocery(req, res));

export default route;
