import bcrypt from "bcryptjs";
import { pool } from "../config/db";

export type UserRecord = {
  id: string;
  fullName: string;
  role: "worker" | "admin" | "owner";
  outletId: string;
  passwordHash: string;
};

export const findUserByEmail = async (email: string) => {
  const result = await pool.query<UserRecord>(
    "select id, full_name as \"fullName\", role, outlet_id as \"outletId\", password_hash as \"passwordHash\" from users where email = $1",
    [email]
  );
  return result.rows[0];
};

export const verifyPassword = async (plain: string, hash: string) => {
  return bcrypt.compare(plain, hash);
};
