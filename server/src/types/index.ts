export type Role = "worker" | "admin" | "owner";

export type JwtPayload = {
  userId: string;
  role: Role;
  outletId: string;
};
