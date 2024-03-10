import ShopsModel from "../Models/shop-model";
import ProductModel from "../Models/product-model";
import OrderModel from "../Models/order-model";
import { TOrder, TProducts } from "src/Types/types";

class DB {
  static async shopList() {
    const checkShop = await ShopsModel.find();

    if (!checkShop) {
      console.log("no shops...");
    }

    return checkShop;
  }
  static async productList(id: string) {
    console.log(id);
    const checkProduct = await ProductModel.find({ shop_id: id });

    if (!checkProduct) {
      console.log("no product...");
    }

    return checkProduct;
  }
  static async postOrder(reqOrder: TOrder[]) {
    const order = OrderModel.create({ order: reqOrder });
    return order;
  }
  static async postProduct(reqProduct: TProducts) {
    const product = ProductModel.create({ ...reqProduct });
    return product;
  }
  // static async cancelOrder(reqOrder: any, reqUser: any) {
  //   const order = OrderModel.findByIdAndUpdate(reqOrder._id, { ...reqOrder });
  //   return order;
  // }
}

export default DB;
