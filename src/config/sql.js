import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  host: "dpg-civ0ti5iuiedpv4n93d0-a",
  post: 5432,
  database: "products_5t4w",
  user: "products_5t4w_user",
  password: "mIbwjq1gkZmFFkQRKsfzNEsZkg9ZIX6x",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS products(id SERIAL PRIMARY KEY, title TEXT, price INT)"
  );
};

export default pool;
