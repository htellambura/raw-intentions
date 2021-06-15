import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length == 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingInfo,
        shippingCost: req.body.shippingCost,
        totalCost: req.body.totalCost,
      });
      const createdOrder = await order.save();
      res.status(201).send({ message: "Order created", order: createdOrder });
    }
  })
);

export default orderRouter;
