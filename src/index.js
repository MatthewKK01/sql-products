import express from "express";
import { createTable } from "./config/sql.js";

const app = express();

const serverStart = () => {
  app.get("/", (req, res) => {
    return res.status(200).json({
      message: "it works",
    });
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
