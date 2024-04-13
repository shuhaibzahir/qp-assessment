import express, { Router } from "express";
import { createToken } from "../middlewares/auth";
import { INVALID_USER_NAME_OR_PASSWORD, USERNAME_AND_PASS_REQUIRED } from "../constants/ErrorResponses";
import { User } from "../interfaces/types";


const users: Record<string, User> = {
  admin: {
    id: "1234",
    username: "admin",
    password: 1234,
    isAdmin: true,
  },
  user1: {
    id: "43121",
    username: "user1",
    password: 1234,
  },
};

const route: Router = express.Router();

route.route("/login").post((req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: USERNAME_AND_PASS_REQUIRED,
    });
  }

  const user = users[username];
  if (!user || user.password !== password) {
    return res.status(400).json({
      error: INVALID_USER_NAME_OR_PASSWORD,
    });
  }

  const token = createToken({
    username: user.username,
    userId: user.id,
    isAdmin: user.isAdmin || false,
  });

  res.status(200).json({
    token,
  });
});

export default route;
