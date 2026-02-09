import { pool } from "../config/db";

export type SalesSummary = {
  outletId: string;
  outletName: string;
  totalSales: number;
  orderCount: number;
};

export const fetchOutletSales = async (from: Date, to: Date) => {
  const result = await pool.query<SalesSummary>(
    `select outlet_id as "outletId", outlet_name as "outletName", sum(total_amount) as "totalSales", count(*) as "orderCount"
     from bills
     where created_at >= $1 and created_at <= $2
     group by outlet_id, outlet_name
     order by outlet_name`,
    [from, to]
  );
  return result.rows;
};
