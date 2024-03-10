declare global {
  namespace NodeJS {
    interface ProcessEnv {
      port?: string;

      DbUrl: string;

      Api_Url: string;
      Client_Url: string;
    }
  }
}

export {};

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

export type TProducts = {
  _id: string;
  shop_id: string;
  name: string;
  price: number;
  description: string;
  img_link: string;
};
