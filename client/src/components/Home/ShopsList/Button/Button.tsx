import { useNavigate, useParams } from "react-router-dom";
import "./Button.css";
import { TShop } from "../../../service/getData";

const Button = ({ shopData }: { shopData: TShop }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const checkId = () => {
    if (id && id === shopData._id) {
      return "aside_btn clicked";
    }
    return "aside_btn";
  };

  return (
    <button className={checkId()} onClick={() => navigate(`/${shopData._id}`)}>
      {shopData.name}
    </button>
  );
};

export default Button;
