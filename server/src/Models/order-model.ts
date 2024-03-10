import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdOrder = new Schema({
  order: [
    {
      shop_id: { type: String, required: true },
      product_id: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      createDate: { type: Date },
      email: { type: String },
      phone: { type: String },
    },
  ],
});

export default mongoose.model("OrderModel", bdOrder);
