import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { env } from "../config/env";
import { findUserByEmail, verifyPassword } from "../services/userService";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const login = async (req: Request, res: Response) => {
  const parseResult = loginSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const { email, password } = parseResult.data;
  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role, outletId: user.outletId },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );

  return res.json({
    token,
    user: {
      id: user.id,
      fullName: user.fullName,
      role: user.role,
      outletId: user.outletId,
    },
  });
};
