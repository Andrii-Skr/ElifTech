import { useParams } from "react-router-dom";
import Box from "./Box";
import "./Content.css";
import { useQuery } from "react-query";
import { getProductList } from "../../service/getData";

const Content = () => {
  const { id } = useParams();
 

  const { data, isLoading, isError } = useQuery(
    ["ProductList", id],
    () => 
      getProductList(id)
    ,
    {
      staleTime: Infinity,
    }
  );

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
    <div className="content">
      {data.map((product) => (
        <Box key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Content;
