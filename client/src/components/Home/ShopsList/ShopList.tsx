import Button from "./Button";
import "./ShopList.css";
import { getShopList } from "../../service";
import { useQuery } from "react-query";
import { TShop } from "../../service/getData";

const ShopList = () => {
  const { data, isLoading, isError } = useQuery("ShopList", getShopList, {
    staleTime: Infinity,
  });

  if (isLoading) {
    return <h3 className="preload">loading ...</h3>;
  }
  if (isError) {
    return <h3 className="preload">Error :</h3>;
  }
  if (!data) {
    return <h3 className="preload">No data</h3>;
  }

  return (
    <div className="ShopList">
      <h3>Shops:</h3>
      {data.map((shop: TShop) => (
        <Button shopData={shop} key={shop._id} />
      ))}
    </div>
  );
};

export default ShopList;
