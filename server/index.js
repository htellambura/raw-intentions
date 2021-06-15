import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import orderRouter from "./routers/orderRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/raw-intentions",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.get("/home", (req, res) => {
  res.send("Home!");
});

app.get("/shop", (req, res) => {
  res.send("Shop!");
});

// simple API for product data

// API for all product data
app.use("/api/products", productRouter);
app.use("/api/products", orderRouter);

const port = process.env.PORT || 5000;

// router error handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port);

console.log(`raw intentions is listening on ${port}`);