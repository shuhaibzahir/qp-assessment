import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { INVALID_TOKEN, ACCESS_DENIED } from "../constants/ErrorResponses";
import { AuthenticatedRequest, UserPayload } from "../interfaces/types";

const secretKey: string = process.env.JWT_SECRET_KEY || "changeme";


const createToken = (payload: UserPayload): string => {
  return jwt.sign(payload, secretKey, {
    expiresIn: "1h",
  });
};

const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token: string | undefined = req.header("Authorization");
  if (!token) return res.status(401).json({ error: ACCESS_DENIED });
  try {
    const decoded: any = jwt.verify(token, secretKey);
    const user: UserPayload = {
      username: decoded.username,
      userId: decoded.userId,
      isAdmin: decoded.isAdmin,
    };
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: INVALID_TOKEN });
  }
};

const checkIsAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user?.isAdmin)
    return res.status(401).json({ error: ACCESS_DENIED });
  next();
};

export { createToken, verifyToken, checkIsAdmin };
