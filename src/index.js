import express from "express";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const Init = async () => {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
};

const serverStart = () => {
  app.use(cors());
  app.use(bodyParser.json);
  app.get("/", async (res, req) => {
    return await res.send("<h1>Welcome to my API</h1>");
  });

  // app.get("/api/products", async (_, res) => {
  //   try {
  //     const query = await pool.query("SELECT * from products");
  //     const rows = query.rows;
  //     return res.status(200).json(rows);
  //   } catch (error) {
  //     return res.status(400).json(error);
  //   }
  // });
  // app.post("/api/products", async (req, res) => {
  //   const { title, price } = req.body;
  //   try {
  //     const query = await pool.query(
  //       "INSERT INTO products(title, price) VALUES ($1, $2)",
  //       [title, price]
  //     );
  //     const row = query.rows[0];
  //     return res.status(201).json(row);
  //   } catch (error) {
  //     return res.status(401).json(error);
  //   }
  // });
  app.listen(3000);
};

Init();
