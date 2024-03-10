import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import React, { useEffect, useState } from "react";

export type TOrder = {
  product_id: string;
  product_name: string;
  img_link: string;
  shop_id: string;
  price: number;
  quantity: number;
  email: string;
  phone: string;
};

export type TOrderContext = { order: TOrder[]; setOrder: (order: TOrder[]) => void };

export const OrderContext = React.createContext<TOrderContext | undefined>(undefined);

function App() {
  const [order, setOrder] = useState<TOrder[]>(JSON.parse(localStorage.getItem("order") ?? "[]"));

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <>
      <OrderContext.Provider value={{ order, setOrder }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            {/* <Route path="finish" element={<Finish />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </OrderContext.Provider>
    </>
  );
}

export default App;
