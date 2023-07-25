import express from "express";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";
import cors from "cors";
import {
  createProduct,
  deleteProduct,
  getProduct,
} from "./controllers/productController.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const serverStart = () => {
  app.get("/api/products", getProduct);
  app.post("/api/products", createProduct);
  app.delete("/api/products:id", deleteProduct);
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
