import express, { Router } from "express";
import groceryRoute from "./groceryRoute";
import userRoute from "./userRoute";
import { verifyToken } from "../middlewares/auth";
import cartRoute from "./cartRoute";

const route: Router = express.Router();

// user login route
route.use("/user", userRoute);

// admin route need to check is admin or not
route.use("/grocery", verifyToken, groceryRoute);

// cart route for user
route.use("/cart", verifyToken, cartRoute);

export default route;
