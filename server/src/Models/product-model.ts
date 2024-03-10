import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdProduct = new Schema({
  img_link: { type: String },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  shop_id: { type: String, required: true },
  description: { type: String },
});

export default mongoose.model("ProductModel", bdProduct);
