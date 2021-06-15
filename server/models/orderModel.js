import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingInfo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      streetAddress: { type: String, required: true },
      aptSuite: { type: String, required: false },
      country: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      phoneNumber: { type: String, required: false },
    },
    shippingCost: { type: Number, required: true },
    totalCost: { type: Number, required: true },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
