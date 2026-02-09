import { pool } from "../config/db";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  outletId: string;
  status: string;
};

export const listMenuItems = async (outletId: string) => {
  const result = await pool.query<MenuItem>(
    `select id, name, category, price, outlet_id as "outletId", status
     from menu_items
     where outlet_id = $1
     order by category, name`,
    [outletId]
  );
  return result.rows;
};

export const createMenuItem = async (payload: Omit<MenuItem, "id">) => {
  const result = await pool.query<MenuItem>(
    `insert into menu_items (name, category, price, outlet_id, status)
     values ($1, $2, $3, $4, $5)
     returning id, name, category, price, outlet_id as "outletId", status`,
    [payload.name, payload.category, payload.price, payload.outletId, payload.status]
  );
  return result.rows[0];
};
