import { pool } from "../config/db";

export type BillItemInput = {
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
};

export type BillInput = {
  outletId: string;
  cashierId: string;
  paymentMode: "cash" | "upi" | "card";
  items: BillItemInput[];
};

export const createBill = async (payload: BillInput) => {
  const totalAmount = payload.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const client = await pool.connect();

  try {
    await client.query("begin");
    const billResult = await client.query<{ id: string }>(
      `insert into bills (outlet_id, cashier_id, total_amount, payment_mode)
       values ($1, $2, $3, $4)
       returning id`,
      [payload.outletId, payload.cashierId, totalAmount, payload.paymentMode]
    );

    const billId = billResult.rows[0].id;

    for (const item of payload.items) {
      await client.query(
        `insert into bill_items (bill_id, menu_item_id, item_name, quantity, price)
         values ($1, $2, $3, $4, $5)`,
        [billId, item.menuItemId, item.name, item.quantity, item.price]
      );
    }

    await client.query("commit");
    return { billId, totalAmount };
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
};
