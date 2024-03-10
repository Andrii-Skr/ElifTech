export type TShop = { _id: string; name: string };

export type TProducts = {
  _id: string;
  shop_id: string;
  name: string;
  price: number;
  description: string;
  img_link: string;
};

export async function getShopList(): Promise<TShop[]> {
  const res = await fetch("http://localhost:3300/api/", {
    method: "GET",
  });
  if (!res.ok) throw new Error("Failed fetch");
  const { shopList } = await res.json();

  return shopList;
}

export async function getProductList(id: string | undefined): Promise<TProducts[]> {
  const res = await fetch(`http://localhost:3300/api/product/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Failed fetch");
  const { productList } = await res.json();

  return productList;
}
