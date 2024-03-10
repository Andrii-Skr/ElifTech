import { Request, Response } from "express";
import BD from "../Service/workWithDb";

class Controller {
  static async shopList(req: Request, res: Response) {
    try {
      const shops = await BD.shopList();
      return res.json({ shopList: shops });
    } catch (error) {
      console.log(error);
    }
  }
  static async productPriceList(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await await BD.productList(id);
      return res.json({ productList: product });
    } catch (error) {
      console.log(error);
    }
  }
  static async postProduct(req: Request, res: Response) {
    try {
      await BD.postProduct(req.body.product);
      return res.json({ message: "Done" });
    } catch (error) {
      console.log(error, "post_product");
    }
  }
  static async postOrder(req: Request, res: Response) {
    try {
      await BD.postOrder(req.body.order);
      return res.json({ message: "Done" });
    } catch (error) {
      console.log(error, "post_order");
    }
  }
}
export default Controller;
