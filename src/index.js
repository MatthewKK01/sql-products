import express from "express";
import pool, { createTable } from "./config/sql.js";

const app = express();

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
