import express from "express";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json);

const serverStart = () => {
  app.get("/api/products", async (_, res) => {
    try {
      const query = await pool.query("SELECT * from products");
      const rows = query.rows;

      return res.status(200).json(rows);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  app.post("/api/products", async (req, res) => {
    const { title, price } = req.body;
    try {
      const query = await pool.query(
        "INSERT INTO products(title, price) VALUES ($1, $2)",
        [title, price]
      );
      const rows = query.rows[0];
      return res.status(200).json(rows);
    } catch (error) {}
  });
  app.listen(3000);
};

const Init = async () => {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
};

Init();
