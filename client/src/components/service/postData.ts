import { TOrder } from "../../App";

export async function postOrderList(orders: TOrder[] | undefined) {
  const res = await fetch(`http://localhost:3300/api/shoppingCart/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ order: orders }),
  });
  if (!res.ok) throw new Error("Failed fetch");
  const responseData = await res.json();

  return responseData;
}
