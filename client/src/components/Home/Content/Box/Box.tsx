import { useContext } from "react";
import { TProducts } from "../../../service/getData";
import "./Box.css";
import { OrderContext } from "../../../../App";

const Box = ({ product }: { product: TProducts }) => {
  const store = useContext(OrderContext);

  const addToCart = () => {
    let index = store?.order.findIndex((item) => item.product_id === product._id);
    if (index !== -1) {
      store?.setOrder(
        store?.order.map((item) => {
          if (item.product_id === product._id) {
            item.quantity++;
          }
          return item;
        })
      );
    } else
      store?.setOrder([
        ...store.order,
        {
          product_id: product._id,
          product_name: product.name,
          img_link: product.img_link,
          shop_id: product.shop_id,
          price: product.price,
          quantity: 1,
          email: "",
          phone: "",
        },
      ]);
  };

  return (
    <div className="content_box">
      <img className="img" src={product.img_link} width="400em" height="250em" />
      <h3 className="name">{product.name}</h3>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
      <button onClick={addToCart} className="add_btn">
        add to Cart
      </button>
    </div>
  );
};
export default Box;
