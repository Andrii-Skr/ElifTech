import { useState } from "react";
import { TOrder } from "../../../../App";
import "./OrderBox.css";

const OrderBox = ({
  order,
  editQuantity,
  removeOrder,
}: {
  order: TOrder;
  editQuantity: (id: string, quantity: number) => void;
  removeOrder: (id: string) => void;
}) => {
  const [quantity, setQuantity] = useState(order.quantity);

  const QuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
    editQuantity(order.product_id, Number(e.target.value));
  };
  const removeOrderHandler = () => {
    removeOrder(order.product_id);
  };
  return (
    <div className="order_box">
      <div>
        <img className="img" src={order.img_link} width="300em" height="150em" />
      </div>
      <div className="order_desc">
        <h3 className="name">{order.product_name}</h3>
        <p className="price">{`Price ${(order.price * order.quantity).toFixed(2)}`}</p>
        <input className="order_desc_input" type="number" value={quantity} onChange={QuantityHandler} min="1" />
        <button className="order_desc_button" onClick={removeOrderHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default OrderBox;
