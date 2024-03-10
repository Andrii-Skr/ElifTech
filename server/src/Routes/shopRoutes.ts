import express, { Router } from "express";
import controller from "../Repositories/controller";

const shopRoutes: Router = express.Router();

shopRoutes.get("/", controller.shopList);
shopRoutes.get("/product/:id", controller.productPriceList);
// shopRoutes.post("/:id", controller.postProductPriceList);
shopRoutes.post("/shoppingCart", controller.postOrder);
shopRoutes.post("/product", controller.postProduct);
//shopRoutes.post("/shoppingCart", controller.user);
// shopRoutes.get("/history", controller.getOrder);
// shopRoutes.post("/history/:id", controller.cancelOrder);

export default shopRoutes;
