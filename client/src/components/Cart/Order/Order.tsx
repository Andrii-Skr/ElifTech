import { useContext } from "react";
import { OrderContext } from "../../../App";
import OrderBox from "./OrderBox";
import "./Order.css";
import { postOrderList } from "../../service/postData";

const Order = () => {
  const store = useContext(OrderContext);

  const editQuantity = (id: string, quantity: number) => {
    store?.setOrder(
      store.order.map((order) => {
        if (order.product_id === id) order.quantity = quantity;
        return order;
      })
    );
  };

  const removeOrder = (id: string) => {
    store?.setOrder(store.order.filter((order) => order.product_id !== id));
  };

  const submitHandler = () => {
    postOrderList(store?.order);
    store?.setOrder([]);
  };

  return (
    <div>
      <div className="order_list">
        {store?.order.map((order) => (
          <OrderBox
            key={order.product_id}
            order={order}
            editQuantity={editQuantity}
            removeOrder={removeOrder}
          />
        ))}
      </div>
      <div className="order_price">
        <h2>
          Total price:{" "}
          {store?.order.reduce((sum, item) => (sum += item.quantity * item.price), 0).toFixed(2)}
        </h2>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};
export default Order;
