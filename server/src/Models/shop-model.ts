import mongoose from "mongoose";
import { Schema } from "mongoose";

const bdShop = new Schema({
  shop_id: { type: Number, required: true },
  name: { type: String, required: true },
});

export default mongoose.model("ShopModel", bdShop);
