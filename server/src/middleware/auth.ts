import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { JwtPayload, Role } from "../types";

export type AuthenticatedRequest = Request & { user?: JwtPayload };

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Missing Authorization header" });
  }
  const [, token] = header.split(" ");
  if (!token) {
    return res.status(401).json({ message: "Missing bearer token" });
  }

  try {
    const decoded = jwt.verify(token, env.jwtSecret) as JwtPayload;
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const authorize = (...allowed: Role[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!allowed.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    return next();
  };
};
